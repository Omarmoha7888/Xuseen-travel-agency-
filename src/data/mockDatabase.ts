import { FAQItem, GalleryItem, Testimonial, AgencyStats } from '../types';

export const agencyStats: AgencyStats = {
  customersServed: 18500,
  flightsRequested: 34200,
  visaRequests: 14850,
  hotelsBooked: 11200,
  yearsOfExperience: 12,
  destinations: 85,
};

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    customerName: 'Abdirahman Sheikh Omar',
    country: 'Somalia',
    countryCode: 'SO',
    rating: 5,
    serviceUsed: 'Hajj & Umrah Pilgrimage',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    review: {
      en: 'Balcad Travel Agency organized our family Umrah seamlessly. The 5-star hotel in Makkah was right in front of the Haram, and the transportation in Madinah was first-class. Truly the most trusted agency.',
      so: 'Balcad Travel Agency waxay qoyskayaga u diyaarisay safar Cumro oo heer sare ah. Hoteelka Maka wuxuu ahaa mid toos u eegaya Xaramka, gaadiidka Madiinana wuxuu ahaa mid aad u raaxo badan. Runtii waa wakaalad lagu kalsoonaan karo.',
      ar: 'نظمت وكالة بلعد رحلة العمرة لعائلتي بأعلى درجات الاتقان. الفندق في مكة كان مقابلاً للحرم مباشرة، والمواصلات في المدينة كانت راقية ومريحة للغاية. أفضل وكالة سفر بلا منازع.',
    }
  },
  {
    id: 'test-2',
    customerName: 'Fatima Zahra Al-Mansouri',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    rating: 5,
    serviceUsed: 'Turkey & Dubai Visa Processing',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    review: {
      en: 'My tourist visa to Turkey was approved in just 48 hours without any hassle. The consultant kept me updated via WhatsApp and phone continuously. Excellent service!',
      so: 'Fiisahaygii dalxiiska ee Turkiga waxaa lagu soo saaray 48 saacood gudahood iyadoo wax dhib ah lahayn. Shaqaalaha waxay WhatsApp iila soo xiriirayeen daqiiqad kasta. Aad ayaan ugu qancay!',
      ar: 'تم إصدار تأشيرة السياحة الخاصة بي إلى تركيا خلال 48 ساعة فقط بكل سهولة. كان المستشار يتواصل معي عبر الواتساب ويطلعني على كل خطوة. خدمة استثنائية!',
    }
  },
  {
    id: 'test-3',
    customerName: 'Mustafa Jama Hassan',
    country: 'United Kingdom',
    countryCode: 'GB',
    rating: 5,
    serviceUsed: 'Flight Booking & VIP Transfers',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    review: {
      en: 'Living in London, booking flights and airport transfers back home used to be stressful until I used Balcad Travel. Transparent communication, great flight connections, and friendly reception at the airport.',
      so: 'Anigoo ku nool London, goynta tigidhada iyo soo dhaweynta garoonka Muqdisho walwal ayay igu hayeen, laakiin Balcad Travel ayaa wax walba ii fududeysay. Diyaarad xiriirsan oo wanaagsan iyo soo dhaweyn sharaf leh ayaan helay.',
      ar: 'أثناء إقامتي في لندن، كان ترتيب رحلات الطيران والاستقبال في المطار أمراً مقلقاً حتى تعاملت مع وكالة بلعد. دقة في المواعيد، خطوط طيران ممتازة واستقبال مشرف بالمطار.',
    }
  },
  {
    id: 'test-4',
    customerName: 'Amina Nur Ahmed',
    country: 'Kenya',
    countryCode: 'KE',
    rating: 5,
    serviceUsed: 'Holiday Tour Package to Malaysia',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    review: {
      en: 'Our honeymoon vacation in Kuala Lumpur and Penang was breathtaking. Every hotel voucher, guided tour, and private car transfer was executed to perfection. Highly recommended!',
      so: 'Safarkayagii fasaxa ee Malaysia wuxuu ahaa mid aan la ilaawi karin. Hoteellada, booqashada meelaha quruxda badan iyo gaariga gaarka ah wax walba waxay ahaayeen heer sare. Aad ayaan ugu talinayaa!',
      ar: 'كانت عطلتنا في ماليزيا تجربة ساحرة لا تُنسى. كل تفاصيل الفنادق والجولات السياحية والتنقلات الخاصة تمت بأعلى درجات الاحترافية.',
    }
  }
];

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: {
      en: 'How do I request a travel service on the website?',
      so: 'Sideen adeeg safar uga dalban karaa website-ka?',
      ar: 'كيف يمكنني تقديم طلب خدمة سفر عبر الموقع؟',
    },
    answer: {
      en: 'Click on any "Request Service" button across the website. Fill in your personal details, passport information, destination, and upload any required documents. Upon submission, you will instantly receive a unique Request ID (e.g. BTA-2026-XXXX) and an assigned travel consultant will contact you directly.',
      so: 'Guji batoonka "Dalbo Adeeg". Buuxi xogtaada shakhsiga, xogta baasaboorka, waddanka aad u socoto, kuna soo lifaaq dukumeentiyadaada. Markaad gudbiso waxaad isla markiiba helaysaa lambarkaaga gaarka ah ee Request ID-ga, waxaana si toos ah kuula soo xiriiri doona shaqaale kuu xilsaaran.',
      ar: 'اضغط على زر "طلب خدمة"، وأدخل بياناتك الشخصية، بيانات جواز السفر، والوجهة المطلوبة، وارفع المستندات الداعمة. فور الإرسال، ستحصل على رقم طلب مرجعي فريد (مثل BTA-2026-XXXX) وسيتواصل معك مستشار السفر المخصص مباشرة.',
    }
  },
  {
    id: 'faq-2',
    category: 'documents',
    question: {
      en: 'Do I pay online through the website?',
      so: 'Lacag online ah ma ku bixinayaa website-ka?',
      ar: 'هل يتم الدفع إلكترونياً عبر الموقع؟',
    },
    answer: {
      en: 'No. Balcad Travel Agency does not collect online card or web payments. The website is strictly for submitting inquiries and required paperwork. Your assigned agent will review your request, offer a transparent quotation, and guide you through secure official payment channels.',
      so: 'Maya. Balcad Travel Agency wax lacag-bixin ah kuma qaadato website-ka. Website-ku waa mid loogu talagalay gudbinta dalabka iyo dukumeentiyada. Shaqaalaha xafiiska ayaa kula soo xiriiri doona si ay kuugula taliyaan habka rasmiga ah ee lacagta loo bixiyo.',
      ar: 'لا. لا يتم تحصيل أي مبالغ أو مدفوعات إلكترونية عبر الموقع. الموقع مخصص لتقديم الطلبات ورفع المستندات، وسيقوم مستشار السفر بمراجعة طلبك وتقديم عرض الأسعار وتنسيق الدفع عبر القنوات المعتمدة.',
    }
  },
  {
    id: 'faq-3',
    category: 'visa',
    question: {
      en: 'How long does visa processing take?',
      so: 'Intee in le’eg ayay qaadataa diyaarinta fiisaha?',
      ar: 'كم من الوقت تستغرق معالجة التأشيرات؟',
    },
    answer: {
      en: 'Electronic visas (such as UAE Dubai, Turkey eVisa, Kenya ETA) usually take between 24 to 48 hours. Embassy sticker visas (such as Schengen, UK, India, Egypt) typically take 5 to 15 working days depending on consular workloads.',
      so: 'Fiisooyinka elektarooniga ah (sida Dubai, Turkiga, Kenya) waxay qaataan 24 ilaa 48 saacood. Fiisooyinka safaaradaha (sida Yurub, UK, Hindiya, Masar) waxay qaataan 5 ilaa 15 maalmood oo shaqo.',
      ar: 'التأشيرات الإلكترونية (مثل دبي، تركيا، كينيا) تستغرق عادة من 24 إلى 48 ساعة. أما تأشيرات السفارات (مثل الشنغن وبريطانيا ومصر والهند) فتستغرق من 5 إلى 15 يوم عمل حسب القنصلية.',
    }
  },
  {
    id: 'faq-4',
    category: 'documents',
    question: {
      en: 'How do I upload my passport and documents securely?',
      so: 'Sideen baasaboorkayga iyo dukumeentiyada kale ugu soo geliyaa foomka?',
      ar: 'كيف أقوم برفع جواز السفر والمستندات بأمان؟',
    },
    answer: {
      en: 'In Step 4 of the Request Form, you can drag and drop your passport copies, national ID, photographs, or supporting invitation letters, or click to browse files from your phone/computer. We accept PDF, JPG, PNG, and JPEG files up to 20MB each.',
      so: 'Tallaabada 4-aad ee foomka dalabka, waxaad ku soo tuuri kartaa ama ka dooran kartaa taleefankaaga/kombiyuutarkaaga nuqulka baasaboorka, sawirka, ama dukumeentiyada kale. Waxaa la oggol yahay PDF, JPG, PNG ilaa 20MB.',
      ar: 'في الخطوة الرابعة من نموذج الطلب، يمكنك سحب وإفلات صور الجواز، الهوية، الصور الشخصية، أو خطابات الدعوة، أو استعراضها من جهازك. ندعم صيغ PDF, JPG, PNG حتى 20 ميغابايت لكل ملف.',
    }
  },
  {
    id: 'faq-5',
    category: 'general',
    question: {
      en: 'Can I modify or track my submitted request?',
      so: 'Ma beddeli karaa ama ma la socon karaa dalabkayga?',
      ar: 'هل يمكنني تعديل أو تتبع طلبي بعد الإرسال؟',
    },
    answer: {
      en: 'Yes! You can use our "Track Request" feature in the top navigation by entering your Request ID and Email/Phone. You can see real-time updates, timeline milestones, and directly chat with your assigned travel consultant.',
      so: 'Haa! Waxaad isticmaali kartaa qaybta "La Soco Dalabkaaga" ee ku taal madaxa website-ka adigoo gelinaya Request ID-gaaga. Waxaad toos u arki doontaa halka uu marayo iyo wada-sheekeysiga shaqaalaha.',
      ar: 'نعم! يمكنك استخدام ميزة "متابعة الطلب" في القائمة العلوية عبر إدخال رقم الطلب ورقم هاتفك أو بريدك، للاطلاع على المراحل الحالية والتواصل المباشر مع المستشار.',
    }
  },
  {
    id: 'faq-6',
    category: 'pilgrimage',
    question: {
      en: 'What is included in the Hajj & Umrah packages?',
      so: 'Maxaa ku jira xirmooyinka Xajka iyo Cumrada?',
      ar: 'ما الذي تشمله باقات الحج والعمرة؟',
    },
    answer: {
      en: 'Our packages include official pilgrimage visas, direct return flights, 5-star or 4-star hotels walking distance to the Holy Harams, VIP air-conditioned Mina & Arafat tents (for Hajj), private ground transport, and guidance by certified religious scholars.',
      so: 'Xirmooyinka waxaa ku jira fiisaha rasmiga ah, duulimaadyada tooska ah, hoteellada u dhow Xaramka, teendhooyinka VIP-da ah ee Mina iyo Carafo, gaadiidka u kala goosha magaalooyinka, iyo culimo diimeed kugu hoggaamisa acmaasha.',
      ar: 'تشمل الباقات التأشيرة الرسمية، تذاكر الطيران، فنادق فاخرة مجاورة للحرمين الشريفين، مخيمات VIP مكيفة في المشاعر المقدسة، والمواصلات الخاصة مع إرشاد ديني ومرافقة دائمة.',
    }
  },
  {
    id: 'faq-7',
    category: 'general',
    question: {
      en: 'How will the agency contact me after I submit a request?',
      so: 'Sidee ayay shirkaddu iila soo xiriiri doontaa marka aan codsiga diro?',
      ar: 'كيف ستتواصل معي الوكالة بعد تقديم الطلب؟',
    },
    answer: {
      en: 'Our team will contact you via your provided Phone Number, WhatsApp, or Email address within 1 to 2 hours during normal business hours, or immediately for emergency bookings.',
      so: 'Shaqaalaheenna waxay kugula soo xiriiri doonaan taleefankaaga, WhatsApp-kaaga ama Email-kaaga 1 ilaa 2 saacadood gudahood waqtiyada shaqada ee rasmiga ah.',
      ar: 'سيتواصل معك فريقنا عبر رقم هاتفك، أو الواتساب، أو البريد الإلكتروني المسجل خلال ساعة إلى ساعتين في أوقات العمل الرسمية، أو فورياً للحالات الطارئة.',
    }
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'pilgrimage',
    title: {
      en: 'The Holy Kaaba & Masjid Al-Haram',
      so: 'Kacbada Barakaysan & Xaramka Maka',
      ar: 'الكعبة المشرفة والمسجد الحرام',
    },
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80',
    location: 'Makkah Al-Mukarramah, Saudi Arabia',
    description: {
      en: 'Spiritual tranquility during our guided VIP Umrah pilgrimage groups.',
      so: 'Deganaansho iyo cibaado intii lagu guda jiray safarkii Cumrada ee VIP-da ahaa.',
      ar: 'أجواء الروحانية والسكينة أثناء برامج العمرة المتميزة.',
    }
  },
  {
    id: 'gal-2',
    category: 'flights',
    title: {
      en: 'Premium International Flight Experiences',
      so: 'Duulimaadyada Caalamiga ah ee Heerka Sare',
      ar: 'تجربة طيران عالمية فاخرة',
    },
    image: 'https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=1200&q=80',
    location: 'Global Aviation Network',
    description: {
      en: 'Comfortable seating and premier airline routing for all our global travelers.',
      so: 'Kuraasta raaxada leh iyo duulimaadyada xiriirsan ee macaamiisheena.',
      ar: 'راحة قصوى وتنسيق رحلات ميسر لجميع مسافرينا حول العالم.',
    }
  },
  {
    id: 'gal-3',
    category: 'hotels',
    title: {
      en: 'Luxury 5-Star Hotel Suites',
      so: 'Qolalka Hoteellada 5-ta Xiddigood ee Raaxada',
      ar: 'أجنحة الفنادق الفاخرة 5 نجوم',
    },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    location: 'Dubai & Istanbul Luxury Partners',
    description: {
      en: 'Hand-selected hotel suites offering breathtaking skyline views and world-class hospitality.',
      so: 'Qolal gaar ah oo leh muuqaal qurux badan iyo adeeg hufan oo heer caalami ah.',
      ar: 'إقامة راقية وإطلالات ساحرة مع كبرى السلاسل الفندقية العالمية.',
    }
  },
  {
    id: 'gal-4',
    category: 'tourist_destinations',
    title: {
      en: 'Istanbul Historic Skyline & Bosphorus',
      so: 'Muuqaalka Taariikhiga ah ee Istanbul & Bosphorus',
      ar: 'معالم إسطنبول التاريخية ومضيق البوسفور',
    },
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    location: 'Istanbul, Turkey',
    description: {
      en: 'Breathtaking Turkish holiday packages with private yacht tours and heritage sightseeing.',
      so: 'Dalxiiska Turkiga oo wata doonyo dalxiis iyo booqashada goobaha taariikhiga ah.',
      ar: 'باقات سياحية رائعة تشمل جولات البوسفور وزيارة المعالم التاريخية.',
    }
  },
  {
    id: 'gal-5',
    category: 'tour_packages',
    title: {
      en: 'East African Safari & Wildlife Escapes',
      so: 'Safariga Xayawaanka ee Bariga Afrika (Kenya & Tanzania)',
      ar: 'رحلات السفاري الإفريقية والطبيعة الخلابة',
    },
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    location: 'Maasai Mara & Serengeti',
    description: {
      en: 'Thrilling safari expeditions with luxury tented camps and professional wildlife rangers.',
      so: 'Dalxiis dabiici ah oo lagu daawanayo xayawaanka iyadoo la dagi doono xerooyin VIP ah.',
      ar: 'مغامرات سفاري ممتعة مع إقامة في مخيمات فاخرة وإرشاد متخصص.',
    }
  },
  {
    id: 'gal-6',
    category: 'travel_experiences',
    title: {
      en: 'Dubai Luxury Desert Safari & Skyline',
      so: 'Dalxiiska Saxaraha Dubai & Magaalada Casriga ah',
      ar: 'سفاري صحراء دبي والأبراج الشاهقة',
    },
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    location: 'Dubai, United Arab Emirates',
    description: {
      en: 'Exciting desert safaris, dhow dinner cruises, and shopping excursions.',
      so: 'Dalxiiska saxaraha, cuntooyinka maraakiibta raaxada iyo dukaameysiga suuqyada caanka ah.',
      ar: 'رحلات صحراوية مميزة وعشاء في المراكب الفاخرة وجولات تسوق شاملة.',
    }
  }
];
