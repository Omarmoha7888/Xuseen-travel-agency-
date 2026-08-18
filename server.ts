import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(path.join(process.cwd(), 'public')));

// In-memory persistent data store for Customer Portal & Admin CRM API Bridge
interface StoredRequest {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  personalInfo: {
    fullName: string;
    phoneNumber: string;
    whatsappNumber?: string;
    email: string;
    gender: string;
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
    travelClass?: string;
    hotelPreference?: string;
    additionalNotes?: string;
  };
  uploadedFiles: Array<{
    id: string;
    name: string;
    size: number;
    type: string;
    documentType: string;
    dataUrl?: string;
    uploadedAt: string;
  }>;
  assignedEmployee?: {
    id: string;
    name: string;
    department: string;
    email: string;
    phone?: string;
  };
  statusHistory: Array<{
    id: string;
    status: string;
    userName: string;
    userRole: string;
    action: string;
    date: string;
    time: string;
    description?: string;
  }>;
  messages: Array<{
    id: string;
    sender: 'customer' | 'employee' | 'superadmin';
    senderName: string;
    text: string;
    timestamp: string;
  }>;
}

interface StoredContact {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  dateSubmitted: string;
  status: 'new' | 'read' | 'replied';
}

// Initial seeded requests for demonstration and immediate trackability
const customerRequestsStore: StoredRequest[] = [
  {
    id: 'BTA-2026-1049',
    createdAt: '2026-08-16T10:30:00.000Z',
    updatedAt: '2026-08-17T14:15:00.000Z',
    status: 'In Review',
    personalInfo: {
      fullName: 'Hassan Ali Warsame',
      phoneNumber: '+252 61 555 1234',
      whatsappNumber: '+252 61 555 1234',
      email: 'hassan.warsame@example.com',
      gender: 'Male',
      dateOfBirth: '1988-04-12',
      nationality: 'Somali',
      country: 'Somalia',
      city: 'Mogadishu',
    },
    passportInfo: {
      passportNumber: 'N0482910',
      passportIssueDate: '2023-01-10',
      passportExpiryDate: '2028-01-09',
    },
    travelInfo: {
      serviceType: 'visa',
      serviceName: 'Tourist Visa Processing (Worldwide)',
      destinationCountry: 'United Arab Emirates (Dubai)',
      destinationCity: 'Dubai',
      departureDate: '2026-09-10',
      returnDate: '2026-09-25',
      adults: 2,
      children: 1,
      travelClass: 'Economy',
      hotelPreference: 'Luxury 4-Star',
      additionalNotes: 'Family vacation for 15 days, need 60-day tourist visas and hotel near Downtown Dubai.',
    },
    uploadedFiles: [
      {
        id: 'f-1',
        name: 'Passport_Bio_Page_Hassan.pdf',
        size: 1420500,
        type: 'application/pdf',
        documentType: 'passport',
        uploadedAt: '2026-08-16T10:30:00.000Z',
      },
      {
        id: 'f-2',
        name: 'Passport_Photo_Hassan.jpg',
        size: 450200,
        type: 'image/jpeg',
        documentType: 'photo',
        uploadedAt: '2026-08-16T10:30:00.000Z',
      }
    ],
    assignedEmployee: {
      id: 'EMP-001',
      name: 'Ahmed Mohamed Jama',
      department: 'Visa Operations',
      email: 'ahmed.jama@balcadtravel.com',
      phone: '+252 61 2483838',
    },
    statusHistory: [
      {
        id: 'hist-1',
        status: 'Pending',
        userName: 'System Auto-Register',
        userRole: 'System',
        action: 'Customer submitted online request',
        date: '2026-08-16',
        time: '10:30 AM',
        description: 'New travel request registered via customer portal.',
      },
      {
        id: 'hist-2',
        status: 'Assigned',
        userName: 'Super Administrator',
        userRole: 'Super Admin',
        action: 'Request assigned to Employee Ahmed Mohamed Jama',
        date: '2026-08-16',
        time: '11:15 AM',
        description: 'Assigned to Visa Department for document pre-audit.',
      },
      {
        id: 'hist-3',
        status: 'In Review',
        userName: 'Ahmed Mohamed Jama',
        userRole: 'Visa Specialist',
        action: 'Status changed from Assigned to In Review',
        date: '2026-08-17',
        time: '02:15 PM',
        description: 'Passport copy verified. Application submitted to UAE immigration portal.',
      }
    ],
    messages: [
      {
        id: 'msg-1',
        sender: 'employee',
        senderName: 'Ahmed Mohamed Jama',
        text: 'Asc Hassan, welcome to Balcad Travel Agency. I have reviewed your passport copy and everything is in order. We have lodged the Dubai 60-day visa application. I will send you the confirmation copy as soon as approved.',
        timestamp: '2026-08-17T14:20:00.000Z',
      }
    ]
  }
];

