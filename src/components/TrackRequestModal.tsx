import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  Compass, 
  Clock, 
  CheckCircle2, 
  Send, 
  UserCheck, 
  MessageSquare, 
  FileText, 
  ShieldCheck, 
  Calendar,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CustomerRequest, ChatMessage } from '../types';
import { useToast } from './Toast';
import { motion } from 'motion/react';

interface TrackRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRequestId?: string;
  initialQuery?: string;
}

export const TrackRequestModal: React.FC<TrackRequestModalProps> = ({
  isOpen,
  onClose,
  initialRequestId,
  initialQuery,
}) => {
  const { language, t, isRtl } = useLanguage();
  const { showToast } = useToast();

  const [searchId, setSearchId] = useState(initialRequestId || 'BTA-2026-1049');
  const [searchQuery, setSearchQuery] = useState(initialQuery || '');
  const [isLoading, setIsLoading] = useState(false);
  const [requestData, setRequestData] = useState<CustomerRequest | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Chat message input
  const [chatInput, setChatInput] = useState('');
  const [isSendingMsg, setIsSendingMsg] = useState(false);

  useEffect(() => {
    if (initialRequestId) {
      setSearchId(initialRequestId);
      handleSearch(initialRequestId, initialQuery);
    }
  }, [initialRequestId, initialQuery]);

  if (!isOpen) return null;

  const handleSearch = async (idToSearch?: string, queryToSearch?: string) => {
    const id = (idToSearch || searchId).trim();
    const query = (queryToSearch || searchQuery).trim();

    if (!id) {
      showToast('Please enter a Request ID.', 'error');
      return;
    }

    setIsLoading(true);
    setHasSearched(true);

    try {
      const url = `/api/requests/${encodeURIComponent(id)}${query ? `?query=${encodeURIComponent(query)}` : ''}`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok && data.success) {
        setRequestData(data.request);
      } else {
        setRequestData(null);
        showToast(data.error || t.trackPortal.notFoundMsg, 'error');
      }
    } catch (err) {
      console.error(err);
      setRequestData(null);
      showToast('Network error while searching request.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || !requestData) return;

    setIsSendingMsg(true);
    try {
      const response = await fetch(`/api/requests/${requestData.id}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: 'customer',
          senderName: requestData.personalInfo.fullName,
          text: chatInput.trim(),
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setRequestData((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            messages: [...prev.messages, data.message],
          };
        });
        setChatInput('');
      } else {
        showToast(data.error || 'Could not send message.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Failed to send message.', 'error');
    } finally {
      setIsSendingMsg(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved':
      case 'Completed':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'In Review':
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'Assigned':
        return 'bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/40';
      case 'Rejected':
      case 'Cancelled':
        return 'bg-red-500/20 text-red-300 border-red-500/40';
      default:
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-4xl bg-[#121212] border border-[#D4AF37]/40 rounded-3xl shadow-2xl overflow-hidden text-gray-200 my-8 flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#161616] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-cinzel text-lg sm:text-xl font-bold text-white leading-tight">
                {t.trackPortal.title}
              </h2>
              <p className="text-xs text-gray-400">
                {t.trackPortal.subtitle}
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

        {/* Search Input Bar */}
        <div className="p-5 bg-[#181818] border-b border-white/10 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="grid grid-cols-1 sm:grid-cols-12 gap-3"
          >
            <div className="sm:col-span-6">
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder={t.trackPortal.idPlaceholder}
                className="w-full bg-[#1F1F1F] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none uppercase font-mono"
              />
            </div>
            <div className="sm:col-span-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.trackPortal.emailPlaceholder}
                className="w-full bg-[#1F1F1F] border border-white/10 focus:border-[#D4AF37] rounded-xl p-3 text-xs sm:text-sm text-white outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-1.5 disabled:opacity-50"
              >
                <Search className="w-4 h-4" />
                <span>{isLoading ? '...' : t.trackPortal.trackBtn}</span>
              </button>
            </div>
          </form>

          <div className="text-[11px] text-gray-400 mt-2 flex items-center gap-2">
            <span>Demo sample Request ID:</span>
            <button
              type="button"
              onClick={() => {
                setSearchId('BTA-2026-1049');
                handleSearch('BTA-2026-1049');
              }}
              className="text-[#D4AF37] hover:underline font-mono"
            >
              BTA-2026-1049
            </button>
          </div>
        </div>

        {/* Search Results / Details View */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {requestData ? (
            <div className="space-y-6">
              
              {/* Status Header Card */}
              <div className="p-5 rounded-2xl bg-[#181818] border border-[#D4AF37]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-lg font-bold text-white">{requestData.id}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(requestData.status)}`}>
                      {requestData.status}
                    </span>
                  </div>
                  <div className="text-xs text-[#D4AF37] font-medium">
                    {requestData.travelInfo.serviceName} • {requestData.travelInfo.destinationCountry}
                  </div>
                  <div className="text-[11px] text-gray-400">
                    Applicant: <strong className="text-white">{requestData.personalInfo.fullName}</strong> | Created: {new Date(requestData.createdAt).toLocaleDateString()}
                  </div>
                </div>

                {/* Assigned Agent Card */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 shrink-0">
                  <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <div className="text-gray-400">{t.trackPortal.assignedAgentLabel}</div>
                    {requestData.assignedEmployee ? (
                      <div>
                        <div className="font-bold text-white">{requestData.assignedEmployee.name}</div>
                        <div className="text-[11px] text-[#D4AF37]">{requestData.assignedEmployee.department}</div>
                      </div>
                    ) : (
                      <div className="text-amber-400 font-medium italic">{t.trackPortal.unassignedNotice}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Two Column Layout: Timeline & Live Chat */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left: Request Activity Timeline */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>{t.trackPortal.timelineTitle}</span>
                  </h3>

                  <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                    {requestData.statusHistory.map((item, idx) => (
                      <div key={item.id || idx} className="relative group">
                        {/* Dot */}
                        <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-[#121212] border-2 border-[#D4AF37] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-[#D4AF37]">{item.action}</span>
                            <span className="text-[10px] text-gray-400">{item.date} {item.time}</span>
                          </div>
                          {item.description && (
                            <p className="text-xs text-gray-300">{item.description}</p>
                          )}
                          <div className="text-[10px] text-gray-400">
                            By: {item.userName} ({item.userRole})
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Uploaded Documents List */}
                  {requestData.uploadedFiles && requestData.uploadedFiles.length > 0 && (
                    <div className="mt-4 p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                      <div className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Uploaded Documents ({requestData.uploadedFiles.length})</span>
                      </div>
                      <div className="space-y-1">
                        {requestData.uploadedFiles.map((file) => (
                          <div key={file.id} className="text-xs text-gray-400 flex items-center justify-between">
                            <span className="truncate max-w-[220px]">📎 {file.name}</span>
                            <span className="text-[10px] text-gray-500 uppercase">{file.documentType}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Direct Consultant Messaging */}
                <div className="lg:col-span-6 space-y-3 flex flex-col h-[400px]">
                  <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2 shrink-0">
                    <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                    <span>{t.trackPortal.chatTitle}</span>
                  </h3>

                  {/* Messages Bubble Area */}
                  <div className="flex-1 overflow-y-auto space-y-3 p-3 rounded-2xl bg-[#161616] border border-white/10">
                    {requestData.messages && requestData.messages.length > 0 ? (
                      requestData.messages.map((msg) => {
                        const isCustomer = msg.sender === 'customer';
                        return (
                          <div
                            key={msg.id}
                            className={`flex flex-col ${isCustomer ? 'items-end' : 'items-start'}`}
                          >
                            <div className="text-[10px] text-gray-400 mb-1 px-1">
                              {msg.senderName} ({msg.sender})
                            </div>
                            <div
                              className={`p-3 rounded-2xl text-xs max-w-[85%] leading-relaxed ${
                                isCustomer
                                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-medium rounded-tr-none'
                                  : 'bg-[#222222] text-gray-200 border border-white/10 rounded-tl-none'
                              }`}
                            >
                              {msg.text}
                            </div>
                            <span className="text-[9px] text-gray-500 mt-0.5 px-1">
                              {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        );
                      })
                    ) : (
                      <div className="h-full flex items-center justify-center text-center text-xs text-gray-500 p-4">
                        {t.trackPortal.emptyChat}
                      </div>
                    )}
                  </div>

                  {/* Send Message Form */}
                  <form onSubmit={handleSendMessage} className="flex gap-2 shrink-0">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder={t.trackPortal.chatPlaceholder}
                      className="flex-1 bg-[#1F1F1F] border border-white/10 focus:border-[#D4AF37] rounded-xl p-2.5 text-xs text-white outline-none"
                    />
                    <button
                      type="submit"
                      disabled={isSendingMsg || !chatInput.trim()}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black text-xs font-bold shadow flex items-center gap-1 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{t.trackPortal.sendMsgBtn}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : hasSearched && !isLoading ? (
            <div className="text-center py-12 space-y-3">
              <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
              <h3 className="font-cinzel text-lg font-bold text-white">{t.trackPortal.notFoundTitle}</h3>
              <p className="text-xs text-gray-400 max-w-md mx-auto">{t.trackPortal.notFoundMsg}</p>
            </div>
          ) : (
            <div className="text-center py-12 space-y-3">
              <Compass className="w-12 h-12 text-[#D4AF37] mx-auto animate-pulse" />
              <h3 className="font-cinzel text-base font-bold text-white">Enter Your Travel Request ID</h3>
              <p className="text-xs text-gray-400">
                You can track application progress, visa status updates, and talk to your assigned agent.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
