import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'flight-booking',
    slug: 'flight-booking',
    category: 'flight',
    popular: true,
    icon: 'Plane',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'Flight Booking & Airline Reservations',
      so: 'Goynta Tigidhada & Duulimaadyada Caalamiga ah',
      ar: 'حجوزات تذاكر الطيران العالمية',
    },
    shortDescription: {
      en: 'Seamless airline ticketing across top international airlines with flexible dates, baggage allowances, and best seat selections.',
      so: 'Tigidhada dhammaan diyaaradaha caalamka oo leh kuraas raaxo leh, xamuul ku filan iyo xalal safar oo degdeg ah.',
      ar: 'حجوزات مؤكدة على كبرى خطوط الطيران العالمية مع خيارات مرنة للأمتعة وأفضل المقاعد.',
    },
    fullDescription: {
      en: 'Balcad Travel Agency partners with world-renowned airlines (Turkish Airlines, Qatar Airways, Emirates, Ethiopian Airlines, flydubai, Air Arabia, and regional carriers) to offer tailored one-way, round-trip, multi-city, and chartered flight itineraries. Our consultants optimize your connections and ensure stress-free transit.',
      so: 'Balcad Travel Agency waxay toos ula shaqaysaa diyaaradaha ugu waaweyn caalamka sida Turkish Airlines, Qatar Airways, Emirates, Ethiopian Airlines, flydubai iyo kuwa kale. Waxaan kuu diyaarinaynaa duulimaad toos ah ama xiriirsan oo waqti iyo kharash kuu badbaadinaya.',
      ar: 'تتعاون وكالة بلعد مع كبرى شركات الطيران العالمية مثل الخطوط التركية، القطرية، الإماراتية، الإثيوبية وفلاي دبي لتقديم خيارات حجز مرنة للرحلات الفردية والجماعية ورحلات الترانزيت الميسرة.',
    },
    benefits: {
      en: [
        'Instant flight confirmations and e-ticket generation',
        'Generous baggage allowance coordination',
        'Special assistance for elderly travelers and minors',
        'Date change and rescheduling support with dedicated agent',
        'Domestic Somali flights and international routes'
      ],
      so: [
        'Xaqiijin degdeg ah oo tigidho elektaroonik ah',
        'Xisaabinta iyo hagaajinta xamuulka culus',
        'Daryeel gaar ah oo loogu talagalay waayeelka iyo carruurta',
        'Fududeynta beddelidda taariikhda safarka',
        'Duulimaadyada gobollada Soomaaliya iyo caalamka oo dhan'
      ],
      ar: [
        'تأكيد فوري للتذاكر وإصدار التذاكر الإلكترونية',
        'تنسيق أوزان الأمتعة الإضافية والترقيات',
        'رعاية خاصة للمسافرين كبار السن والأطفال غير المصحوبين',
        'مرونة عالية في تعديل المواعيد والرحلات',
        'تغطية كاملة للرحلات الداخلية والدولية'
      ]
    },
    requiredDocuments: {
      en: [
        'Valid Passport copy (minimum 6 months validity)',
        'Preferred departure & arrival destination details',
        'Target travel dates & flexibility range',
        'National ID or residency visa of destination country'
      ],
      so: [
        'Nuqul baasaboor sax ah (ugu yaraan 6 bilood shaqeynaya)',
        'Magaalada aad ka baxeysid iyo magaalada aad ku dageysid',
        'Taariikhaha aad doorbideyso inaad safarto',
        'Aqoonsiga ama fiisaha waddanka aad u socoto'
      ],
      ar: [
        'نسخة من جواز السفر ساري المفعول لمدة لا تقل عن 6 أشهر',
        'تحديد وجهة المغادرة والوصول بدقة',
        'التواريخ المفضلة للسفر ونطاق المرونة',
        'تأشيرة الدخول أو إقامة دولة الوجهة إن وجدت'
      ]
    },
    processingTime: {
      en: '1 - 3 Hours for Standard Issuance; Instant for Urgent Flights',
      so: '1 ilaa 3 Saacood adeegga caadiga ah; isla markiiba duulimaadyada degdegga ah',
      ar: 'من 1 إلى 3 ساعات للإصدار العادي؛ وفوري للرحلات العاجلة',
    },
    faqs: [
      {
        question: {
          en: 'Can I request date changes or cancel my ticket after submission?',
          so: 'Ma beddeli karaa taariikhda tigidhkayga ama ma baabi’in karaa?',
          ar: 'هل يمكنني تعديل موعد الرحلة أو إلغاؤها بعد الحجز؟',
        },
        answer: {
          en: 'Yes, simply quote your Request ID to your assigned Balcad consultant and they will process fare rules, date changes, or refunds according to airline policies.',
          so: 'Haa, kaliya u sheeg Request ID-gaaga shaqaalaha laguu xilsaaray, waxayna kugu caawin doonaan beddelidda iyadoo la raacayo shuruucda diyaaradda.',
          ar: 'نعم، ما عليك سوى تزويد مستشارك برقم الطلب وسيتولى تعديل المواعيد أو الاسترداد وفق شروط شركة الطيران.',
        }
      }
    ]
  },
  {
    id: 'visa-processing-tourist',
    slug: 'visa-tourist',
    category: 'visa',
    popular: true,
    icon: 'FileCheck',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'Tourist Visa Processing (Worldwide)',
      so: 'Fiisaha Dalxiiska Caalamka (Tourist Visa)',
      ar: 'معالجة تأشيرات السياحة حول العالم',
    },
    shortDescription: {
      en: 'Fast, secure tourist visa assistance for UAE (Dubai), Turkey, Kenya, Egypt, Saudi Arabia, Malaysia, Schengen, and beyond.',
      so: 'Ka shaqeynta fiisaha dalxiiska ee Dubai, Turkiga, Kenya, Masar, Sacuudiga, Malaysia, Yurub iyo waddamo kale.',
      ar: 'استخراج تأشيرات السياحة للإمارات (دبي)، تركيا، كينيا، مصر، ماليزيا، ودول الشنغن بأعلى نسب قبول.',
    },
    fullDescription: {
      en: 'Our immigration consultants provide meticulous document verification, embassy appointment booking, application filing, and personalized guidance for global tourist visas. We maintain an exceptional track record of approvals for leisure travelers.',
      so: 'Kooxdeena khubarada ah waxay si qoto dheer u eegaan dukumeentiyadaada, ballamaha safaaradaha iyo buuxinta foomamka si fiisahaaga dalxiiska loo helo waqtiga ugu habboon.',
      ar: 'يوفر خبراؤنا مراجعة دقيقة لجميع المستندات، حجز مواعيد السفارات، وتعبئة الطلبات الرسمية لضمان إصدار تأشيرة السياحة بدون تعقيدات.',
    },
    benefits: {
      en: [
        'Document pre-audit before embassy submission',
        'Expert guidance on financial proof and invitation letters',
        'Express electronic visa (eVisa) processing for UAE, Kenya, Turkey',
        'Comprehensive embassy interview preparation if required'
      ],
      so: [
        'Hubinta dukumeentiyada ka hor inta aan safaaradda la geyn',
        'Talooyin khabiir oo ku saabsan caddeynta maaliyadeed',
        'Fiisooyinka elektarooniga (eVisa) ee Dubai, Kenya, Turkiga oo degdeg ah',
        'Diyaarinta wareysiga safaaradda haddii loo baahdo'
      ],
      ar: [
        'مراجعة وتدقيق المستندات قبل التقديم للسفارة',
        'إرشادات متخصصة لإعداد كشوفات الحساب وخطابات الدعوة',
        'إصدار فوري للتأشيرات الإلكترونية للإمارات وتركيا وكينيا',
        'تأهيل وتدريب احترافي لمقابلات السفارات'
      ]
    },
    requiredDocuments: {
      en: [
        'Passport bio-data page with at least 6 months validity',
        'Recent passport-size photograph (white background)',
        'Bank statement (for select embassies)',
        'Flight reservation and hotel confirmation (provided by Balcad)'
      ],
      so: [
        'Nuqulka baasaboorka oo shaqeynaya ugu yaraan 6 bilood',
        'Sawir baasaboor oo cusub (gadaal cad)',
        'Bayaan bangi (waddamada qaar)',
        'Qabsashada duulimaadka iyo hoteelka (Balcad Travel ayaa bixinaysa)'
      ],
      ar: [
        'جواز سفر صالح لمدة 6 أشهر على الأقل',
        'صورة شخصية حديثة بخلفية بيضاء',
        'كشف حساب بنكي (لبعض السفارات)',
        'حجز طيران مبدئي وحجز فندقي (توفرها وكالة بلعد)'
      ]
    },
    processingTime: {
      en: 'eVisa: 24 - 48 Hours | Embassy Visa: 5 - 15 Business Days',
      so: 'Fiisaha Online-ka: 24 - 48 Saacood | Safaaradda: 5 - 15 Maalmood',
      ar: 'التأشيرة الإلكترونية: 24 - 48 ساعة | تأشيرة السفارة: 5 - 15 يوم عمل',
    },
    faqs: [
      {
        question: {
          en: 'Which countries can I get tourist visas for through Balcad?',
          so: 'Waddamadee ayaan fiisahooda dalxiiska ka heli karaa Balcad Travel?',
          ar: 'ما هي الدول التي يمكن استخراج تأشيرة سياحة لها عبر وكالة بلعد؟',
        },
        answer: {
          en: 'We assist with tourist visas to UAE (30 & 60 days), Turkey, Egypt, Kenya (ETA), Saudi Arabia, Qatar, Malaysia, Thailand, Oman, Ethiopia, Uganda, and Schengen territories.',
          so: 'Waxaan kuu qabaneynaa fiisooyinka Dubai (30 iyo 60 maalmood), Turkiga, Masar, Kenya, Sacuudiga, Qatar, Malaysia, Thailand, Cumaan, Itoobiya, iyo Yurub.',
          ar: 'نقدم خدمات التأشيرة للإمارات (30 و 60 يوماً)، تركيا، مصر، كينيا، السعودية، قطر، ماليزيا، تايلاند، ودول الشنغن.',
        }
      }
    ]
  },
  {
    id: 'visa-processing-business',
    slug: 'visa-business',
    category: 'visa',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'Business & Commercial Visa Services',
      so: 'Fiisaha Ganacsiga (Business Visa)',
      ar: 'خدمات تأشيرات رجال الأعمال والتجارة',
    },
    shortDescription: {
      en: 'Expedited visas for trade exhibitions, business conferences, corporate delegations, and investor meetings worldwide.',
      so: 'Fiisooyinka ganacsatada, bandhigyada caalamiga ah, shirarka shirkadaha iyo socdaallada maalgashiga.',
      ar: 'تأشيرات سريعة لحضور المعارض التجارية، المؤتمرات الدولية، واجتماعات المستثمرين والوفود الرسمية.',
    },
    fullDescription: {
      en: 'Tailored for entrepreneurs, executives, and commercial representatives. We handle trade chamber attestations, official company invitations, expedited consulate submissions, and multiple-entry business visas across major global business hubs.',
      so: 'Waxaa loogu talagalay ganacsatada, madaxda shirkadaha iyo wakiillada ganacsiga. Waxaan kuu fududeyneynaa warqadaha martiqaadka ganacsiga, xaqiijinta rugaha ganacsiga iyo helitaanka fiisooyin ganacsi oo waqti dheer ah.',
      ar: 'خدمة مخصصة لرجال الأعمال والمستثمرين تشمل توثيق خطابات الغرف التجارية، الدعوات الرسمية، والحصول على تأشيرات متعددة السفرات للمراكز التجارية العالمية.',
    },
    benefits: {
      en: [
        'Priority submission and dedicated business concierge',
        'Multiple-entry visa consultation',
        'Official commercial invitation review',
        'Corporate billing and consolidated group processing'
      ],
      so: [
        'Mudnaan gaar ah iyo daryeel degdeg ah oo ganacsade',
        'La-talinta fiisooyinka gelitaanka badan (Multiple entry)',
        'Eegidda warqadaha martiqaadka ganacsiga rasmiga ah',
        'U adeegidda kooxaha ganacsiga ee shirkadaha'
      ],
      ar: [
        'أولوية قصوى في التقديم والمتابعة الخاصة',
        'استشارات تأشيرات الدخول المتعدد طويلة الأجل',
        'مراجعة خطابات الدعوة والشركات المستضيفة',
        'معالجة الوفود التجارية والمجموعات'
      ]
    },
    requiredDocuments: {
      en: [
        'Valid Passport (at least 6 months validity)',
        'Company commercial registration or introductory letter',
        'Invitation letter from host organization / trade fair',
        'Recent white background passport photos'
      ],
      so: [
        'Baasaboor sax ah (ugu yaraan 6 bilood)',
        'Ruqsadda ganacsiga shirkadda ama warqad hordhac ah',
        'Warqadda martiqaadka shirka ama shirkadda martigelisa',
        'Sawirro baasaboor oo cusub'
      ],
      ar: [
        'جواز سفر صالح لمدة لا تقل عن 6 أشهر',
        'السجل التجاري أو خطاب تعريف من الشركة',
        'خطاب دعوة رسمي من الشركة المستضيفة أو المعرض',
        'صور شخصية حديثة بخلفية بيضاء'
      ]
    },
    processingTime: {
      en: '3 - 7 Business Days depending on destination consulate',
      so: '3 ilaa 7 Maalmood oo shaqo iyadoo ku xiran safaaradda',
      ar: 'من 3 إلى 7 أيام عمل حسب قنصلية الدولة',
    },
    faqs: []
  },
  {
    id: 'visa-processing-student',
    slug: 'visa-student',
    category: 'visa',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'Student & Academic Visa Solutions',
      so: 'Fiisaha Waxbarashada Ardayda (Student Visa)',
      ar: 'تأشيرات الدراسة والقبول الأكاديمي',
    },
    shortDescription: {
      en: 'Comprehensive support for students enrolling in universities across Turkey, Malaysia, Cyprus, Egypt, India, UK, and Europe.',
      so: 'Caawinta ardayda doonaysa inay jaamacado ka galaan Turkiga, Malaysia, Qubrus, Masar, Hindiya iyo Yurub.',
      ar: 'دعم شامل للطلاب للالتحاق بالجامعات في تركيا، ماليزيا، قبرص، مصر، بريطانيا وأوروبا.',
    },
    fullDescription: {
      en: 'We assist ambitious students with admission document certification, university acceptance letter verification, embassy interview coaching, and academic visa file compilation ensuring zero errors.',
      so: 'Waxaan ardayda Soomaaliyeed ka caawinaa xaqiijinta warqadaha oggolaanshaha jaamacadaha, diyaargarowga wareysiga safaaradda iyo diyaarinta galalka fiisaha waxbarashada.',
      ar: 'نساعد الطلاب على إعداد وتصديق ملفات القبول الجامعي، وحجز مواعيد التأشيرات الدراسية والتدريب على مقابلات السفارة باقتدار.',
    },
    benefits: {
      en: [
        'Complete university acceptance packet review',
        'Sponsorship and financial guarantor file compilation',
        'Embassy mock interview training',
        'Student discount airfares and excess baggage perks'
      ],
      so: [
        'Dib u eegista warqadda aqbalaadda jaamacadda',
        'Diyaarinta caddaynta kafiilka maaliyadeed',
        'Tababarka wareysiga safaaradda',
        'Qiimo dhimis tigidho arday iyo miisaan dheeraad ah'
      ],
      ar: [
        'مراجعة كاملة لحزم القبول الجامعي والمنح',
        'تجهيز ملفات الضمان المالي والكفيل',
        'تدريب على مقابلات التأشيرة الدراسية',
        'خصومات خاصة على تذاكر الطيران وأوزان إضافية للطلاب'
      ]
    },
    requiredDocuments: {
      en: [
        'Original Passport with minimum 1-year validity',
        'Official University Acceptance / Admission Letter',
        'High school or Bachelor certificate attested copies',
        'Financial proof / Bank statement or scholarship award letter'
      ],
      so: [
        'Baasaboor shaqeynaya ugu yaraan 1 sano',
        'Warqadda aqbalaadda rasmiga ah ee jaamacadda',
        'Shahaadooyinka waxbarashada oo sharciyeysan',
        'Caddeynta awoodda maaliyadeed ama warqadda deeqda waxbarasho'
      ],
      ar: [
        'جواز سفر صالح لمدة سنة على الأقل',
        'خطاب القبول الجامعي الرسمي',
        'الشهادات الدراسية موثقة ومعتمدة',
        'إثبات مالي / كشف حساب أو خطاب المنحة الدراسية'
      ]
    },
    processingTime: {
      en: '2 - 6 Weeks (Dependent on academic intake calendar)',
      so: '2 ilaa 6 Todobaad iyadoo ku xiran jadwalka jaamacadda',
      ar: 'من 2 إلى 6 أسابيع حسب التقويم الأكاديمي',
    },
    faqs: []
  },
  {
    id: 'visa-processing-medical',
    slug: 'visa-medical',
    category: 'visa',
    icon: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'Medical Treatment & Patient Visas',
      so: 'Fiisaha Caafimaadka & Daaweynta (Medical Visa)',
      ar: 'تأشيرات العلاج والرعاية الطبية',
    },
    shortDescription: {
      en: 'Urgent medical visa support for patients and accompanying family to premier hospitals in India, Turkey, Egypt, and UAE.',
      so: 'Fiisooyinka degdegga ah ee bukaanada iyo qaraabadooda u socda isbitaallada Hindiya, Turkiga, Masar iyo UAE.',
      ar: 'إصدار عاجل لتأشيرات العلاج للمرضى ومرافقيهم إلى أرقى المستشفيات في الهند، تركيا، مصر، والإمارات.',
    },
    fullDescription: {
      en: 'When health requires urgent international travel, Balcad Travel Agency expedites medical visas, secures hospital invitation letters from accredited international medical centers, and coordinates stretcher or wheelchair airport assistance.',
      so: 'Xaaladaha caafimaad ee degdegga ah, waxaan bukaanka u soo saarnaa fiiso caafimaad oo degdeg ah, waxaan la xiriirinaa isbitaallada caalamiga ah ee ugu fiican, waxaanna diyaarinaa adeegga garoonka ee kuraasta curyaanka iyo sariiraha diyaaradda.',
      ar: 'في الحالات الصحية الطارئة، نتولى استخراج التأشيرات الطبية العاجلة، والحصول على خطابات المستشفيات المعتمدة، وتوفير المساعدة الخاصة في المطارات.',
    },
    benefits: {
      en: [
        'Urgent 24-48 hour processing for emergency medical files',
        'Visas for patient plus multiple medical attendants',
        'Airport ambulance / wheelchair coordination',
        'Direct hospital liaison in India, Istanbul, Cairo, and Dubai'
      ],
      so: [
        'Ka shaqeyn degdeg ah 24-48 saacood gudahood',
        'Fiisaha bukaanka iyo ehelka la socda',
        'Isku dubaridka gawaarida ambalaasta iyo kuraasta garoonka',
        'Xiriir toos ah oo lala yeesho isbitaallada'
      ],
      ar: [
        'إنجاز عاجل خلال 24-48 ساعة للحالات الحرجة',
        'تأشيرات للمريض والمرافقين المعتمدين',
        'تنسيق سيارات الإسعاف والكراسي المتحركة بالمطار',
        'تنسيق مباشر مع المستشفيات المعتمدة'
      ]
    },
    requiredDocuments: {
      en: [
        'Passport copies of patient and accompanying attendants',
        'Local medical reports & doctor referral letter',
        'Hospital invitation / appointment letter from destination country'
      ],
      so: [
        'Nuqullada baasaboorka bukaanka iyo qofka la socda',
        'Warbixinta caafimaad ee dhaqtarka maxalliga ah',
        'Warqadda ballanta ama aqbalaadda isbitaalka dibadda'
      ],
      ar: [
        'نسخ جوازات السفر للمريض والمرافقين',
        'التقارير الطبية المحلية وخطاب التحويل',
        'خطاب الموعد والقبول من المستشفى في بلد المقصد'
      ]
    },
    processingTime: {
      en: '24 Hours to 4 Days (Urgent Expedited Processing Available)',
      so: '24 Saac ilaa 4 Maalmood (Adeeg degdeg ah ayaa diyaar ah)',
      ar: '24 ساعة إلى 4 أيام (معالجة طارئة وسريعة متاحة)',
    },
    faqs: []
  },
  {
    id: 'hajj-packages',
    slug: 'hajj-packages',
    category: 'pilgrimage',
    popular: true,
    icon: 'Moon',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'VIP Hajj Pilgrimage Packages',
      so: 'Xirmooyinka Xajka ee Heerka Sare (Hajj Packages)',
      ar: 'باقات الحج المتميزة والفاخرة',
    },
    shortDescription: {
      en: 'Sacred, organized, and spiritually fulfilling Hajj journeys with 5-star Makkah & Madinah hotels, air-conditioned Mina tents, and scholar guidance.',
      so: 'Safarka barakaysan ee Xajka oo leh hoteello 5-xiddigood ah oo ku dhow Xaramka, teendhooyinka Mina ee qaboojiyaha leh iyo culimo ku hoggaamisa.',
      ar: 'رحلات حج مباركة ومنظمة مع فنادق 5 نجوم مطلة على الحرم، مخيمات منى المكيفة، وإرشاد ديني متخصص.',
    },
    fullDescription: {
      en: 'Perform the fifth pillar of Islam with utmost peace of mind. Balcad Travel Agency provides licensed Hajj quotas, direct flights, VIP air-conditioned camps in Mina and Arafat, modern luxury coaches, comprehensive medical support, and scholar guidance throughout every ritual.',
      so: 'U gudo galka tiirka shanaad ee Islaamka si xasilooni iyo raaxo leh. Waxaan bixinnaa duulimaadyo toos ah, hoteellada Clock Tower ee Maka iyo Madiina, teendhooyinka Mina & Carafo ee VIP-da ah, gaadiid casri ah iyo culimo ku baraya habka saxda ah ee loo xajiyo.',
      ar: 'أدِّ فريضة الحج بطمأنينة وراحة تامة. توفر وكالة بلعد تصاريح حج معتمدة، رحلات طيران مباشرة، مخيمات VIP مكيفة في منى وعرفات، حافلات حديثة، وفريق طبي وإرشادي مرافق طوال المناسك.',
    },
    benefits: {
      en: [
        '5-Star hotels directly facing the Holy Haram in Makkah & Madinah',
        'VIP upgraded air-conditioned Mina & Arafat camps with full catering',
        'Experienced multilingual religious scholars (Sheikhs) accompanying the group',
        'Private luxury coach transportation between holy sites',
        'Dedicated 24/7 medical and logistics team on the ground'
      ],
      so: [
        'Hoteello 5-xiddigood ah oo toos u eegaya Xaramka Maka & Madiina',
        'Teendhooyinka Mina & Carafo oo VIP ah oo leh qaboojiye iyo cunto 3-waqti ah',
        'Culimo Soomaaliyeed oo aqoon durugsan leh oo safarka kula socda',
        'Baska raaxada ee u kala goosha goobaha barakeysan',
        'Koox caafimaad iyo adeeg oo 24/7 diyaar u ah xujeyda'
      ],
      ar: [
        'فنادق 5 نجوم مطلة على الحرم المكي والحرم النبوي الشريف',
        'مخيمات VIP مطورة ومكيفة في منى وعرفات مع بوفيهات مفتوحة',
        'مشايخ وعلماء دين لمرافقة الحجاج وشرح المناسك',
        'حافلات نقل حديثة ومكيفة بين المشاعر المقدسة',
        'فريق طبي وإداري متفرغ على مدار الساعة لخدمة الحجاج'
      ]
    },
    requiredDocuments: {
      en: [
        'Valid passport with minimum 6 months validity',
        'Mandatory vaccination certificates (Meningitis, COVID-19, Polio)',
        'Passport-sized biometric photos with white background',
        'Proof of relationship (Mahram) for women under stipulated age'
      ],
      so: [
        'Baasaboor shaqeynaya ugu yaraan 6 bilood',
        'Kaararka tallaalada caafimaadka ee loo baahan yahay',
        'Sawirro baasaboor oo gadaal cad leh',
        'Dukumeentiga maxramka ee haweenka u baahan'
      ],
      ar: [
        'جواز سفر صالح لمدة لا تقل عن 6 أشهر',
        'شهادات التطعيمات المعتمدة (الحمى الشوكية، وغيرها)',
        'صور شخصية بيومترية حديثة بخلفية بيضاء',
        'إثبات صلة القرابة (المحرم) للمستفيدات'
      ]
    },
    processingTime: {
      en: 'Subject to Saudi Ministry of Hajj seasonal registration schedule',
      so: 'Iyadoo ku xiran jadwalka Wasaaradda Xajka ee Sacuudiga',
      ar: 'حسب مواعيد التسجيل الرسمية لوزارة الحج والعمرة السعودية',
    },
    faqs: []
  },
  {
    id: 'umrah-packages',
    slug: 'umrah-packages',
    category: 'pilgrimage',
    popular: true,
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'Year-Round Umrah & Ramadan Packages',
      so: 'Xirmooyinka Cumrada & Bisha Barakeysan ee Ramadaan',
      ar: 'باقات العمرة على مدار العام وعمرة رمضان',
    },
    shortDescription: {
      en: 'Customized and group Umrah packages with fast electronic Umrah visas, Haram-view accommodations, and historic Ziyarah tours.',
      so: 'Safarka Cumrada ee sanadka oo dhan iyo tobanka dambe ee Ramadaan oo wata fiiso degdeg ah, hoteello dhow iyo booqashada goobaha taariikhiga ah.',
      ar: 'باقات عمرة مخصصة وعائلية على مدار العام مع تأشيرات سريعة، إقامة قريبة من الحرم، وجولات مزارات دينية.',
    },
    fullDescription: {
      en: 'Experience the spiritual serenity of Makkah and Madinah with Balcad Travel. We offer individual, family, and group Umrah packages all year long, including the blessed last ten nights of Ramadan, with ground handling, Ziyarat in Madinah, and fast eVisa issuance.',
      so: 'Ka faa’iideyso safarka cibaadada ee Maka iyo Madiina. Waxaan kuu diyaarinaynaa fiisaha Cumrada oo ku soo baxaya waqti yar, hoteello ku dhow masaajidda barakeysan, iyo booqashada goobaha taariikhiga ah sida Buurta Uxud, Masjid Qubaa iyo kuwa kale.',
      ar: 'عش روحانية مكة المكرمة والمدينة المنورة مع برامج العمرة المتميزة. نوفر تأشيرات العمرة الإلكترونية، حجوزات الفنادق المجاورة للحرم، وزيارة المزارات والمعالم الإسلامية بالمدينة المنورة.',
    },
    benefits: {
      en: [
        'Instant Umrah electronic visa processing (Nusuk platform)',
        'Wide selection of 3-star, 4-star, and 5-star hotels within walking distance',
        'Organized historical Ziyarah tours in Makkah and Madinah with guides',
        'Airport reception at Jeddah & Madinah international airports',
        'Private high-speed Haramain train ticket bookings'
      ],
      so: [
        'Fiisaha Cumrada oo ku soo baxaya hab elektaroonik ah oo degdeg ah',
        'Hoteello u dhow Xaramka oo aad lug ku tagi karto',
        'Booqashada goobaha taariikhiga ah (Ziyaaro) oo wadata kormeere',
        'Soo dhaweyn heer sare ah oo garoonka Jeddah ama Madiina ah',
        'Tigidhada Tareenka xawaaraha dheereeya ee Xaramayn'
      ],
      ar: [
        'إصدار فوري لتأشيرات العمرة الإلكترونية عبر منصة نسك',
        'فنادق راقية على مسافة خطوات سير من بوابات الحرم',
        'جولات مزارات تاريخية إسلامية في مكة والمدينة مع مرشدين',
        'استقبال وتوديع في مطارات جدة والمدينة المنورة',
        'حجز تذاكر قطار الحرمين السريع الفاخر'
      ]
    },
    requiredDocuments: {
      en: [
        'Valid Passport copy (minimum 6 months remaining)',
        'Passport-size white background photograph',
        'Confirmed roundtrip flight booking (arranged by Balcad)'
      ],
      so: [
        'Nuqul baasaboor oo shaqeynaya ugu yaraan 6 bilood',
        'Sawir baasaboor gadaal cad leh',
        'Tigidhada diyaaradda ee tagidda iyo soo laabashada'
      ],
      ar: [
        'نسخة واضحة من جواز السفر ساري المفعول لـ 6 أشهر على الأقل',
        'صورة شخصية حديثة بخلفية بيضاء',
        'تذاكر الطيران للذهاب والعودة'
      ]
    },
    processingTime: {
      en: '24 - 48 Hours for Electronic Umrah Visa Issuance',
      so: '24 ilaa 48 Saacood fiisaha elektaroonigga ah',
      ar: 'من 24 إلى 48 ساعة لإصدار التأشيرة الإلكترونية',
    },
    faqs: []
  },
  {
    id: 'hotel-booking',
    slug: 'hotel-booking',
    category: 'hotel',
    icon: 'Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'Worldwide Hotel & Resort Reservations',
      so: 'Qabsashada Hoteellada & Dalxiiska Caalamka',
      ar: 'حجوزات الفنادق والمنتجعات الفاخرة حول العالم',
    },
    shortDescription: {
      en: 'Access thousands of handpicked 4-star and 5-star hotels, luxury suites, and family beachfront resorts at privileged agency rates.',
      so: 'Hoteello raaxo leh, qolal 5-xiddigood ah iyo meelo dalxiis oo ku yaal magaalooyinka adduunka ugu caansan.',
      ar: 'حجز فنادق 4 و 5 نجوم ومنتجعات شاطئية وأجنحة عائلية فاخرة في أرقى مدن العالم.',
    },
    fullDescription: {
      en: 'From central city towers in Dubai, Istanbul, London, and Kuala Lumpur to serene beachfront villas in Zanzibar, Maldives, and Mombasa. Balcad Travel Agency secures verified hotel bookings with complimentary breakfast, room upgrades, and flexible check-in.',
      so: 'Magaalooyinka Dubai, Istanbul, London, Kuala Lumpur ilaa xeebaha Zanzibar, Maldives iyo Mombasa, waxaan kuu diyaarinaynaa hoteello la xaqiijiyay oo leh quraac bilaash ah, qolal heer sare ah iyo adeeg hufan.',
      ar: 'من فنادق وسط المدن العالمية في دبي، إسطنبول، لندن وكوالالمبور إلى المنتجعات الشاطئية في زنجبار والمالديف ومومباسا، نضمن لك أفضل إقامة مع وجبات الإفطار ومرونة الدخول.',
    },
    benefits: {
      en: [
        'Guaranteed hotel voucher recognized by all embassies for visa approval',
        'Complimentary breakfast and room upgrade opportunities',
        'Direct partnerships with major hospitality brands (Marriott, Hilton, Accor, Clock Tower hotels)',
        'Family connecting rooms and luxury presidential suites available'
      ],
      so: [
        'Warqadda rasmiga ah ee hoteelka oo safaaraduhu ku aqbalaan fiisaha',
        'Quraac bilaash ah iyo fursado qolka laguu weyneeyo',
        'Xiriir toos ah oo lala leeyahay hoteellada waaweyn sida Marriott, Hilton, Accor',
        'Qolal qoys oo isku xiran iyo qolal VIP ah'
      ],
      ar: [
        'قسائم حجز فندقي رسمية ومؤكدة معتمدة لدى جميع السفارات',
        'إفطار مجاني وإمكانية ترقية الغرف',
        'شراكات مباشرة مع كبرى السلاسل الفندقية العالمية (ماريوت، هيلتون، أكور)',
        'غرف عائلية متصلة وأجنحة ملكية وتنفيذية فاخرة'
      ]
    },
    requiredDocuments: {
      en: [
        'Guest Full Names as appearing on Passports',
        'Check-in and Check-out dates',
        'Room type preference (Single, Double, Twin, Suite)',
        'Number of adults and children ages'
      ],
      so: [
        'Magacyada martida sida baasaboorka ku qoran',
        'Taariikhda gelitaanka iyo bixitaanka hoteelka',
        'Nooca qolka aad rabto (Keli, Laba qof, Qoys)',
        'Tirada dadka waaweyn iyo carruurta'
      ],
      ar: [
        'أسماء النزلاء مطابقة لجوازات السفر',
        'تواريخ تسجيل الدخول والخروج',
        'نوع الغرفة المفضلة (مفردة، مزدوجة، جناح عائلي)',
        'عدد البالغين وأعمار الأطفال المرافقين'
      ]
    },
    processingTime: {
      en: 'Instant confirmation voucher within 1-2 hours',
      so: 'Xaqiijinta hoteelka oo ku baxaysa 1-2 saac gudahood',
      ar: 'إصدار قسيمة الحجز الفندقي المؤكدة خلال 1-2 ساعة',
    },
    faqs: []
  },
  {
    id: 'holiday-tour-packages',
    slug: 'holiday-packages',
    category: 'holiday',
    popular: true,
    icon: 'Palmtree',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'Luxury Holiday & Bespoke Tour Packages',
      so: 'Xirmooyinka Dalxiiska & Fasaxa Qoyska (Tour Packages)',
      ar: 'باقات العطلات السياحية والجولات المخصصة',
    },
    shortDescription: {
      en: 'All-inclusive tailor-made holidays to Dubai, Turkey (Istanbul & Antalya), Kenya Safari, Egypt Pyramids, Malaysia, and Zanzibar.',
      so: 'Dalxiis dhammaystiran oo loo aadayo Dubai, Turkiga (Istanbul & Antalya), Safariga Kenya, Ahraamta Masar, Malaysia iyo Zanzibar.',
      ar: 'باقات عطلات متكاملة إلى دبي، تركيا (إسطنبول وأنطاليا)، سفاري كينيا، أهرامات مصر، ماليزيا، وزنجبار.',
    },
    fullDescription: {
      en: 'Take the hassle out of vacation planning. Our comprehensive holiday packages bundle flights, luxury hotels, city sightseeing tours, adventure excursions, private airport transfers, and expert local tour guides.',
      so: 'U fasax qaado adigoo wax dhib ah arag. Xirmooyinkayada dalxiiska waxaa ku jira tigidhka diyaaradda, hoteelka, dalxiiska magaalada, gaadiidka gaarka ah, iyo hagaha dalxiiska oo ku hadlaya luuqaddaada.',
      ar: 'استمتع بعطلة لا تُنسى دون عناء التخطيط. تشمل باقاتنا تذاكر الطيران، الإقامة الفندقية الفاخرة، الجولات السياحية اليومية، التنقلات الخاصة، ومرشدين سياحيين محترفين.',
    },
    benefits: {
      en: [
        'Complete end-to-end itinerary planning with private chauffeur',
        'Customized packages for honeymoons, families, and friend groups',
        'Guided museum, safari, and desert camp excursions included',
        'Multilingual on-ground support in every destination'
      ],
      so: [
        'Qorshe safar oo dhammeystiran oo leh darawal gaar ah',
        'Xirmooyin u gaar ah aroosyada (Honeymoon) iyo qoysaska',
        'Booqashada matxafyada, keymaha xayawaanka (Safari) iyo goobaha caanka ah',
        'Caawimaad joogto ah oo ku sugan waddanka aad ku dalxiiseyso'
      ],
      ar: [
        'برامج سياحية متكاملة مع سيارات خاصة وسائقين معتمدين',
        'باقات مميزة لشهر العسل، العائلات والمجموعات السياحية',
        'جولات إرشادية للمتاحف والرحلات البحرية والسفاري',
        'دعم وإشراف ميداني متواصل طوال فترة الرحلة'
      ]
    },
    requiredDocuments: {
      en: [
        'Passport copies of all travelers',
        'Target holiday dates and duration of stay',
        'Preferred destination and activities interest (Beach, Safari, Shopping, Culture)'
      ],
      so: [
        'Nuqullada baasaboorka dadka safarka ku jira oo dhan',
        'Waqtiga aad doonayso inaad baxdo iyo inta maalmood ee aad joogeyso',
        'Magaalada aad rabto iyo waxyaabaha aad xiiseyneyso (Xeeb, Safari, Dukaameysi)'
      ],
      ar: [
        'نسخ جوازات السفر لجميع المسافرين',
        'تواريخ العطلة ومدة الإقامة المفضلة',
        'الوجهة والأنشطة المرغوبة (شواطئ، سفاري، تسوق، ثقافة)'
      ]
    },
    processingTime: {
      en: 'Customized itinerary designed and quoted within 24 hours',
      so: 'Diyaarinta qorshaha dalxiiska 24 saac gudahood',
      ar: 'تصميم وتقديم خطة الرحلة المخصصة خلال 24 ساعة',
    },
    faqs: []
  },
  {
    id: 'airport-transfers-car-rental',
    slug: 'transfers-car-rental',
    category: 'transfer',
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'Airport Transfers & Luxury Car Rentals',
      so: 'Qaadista Garoonka & Kirada Baabuurta Raaxada',
      ar: 'خدمات التوصيل من وإلى المطار وتأجير السيارات الفاخرة',
    },
    shortDescription: {
      en: 'Punctual airport pickup & drop-off services, chauffeur-driven luxury sedans, VIP SUVs, and commercial vehicle rentals.',
      so: 'Soo dhaweynta iyo geynta garoomada diyaaradaha, gawaarida raaxada ee VIP-da ah iyo kirada baabuurta oo wadata darawal.',
      ar: 'استقبال وتوديع احترافي بالمطارات، وسيارات فاخرة مع سائق خاص، وسيارات دفع رباعي VIP.',
    },
    fullDescription: {
      en: 'Arrive in comfort without waiting in taxi queues. We provide reliable meet-and-greet airport transfer services across Mogadishu, Nairobi, Dubai, Istanbul, Cairo, Jeddah, and major global hubs with professional licensed chauffeurs and modern fleets.',
      so: 'Ha ku daalin safafka tagaasida. Balcad Travel waxay kuu diyaarineysaa soo dhaweyn sharaf leh oo garoonka ah oo ay ku jirto sididda boorsooyinka iyo gawaari raaxo leh oo ku geynaya meesha aad rabto.',
      ar: 'تمتع بأقصى درجات الراحة بمجرد وصولك المطار. نوفر خدمة الاستقبال بالاسم والمساعدة في نقل الحقائب بسيارات حديثة وسائقين محترفين في مقديشو، نيروبي، دبي، إسطنبول، وجدة.',
    },
    benefits: {
      en: [
        'Personalized Meet & Greet sign at airport arrival terminal',
        'Flight monitoring for delays with zero waiting surcharge',
        'Executive luxury Mercedes, Lexus, Land Cruiser, and VIP vans',
        'English, Somali, and Arabic speaking vetted drivers'
      ],
      so: [
        'Qof magacaaga ku sita boor oo kugu sugaya albaabka garoonka',
        'La socodka duulimaadka haddii uu soo daaho iyadoo aan lacag dheeraad ah lagaa qaadayn',
        'Gawaarida ugu casrisan sida Mercedes, Lexus, Land Cruiser iyo Basaska VIP-da',
        'Darawallo asluub leh oo ku hadla Soomaali, Ingiriis iyo Carabi'
      ],
      ar: [
        'استقبال شخصي بالاسم عند بوابة الوصول بالمطار',
        'متابعة مواعيد الرحلات تلقائياً دون أي رسوم انتظار إضافية عند التأخير',
        'أسطول سيارات حديث يشمل مرسيدس، لاندكروزر وفانات VIP الفاخرة',
        'سائقون محترفون يتحدثون العربية والصومالية والإنجليزية'
      ]
    },
    requiredDocuments: {
      en: [
        'Arrival / Departure flight number & airline',
        'Landing date and scheduled time',
        'Destination hotel or address',
        'Number of passengers and luggage count'
      ],
      so: [
        'Lambarka duulimaadka iyo magaca diyaaradda',
        'Taariikhda iyo saacadda aad soo dageyso',
        'Hoteelka ama goobta aad ku socoto',
        'Tirada dadka iyo inta boorso ee la socota'
      ],
      ar: [
        'رقم رحلة الطيران وشركة الخطوط الجوية',
        'تاريخ ووقت الهبوط المحدد',
        'عنوان الفندق أو الوجهة النهائية',
        'عدد الركاب وعدد الحقائب'
      ]
    },
    processingTime: {
      en: 'Guaranteed booking confirmation within 1 hour',
      so: 'Xaqiijinta ballanta 1 saac gudahood',
      ar: 'تأكيد الحجز الفوري خلال ساعة واحدة',
    },
    faqs: []
  },
  {
    id: 'cargo-logistics-services',
    slug: 'cargo-services',
    category: 'cargo',
    icon: 'Package',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'Air Cargo & Freight Forwarding Services',
      so: 'Adeegga Xamuulka Diyaaradaha (Air Cargo)',
      ar: 'خدمات الشحن الجوي السريع واللوجستيات',
    },
    shortDescription: {
      en: 'Secure, swift air cargo logistics connecting Somalia with Dubai, Turkey, China, India, Kenya, and global trade corridors.',
      so: 'Xamuulka diyaaradaha ee isku xira Soomaaliya iyo Dubai, Turkiga, Shiinaha, Hindiya, Kenya iyo caalamka oo dhan.',
      ar: 'خدمات شحن جوي آمنة وسريعة تربط الصومال بدبي، تركيا، الصين، الهند، كينيا والأسواق العالمية.',
    },
    fullDescription: {
      en: 'Balcad Travel Agency provides air cargo, commercial parcel forwarding, express document shipping, and excess baggage handling. We assist with customs clearance, warehousing, and door-to-door delivery.',
      so: 'Waxaan bixinnaa xamuulka xawaaraha dheereeya ee ganacsiga, diridda dukumeentiyada degdegga ah, qaadista alaabaha culayska dheeraadka ah iyo fududeynta canshuuraha kastamka.',
      ar: 'نقدم خدمات الشحن الجوي التجاري، شحن الطرود والوثائق السريعة، وتسهيل إجراءات التخليص الجمركي والتوصيل من الباب إلى الباب.',
    },
    benefits: {
      en: [
        'Weekly scheduled air freight from Dubai, Istanbul, and Guangzhou to Mogadishu',
        'Customs clearance support and documentation assistance',
        'Express handling for urgent medical supplies and legal documents',
        'Real-time cargo shipment tracking'
      ],
      so: [
        'Duulimaadyo toddobaadle ah oo xamuul ka keena Dubai, Istanbul, Guangzhou ilaa Muqdisho',
        'Caawinta kastamka iyo sharciyeynta dukumeentiyada',
        'Diridda degdegga ah ee daawooyinka iyo dukumeentiyada sharciga ah',
        'La socodka xamuulkaaga meesha uu marayo'
      ],
      ar: [
        'رحلات شحن جوي أسبوعية منتظمة من دبي وإسطنبول وقوانغتشو إلى مقديشو',
        'مساعدة كاملة في التخليص الجمركي والأوراق الرسمية',
        'شحن عاجل للمستلزمات الطبية والوثائق القانونية',
        'تتبع دقيق لشحنات البضائع عبر النظام'
      ]
    },
    requiredDocuments: {
      en: [
        'Shipper and Receiver contact info & ID/Passport',
        'Itemized commercial invoice or packing list',
        'Estimated weight and volume dimensions'
      ],
      so: [
        'Xogta qofka diraya iyo qofka qaadaya (Aqoonsi/Baasaboor)',
        'Liiska alaabta iyo caddeynta qiimaha',
        'Miisaanka iyo cabbirka xamuulka'
      ],
      ar: [
        'بيانات المرسل والمستلم مع نسخ الهوية أو الجواز',
        'الفاتورة التجارية أو قائمة محتويات الشحنة',
        'الوزن التقديري وأبعاد الطرود'
      ]
    },
    processingTime: {
      en: 'Air Express: 3 - 5 Business Days | Standard Cargo: 7 - 10 Days',
      so: 'Xamuulka Degdegga ah: 3 - 5 Maalmood | Xamuulka Caadiga ah: 7 - 10 Maalmood',
      ar: 'الشحن السريع: 3 - 5 أيام عمل | الشحن العادي: 7 - 10 أيام',
    },
    faqs: []
  },
  {
    id: 'corporate-travel-group-booking',
    slug: 'corporate-travel',
    category: 'corporate',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'Corporate Travel & Group Delegations',
      so: 'Safarrada Shirkadaha & Wufuudda Waaweyn',
      ar: 'سفريات الشركات والمجموعات والوفود الرسمية',
    },
    shortDescription: {
      en: 'End-to-end corporate travel management for NGOs, government delegations, institutions, and international business missions.',
      so: 'Maareynta safarrada shirkadaha, hay’adaha caalamiga ah (NGOs), wufuudda dowladda iyo jaamacadaha.',
      ar: 'إدارة متكاملة لسفريات الشركات، المنظمات الدولية (NGOs)، الوفود الرسمية، والمؤتمرات.',
    },
    fullDescription: {
      en: 'We partner with enterprises, humanitarian agencies, and governmental bodies to manage complex itineraries, block airline bookings, conference venue arrangements, and streamlined monthly expense invoicing.',
      so: 'Waxaan la shaqeynaa hay’adaha, shirkadaha ganacsiga iyo hay’adaha dawladda si aan ugu fududeyno kuraasta diyaaradaha ee tirada badan, hoteellada shirarka iyo nidaam maaliyadeed oo hufan.',
      ar: 'نوفر حلول سفر متقدمة للشركات والمنظمات الإنسانية تشمل حجوزات المقاعد الجماعية، قاعات الاجتماعات والمؤتمرات، وفواتير موحدة للمصروفات.',
    },
    benefits: {
      en: [
        'Dedicated Key Account Manager assigned to your institution',
        'Group discounts and flexible corporate booking terms',
        'Consolidated monthly travel reporting and analytics',
        '24/7 priority emergency evacuation and rescheduling assistance'
      ],
      so: [
        'Maamule gaar ah oo loo xilsaaray shirkaddaada ama hay’addaada',
        'Qiimo dhimis gaar ah oo safarka kooxaha ah',
        'Warbixino maaliyadeed oo bishiiba mar la soo saaro',
        'Caawimaad degdeg ah 24/7 xaalad kasta oo timaada'
      ],
      ar: [
        'مدير حسابات تنفيذي مخصص لمؤسستكم',
        'أسعار تفضيلية للمجموعات وسياسات حجز مرنة للشركات',
        'تقارير دورية تفصيلية لتحليلات ومصروفات السفر',
        'دعم طوارئ على مدار الساعة لإعادة الجدولة والإجلاء'
      ]
    },
    requiredDocuments: {
      en: [
        'Official institutional authorization letter',
        'Passenger manifest with passport details',
        'Event / Conference itinerary schedule'
      ],
      so: [
        'Warqadda rasmiga ah ee hay’adda ama shirkadda',
        'Liiska magacyada dadka safarka ku jira iyo baasaboorradooda',
        'Jadwalka shirka ama shaqada loo socdo'
      ],
      ar: [
        'خطاب تفويض رسمي من المؤسسة أو الشركة',
        'كشف بأسماء المسافرين مع بيانات جوازات السفر',
        'جدول أعمال المؤتمر أو الفعالية'
      ]
    },
    processingTime: {
      en: 'Corporate consultation and proposal generated within 4 hours',
      so: 'Diyaarinta qorshaha shirkadda 4 saac gudahood',
      ar: 'تقديم المقترح وخطة السفر المؤسسي خلال 4 ساعات',
    },
    faqs: []
  },
  {
    id: 'travel-insurance',
    slug: 'travel-insurance',
    category: 'visa',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85',
    title: {
      en: 'International Travel Insurance & Protection',
      so: 'Caymiska Safarka Caalamiga ah (Travel Insurance)',
      ar: 'التأمين الطبي الدولي وتأمين السفر الشامل',
    },
    shortDescription: {
      en: 'Embassy-approved comprehensive worldwide travel insurance covering emergency medical expenses, trip cancellations, and lost luggage.',
      so: 'Caymiska safarka ee ay safaaraduhu aqoonsan yihiin oo dabooshay caafimaadka degdegga ah, baabi’inta safarka iyo lumista boorsooyinka.',
      ar: 'وثائق تأمين سفر دولية معتمدة لدى جميع السفارات تغطي الطوارئ الطبية، إلغاء الرحلات، وفقدان الأمتعة.',
    },
    fullDescription: {
      en: 'Satisfy mandatory Schengen, UK, US, and Gulf visa insurance requirements with Balcad Travel. Our policies provide extensive coverage up to $100,000 USD for hospital emergencies, repatriation, and trip disruption.',
      so: 'U hel caymis buuxa oo waafaqsan shuruudaha fiisooyinka Yurub (Schengen), UK, USA iyo Khaliijka oo daboolaya ilaa $100,000 oo ah xaaladaha caafimaad iyo lumidda alaabta.',
      ar: 'احصل على وثيقة تأمين سفر مطابقة لمتطلبات سفارات الشنغن وأمريكا وبريطانيا، بتغطية تأمينية تصل إلى 100,000 دولار للطوارئ الطبية وعلاج الحالات المفاجئة.',
    },
    benefits: {
      en: [
        'Instant policy issuance accepted by all global embassies',
        'Emergency medical evacuation and hospitalization cover',
        'Baggage loss, theft, and flight delay compensation',
        'COVID-19 coverage included on standard policies'
      ],
      so: [
        'Soo saaris degdeg ah oo ay safaaraduhu ku aqbalayaan dalabkaaga',
        'Daboolidda qarashka isbitaalka iyo daawooyinka degdegga ah',
        'Magdhawga boorsooyinka luma ama diyaaradaha daaha',
        'Daboolidda xanuunnada faafa'
      ],
      ar: [
        'إصدار فوري للوثيقة معتمدة ومقبولة لدى جميع السفارات',
        'تغطية العلاج في المستشفيات والإخلاء الطبي في حالات الطوارئ',
        'تعويضات عن فقدان الأمتعة وتأخر الرحلات الجوية',
        'تغطية العلاج الخاصة بالأوبئة والأمراض الطارئة'
      ]
    },
    requiredDocuments: {
      en: [
        'Passport bio-page copy',
        'Travel destination and departure/return dates'
      ],
      so: [
        'Nuqul baasaboor',
        'Waddanka aad u socoto iyo taariikhda safarka'
      ],
      ar: [
        'نسخة من جواز السفر',
        'دولة الوجهة وتواريخ الذهاب والعودة'
      ]
    },
    processingTime: {
      en: 'Instant policy delivery within 30 minutes',
      so: 'Diyaarinta shahaadada caymiska 30 daqiiqo gudahood',
      ar: 'إصدار الوثيقة فورياً خلال 30 دقيقة',
    },
    faqs: []
  }
];

export const allDestinations = [
  'United Arab Emirates (Dubai / Abu Dhabi)',
  'Saudi Arabia (Makkah / Madinah / Riyadh)',
  'Turkey (Istanbul / Antalya / Ankara)',
  'Kenya (Nairobi / Mombasa)',
  'Egypt (Cairo / Alexandria / Sharm El Sheikh)',
  'Malaysia (Kuala Lumpur / Penang)',
  'United Kingdom (London / Manchester)',
  'Qatar (Doha)',
  'Oman (Muscat)',
  'Zanzibar & Tanzania',
  'Maldives',
  'Uganda (Kampala / Entebbe)',
  'Ethiopia (Addis Ababa)',
  'India (New Delhi / Mumbai / Chennai)',
  'European Schengen Zone',
  'United States of America',
  'Canada',
  'Somalia Domestic (Mogadishu, Hargeisa, Garowe, Kismayo, Baidoa)'
];