const contactMessagesStore: StoredContact[] = [];

// ================= REST API ROUTES =================

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'Balcad Travel Agency API', timestamp: new Date().toISOString() });
});

// Submit a new customer travel request
app.post('/api/requests', (req: Request, res: Response) => {
  try {
    const { personalInfo, passportInfo, travelInfo, uploadedFiles } = req.body;

    if (!personalInfo?.fullName || !personalInfo?.phoneNumber || !personalInfo?.email) {
      return res.status(400).json({ error: 'Full Name, Phone Number, and Email are required fields.' });
    }

    if (!passportInfo?.passportNumber || !passportInfo?.passportExpiryDate) {
      return res.status(400).json({ error: 'Valid Passport Number and Expiry Date are required.' });
    }

    if (!travelInfo?.serviceType || !travelInfo?.destinationCountry) {
      return res.status(400).json({ error: 'Service Type and Destination Country are required.' });
    }

    // Generate unique Request ID: e.g., BTA-2026-XXXX
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const year = new Date().getFullYear();
    const requestId = `BTA-${year}-${randomNum}`;
    const now = new Date();

    const newRequest: StoredRequest = {
      id: requestId,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      status: 'Pending',
      personalInfo: {
        fullName: personalInfo.fullName.trim(),
        phoneNumber: personalInfo.phoneNumber.trim(),
        whatsappNumber: personalInfo.whatsappNumber?.trim() || personalInfo.phoneNumber.trim(),
        email: personalInfo.email.trim(),
        gender: personalInfo.gender || 'Male',
        dateOfBirth: personalInfo.dateOfBirth || '',
        nationality: personalInfo.nationality || 'Somali',
        country: personalInfo.country || 'Somalia',
        city: personalInfo.city || 'Mogadishu',
      },
      passportInfo: {
        passportNumber: passportInfo.passportNumber.trim().toUpperCase(),
        passportIssueDate: passportInfo.passportIssueDate || '',
        passportExpiryDate: passportInfo.passportExpiryDate,
      },
      travelInfo: {
        serviceType: travelInfo.serviceType,
        serviceName: travelInfo.serviceName || travelInfo.serviceType,
        destinationCountry: travelInfo.destinationCountry,
        destinationCity: travelInfo.destinationCity || '',
        departureDate: travelInfo.departureDate,
        returnDate: travelInfo.returnDate || '',
        adults: Number(travelInfo.adults) || 1,
        children: Number(travelInfo.children) || 0,
        travelClass: travelInfo.travelClass || 'Economy',
        hotelPreference: travelInfo.hotelPreference || 'Standard',
        additionalNotes: travelInfo.additionalNotes || '',
      },
      uploadedFiles: Array.isArray(uploadedFiles) ? uploadedFiles : [],
      statusHistory: [
        {
          id: `hist-${Date.now()}`,
          status: 'Pending',
          userName: 'Customer Web Portal',
          userRole: 'Customer',
          action: 'Travel service request submitted',
          date: now.toISOString().split('T')[0],
          time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          description: 'Request submitted successfully with verified documentation. Pending Admin CRM assignment.',
        }
      ],
      messages: [
        {
          id: `msg-${Date.now()}`,
          sender: 'superadmin',
          senderName: 'Balcad Travel Administration',
          text: `Welcome to Balcad Travel Agency! Your request (${requestId}) has been received. Our team is reviewing your requirements and will get in touch with you shortly.`,
          timestamp: now.toISOString(),
        }
      ]
    };

    customerRequestsStore.unshift(newRequest);

    console.log(`[API] New travel request created: ${requestId} for ${personalInfo.fullName}`);

    return res.status(201).json({
      success: true,
      requestId,
      request: newRequest,
      message: 'Your request has been submitted successfully. Our team will contact you as soon as possible. Thank you for choosing Balcad Travel Agency.',
    });
  } catch (error) {
    console.error('[API] Error submitting request:', error);
    return res.status(500).json({ error: 'Internal server error while processing your request.' });
  }
});

