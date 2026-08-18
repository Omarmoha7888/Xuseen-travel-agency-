export type Language = 'en' | 'so' | 'ar';

export type ServiceCategory = 
  | 'flight'
  | 'visa'
  | 'hotel'
  | 'pilgrimage'
  | 'holiday'
  | 'transfer'
  | 'cargo'
  | 'corporate';

export type RequestStatus = 
  | 'Pending' 
  | 'Assigned' 
  | 'In Review' 
  | 'Waiting for Customer' 
  | 'Approved' 
  | 'In Progress' 
  | 'Completed' 
  | 'Rejected' 
  | 'Cancelled';

export interface ServiceItem {
  id: string;
  slug: string;
  category: ServiceCategory;
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  fullDescription: Record<Language, string>;
  icon: string;
  image: string;
  bannerImage: string;
  benefits: Record<Language, string[]>;
  requiredDocuments: Record<Language, string[]>;
  processingTime: Record<Language, string>;
  faqs: {
    question: Record<Language, string>;
    answer: Record<Language, string>;
  }[];
  popular?: boolean;
}

export interface UploadedFileMeta {
  id: string;
  name: string;
  size: number;
  type: string;
  documentType: 'passport' | 'id' | 'visa' | 'photo' | 'supporting';
  dataUrl?: string;
  uploadedAt: string;
}

export interface StatusTimelineEvent {
  id: string;
  status: RequestStatus;
  userName: string;
  userRole: string;
  action: string;
  date: string;
  time: string;
  description?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'customer' | 'employee' | 'superadmin';
  senderName: string;
  text: string;
  timestamp: string;
  attachments?: {
    name: string;
    url: string;
    type: string;
  }[];
}

export interface CustomerRequest {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: RequestStatus;
  
  personalInfo: {
    fullName: string;
    phoneNumber: string;
    whatsappNumber?: string;
    email: string;
    gender: 'Male' | 'Female' | 'Other';
    dateOfBirth: string;
    nationality: string;
    country: string;
    city: string;
  };
  
  passportInfo: {
    passportNumber: string;
    passportIssueDate?: string;
    passportExpiryDate: string;
  };
  
  travelInfo: {
    serviceType: string;
    serviceName: string;
    destinationCountry: string;
    destinationCity?: string;
    departureDate: string;
    returnDate?: string;
    adults: number;
    children: number;
    travelClass?: 'Economy' | 'Business' | 'First Class';
    hotelPreference?: 'Standard' | 'Luxury 4-Star' | '5-Star Premium' | 'Family Suite' | 'None';
    additionalNotes?: string;
  };
  
  uploadedFiles: UploadedFileMeta[];
  assignedEmployee?: {
    id: string;
    name: string;
    department: string;
    email: string;
    phone?: string;
  };
  
  statusHistory: StatusTimelineEvent[];
  messages: ChatMessage[];
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  dateSubmitted: string;
  status: 'new' | 'read' | 'replied';
}

export interface Testimonial {
  id: string;
  customerName: string;
  country: string;
  countryCode: string;
  rating: number;
  review: Record<Language, string>;
  serviceUsed: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'visa' | 'flights' | 'pilgrimage' | 'hotels' | 'documents';
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export interface GalleryItem {
  id: string;
  title: Record<Language, string>;
  category: 'flights' | 'hotels' | 'tour_packages' | 'pilgrimage' | 'tourist_destinations' | 'travel_experiences';
  image: string;
  location: string;
  description: Record<Language, string>;
}

export interface AgencyStats {
  customersServed: number;
  flightsRequested: number;
  visaRequests: number;
  hotelsBooked: number;
  yearsOfExperience: number;
  destinations: number;
}
