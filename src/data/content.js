export const CONTENT = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      movingTypes: 'Moving Types',
      gallery: 'Gallery',
      areas: 'Areas We Serve',
      whyUs: 'Why Choose Us',
      howItWorks: 'How It Works',
      faq: 'FAQ',
      contact: 'Contact Us',
      getQuote: 'Get Free Quote',
      whatsapp: 'WhatsApp Us',
      callNow: 'Call Now',
      emergencyBadge: '24/7 Moving & Relocation Assistance Across All 7 Emirates',
    },
    hero: {
      tagline: 'UAE Premier Moving & Packing Specialist',
      title: 'Professional Movers & Packers Across the UAE',
      subtitle: 'Marwan Movers & Packers provides reliable home, villa, apartment, and office moving services across all Emirates. Safe handling, careful packing, and 24/7 dedicated support.',
      ctaQuote: 'Get a Free Quote',
      ctaWhatsApp: 'WhatsApp Us',
      trustBadges: [
        { label: '24/7 Availability', desc: 'Round the clock support' },
        { label: 'All UAE Coverage', desc: 'Dubai, Abu Dhabi & All Emirates' },
        { label: 'Professional Moving Team', desc: 'Trained & courteous staff' },
        { label: 'Safe & Reliable Moving', desc: 'Damage-free guaranteed care' },
      ],
      quickEstimate: {
        title: 'Quick Quote Request',
        fromPlaceholder: 'Moving From (e.g. Dubai Marina)',
        toPlaceholder: 'Moving To (e.g. Downtown / Abu Dhabi)',
        btnText: 'Start WhatsApp Quote',
      }
    },
    about: {
      badge: 'About Marwan Movers & Packers',
      title: 'Your Trusted Relocation Partner in the United Arab Emirates',
      p1: 'Marwan Movers & Packers provides professional, prompt, and hassle-free moving and packing solutions for residential and commercial customers across the UAE.',
      p2: 'Whether you are shifting a single studio apartment in Dubai, relocating a luxury villa in Abu Dhabi, or moving a commercial corporate office in Sharjah, our team is committed to safe handling, meticulous packing, and on-time delivery.',
      pillars: [
        { title: 'Professional Service', desc: 'Experienced movers trained in modern moving techniques and equipment.' },
        { title: 'Safe Handling', desc: 'Premium wrapping materials to protect fragile items, glassware, and electronics.' },
        { title: 'Reliable Moving', desc: 'Punctual arrival, dedicated moving trucks, and seamless coordination.' },
        { title: 'Careful Packing', desc: 'Specialized boxes, bubble wrap, stretch film, and blankets for every item.' },
        { title: 'Customer Satisfaction', desc: 'Clear communication, transparent service, and dedicated relocation support.' },
        { title: '24/7 Availability', desc: 'Flexible moving schedules day or night to match your busy lifestyle.' },
      ],
      quickCallout: 'Need an urgent move today? Our moving teams are stationed across the UAE and ready 24/7.'
    },
    services: {
      badge: 'Comprehensive Relocation',
      title: 'Our Professional Moving & Packing Services',
      subtitle: 'From delicate glassware packing to full corporate relocations, explore our complete range of specialized services.',
      ctaBtn: 'Request This Service',
      items: [
        {
          id: 'home-moving',
          title: 'Home Moving',
          desc: 'Complete household shifting solutions tailored for families, ensuring every room is packed, transported, and placed with maximum care.',
          category: 'residential',
          icon: 'Home'
        },
        {
          id: 'office-moving',
          title: 'Office Moving',
          desc: 'Efficient commercial office relocation minimizing downtime. We handle workstations, servers, documents, and conference setups seamlessly.',
          category: 'commercial',
          icon: 'Building2'
        },
        {
          id: 'villa-moving',
          title: 'Villa Moving',
          desc: 'High-capacity moving for large villas and compounds. Equipped with spacious closed trucks and experienced crews for multi-level homes.',
          category: 'residential',
          icon: 'Castle'
        },
        {
          id: 'apartment-moving',
          title: 'Apartment Moving',
          desc: 'Stress-free shifting for high-rise apartments, penthouses, and studios. Experienced with building security permits, elevators, and freight protocols.',
          category: 'residential',
          icon: 'Building'
        },
        {
          id: 'furniture-moving',
          title: 'Furniture Moving',
          desc: 'Safe transport for bulky sofas, luxury dining sets, wardrobes, and custom furniture with protective padding and tie-down straps.',
          category: 'specialized',
          icon: 'Armchair'
        },
        {
          id: 'packing-unpacking',
          title: 'Packing & Unpacking',
          desc: 'Complete packing service using durable corrugated boxes, bubble wrap, packing paper, and tape. We also unpack and organize at your new place.',
          category: 'specialized',
          icon: 'PackageCheck'
        },
        {
          id: 'loading-unloading',
          title: 'Loading & Unloading',
          desc: 'Heavy lifting done by trained professionals. Proper lifting gear, ramps, and trolley carts to safeguard both your belongings and property walls.',
          category: 'specialized',
          icon: 'Truck'
        },
        {
          id: 'local-moving',
          title: 'Local Moving',
          desc: 'Fast, same-day moving within your local neighborhood or community in Dubai, Sharjah, Abu Dhabi, or any city across the UAE.',
          category: 'residential',
          icon: 'MapPin'
        },
        {
          id: 'long-distance',
          title: 'Long-Distance Moving',
          desc: 'Inter-emirate relocation services across the UAE—such as Dubai to Abu Dhabi, Sharjah to Ras Al Khaimah, or Fujairah to Al Ain.',
          category: 'commercial',
          icon: 'Compass'
        },
        {
          id: 'commercial-relocation',
          title: 'Commercial Relocation',
          desc: 'Tailored relocations for retail shops, showrooms, clinics, warehouses, and corporate facilities with strict schedule adherence.',
          category: 'commercial',
          icon: 'Briefcase'
        },
        {
          id: 'residential-relocation',
          title: 'Residential Relocation',
          desc: 'End-to-end relocation management for tenants, homeowners, and expatriates arriving or moving within the UAE.',
          category: 'residential',
          icon: 'Key'
        },
        {
          id: 'furniture-assembly',
          title: 'Furniture Dismantling & Assembly',
          desc: 'Expert carpenters for dismantling beds, wardrobes, dining tables, and IKEA or custom furniture, and reassembling them perfectly in your new home.',
          category: 'specialized',
          icon: 'Wrench'
        },
      ]
    },
    movingTypes: {
      badge: 'Moving Categories',
      title: 'Specialized Moving For Every Requirement',
      subtitle: 'Every move is unique. We tailor our crew size, vehicle type, and packaging materials to your exact property type.',
      items: [
        {
          title: 'Apartment Moving',
          desc: 'Specialized teams accustomed to tower move-in permits, elevator reservations, and narrow corridor maneuvering.',
          highlights: ['Permit & Elevator Assistance', 'Cardboard & Plastic Wrap Protection', 'Fast Turnaround']
        },
        {
          title: 'Villa Moving',
          desc: 'Heavy-duty capacity for multi-bedroom villas, outdoor patio sets, garden furniture, and expansive master suites.',
          highlights: ['Large Fleet Closed Trucks', 'Multiple Dedicated Movers', 'Room-by-Room Organization']
        },
        {
          title: 'Home Relocation',
          desc: 'Comprehensive family home moving with careful attention to kitchenware, personal memories, toys, and appliances.',
          highlights: ['Delicate Dishware Packing', 'Appliance Disconnect & Protect', 'Wardrobe Box Delivery']
        },
        {
          title: 'Office Relocation',
          desc: 'Fast weekend or overnight moves designed to keep your business running without interrupting client operations.',
          highlights: ['IT & Monitor Padding', 'Color-coded Department Labeling', 'Document Confidentiality']
        },
        {
          title: 'Commercial Moving',
          desc: 'Full-scale logistics for corporate hubs, retail boutiques, storages, and commercial enterprises across the Emirates.',
          highlights: ['Flexible Night Moves', 'Asset Inventory Tracking', 'Heavy Equipment Handling']
        },
        {
          title: 'Furniture Moving',
          desc: 'Single item or whole-house furniture handling. Expert dismantling, bubble protection, and flawless reassembly.',
          highlights: ['Skilled Carpenters on Board', 'Velvet & Leather Furniture Care', 'No Scratches or Dents']
        },
      ]
    },
    gallery: {
      badge: 'Our Work & Fleet in Action',
      title: 'Real Relocations & Active Fleet Across UAE',
      subtitle: 'See our professional crew, heavy-duty trucks, and careful packing in action across Dubai, Abu Dhabi, Sharjah, and beyond.',
      filterAll: 'All Photos',
      filterResidential: 'Residential',
      filterVilla: 'Villa Relocations',
      filterCommercial: 'Commercial Fleet',
      filterPacking: 'Packing & Care',
      viewLarger: 'Click to enlarge',
      closeLightbox: 'Close',
      inquireBtn: 'Inquire on WhatsApp',
      verifiedBadge: '100% Genuine UAE Operations'
    },
    areas: {
      badge: 'Coverage Across UAE',
      title: 'Areas We Proudly Serve Across The UAE',
      subtitle: 'Marwan Movers & Packers operates 24/7 across all seven Emirates and major metropolitan districts.',
      coverageNotice: 'No matter where your home or office is located in the UAE, our dedicated fleet and moving specialists are just a phone call away.',
      emirates: [
        { name: 'Dubai', areas: 'Downtown, Marina, JBR, Palm Jumeirah, Business Bay, Arabian Ranches, JVC, Deira, Mirdif & more' },
        { name: 'Abu Dhabi', areas: 'Corniche, Al Reem Island, Yas Island, Khalifa City, Saadiyat, Al Khalidiyah & surroundings' },
        { name: 'Sharjah', areas: 'Al Majaz, Al Nahda, Al Taawun, Muwaileh, University City, Al Zahia & all communities' },
        { name: 'Ajman', areas: 'Al Nuaimiya, Al Rashidiya, Al Jurf, Corniche, Al Rawda, Emirates City & all sectors' },
        { name: 'Umm Al Quwain', areas: 'Old Town, Al Salama, Al Raas, Industrial Area, Al Ramlah & surrounding areas' },
        { name: 'Ras Al Khaimah', areas: 'Al Hamra Village, Mina Al Arab, Khuzam, Al Dhait, Dafan Al Khor & RAK regions' },
        { name: 'Fujairah', areas: 'Fujairah City, Dibba, Khor Fakkan border, Mirbah, Qidfa & coastal districts' },
        { name: 'Al Ain', areas: 'Al Jimi, Al Maqam, Zakher, Al Foah, Hili, Falaj Hazzaa & Eastern region communities' }
      ]
    },
    whyUs: {
      badge: 'The Marwan Advantage',
      title: 'Why Choose Marwan Movers & Packers?',
      subtitle: 'We focus on genuine professionalism, careful handling, and authentic customer care on every move.',
      items: [
        {
          title: '24/7 Availability',
          desc: 'Round-the-clock moving services and customer support to fit your schedule, including late evenings and weekends.',
          icon: 'Clock'
        },
        {
          title: 'All UAE Coverage',
          desc: 'Complete service across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ, and Al Ain with no location limits.',
          icon: 'Globe'
        },
        {
          title: 'Professional Movers',
          desc: 'Trained, respectful, and punctual moving crews who handle your belongings as if they were their own.',
          icon: 'Users'
        },
        {
          title: 'Careful Packing & Handling',
          desc: 'Multi-layer bubble wrap, heavy-duty cartons, stretch films, and corrugated rolls to prevent any transit damage.',
          icon: 'ShieldCheck'
        },
        {
          title: 'Safe Furniture Transportation',
          desc: 'Enclosed, carpeted, and secure moving trucks outfitted with tie-downs to ensure zero shifting during transit.',
          icon: 'Truck'
        },
        {
          title: 'Reliable Service',
          desc: 'Transparent communication, punctual arrival times, and dedicated supervisors overseeing the entire relocation.',
          icon: 'CheckCircle2'
        },
        {
          title: 'Residential & Commercial Moving',
          desc: 'Equal expertise in family homes, high-rise apartments, executive villas, and high-stakes office relocations.',
          icon: 'Building2'
        },
        {
          title: 'Easy WhatsApp Booking',
          desc: 'Quick photo and video estimates via WhatsApp for transparent and swift quote confirmation in minutes.',
          icon: 'MessageSquare'
        }
      ]
    },
    howItWorks: {
      badge: 'Simple 4-Step Process',
      title: 'How It Works',
      subtitle: 'Relocating your home or office in the UAE has never been this straightforward.',
      steps: [
        {
          num: '01',
          title: 'Contact Us',
          desc: 'Reach out via phone, WhatsApp (+971 50 717 1355), or our online quote form with your moving details.',
          icon: 'PhoneCall'
        },
        {
          num: '02',
          title: 'Get Your Moving Quote',
          desc: 'Receive a transparent, customized quote based on your inventory, moving size, and locations.',
          icon: 'FileText'
        },
        {
          num: '03',
          title: 'Schedule Your Move',
          desc: 'Choose your preferred date and convenient time slot. Our team prepares the packing materials and trucks.',
          icon: 'Calendar'
        },
        {
          num: '04',
          title: 'Move Safely & Easily',
          desc: 'Our experienced crew arrives punctually to dismantle, pack, transport, unpack, and assemble at your new location.',
          icon: 'Smile'
        }
      ]
    },
    ctaBanner: {
      title: 'Planning a Move in the UAE?',
      subtitle: 'Let Marwan Movers & Packers handle your move safely and professionally. We are available 24/7 across all Emirates.',
      btnQuote: 'Get a Free Quote',
      btnWhatsApp: 'WhatsApp Now',
      callText: 'Or call us immediately at',
    },
    faq: {
      badge: 'Got Questions?',
      title: 'Frequently Asked Questions',
      subtitle: 'Find clear answers to the most common questions regarding our moving and packing services in the UAE.',
      items: [
        {
          q: 'Do you provide moving services across the UAE?',
          a: 'Yes, Marwan Movers & Packers operates all over the United Arab Emirates. We serve Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah, and Al Ain, including both intra-city and inter-emirate moves.'
        },
        {
          q: 'Do you provide home and villa moving?',
          a: 'Absolutely. We specialize in both home moving and villa moving of all sizes, from studio apartments to multi-story villas. Our team brings appropriate closed trucks, skilled packers, and furniture carpenters.'
        },
        {
          q: 'Do you move office furniture?',
          a: 'Yes, we provide specialized commercial and office moving services. We safely relocate office desks, executive chairs, conference tables, computer hardware, filing cabinets, and office partitions with minimal business interruption.'
        },
        {
          q: 'Do you provide packing and unpacking?',
          a: 'Yes, we offer full packing and unpacking services. We provide high-quality packaging supplies including corrugated boxes, bubble wrap, shrink film, tape, and wardrobe cartons. At your new destination, we can unpack and place items as requested.'
        },
        {
          q: 'Do you provide furniture dismantling and assembly?',
          a: 'Yes. Our professional moving crew includes experienced carpenters who expertly dismantle beds, wardrobes, dining tables, modular cabinets, and shelving, and reassemble them securely in your new home.'
        },
        {
          q: 'Are your services available 24/7?',
          a: 'Yes, our services and customer support are available 24 hours a day, 7 days a week. We can accommodate late-night moves, early morning shifts, and weekend relocations to suit your schedule.'
        },
        {
          q: 'How can I request a moving quote?',
          a: 'You can request a moving quote by submitting our website contact form, calling us at +971 50 717 1355, or directly texting us on WhatsApp with photos or a list of items for an instant estimate.'
        },
        {
          q: 'How can I contact Marwan Movers & Packers?',
          a: 'You can contact us via WhatsApp or Phone at +971 50 717 1355, email us at Ubaidullah01999@gmail.com, or visit our location mapped on Google Maps in the UAE.'
        }
      ]
    },
    contact: {
      badge: 'Get In Touch',
      title: 'Request a Moving Quote or Contact Us',
      subtitle: 'Our relocation team is ready 24/7 to provide prompt assistance and instant moving quotations.',
      infoTitle: 'Company Information',
      phone: 'Phone & WhatsApp',
      email: 'Official Email',
      hours: 'Working Hours',
      hoursVal: '24 Hours / 7 Days a Week',
      coverage: 'Service Area',
      coverageVal: 'All Over UAE (All 7 Emirates)',
      formTitle: 'Request a Free Moving Quote',
      formDesc: 'Fill out your moving details below for an instant response or WhatsApp dispatch.',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g. Ahmed Al Mansoori',
      phoneLabel: 'Phone Number (with WhatsApp)',
      phonePlaceholder: 'e.g. +971 50 123 4567',
      fromLabel: 'Moving From (City / Area)',
      fromPlaceholder: 'e.g. Dubai Marina, Dubai',
      toLabel: 'Moving To (City / Area)',
      toPlaceholder: 'e.g. Al Reem Island, Abu Dhabi',
      typeLabel: 'Moving Type',
      typePlaceholder: 'Select your property type',
      types: [
        'Apartment Moving',
        'Villa Moving',
        'Home Relocation',
        'Office Relocation',
        'Commercial Moving',
        'Furniture Moving Only',
        'Packing & Unpacking Only'
      ],
      dateLabel: 'Preferred Moving Date',
      messageLabel: 'Additional Details / List of Items',
      messagePlaceholder: 'Please mention number of bedrooms, large furniture items, floor levels, elevator availability, etc.',
      submitBtn: 'Submit Quote Request',
      whatsappBtn: 'Send Details via WhatsApp',
      successMsg: 'Thank you! Your quote request has been received. Our team will contact you shortly.',
      whatsappNotice: 'Prefer an instant reply? Use "Send Details via WhatsApp" to chat immediately with our relocation manager.'
    },
    map: {
      badge: 'Our UAE Location',
      title: 'Visit Us or Find Our Service Hub',
      subtitle: 'Conveniently situated to serve customers across Dubai, Sharjah, and all neighboring Emirates.',
      getDirections: 'Get Directions on Google Maps',
      serviceRadius: 'Operating Fleet Available Across All UAE 24/7'
    },
    footer: {
      desc: 'Marwan Movers & Packers is a premier relocation and packing service provider in the United Arab Emirates. Providing safe, reliable, and 24/7 residential and commercial moving solutions across all 7 Emirates.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Our Services',
      areasTitle: 'UAE Service Areas',
      contactTitle: 'Contact Us',
      copyright: 'All Rights Reserved. Marwan Movers & Packers.',
      disclaimer: 'Professional moving & packing solutions across the United Arab Emirates.'
    },
    floating: {
      whatsappTooltip: 'Chat on WhatsApp',
      callTooltip: 'Call +971 50 717 1355',
      whatsappDirect: 'WhatsApp Us 24/7',
      callDirect: 'Call Us Now'
    }
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      movingTypes: 'أنواع النقل',
      gallery: 'معرض الأعمال',
      areas: 'المناطق التي نخدمها',
      whyUs: 'لماذا تختارنا',
      howItWorks: 'كيف نعمل',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      getQuote: 'طلب عرض أسعار مجاني',
      whatsapp: 'تواصل عبر واتساب',
      callNow: 'اتصل الآن',
      emergencyBadge: 'خدمات نقل وتغليف على مدار 24/7 في كافة أنحاء الإمارات السبع',
    },
    hero: {
      tagline: 'رواد نقل وتغليف الأثاث في دولة الإمارات',
      title: 'خدمات نقل وتغليف احترافية في جميع أنحاء الإمارات',
      subtitle: 'تقدم شركة مروان لنقل وتغليف الأثاث خدمات موثوقة لنقل المنازل، الفلل، الشقق، والمكاتب في كافة إمارات الدولة. عناية تامة، تغليف متقن، ودعم متواصل على مدار 24/7.',
      ctaQuote: 'احصل على عرض سعر مجاني',
      ctaWhatsApp: 'تواصل عبر واتساب',
      trustBadges: [
        { label: 'خدمة 24/7', desc: 'متاحون على مدار الساعة طوال الأسبوع' },
        { label: 'تغطية شاملة للإمارات', desc: 'دبي، أبوظبي، الشارقة وجميع الإمارات' },
        { label: 'فريق نقل محترف', desc: 'عمال وفنيون مدربون وذوو خبرة' },
        { label: 'نقل آمن وموثوق', desc: 'حماية كاملة وسلامة تامة للمقتنيات' },
      ],
      quickEstimate: {
        title: 'طلب عرض سعر سريع',
        fromPlaceholder: 'الانتقال من (مثال: دبي مارينا)',
        toPlaceholder: 'الانتقال إلى (مثال: أبوظبي / الشارقة)',
        btnText: 'طلب السعر عبر واتساب',
      }
    },
    about: {
      badge: 'عن شركة مروان لنقل الأثاث',
      title: 'شريكك الموثوق لنقل وترحيل الأثاث في الإمارات العربية المتحدة',
      p1: 'توفر شركة مروان لنقل وتغليف الأثاث حلول نقل وتغليف احترافية وسلسة للعملاء من الأفراد والشركات في كافة إمارات الدولة.',
      p2: 'سواء كنت تنتقل من استوديو صغير في دبي، أو فيلا فاخرة في أبوظبي، أو تنقل مقراً تجارياً في الشارقة، يلتزم فريقنا بأعلى معايير السلامة، والتغليف المحكم، والالتزام الدقيق بالمواعيد.',
      pillars: [
        { title: 'خدمة احترافية', desc: 'عمال وفنيون مدربون على أحدث أساليب النقل والتعامل مع مختلف المقتنيات.' },
        { title: 'مناولة آمنة', desc: 'استخدام مواد تغليف عالية الجودة لحماية القطع الحساسة، الزجاج، والأجهزة الإلكترونية.' },
        { title: 'نقل موثوق', desc: 'دقة في المواعيد، شاحنات مغلقة مجهزة، وتنسيق سلس لرحلة نقلك.' },
        { title: 'تغليف دقيق', desc: 'كراتين متينة، رول فقاعات هوائية، نايلون ستريتش، وبطانيات حماية مخصصة لكل قطعة.' },
        { title: 'رضا العملاء', desc: 'تواصل واضح، شفافية تامة في الأسعار، ومتابعة مستمرة حتى استقرارك.' },
        { title: 'جاهزية 24/7', desc: 'مرونة كاملة في المواعيد ليلاً ونهاراً لتناسب جدول أعمالك واحتياجاتك.' },
      ],
      quickCallout: 'هل تحتاج إلى نقل عاجل اليوم؟ فرقنا متواجدة في مختلف مناطق الإمارات وجاهزة لخدمتك على مدار الساعة.'
    },
    services: {
      badge: 'حلول نقل متكاملة',
      title: 'خدماتنا الاحترافية في النقل والتغليف',
      subtitle: 'من تغليف التحف والزجاجيات الدقيقة وحتى النقل المؤسسي الشامل، استكشف باقة خدماتنا المتكاملة.',
      ctaBtn: 'اطلب هذه الخدمة',
      items: [
        {
          id: 'home-moving',
          title: 'نقل المنازل',
          desc: 'حلول متكاملة لترحيل منازل العائلات، تغليف كل غرفة، النقل بعناية، وإعادة ترتيب الأثاث في مسكنك الجديد.',
          category: 'residential',
          icon: 'Home'
        },
        {
          id: 'office-moving',
          title: 'نقل المكاتب والشركات',
          desc: 'نقل سريع وفعال للمكاتب والشركات مع تقليل فترات التوقف. نقل محطات العمل، الخوادم، الملفات وقاعات الاجتماعات.',
          category: 'commercial',
          icon: 'Building2'
        },
        {
          id: 'villa-moving',
          title: 'نقل الفلل',
          desc: 'خدمات مخصصة للفلل الكبيرة والمجمعات السكنية باستخدام شاحنات مغلقة واسعة وفريق عمل متعدد التخصصات.',
          category: 'residential',
          icon: 'Castle'
        },
        {
          id: 'apartment-moving',
          title: 'نقل الشقق',
          desc: 'نقل سلس لشقق الأبراج السكنية والاستوديوهات، مع خبرة كاملة في تصاريح المباني واستخدام المصاعد ومسارات الخدمة.',
          category: 'residential',
          icon: 'Building'
        },
        {
          id: 'furniture-moving',
          title: 'نقل الأثاث',
          desc: 'نقل آمن للأطقم والكنب وطاولات الطعام وغرف النوم والخزائن الكبيرة باستخدام أحزمة التثبيت ومواد التبطين.',
          category: 'specialized',
          icon: 'Armchair'
        },
        {
          id: 'packing-unpacking',
          title: 'التغليف وفك التغليف',
          desc: 'تغليف متقن بكراتين قوية، بلاستيك فقاعي، ورق حماية وأشرطة لاصقة، مع خدمة تفريغ الكراتين وترتيب الأغراض.',
          category: 'specialized',
          icon: 'PackageCheck'
        },
        {
          id: 'loading-unloading',
          title: 'التحميل والتنزيل',
          desc: 'رفع ونقل الأوزان الثقيلة بواسطة عمالة مدربة ومعدات رفع وعربات مخصصة تحمي جدران وأرضيات المباني.',
          category: 'specialized',
          icon: 'Truck'
        },
        {
          id: 'local-moving',
          title: 'النقل المحلي',
          desc: 'خدمة نقل سريعة في نفس اليوم داخل نفس المدينة أو الحي في دبي أو الشارقة أو أبوظبي وسائر الإمارات.',
          category: 'residential',
          icon: 'MapPin'
        },
        {
          id: 'long-distance',
          title: 'النقل بين الإمارات',
          desc: 'نقل لمسافات طويلة بين مختلف إمارات الدولة، مثل الانتقال من دبي إلى أبوظبي أو الشارقة إلى رأس الخيمة والفجيرة والعين.',
          category: 'commercial',
          icon: 'Compass'
        },
        {
          id: 'commercial-relocation',
          title: 'النقل التجاري',
          desc: 'خدمات لوجستية مخصصة للمحلات التجارية، المعارض، المستودعات، والعيادات مع التزام صارم بالجدول الزمني.',
          category: 'commercial',
          icon: 'Briefcase'
        },
        {
          id: 'residential-relocation',
          title: 'النقل السكني الشامل',
          desc: 'إدارة متكاملة لترحيل المنازل للمواطنين والمقيمين الجدد والمنتقلين داخل دولة الإمارات من البداية للنهاية.',
          category: 'residential',
          icon: 'Key'
        },
        {
          id: 'furniture-assembly',
          title: 'فك وتركيب الأثاث',
          desc: 'نجارون محترفون لفك وتركيب غرف النوم، الخزائن، طاولات السفرة، أثاث ايكيا، والأثاث المودرن بكل دقة وإتقان.',
          category: 'specialized',
          icon: 'Wrench'
        },
      ]
    },
    movingTypes: {
      badge: 'فئات النقل',
      title: 'حلول مخصصة لكل نوع عقار',
      subtitle: 'كل عملية نقل لها خصوصيتها. نوفر حجم الشاحنة المناسب وعدد العمال ومواد التغليف وفقاً لنوع مسكنك أو مكتبك.',
      items: [
        {
          title: 'نقل الشقق السكنية',
          desc: 'فرق متمرسة في التعامل مع متطلبات الأبراج السكنية، حجز المصاعد، وتصاريح الدخول والتفريغ.',
          highlights: ['مساعدة في تصاريح المباني', 'حماية الممرات والمصاعد', 'إنجاز سريع ومنظم']
        },
        {
          title: 'نقل الفلل الفاخرة',
          desc: 'طاقة استيعابية عالية تناسب الفلل متعددة الطوابق، أثاث الحدائق، ومحتويات الغرف الواسعة.',
          highlights: ['أسطول شاحنات مغلقة كبيرة', 'طاقم عمل مخصص ومكثف', 'تنظيم غرفة بغرفة']
        },
        {
          title: 'نقل المنازل العائلية',
          desc: 'نقل شامل لمنازل العائلات مع عناية قصوى بأدوات المطبخ، الذكريات الثمينة، ألعاب الأطفال والأجهزة.',
          highlights: ['تغليف الأواني والزجاج بعناية', 'فصل وحماية الأجهزة الكهربائية', 'صناديق مخصصة للملابس']
        },
        {
          title: 'نقل المكاتب والشركات',
          desc: 'خدمات نقل مرنة خلال عطلة نهاية الأسبوع أو الفترات المسائية لضمان استمرار أعمال شركتك دون انقطاع.',
          highlights: ['تغليف أجهزة الكمبيوتر والشاشات', 'ترميز كود الألوان لكل قسم', 'سرية وأمان الملفات']
        },
        {
          title: 'النقل التجاري والمستودعات',
          desc: 'خدمات لوجستية للمعارض والمتاجر ومستودعات التخزين في جميع المناطق الصناعية والتجارية بالإمارات.',
          highlights: ['مرونة العمل ليلاً', 'جرد وترقيم الأصول', 'معدات مناولة متقدمة']
        },
        {
          title: 'نقل وتفكيك قطع الأثاث',
          desc: 'نقل قطع الأثاث الفردية أو أطقم الصالونات مع نجارين متخصصين في الفك والتركيب والتغليف الفقاعي.',
          highlights: ['نجارون ماهرون مرافقون للرحلة', 'حماية الأثاث الجلدي والمخمل', 'ضمان ضد الخدش والكسر']
        },
      ]
    },
    gallery: {
      badge: 'أسطولنا وفريقنا في الميدان',
      title: 'معرض أعمال النقل والأسطول المجهز في الإمارات',
      subtitle: 'شاهد فريقنا المحترف وشاحناتنا المجهزة ومواد التغليف الفاخرة أثناء تنفيذ عمليات النقل في دبي وأبوظبي والشارقة وكافة الإمارات.',
      filterAll: 'جميع الصور',
      filterResidential: 'نقل سكني وسريع',
      filterVilla: 'نقل الفلل الفاخرة',
      filterCommercial: 'الأسطول التجاري',
      filterPacking: 'التغليف وحماية الزجاجيات',
      viewLarger: 'انقر لتكبير الصورة',
      closeLightbox: 'إغلاق',
      inquireBtn: 'استفسر عبر واتساب',
      verifiedBadge: 'عمليات حقيقية وموثقة في الإمارات'
    },
    areas: {
      badge: 'تغطية شاملة للإمارات',
      title: 'المناطق والإمارات التي نخدمها',
      subtitle: 'تعمل شركة مروان لنقل وتغليف الأثاث على مدار الساعة في جميع الإمارات السبع والمناطق الحيوية.',
      coverageNotice: 'أينما كان موقع منزلك أو مكتبك في دولة الإمارات، فإن شاحناتنا وفريقنا المتخصص على بعد اتصال واحد فقط.',
      emirates: [
        { name: 'دبي', areas: 'داون تاون، دبي مارينا، نخلة جميرا، الخليج التجاري، المرابع العربية، قرية جميرا الدائرية، ديرة، مردف وكافة المناطق' },
        { name: 'أبوظبي', areas: 'الكورنيش، جزيرة الريم، جزيرة ياس، مدينة خليفة، جزيرة السعديات، الخالدية، محمد بن زايد وضواحيها' },
        { name: 'الشارقة', areas: 'المجاز، النهدة، التعاون، مويلح، المدينة الجامعية، الزاهية، الخان وجميع الأحياء السكنية' },
        { name: 'عجمان', areas: 'النعيمية، الراشدية، الجرف، الكورنيش، الروضة، مدينة الإمارات ومختلف قطاعات عجمان' },
        { name: 'أم القيوين', areas: 'المدينة القديمة، السلامة، الرأس، المنطقة الصناعية، الرملة والمناطق المجاورة' },
        { name: 'رأس الخيمة', areas: 'قرية الحمراء، ميناء العرب، خزام، الظيت، دفن الخور وكافة مناطق الإمارة' },
        { name: 'الفجيرة', areas: 'مدينة الفجيرة، دبا، خورفكان، مربح، قدفع وسائر المناطق الساحلية' },
        { name: 'العين', areas: 'الجيمي، المقام، زاخر، الفوعة، هيلي، فلج هزاع وجميع مناطق المنطقة الشرقية' }
      ]
    },
    whyUs: {
      badge: 'مميزات شركة مروان',
      title: 'لماذا يختار العملاء مروان لنقل الأثاث؟',
      subtitle: 'نركز على المهنية الحقيقية، والحرص البالغ على ممتلكاتك، وتقديم خدمة راقية في كل مرحلة.',
      items: [
        {
          title: 'خدمة متاحة 24/7',
          desc: 'خدمات نقل ودعم عملاء على مدار الساعة طوال أيام الأسبوع لتناسب أوقاتك بما في ذلك العطلات وساعات المساء.',
          icon: 'Clock'
        },
        {
          title: 'تغطية جميع إمارات الدولة',
          desc: 'خدماتنا تغطي دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، أم القيوين، ومدينة العين دون أي استثناء.',
          icon: 'Globe'
        },
        {
          title: 'فريق عمالة وفنيين محترفين',
          desc: 'طاقم عمل مدرب، مهذب، وملتزم بالمواعيد يتعامل مع مقتنياتك وممتلكاتك بمنتهى الحرص والأمانة.',
          icon: 'Users'
        },
        {
          title: 'تغليف متقن ومواد عالية الجودة',
          desc: 'استخدام أحدث مواد التغليف من رول الفقاعات، الكراتين المضلعة، البلاستيك الحراري لحماية الأغراض من أي تلف.',
          icon: 'ShieldCheck'
        },
        {
          title: 'نقل آمن بشاحنات مغلقة',
          desc: 'شاحنات نقل مغلقة ونظيفة ومبطنة ومزودة بأحزمة تثبيت لمنع اهتزاز أو تحرك الأثاث أثناء الطريق.',
          icon: 'Truck'
        },
        {
          title: 'خدمة موثوقة والتزام تام',
          desc: 'شفافية كاملة في التعامل، دقة متناهية في مواعيد الوصول، ومشرف مسؤول يتابع تفاصيل النقل خطوة بخطوة.',
          icon: 'CheckCircle2'
        },
        {
          title: 'خبرة في النقل السكني والتجاري',
          desc: 'كفاءة متساوية في نقل منازل العائلات، الشقق السكنية، الفلل الفاخرة، ومكاتب ومستودعات الشركات.',
          icon: 'Building2'
        },
        {
          title: 'حجز واستفسار سريع عبر واتساب',
          desc: 'أرسل صور أو مقاطع فيديو لمقتنياتك عبر واتساب لتحصل على تقييم فوري وعرض سعر شفاف خلال دقائق.',
          icon: 'MessageSquare'
        }
      ]
    },
    howItWorks: {
      badge: 'خطوات بسيطة وواضحة',
      title: 'كيف تتم عملية النقل؟',
      subtitle: 'الانتقال إلى منزلك أو مكتبك الجديد في الإمارات أصبح في غاية السهولة واليسر.',
      steps: [
        {
          num: '01',
          title: 'تواصل معنا',
          desc: 'تواصل عبر الهاتف أو واتساب (+971 50 717 1355) أو املأ نموذج الموقع بتفاصيل نقلك.',
          icon: 'PhoneCall'
        },
        {
          num: '02',
          title: 'احصل على عرض السعر',
          desc: 'نقدم لك عرض سعر فوري ومفصل بناءً على حجم الأثاث والموقع والخدمات المطلوبة.',
          icon: 'FileText'
        },
        {
          num: '03',
          title: 'حدد الموعد المناسب',
          desc: 'اختر التاريخ والوقت المناسبين لك، ونقوم بتجهيز الشاحنات ومواد التغليف المناسبة.',
          icon: 'Calendar'
        },
        {
          num: '04',
          title: 'انتقل بكل راحة وأمان',
          desc: 'يصل فريقنا في الموعد تماماً للفك والتغليف والتحميل والنقل وإعادة التركيب في مكانك الجديد.',
          icon: 'Smile'
        }
      ]
    },
    ctaBanner: {
      title: 'هل تخطط للانتقال داخل الإمارات؟',
      subtitle: 'دع شركة مروان لنقل وتغليف الأثاث تتولى نقلك بكل أمان واحترافية. متواجدون لخدمتك 24/7 في كل الإمارات.',
      btnQuote: 'احصل على عرض سعر مجاني',
      btnWhatsApp: 'تواصل عبر واتساب الآن',
      callText: 'أو اتصل بنا مباشرة على الرقم',
    },
    faq: {
      badge: 'لديك استفسارات؟',
      title: 'الأسئلة الأكثر شيوعاً',
      subtitle: 'إجابات واضحة ومباشرة لأهم الأسئلة المتعلقة بخدمات النقل والتغليف في دولة الإمارات.',
      items: [
        {
          q: 'هل تقدمون خدمات النقل في جميع أنحاء الإمارات؟',
          a: 'نعم، تقدم شركة مروان لنقل وتغليف الأثاث خدماتها في كافة أنحاء دولة الإمارات العربية المتحدة: دبي، أبوظبي، الشارقة، عجمان، أم القيوين، رأس الخيمة، الفجيرة، والعين، سواء للنقل الداخلي أو بين الإمارات.'
        },
        {
          q: 'هل توفرون نقل المنازل والفلل؟',
          a: 'بالتأكيد، نحن متخصصون في نقل المنازل والفلل بمختلف المساحات من الشقق السكنية الصغيرة وحتى الفلل الكبيرة والقصور، مع توفير سيارات مغلقة وفريق عمل متكامل ونجارين محترفين.'
        },
        {
          q: 'هل تقومون بنقل أثاث المكاتب والشركات؟',
          a: 'نعم، نقدم خدمات متخصصة لنقل المكاتب والشركات، ونقل المكاتب التنفيذية، الكراسي، طاولات الاجتماعات، أجهزة الحاسوب، الخزائن والملفات مع ضمان عدم تعطيل سير العمل.'
        },
        {
          q: 'هل توفرون خدمات التغليف وفك التغليف؟',
          a: 'نعم، نوفر خدمة تغليف شاملة باستخدام خامات عالية الجودة من كراتين متينة، رول فقاعات هوائية، نايلون ستريتش، وأكياس مخصصة للفرش. كما نقوم بفك التغليف وترتيب الأغراض في موقعك الجديد.'
        },
        {
          q: 'هل توفرون فك وتركيب الأثاث؟',
          a: 'نعم، يضم فريقنا نجارين متخصصين لفك وتركيب غرف النوم، الخزائن، طاولات الطعام، أثاث ايكيا، والمكتبات، وإعادة تركيبها وتثبيتها بدقة واحترافية.'
        },
        {
          q: 'هل خدماتكم متاحة على مدار 24/7؟',
          a: 'نعم، خدماتنا ودعم العملاء متاحان 24 ساعة يومياً طوال 7 أيام في الأسبوع. يمكننا تلبية طلبات النقل في الفترات الليلية أو الصباحية الباكرة وأيام العطلات الأسبوعية.'
        },
        {
          q: 'كيف يمكنني طلب عرض أسعار للنقل؟',
          a: 'يمكنك طلب عرض سعر بسهولة عبر تعبئة نموذج الموقع، أو الاتصال بالرقم 1355 717 50 971+، أو إرسال رسالة مباشرة عبر واتساب مع صور الأثاث لتحصل على تسعير فوري.'
        },
        {
          q: 'كيف يمكنني التواصل مع شركة مروان لنقل وتغليف الأثاث؟',
          a: 'يمكنك التواصل معنا عبر الهاتف أو واتساب على الرقم 1355 717 50 971+، أو مراسلتنا عبر البريد الإلكتروني Ubaidullah01999@gmail.com، أو زيارة موقعنا الموضح على خرائط جوجل.'
        }
      ]
    },
    contact: {
      badge: 'تواصل معنا',
      title: 'اطلب عرض سعر أو تواصل مع فريقنا',
      subtitle: 'فريقنا متاح 24/7 للرد الفوري على استفساراتكم وتقديم أفضل عروض أسعار النقل.',
      infoTitle: 'معلومات الشركة والتواصل',
      phone: 'الهاتف والواتساب',
      email: 'البريد الإلكتروني',
      hours: 'ساعات العمل',
      hoursVal: '24 ساعة / 7 أيام في الأسبوع',
      coverage: 'نطاق الخدمة',
      coverageVal: 'جميع أنحاء الإمارات (الإمارات السبع)',
      formTitle: 'طلب عرض سعر نقل مجاني',
      formDesc: 'املأ بيانات نقلك أدناه للحصول على رد سريع أو إرسال التفاصيل مباشرة عبر واتساب.',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'مثال: أحمد المنصوري',
      phoneLabel: 'رقم الهاتف (مع واتساب)',
      phonePlaceholder: 'مثال: 4567 123 50 971+',
      fromLabel: 'مكان الانتقال منه (المدينة / المنطقة)',
      fromPlaceholder: 'مثال: دبي مارينا، دبي',
      toLabel: 'مكان الانتقال إليه (المدينة / المنطقة)',
      toPlaceholder: 'مثال: جزيرة الريم، أبوظبي',
      typeLabel: 'نوع النقل المطلوب',
      typePlaceholder: 'اختر نوع العقار أو الخدمة',
      types: [
        'نقل شقة سكنية',
        'نقل فيلا',
        'نقل منزل عائلي',
        'نقل مكتب أو شركة',
        'نقل تجاري',
        'نقل أثاث فقط',
        'تغليف وفك تغليف فقط'
      ],
      dateLabel: 'تاريخ النقل المفضل',
      messageLabel: 'تفاصيل إضافية / قائمة المقتنيات',
      messagePlaceholder: 'يرجى ذكر عدد الغرف، قطع الأثاث الكبيرة، رقم الطابق، توفر المصعد، إلخ.',
      submitBtn: 'إرسال طلب عرض السعر',
      whatsappBtn: 'إرسال التفاصيل عبر واتساب',
      successMsg: 'شكراً لك! تم استلام طلبك بنجاح، وسيتواصل معك فريقنا خلال دقائق قليلة.',
      whatsappNotice: 'هل تفضل رداً فورياً؟ اضغط على "إرسال التفاصيل عبر واتساب" للمحادثة المباشرة مع مسؤول النقل.'
    },
    map: {
      badge: 'موقعنا في الإمارات',
      title: 'موقع مركز خدماتنا على الخريطة',
      subtitle: 'موقع استراتيجي يتيح لنا الوصول السريع لخدمة عملائنا في دبي والشارقة وكافة الإمارات.',
      getDirections: 'الحصول على الاتجاهات عبر خرائط جوجل',
      serviceRadius: 'أسطول شاحنات متاح لخدمتك في كافة الإمارات 24/7'
    },
    footer: {
      desc: 'شركة مروان لنقل وتغليف الأثاث هي خيارك الأول لنقل آمن وموثوق في دولة الإمارات العربية المتحدة. نقدم حلول النقل السكني والتجاري والتغليف الاحترافي على مدار 24/7 في كافة الإمارات السبع.',
      quickLinks: 'روابط سريعة',
      servicesTitle: 'خدماتنا',
      areasTitle: 'المناطق التي نخدمها',
      contactTitle: 'معلومات التواصل',
      copyright: 'جميع الحقوق محفوظة. شركة مروان لنقل وتغليف الأثاث.',
      disclaimer: 'خدمات نقل وتغليف معتمدة واحترافية في جميع أنحاء دولة الإمارات العربية المتحدة.'
    },
    floating: {
      whatsappTooltip: 'محادثة عبر واتساب',
      callTooltip: 'اتصل بنا 1355 717 50 971+',
      whatsappDirect: 'تواصل عبر واتساب 24/7',
      callDirect: 'اتصل بنا الآن'
    }
  }
};
