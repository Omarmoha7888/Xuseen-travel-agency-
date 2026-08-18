import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Trash2, 
  Calendar, 
  User, 
  CreditCard, 
  Plane, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Printer, 
  Compass, 
  ShieldCheck, 
  Download,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, allDestinations } from '../data/servicesData';
import { UploadedFileMeta, CustomerRequest } from '../types';
import { useToast } from './Toast';
import { motion, AnimatePresence } from 'motion/react';

interface RequestServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  prefillData?: { destination?: string; departureDate?: string };
  onTrackCreatedRequest: (requestId: string, identifier: string) => void;
}

export const RequestServiceModal: React.FC<RequestServiceModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  prefillData,
  onTrackCreatedRequest,
}) => {
  const { language, t, isRtl } = useLanguage();
  const { showToast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form Steps: 1: Personal, 2: Passport, 3: Travel, 4: Documents, 5: Review
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRequest, setSubmittedRequest] = useState<CustomerRequest | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    gender: 'Male' as 'Male' | 'Female' | 'Other',
    dateOfBirth: '',
    nationality: 'Somali',
    country: 'Somalia',
    city: 'Mogadishu',

    passportNumber: '',
    passportIssueDate: '',
    passportExpiryDate: '',

    serviceType: initialServiceId || 'flight-booking',
    destinationCountry: prefillData?.destination || allDestinations[0],
    destinationCity: '',
    departureDate: prefillData?.departureDate || '',
    returnDate: '',
    adults: 1,
    children: 0,
    travelClass: 'Economy' as 'Economy' | 'Business' | 'First Class',
    hotelPreference: 'Luxury 4-Star' as 'Standard' | 'Luxury 4-Star' | '5-Star Premium' | 'Family Suite' | 'None',
    additionalNotes: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileMeta[]>([]);
  const [selectedDocCategory, setSelectedDocCategory] = useState<'passport' | 'id' | 'visa' | 'photo' | 'supporting'>('passport');
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceType: initialServiceId }));
    }
    if (prefillData?.destination) {
      setFormData((prev) => ({ ...prev, destinationCountry: prefillData.destination! }));
    }
    if (prefillData?.departureDate) {
      setFormData((prev) => ({ ...prev, departureDate: prefillData.departureDate! }));
    }
  }, [initialServiceId, prefillData]);

  if (!isOpen) return null;

  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
        errs.fullName = t.requestForm.validation.nameRequired;
      }
      if (!formData.phoneNumber.trim() || formData.phoneNumber.trim().length < 7) {
        errs.phoneNumber = t.requestForm.validation.phoneRequired;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
        errs.email = t.requestForm.validation.emailRequired;
      }
      if (!formData.nationality.trim()) {
        errs.nationality = t.requestForm.validation.nationalityRequired;
      }
      if (!formData.country.trim()) {
        errs.country = t.requestForm.validation.countryRequired;
      }
      if (!formData.city.trim()) {
        errs.city = t.requestForm.validation.cityRequired;
      }
    }

    if (step === 2) {
      if (!formData.passportNumber.trim() || formData.passportNumber.trim().length < 4) {
        errs.passportNumber = t.requestForm.validation.passportRequired;
      }
      if (!formData.passportExpiryDate) {
        errs.passportExpiryDate = t.requestForm.validation.passportExpiryRequired;
      } else {
        const expiry = new Date(formData.passportExpiryDate);
        const today = new Date();
        if (expiry <= today) {
          errs.passportExpiryDate = 'Passport expiry date must be in the future.';
        }
      }
    }

    if (step === 3) {
      if (!formData.serviceType) {
        errs.serviceType = t.requestForm.validation.serviceRequired;
      }
      if (!formData.destinationCountry) {
        errs.destinationCountry = t.requestForm.validation.destinationRequired;
      }
      if (!formData.departureDate) {
        errs.departureDate = t.requestForm.validation.departureRequired;
      }
      if (formData.returnDate && formData.departureDate) {
        if (new Date(formData.returnDate) < new Date(formData.departureDate)) {
          errs.returnDate = t.requestForm.validation.returnAfterDeparture;
        }
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFileProcess = (files: FileList | File[]) => {
    const validExtensions = ['pdf', 'jpg', 'jpeg', 'png'];
    const maxSizeBytes = 20 * 1024 * 1024; // 20 MB

    Array.from(files).forEach((file) => {
      const ext = file.name.split('.').pop()?.toLowerCase() || '';
      if (!validExtensions.includes(ext)) {
        showToast(`${file.name}: ${t.requestForm.validation.fileFormatError}`, 'error');
        return;
      }
      if (file.size > maxSizeBytes) {
        showToast(`${file.name}: ${t.requestForm.validation.fileSizeError}`, 'error');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const newFile: UploadedFileMeta = {
          id: `doc-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
          name: file.name,
          size: file.size,
          type: file.type || ext,
          documentType: selectedDocCategory,
          dataUrl: e.target?.result as string,
          uploadedAt: new Date().toISOString(),
        };
        setUploadedFiles((prev) => [...prev, newFile]);
        showToast(`${file.name} uploaded successfully.`, 'success');
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileProcess(e.dataTransfer.files);
    }
  };

  const handleRemoveFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId));
    showToast(t.toast.fileRemoved, 'info');
  };

  const handleSubmit = async () => {
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      showToast('Please check the form for errors.', 'error');
      return;
    }

    setIsSubmitting(true);

    const selectedServiceObj = servicesData.find((s) => s.id === formData.serviceType);

    const payload = {
      personalInfo: {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        whatsappNumber: formData.whatsappNumber || formData.phoneNumber,
        email: formData.email,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        nationality: formData.nationality,
        country: formData.country,
        city: formData.city,
      },
      passportInfo: {
        passportNumber: formData.passportNumber,
        passportIssueDate: formData.passportIssueDate,
        passportExpiryDate: formData.passportExpiryDate,
      },
      travelInfo: {
        serviceType: formData.serviceType,
        serviceName: selectedServiceObj ? selectedServiceObj.title[language] : formData.serviceType,
        destinationCountry: formData.destinationCountry,
        destinationCity: formData.destinationCity,
        departureDate: formData.departureDate,
        returnDate: formData.returnDate,
        adults: formData.adults,
        children: formData.children,
        travelClass: formData.travelClass,
        hotelPreference: formData.hotelPreference,
        additionalNotes: formData.additionalNotes,
      },
      uploadedFiles: uploadedFiles.map(({ id, name, size, type, documentType, uploadedAt }) => ({
        id,
        name,
        size,
        type,
        documentType,
        uploadedAt,
      })),
    };

    try {
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedRequest(data.request);
        showToast(t.toast.requestSuccess, 'success');

        // Confetti celebration
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#D4AF37', '#B8860B', '#FFFFFF', '#F5D77F'],
          });
        } catch {
          // ignore
        }
      } else {
        showToast(data.error || 'Failed to submit request.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Network error while submitting your request.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-4xl bg-[#121212] border border-[#D4AF37]/40 rounded-3xl shadow-2xl overflow-hidden text-gray-200 my-8 flex flex-col max-h-[92vh]"
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-[#161616] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-black font-bold shadow-md">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-cinzel text-lg sm:text-xl font-bold text-white leading-tight">
                {t.requestForm.title}
              </h2>
              <p className="text-xs text-gray-400">
                {t.requestForm.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors text-gray-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* If Request Submitted Successfully - Show Luxury Receipt */}
        {submittedRequest ? (
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div className="text-center max-w-lg mx-auto space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white">
                {t.successModal.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                {t.successModal.message}
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="p-6 rounded-2xl bg-[#181818] border border-[#D4AF37]/30 space-y-4 max-w-2xl mx-auto shadow-xl" id="printable-receipt">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-[11px] text-gray-400 uppercase font-semibold">Balcad Travel Agency</div>
                  <div className="font-cinzel text-lg font-bold text-[#D4AF37]">Official Request Receipt</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-gray-400">Request ID</div>
                  <div className="text-sm font-mono font-bold text-white bg-[#D4AF37]/15 px-3 py-1 rounded-lg border border-[#D4AF37]/40">
                    {submittedRequest.id}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-400 block">{t.successModal.customerLabel}</span>
                  <span className="font-semibold text-white text-sm">{submittedRequest.personalInfo.fullName}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">{t.successModal.serviceLabel}</span>
                  <span className="font-semibold text-[#D4AF37]">{submittedRequest.travelInfo.serviceName}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Phone & WhatsApp:</span>
                  <span className="font-semibold text-white">{submittedRequest.personalInfo.phoneNumber}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Destination:</span>
                  <span className="font-semibold text-white">{submittedRequest.travelInfo.destinationCountry}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Departure Date:</span>
                  <span className="font-semibold text-white">{submittedRequest.travelInfo.departureDate}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Uploaded Documents:</span>
                  <span className="font-semibold text-white">{submittedRequest.uploadedFiles.length} file(s) attached</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[11px] text-gray-400">
                <span>Status: <strong className="text-[#D4AF37]">Pending Review</strong></span>
                <span>Payment: <strong>No online charge (Inquiry basis)</strong></span>
              </div>
            </div>

            {/* Confirmation actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handlePrintReceipt}
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-xs font-semibold text-white flex items-center gap-2 transition-all"
              >
                <Printer className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.successModal.printBtn}</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onTrackCreatedRequest(submittedRequest.id, submittedRequest.personalInfo.email);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] text-black font-bold text-xs sm:text-sm shadow-lg shadow-[#D4AF37]/30 flex items-center gap-2 transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>{t.successModal.trackBtn}</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-[#202020] text-gray-300 hover:text-white text-xs font-semibold"
              >
                {t.successModal.doneBtn}
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Request Wizard */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Step Indicators */}
            <div className="bg-[#141414] px-6 py-3 border-b border-white/5 overflow-x-auto no-scrollbar shrink-0">
              <div className="flex items-center justify-between min-w-[550px]">
                {[
                  { step: 1, label: t.requestForm.step1 },
                  { step: 2, label: t.requestForm.step2 },
                  { step: 3, label: t.requestForm.step3 },
                  { step: 4, label: t.requestForm.step4 },
                  { step: 5, label: t.requestForm.step5 },
                ].map((s) => (
                  <button
                    key={s.step}
                    onClick={() => {
                      if (s.step < currentStep) setCurrentStep(s.step);
                    }}
                    className={`flex items-center gap-2 text-xs font-semibold transition-colors ${
                      currentStep === s.step
                        ? 'text-[#D4AF37]'
                        : currentStep > s.step
                        ? 'text-gray-300'
                        : 'text-gray-600'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                        currentStep === s.step
                          ? 'bg-[#D4AF37] text-black shadow-md'
                          : currentStep > s.step
                          ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40'
                          : 'bg-white/5 text-gray-500'
                      }`}
                    >
                      {currentStep > s.step ? '✓' : s.step}
                    </div>
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
              
              {/* STEP 1: Personal Details */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                    <User className="w-4 h-4 text-[#D4AF37]" />
                    <span>{t.requestForm.step1}</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.fullName} *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t.requestForm.fields.fullNamePlaceholder}
                        className={`w-full bg-[#181818] border ${errors.fullName ? 'border-red-500' : 'border-white/10'} focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.phoneNumber} *
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder={t.requestForm.fields.phoneNumberPlaceholder}
                        className={`w-full bg-[#181818] border ${errors.phoneNumber ? 'border-red-500' : 'border-white/10'} focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none`}
                      />
                      {errors.phoneNumber && <p className="text-[11px] text-red-400">{errors.phoneNumber}</p>}
                    </div>

                    {/* WhatsApp Number */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.whatsappNumber}
                      </label>
                      <input
                        type="tel"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        placeholder={t.requestForm.fields.whatsappPlaceholder}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.email} *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.requestForm.fields.emailPlaceholder}
                        className={`w-full bg-[#181818] border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                    </div>

                    {/* Gender */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.gender}
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      >
                        <option value="Male">{t.requestForm.fields.genderMale}</option>
                        <option value="Female">{t.requestForm.fields.genderFemale}</option>
                        <option value="Other">{t.requestForm.fields.genderOther}</option>
                      </select>
                    </div>

                    {/* Date of Birth */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.dateOfBirth}
                      </label>
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>

                    {/* Nationality */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.nationality} *
                      </label>
                      <input
                        type="text"
                        value={formData.nationality}
                        onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                        placeholder={t.requestForm.fields.nationalityPlaceholder}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                      {errors.nationality && <p className="text-[11px] text-red-400">{errors.nationality}</p>}
                    </div>

                    {/* Country of Residence */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.country} *
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>

                    {/* Current City */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.city} *
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Passport Information */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                    <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                    <span>{t.requestForm.step2}</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Passport Number */}
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.passportNumber} *
                      </label>
                      <input
                        type="text"
                        value={formData.passportNumber}
                        onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
                        placeholder={t.requestForm.fields.passportNumberPlaceholder}
                        className={`w-full bg-[#181818] border ${errors.passportNumber ? 'border-red-500' : 'border-white/10'} focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none uppercase`}
                      />
                      {errors.passportNumber && <p className="text-[11px] text-red-400">{errors.passportNumber}</p>}
                    </div>

                    {/* Passport Issue Date */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.passportIssueDate}
                      </label>
                      <input
                        type="date"
                        value={formData.passportIssueDate}
                        onChange={(e) => setFormData({ ...formData, passportIssueDate: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>

                    {/* Passport Expiry Date */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.passportExpiryDate} *
                      </label>
                      <input
                        type="date"
                        value={formData.passportExpiryDate}
                        onChange={(e) => setFormData({ ...formData, passportExpiryDate: e.target.value })}
                        className={`w-full bg-[#181818] border ${errors.passportExpiryDate ? 'border-red-500' : 'border-white/10'} focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none`}
                      />
                      {errors.passportExpiryDate && <p className="text-[11px] text-red-400">{errors.passportExpiryDate}</p>}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-400 flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Embassies and airlines generally require passports to have at least 6 months validity from departure date.</span>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Travel Requirements */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                    <Plane className="w-4 h-4 text-[#D4AF37]" />
                    <span>{t.requestForm.step3}</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Type */}
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.serviceType} *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title[language]}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Destination Country */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.destinationCountry} *
                      </label>
                      <select
                        value={formData.destinationCountry}
                        onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      >
                        {allDestinations.map((dest, i) => (
                          <option key={i} value={dest}>
                            {dest}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Destination City */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.destinationCity}
                      </label>
                      <input
                        type="text"
                        value={formData.destinationCity}
                        onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                        placeholder="e.g. Dubai / Istanbul / London"
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>

                    {/* Departure Date */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.departureDate} *
                      </label>
                      <input
                        type="date"
                        value={formData.departureDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                        className={`w-full bg-[#181818] border ${errors.departureDate ? 'border-red-500' : 'border-white/10'} focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none`}
                      />
                      {errors.departureDate && <p className="text-[11px] text-red-400">{errors.departureDate}</p>}
                    </div>

                    {/* Return Date */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.returnDate}
                      </label>
                      <input
                        type="date"
                        value={formData.returnDate}
                        min={formData.departureDate || new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                        className={`w-full bg-[#181818] border ${errors.returnDate ? 'border-red-500' : 'border-white/10'} focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none`}
                      />
                      {errors.returnDate && <p className="text-[11px] text-red-400">{errors.returnDate}</p>}
                    </div>

                    {/* Adults */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.adults}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={formData.adults}
                        onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) || 1 })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>

                    {/* Children */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.children}
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={formData.children}
                        onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) || 0 })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>

                    {/* Travel Class */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.travelClass}
                      </label>
                      <select
                        value={formData.travelClass}
                        onChange={(e) => setFormData({ ...formData, travelClass: e.target.value as any })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      >
                        <option value="Economy">Economy Class</option>
                        <option value="Business">Business Class</option>
                        <option value="First Class">First Class (VIP)</option>
                      </select>
                    </div>

                    {/* Hotel Preference */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.hotelPreference}
                      </label>
                      <select
                        value={formData.hotelPreference}
                        onChange={(e) => setFormData({ ...formData, hotelPreference: e.target.value as any })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      >
                        <option value="Standard">Standard 3-Star</option>
                        <option value="Luxury 4-Star">Luxury 4-Star</option>
                        <option value="5-Star Premium">5-Star Premium / Haram View</option>
                        <option value="Family Suite">Family Connecting Suite</option>
                        <option value="None">None (Only Flight/Visa)</option>
                      </select>
                    </div>

                    {/* Additional Notes */}
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-semibold text-gray-300">
                        {t.requestForm.fields.additionalNotes}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                        placeholder={t.requestForm.fields.additionalNotesPlaceholder}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Document Upload */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                      <Upload className="w-4 h-4 text-[#D4AF37]" />
                      <span>{t.requestForm.upload.title}</span>
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {t.requestForm.upload.subtitle}
                    </p>
                  </div>

                  {/* Document Category Selector before uploading */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300">
                      {t.requestForm.upload.documentTypeLabel}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { key: 'passport', label: t.requestForm.upload.docTypes.passport },
                        { key: 'id', label: t.requestForm.upload.docTypes.id },
                        { key: 'photo', label: t.requestForm.upload.docTypes.photo },
                        { key: 'visa', label: t.requestForm.upload.docTypes.visa },
                        { key: 'supporting', label: t.requestForm.upload.docTypes.supporting },
                      ].map((cat) => (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setSelectedDocCategory(cat.key as any)}
                          className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-colors ${
                            selectedDocCategory === cat.key
                              ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white font-bold'
                              : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Drag & Drop Dropzone */}
                  <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleFileDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-colors ${
                      isDragging
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                        : 'border-white/20 bg-white/5 hover:border-[#D4AF37]/60'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => e.target.files && handleFileProcess(e.target.files)}
                      className="hidden"
                    />
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mx-auto mb-3">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {t.requestForm.upload.dragDropText}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-1">
                      {t.requestForm.upload.fileTypesAllowed}
                    </div>
                  </div>

                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-white uppercase tracking-wider">
                        Attached Files ({uploadedFiles.length})
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {uploadedFiles.map((file) => (
                          <div
                            key={file.id}
                            className="p-3 rounded-xl bg-[#181818] border border-white/10 flex items-center justify-between gap-3"
                          >
                            <div className="flex items-center gap-2.5 overflow-hidden">
                              <FileText className="w-4 h-4 text-[#D4AF37] shrink-0" />
                              <div className="overflow-hidden">
                                <div className="text-xs font-medium text-white truncate max-w-[200px]">
                                  {file.name}
                                </div>
                                <div className="text-[10px] text-gray-400">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB • {file.documentType}
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(file.id)}
                              className="text-gray-400 hover:text-red-400 p-1"
                              title="Remove file"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* STEP 5: Final Review & Confirmation */}
              {currentStep === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      <span>{t.requestForm.step5}</span>
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Please review your travel request details before final submission.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#161616] border border-[#D4AF37]/30 space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <span className="text-gray-400 block">Applicant:</span>
                        <strong className="text-white text-sm">{formData.fullName}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Primary Contact:</span>
                        <strong className="text-white">{formData.phoneNumber} ({formData.email})</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Passport Number:</span>
                        <strong className="text-white font-mono">{formData.passportNumber} (Exp: {formData.passportExpiryDate})</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Destination & Date:</span>
                        <strong className="text-white">{formData.destinationCountry} • {formData.departureDate}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Travelers:</span>
                        <strong className="text-white">{formData.adults} Adult(s), {formData.children} Child(ren)</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Documents Attached:</span>
                        <strong className="text-[#D4AF37]">{uploadedFiles.length} file(s)</strong>
                      </div>
                    </div>

                    {formData.additionalNotes && (
                      <div className="border-t border-white/5 pt-2">
                        <span className="text-gray-400 block">Notes:</span>
                        <p className="text-gray-300 italic">{formData.additionalNotes}</p>
                      </div>
                    )}
                  </div>

                  {/* Important Notice */}
                  <div className="p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs text-gray-300 space-y-1">
                    <strong className="text-[#D4AF37] block font-semibold">Important Transparency Notice:</strong>
                    <p>{t.requestForm.noPaymentNotice}</p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Modal Bottom Footer Bar */}
            <div className="p-5 bg-[#161616] border-t border-white/10 flex items-center justify-between shrink-0">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-xs font-semibold text-gray-300 flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  <span>Previous</span>
                </button>
              ) : <div />}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black text-xs font-bold shadow-md shadow-[#D4AF37]/20 flex items-center gap-1.5 transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] text-black text-xs sm:text-sm font-bold shadow-lg shadow-[#D4AF37]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{t.requestForm.submitting}</span>
                  ) : (
                    <>
                      <span>{t.requestForm.submitBtn}</span>
                      <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