// Track / Lookup Request by ID
app.get('/api/requests/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const identifier = req.query.query as string | undefined;

  const found = customerRequestsStore.find(r => r.id.toUpperCase() === id.toUpperCase());
  if (!found) {
    return res.status(404).json({ error: 'Travel request not found with this Request ID.' });
  }

  // Optional phone/email verification filter for public lookup
  if (identifier && identifier.trim() !== '') {
    const q = identifier.trim().toLowerCase();
    const matchesEmail = found.personalInfo.email.toLowerCase() === q;
    const matchesPhone = found.personalInfo.phoneNumber.replace(/\D/g, '').includes(q.replace(/\D/g, ''));
    
    if (!matchesEmail && !matchesPhone) {
      return res.status(403).json({ error: 'The email or phone number does not match this Request ID.' });
    }
  }

  return res.json({ success: true, request: found });
});

// Add message to request chat
app.post('/api/requests/:id/chat', (req: Request, res: Response) => {
  const { id } = req.params;
  const { sender, senderName, text } = req.body;

  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Message text cannot be empty.' });
  }

  const reqObj = customerRequestsStore.find(r => r.id.toUpperCase() === id.toUpperCase());
  if (!reqObj) {
    return res.status(404).json({ error: 'Request not found.' });
  }

  const newMsg = {
    id: `msg-${Date.now()}`,
    sender: (sender as 'customer' | 'employee' | 'superadmin') || 'customer',
    senderName: senderName || reqObj.personalInfo.fullName,
    text: text.trim(),
    timestamp: new Date().toISOString(),
  };

  reqObj.messages.push(newMsg);
  reqObj.updatedAt = new Date().toISOString();

  return res.status(201).json({ success: true, message: newMsg });
});

// Get all requests (Ready for Admin CRM Bridge)
app.get('/api/crm/requests', (req: Request, res: Response) => {
  return res.json({
    total: customerRequestsStore.length,
    requests: customerRequestsStore,
  });
});

// Contact message submission
app.post('/api/contact', (req: Request, res: Response) => {
  const { fullName, email, phoneNumber, subject, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'Full name, email, and message are required.' });
  }

  const contactRecord: StoredContact = {
    id: `CNT-${Date.now()}`,
    fullName: fullName.trim(),
    email: email.trim(),
    phoneNumber: phoneNumber?.trim() || '',
    subject: subject?.trim() || 'General Travel Inquiry',
    message: message.trim(),
    dateSubmitted: new Date().toISOString(),
    status: 'new',
  };

  contactMessagesStore.push(contactRecord);
  console.log(`[API] New contact message received from: ${fullName}`);

  return res.status(201).json({
    success: true,
    messageId: contactRecord.id,
    message: 'Your message has been sent successfully. Our team will contact you shortly.',
  });
});

// ================= VITE / PRODUCTION HANDLER =================
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Balcad Travel Agency Server listening on http://0.0.0.0:${PORT}`);
  });
}

start();
