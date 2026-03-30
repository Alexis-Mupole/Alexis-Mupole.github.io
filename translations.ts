
export type Language = 'fr' | 'en' | 'sw';

export const translations = {
  fr: {
    nav: { home: 'Accueil', services: 'Services', expertise: 'Mon Approche', projects: 'Projets', pricing: 'Tarifs', contact: 'Contact' },
    hero: {
      badge: 'Expertise & Accompagnement',
      title: "Des outils numériques ",
      titleAccent: "pour votre quotidien",
      desc: "Je m'appelle Alexis Mupole Uwizeye. Je mets mon savoir-faire technique au service de vos projets pour simplifier votre informatique. Qu'il s'agisse de restaurer un ordinateur, de sécuriser vos données ou de créer un site internet léger, je vous propose des solutions durables et adaptées à votre réalité.",
      ctaPrimary: 'Discuter de votre projet',
      ctaSecondary: 'Voir mes services',
      tagline: 'Informaticien & Développeur (Licence en Computer Science aux USA & Licence en Business Computing en Ouganda). Passionné par l\'accessibilité et la sécurité numérique.',
      subtitle: 'Je conçois des solutions qui comblent le fossé entre la technologie complexe et l\'accessibilité humaine. Ma mission est de doter les entreprises africaines d\'une infrastructure numérique de classe mondiale.',
      location: 'Kinshasa, RD Congo',
      experience: '5+ Années d\'Expérience',
      specialist: 'Développeur Web',
      titleName: 'Alexis Mupole - Consultant en Ingénierie Numérique',
      certified: 'Certifié',
      role: 'Développeur Web',
      technologiesTitle: 'TECHNOLOGIES AVEC LESQUELLES JE TRAVAILLE',
      available: 'Disponible pour Projets',
      viewWork: 'Voir Mes Réalisations',
      hireMe: 'Engagez-moi',
      scheduleCall: 'Planifier un Appel'
    },
    home: {
      vision: 'Ma Philosophie',
      visionText: '"La technologie ne doit pas être un obstacle. Mon rôle est de la rendre invisible et efficace pour vous permettre de vous concentrer sur ce qui compte vraiment : votre travail et votre famille."',
      whyMe: {
        title: 'Pourquoi me faire confiance ?',
        reason1: { t: 'Proximité & Écoute', d: 'Je prends le temps de comprendre vos difficultés pour proposer uniquement ce dont vous avez besoin.' },
        reason2: { t: 'Rigueur Technique', d: 'Je respecte les standards de qualité, que ce soit dans le code ou dans l\'entretien de votre matériel.' },
        reason3: { t: 'Suivi & Formation', d: 'Je ne disparais pas après l\'intervention ; je vous montre comment garder vos outils en bon état.' }
      },
      stack: 'Mes outils techniques',
      stackDesc: 'J\'utilise des technologies modernes, stables et économes en ressources.',
      approach: 'Ma méthode de travail',
      values: {
        analysis: { t: 'Diagnostic initial', d: 'Analyse complète de l\'état de votre matériel ou de vos besoins logiciels sans engagement.' },
        rigor: { t: 'Mise en œuvre', d: 'Installation propre des systèmes et développement de code structuré et sécurisé.' },
        support: { t: 'Autonomie', d: 'Remise d\'un guide simple et formation rapide pour que vous soyez à l\'aise.' }
      },
      stats: { projects: 'Projets Réalisés', experience: "Années d'Expérience" },
      whyChooseTitle: 'Pourquoi Me Choisir',
      whyChooseSubtitle: 'Livrer l\'Excellence dans Chaque Projet',
      whyChooseDesc: "Je combine expertise technique et sens des affaires pour deliver des solutions qui génèrent de vrais résultats.",
      features: {
        fastDelivery: { title: 'Livraison Rapide', desc: 'Délais rapides sans compromis sur la qualité. Votre projet reste dans les délais.' },
        secureSolutions: { title: 'Solutions Sécurisées', desc: 'Pratiques de sécurité de niveau entreprise intégrées dans chaque ligne de code.' },
        globalStandards: { title: 'Standards Mondiaux', desc: 'Pratiques de développement de classe mondiale alignées sur les normes internationales.' }
      },
      viewAllProjects: 'Voir Tous les Projets',
      aboutTitle: 'À Propos de Moi',
      aboutSubtitle: 'Donner du Pouvoir aux Entreprises Africaines avec la Technologie',
      aboutDesc: "Avec plus de 5 ans d'expérience en ingénierie numérique, j'aide les entreprises à transformer leurs opérations grâce à des solutions technologiques innovantes. De l'architecture cloud à l'intégration IA, j'apporte une expertise de classe mondiale à chaque projet.",
      stats: { projects: 'Projets Réalisés', experience: "Années d'Expérience", projectsNum: '50+', experienceNum: '5+' },
      whatIOfferTitle: 'Ce que j\'offre',
      whatIOffer: [
        'Développement d\'Applications Web Sur Mesure',
        'Développement Front-End Réactif',
        'Architecture Back-End Scalable',
        'Plateformes E-commerce Avancées',
        'Maintenance & Optimisation Web',
        'Refonte & Modernisation Digitale'
      ]
    },
    services: {
      title: 'Services Informatiques',
      desc: "Je propose des services concrets pour résoudre vos problèmes informatiques de tous les jours.",
      whyChooseTitle: 'Pourquoi choisir mes services?',
      readyToStart: 'Prêt à démarrer votre projet?',
      readyToStartDesc: 'Discutons de la façon dont je peux vous aider à réaliser votre vision.',
      getInTouch: 'Me contacter',
      process: {
        title: 'Processus',
        subtitle: 'Comment je travaille',
        desc: "Je suis une approche structurée pour m'assurer que chaque projet répond aux normes les plus élevées de qualité et offre une réelle valeur à votre entreprise."
      },
      qualifications: {
        title: "Expertise & Qualifications",
        degree: "Licence en Computer Science (USA) & Business Computing (Ouganda)",
        regional: "Expert régional focalisé sur l'axe Goma-Kampala",
        certified: "Certifié Cisco Academy & HP IT for Business",
        learner: "Engagement 'Life-long Learner' pour l'accessibilité",
        leadership: "Leadership éthique et technologie centrée sur l'humain"
      },
      items: {
        web: {
          title: 'Ingénierie Web & CMS',
          desc: 'Développement de plateformes dynamiques et de systèmes de gestion de contenu (CMS) sur mesure conçus pour la performance.',
          features: ['Solutions Full-Stack', 'CMS Personnalisés', 'Tableaux de bord dynamiques', 'Architecture évolutive']
        },
        data: {
          title: 'Expertise Data (Kobo/ODK)',
          desc: 'Digitalisation des enquêtes et collecte de données mobiles optimisée pour les secteurs humanitaires et de recherche.',
          features: ['Configuration Kobo Collect', 'Intégration ODK', 'Saisie hors-ligne', 'Analytique temps réel']
        },
        installation: {
          title: 'Installation & Systèmes',
          desc: 'Déploiement professionnel de systèmes d\'exploitation, maintenance hardware et support technique critique.',
          features: ['Déploiement d\'OS', 'Maintenance Hardware', 'Optimisation Système', 'Dépannage']
        },
        network: {
          title: 'Infrastructure & Réseaux',
          desc: 'Configuration et maintenance d\'infrastructures réseaux locaux selon les standards Cisco.',
          features: ['Réseaux Cisco', 'Optimisation WiFi', 'Installation LAN/WAN', 'Sécurisation réseau']
        },
        security: {
          title: 'Cybersécurité & Audit',
          desc: 'Évaluation des vulnérabilités, protection des données et formation à la sensibilisation numérique.',
          features: ['Audits de sécurité', 'Protection des données', 'Sensibilisation numérique', 'Nettoyage Malware']
        },
        office: {
          title: 'Bureautique Avancée (MS 365)',
          desc: 'Automatisation Excel avancée, reporting business et modélisation de données pour des flux efficaces.',
          features: ['Automatisation Excel', 'Business Intelligence', 'Modélisation de données', 'Efficacité des flux']
        }
      }
    },
    approach: {
      title: 'Solutions Numériques & Expertises',
      subtitle: 'Une approche complète pour votre transformation digitale',
      sections: [
        {
          title: 'Ingénierie Web & Écosystèmes CMS',
          intro: 'Au-delà d\'un simple site, je bâtis l\'infrastructure digitale de votre succès.',
          items: [
            'Développement Full-Stack : Conception d\'applications web robustes et évolutives, adaptées aux réalités de votre secteur.',
            'Systèmes de Gestion (CMS) Personnalisés : Des interfaces intuitives pour une autonomie totale sur vos contenus.',
            'Expérience "Offline-First" (PWA) : Des solutions accessibles partout, même avec une connexion internet instable.'
          ]
        },
        {
          title: 'Digitalisation de Terrain & Expertise Data (Kobo/ODK)',
          intro: 'Transformez vos collectes de données manuelles en leviers stratégiques immédiats.',
          items: [
            'Ingénierie de Formulaires complexes : Logique de saut, calculs intégrés et géolocalisation pour des données fiables.',
            'Migration Numérique pour ONG : Transition complète du papier vers le mobile pour vos enquêtes et suivis de projets.',
            'Reporting en Temps Réel : Centralisation et analyse instantanée de vos données de terrain.'
          ]
        },
        {
          title: 'Excellence Opérationnelle & Suite Microsoft 365',
          intro: 'Optimisez votre productivité grâce à la puissance de l\'automatisation.',
          items: [
            'Expertise MS 365 : Configuration et optimisation d\'environnements collaboratifs (Teams, SharePoint, OneDrive).',
            'Business Intelligence & Excel : Automatisation de rapports complexes et modélisation de données pour un pilotage précis.',
            'Productivité Cloud : Fluidifiez la communication entre vos équipes, de Goma à Kampala.'
          ]
        },
        {
          title: 'Infrastructure, Réseaux & Sécurité (Cisco Standards)',
          intro: 'Une architecture réseau fiable pour une organisation qui ne s\'arrête jamais.',
          items: [
            'Connectivité Critique : Design et maintenance de réseaux locaux (LAN/Wi-Fi) performants et segmentés.',
            'Maintenance Préventive : Gestion proactive de votre parc informatique (Hardware & Software) pour éliminer les temps d\'arrêt.',
            'Audit de Cybersécurité : Identification des vulnérabilités et sensibilisation des équipes aux bonnes pratiques numériques.'
          ]
        }
      ],
      difference: {
        title: 'La Différence Alexis Mupole',
        intro: 'Mon approche repose sur une dualité académique unique :',
        items: [
          'Rigueur Technique : BSc in Computer Science (UoPeople, USA).',
          'Vision Stratégique : BSc in Business Computing (Bugema University, Ouganda).'
        ],
        quote: 'Mon engagement : mettre l\'ingénierie logicielle au service de vos objectifs humains et commerciaux.'
      }
    },
    method: {
      step1: { t: 'Écoute', d: 'Compréhension de votre besoin.' },
      step2: { t: 'Solution', d: 'Proposition d\'un devis clair.' },
      step3: { t: 'Réalisation', d: 'Travail soigné et tests.' },
      step4: { t: 'Garantie', d: 'Support technique après service.' }
    },
    contact: {
      title: 'Parlons de votre besoin',
      desc: 'Je suis à votre écoute pour toute question technique. Réponse sous 24 heures maximum.',
      form: { name: 'Votre Nom', email: 'Votre Email', subject: 'Objet', msg: 'Message', send: 'Envoyer' },
      getInTouch: 'Contactez-moi',
      formTitle: 'Discutons de Votre Projet',
      formDesc: "Vous avez un projet en tête? J'adorerais en entendre parler. Envoyez-moi un message et je vous répondrai dès que possible.",
      whatsappTitle: 'Préférez WhatsApp?',
      whatsappDesc: "Contactez-moi directement sur WhatsApp pour des réponses rapides.",
      whatsappButton: 'Discuter sur WhatsApp',
      sentTitle: 'Message Envoyé!',
      sentDesc: "Merci de m'avoir contacté. Je vous répondrai dans les 24 heures.",
      sendAnother: 'Envoyer un autre message',
      info: {
        email: 'Email',
        phone: 'Téléphone',
        location: 'Localisation',
        availability: 'Disponibilité'
      },
      placeholder: "Parlez-moi de votre projet..."
    },
    projects: {
      title: 'Projets Récents',
      desc: 'Découvrez quelques-unes de mes réalisations techniques et digitales.',
      portfolio: 'Portfolio',
      recentProjects: 'Projets Récents',
      items: {
        stock: { t: 'Système de Gestion de Stock', d: 'Application web pour le suivi en temps réel des inventaires et alertes de rupture.' },
        showcase: { t: 'Site Vitrine Professionnel', d: 'Conception d\'un site moderne et responsive pour une entreprise locale.' },
        maintenance: { t: 'Optimisation de Parc Informatique', d: 'Remise à neuf et sécurisation de 15 postes de travail sous Windows et Linux.' },
        network: { t: 'Installation Réseau Local', d: 'Configuration d\'un réseau sécurisé avec partage de fichiers et imprimantes.' }
      }
    },
    footer: {
      about: "Bâtir des futurs numériques grâce à des solutions d'ingénierie innovantes. Spécialisé dans l'architecture cloud, l'intégration IA et le développement full-stack pour les entreprises africaines.",
      quickLinks: 'Liens Rapides',
      services: 'Services',
      getInTouch: 'Contactez-moi',
      copyright: 'Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: "Conditions d'Utilisation",
      webDev: 'Développement Web',
      cloud: 'Solutions Cloud',
      ai: 'Intégration IA',
      consulting: 'Conseil Technique'
    },
    projectsPage: {
      stats: { projects: 'Projets Réalisés', clients: 'Clients Satisfaits', countries: 'Pays' },
      cta: { title: 'Vous avez un projet similaire en tête?', desc: 'Chaque projet est unique. Je m\'adapte à vos exigences techniques et votre budget pour offrir les meilleurs résultats possibles.', button: 'Obtenir un Devis Gratuit' }
    }
  },
  en: {
    nav: { home: 'Home', services: 'Services', expertise: 'Approach', projects: 'Projects', pricing: 'Pricing', contact: 'Contact' },
    hero: {
      badge: 'Expertise & Support',
      title: 'Digital tools for ',
      titleAccent: 'your daily life',
      desc: "My name is Alexis Mupole Uwizeye. I put my technical expertise at the service of your projects to simplify your IT. Whether restoring a computer, securing your data, or creating a lightweight website, I offer durable solutions tailored to your reality.",
      ctaPrimary: 'Discuss your project',
      ctaSecondary: 'See my services',
      tagline: 'IT Professional & Developer (BSc Computer Science - USA & BSc Business Computing - Uganda). Passionate about digital accessibility and security.',
      subtitle: 'I engineer solutions that bridge the gap between complex technology and human accessibility. My mission is to empower African businesses with world-class digital infrastructure.',
      location: 'Kinshasa, DR Congo',
      experience: '5+ Years Experience',
      specialist: 'Web Developper',
      titleName: 'Alexis Mupole - Digital Engineering Consultant',
      certified: 'Certified',
      role: 'Web Developper',
      technologiesTitle: 'TECHNOLOGIES I WORK WITH',
      available: 'Available for Projects',
      viewWork: 'View My Work',
      hireMe: 'Hire Me',
      scheduleCall: 'Schedule a Call'
    },
    home: {
      vision: 'My Philosophy',
      visionText: '"Technology should not be an obstacle. My role is to make it invisible and efficient so you can focus on what really matters: your work and your family."',
      whyMe: {
        title: 'Why trust me?',
        reason1: { t: 'Proximity & Listening', d: 'I take the time to understand your difficulties to propose only what you need.' },
        reason2: { t: 'Technical Rigor', d: 'I respect quality standards, whether in code or equipment maintenance.' },
        reason3: { t: 'Follow-up & Training', d: 'I do not disappear after the intervention; I show you how to keep your tools in good condition.' }
      },
      stack: 'My technical tools',
      stackDesc: 'I use modern, stable, and resource-efficient technologies.',
      approach: 'My work method',
      values: {
        analysis: { t: 'Initial diagnosis', d: 'Complete analysis of your hardware status or software needs without commitment.' },
        rigor: { t: 'Implementation', d: 'Clean system installation and development of structured and secure code.' },
        support: { t: 'Autonomy', d: 'Providing a simple guide and quick training so you are comfortable.' }
      },
      stats: { projects: 'Projects Completed', experience: 'Years Experience' },
      whyChooseTitle: 'Why Choose Me',
      whyChooseSubtitle: 'Delivering Excellence in Every Project',
      whyChooseDesc: 'I combine technical expertise with business acumen to deliver solutions that drive real results.',
      features: {
        fastDelivery: { title: 'Fast Delivery', desc: 'Quick turnaround times without compromising on quality. Your project stays on schedule.' },
        secureSolutions: { title: 'Secure Solutions', desc: 'Enterprise-grade security practices built into every line of code I write.' },
        globalStandards: { title: 'Global Standards', desc: 'World-class development practices aligned with international technology standards.' }
      },
      aboutTitle: 'About Me',
      aboutSubtitle: 'Empowering African Businesses with Technology',
      aboutDesc: "With over 5 years of experience in digital engineering, I help businesses transform their operations through innovative technology solutions. From cloud architecture to AI integration, I bring world-class expertise to every project.",
      stats: { projects: 'Projects Completed', experience: 'Years Experience', projectsNum: '50+', experienceNum: '5+' },
      whatIOfferTitle: 'What I Offer',
      whatIOffer: [
       'Custom Web Application Development',
        'Responsive Front-End Development',
        'Scalable Back-End Architecture',
        'Advanced E-commerce Platforms',
        'Web Maintenance & Optimization',
        'Digital Modernization & Redesign'
      ],
      viewAllProjects: 'View All Projects'
    },
    services: {
      title: 'IT Services',
      desc: "I offer practical services to solve your everyday IT problems.",
      whyChooseTitle: 'Why Choose My Services?',
      readyToStart: 'Ready to Start Your Project?',
      readyToStartDesc: "Let's discuss how I can help bring your vision to life.",
      getInTouch: 'Get in Touch',
      process: {
        title: 'Process',
        subtitle: 'How I Work',
        desc: 'I follow a structured approach to ensure every project meets the highest standards of quality and delivers real value to your business.'
      },
      qualifications: {
        title: "Expertise & Qualifications",
        degree: "Licence in Computer Science (USA) & Business Computing (Uganda)",
        regional: "Regional Expert focused on Goma-Kampala axis",
        certified: "Cisco Academy & HP IT for Business Certified",
        learner: "Life-long Learner dedicated to digital accessibility",
        leadership: "Ethical Leadership and human-centered technology"
      },
      items: {
        web: {
          title: 'Web & CMS Engineering',
          desc: 'Development of dynamic platforms and custom Content Management Systems (CMS) designed for high performance.',
          features: ['Full-Stack Solutions', 'Custom CMS', 'Dynamic Dashboards', 'Scalable Architecture']
        },
        data: {
          title: 'Data Expertise (Kobo/ODK)',
          desc: 'Digitalization of surveys and mobile data collection optimized for humanitarian and research sectors.',
          features: ['Kobo Collect setup', 'ODK Integration', 'Offline data capture', 'Real-time Analytics']
        },
        installation: {
          title: 'Installation & Systems',
          desc: 'Professional deployment of operating systems, hardware maintenance, and critical technical support.',
          features: ['OS Deployment', 'Hardware Maintenance', 'System Optimization', 'Troubleshooting']
        },
        network: {
          title: 'Infrastructure & Networks',
          desc: 'Configuration and maintenance of local network infrastructures using Cisco standards.',
          features: ['Cisco Networking', 'WiFi Optimization', 'LAN/WAN Setup', 'Network Security']
        },
        security: {
          title: 'Cybersecurity & Awareness',
          desc: 'Vulnerability assessment, data protection, and Digital Awareness training for users.',
          features: ['Security Audits', 'Data Protection', 'Digital Awareness', 'Malware Removal']
        },
        office: {
          title: 'Advanced Office (365)',
          desc: 'Advanced Excel automation, business reporting, and data modeling for efficient workflows.',
          features: ['Excel Automation', 'Business Intelligence', 'Data Modeling', 'Workflow efficiency']
        }
      }
    },
    approach: {
      title: 'Digital Solutions & Expertise',
      subtitle: 'A comprehensive approach for your digital transformation',
      sections: [
        {
          title: 'Web Engineering & CMS Ecosystems',
          intro: 'Beyond just a website, I build the digital infrastructure for your success.',
          items: [
            'Full-Stack Development: Design of robust and scalable web applications tailored to your sector.',
            'Custom CMS: Intuitive interfaces for total autonomy over your content.',
            'Offline-First Experience (PWA): Solutions accessible everywhere, even with unstable internet.'
          ]
        },
        {
          title: 'Field Digitalization & Data Expertise (Kobo/ODK)',
          intro: 'Transform your manual data collection into immediate strategic advantages.',
          items: [
            'Complex Form Engineering: Skip logic, integrated calculations and geolocation for reliable data.',
            'NGO Digital Migration: Complete paper-to-mobile transition for your surveys and project monitoring.',
            'Real-Time Reporting: Centralization and instant analysis of your field data.'
          ]
        },
        {
          title: 'Operational Excellence & Microsoft 365 Suite',
          intro: 'Optimize your productivity through the power of automation.',
          items: [
            'MS 365 Expertise: Configuration and optimization of collaborative environments (Teams, SharePoint, OneDrive).',
            'Business Intelligence & Excel: Automation of complex reports and data modeling for precise steering.',
            'Cloud Productivity: Streamline communication between your teams, from Goma to Kampala.'
          ]
        },
        {
          title: 'Infrastructure, Networks & Security (Cisco Standards)',
          intro: 'Reliable network architecture for an organization that never stops.',
          items: [
            'Critical Connectivity: Design and maintenance of high-performing segmented local networks (LAN/Wi-Fi).',
            'Proactive Maintenance: Proactive management of your IT infrastructure (Hardware & Software) to eliminate downtime.',
            'Security Audit: Vulnerability identification and team sensitization to digital best practices.'
          ]
        }
      ],
      difference: {
        title: 'The Alexis Mupole Difference',
        intro: 'My approach is based on a unique academic duality:',
        items: [
          'Technical Rigor: BSc in Computer Science (UoPeople, USA).',
          'Strategic Vision: BSc in Business Computing (Bugema University, Uganda).'
        ],
        quote: 'My commitment: putting software engineering at the service of your human and commercial objectives.'
      }
    },
    method: {
      step1: { t: 'Listening', d: 'Understanding your needs.' },
      step2: { t: 'Solution', d: 'Providing a clear quote.' },
      step3: { t: 'Execution', d: 'Careful work and testing.' },
      step4: { t: 'Guarantee', d: 'Technical support after service.' }
    },
    contact: {
      title: "Let's talk about your needs",
      desc: 'I am here to listen to any technical question. Response within 24 hours maximum.',
      form: { name: 'Your Name', email: 'Your Email', subject: 'Subject', msg: 'Message', send: 'Send' },
      getInTouch: 'Get In Touch',
      formTitle: "Let's Discuss Your Project",
      formDesc: "Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.",
      whatsappTitle: 'Prefer WhatsApp?',
      whatsappDesc: 'Reach out directly on WhatsApp for quick responses.',
      whatsappButton: 'Chat on WhatsApp',
      sentTitle: 'Message Sent!',
      sentDesc: "Thank you for reaching out. I'll get back to you within 24 hours.",
      sendAnother: 'Send another message',
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        availability: 'Availability'
      },
      placeholder: "Tell me about your project..."
    },
    projects: {
      title: 'Recent Projects',
      desc: 'Discover some of my technical and digital achievements.',
      portfolio: 'Portfolio',
      recentProjects: 'Recent Projects',
      items: {
        stock: { t: 'Stock Management System', d: 'Web application for real-time inventory tracking and stock-out alerts.' },
        showcase: { t: 'Professional Showcase Site', d: 'Design of a modern and responsive site for a local business.' },
        maintenance: { t: 'IT Fleet Optimization', d: 'Refurbishing and securing 15 Windows and Linux workstations.' },
        network: { t: 'Local Network Installation', d: 'Configuration of a secure network with file and printer sharing.' }
      }
    },
    footer: {
      about: "Building digital futures through innovative engineering solutions. Specializing in cloud architecture, AI integration, and full-stack development for African businesses.",
      quickLinks: 'Quick Links',
      services: 'Services',
      getInTouch: 'Get In Touch',
      copyright: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      webDev: 'Web Development',
      cloud: 'Cloud Solutions',
      ai: 'AI Integration',
      consulting: 'Technical Consulting'
    },
    projectsPage: {
      stats: { projects: 'Projects Completed', clients: 'Happy Clients', countries: 'Countries' },
      cta: { title: 'Have a Similar Project in Mind?', desc: 'Every project is unique. I adapt to your technical requirements and budget to deliver the best possible results.', button: 'Get a Free Quote' }
    }
  },
  sw: {
    nav: { home: 'Nyumbani', services: 'Huduma', expertise: 'Njia yangu', projects: 'Miradi', pricing: 'Bei', contact: 'Mawasiliano' },
    hero: {
      badge: 'Utaalamu na Usaidizi',
      title: 'Zana za kidijitali kwa ',
      titleAccent: 'maisha yako ya kila siku',
      desc: "Naitwa Alexis Mupole Uwizeye. Ninaweka utaalamu wangu wa kiufundi katika huduma ya miradi yako ili kurahisisha IT yako. Iwe ni kurejesha kompyuta, kulinda data yako, au kutengeneza tovuti nyepesi, ninatoa suluhisho endelevu zinazolingana na ukweli wako.",
      ctaPrimary: 'Jadili mradi wako',
      ctaSecondary: 'Angalia huduma zangu',
      tagline: 'Mtaalamu wa Kompyuta na Msanidi Programu (Shahada ya Sayansi ya Kompyuta - USA na Shahada ya Biashara - Uganda). Mtangamano wa upatikanaji wa kidijitali na usalama.',
      subtitle: 'Ninajenga suluhisho zinazobridisha pengo kati ya teknolojia changa na upatikanaji wa binadamu.',
      location: 'Kinshasa, DR Congo',
      experience: 'Miaka 5+ ya U pengalaman',
      specialist: 'Mtaalamu wa Cloud na AI',
      titleName: 'Alexis Mupole - Mshauri wa Ubunifu wa Kidijitali',
      certified: 'Aliyethibitishwa',
      role: 'Mhandisi wa Cloud',
      technologiesTitle: 'TECHNOLOGIA ZINAZOAZO',
      available: 'Inapatikana kwa Miradi',
      viewWork: 'Angalia Kazi Zangu',
      hireMe: 'Niajiri',
      scheduleCall: 'Panga Muujiza'
    },
    home: {
      vision: 'Falsafa Yangu',
      visionText: '"Teknolojia isipate kuwa kikwazo. Jukumu langu ni kuifanya isionekane na iwe na ufanisi ili uweze kuzingatia kile ambacho ni muhimu sana: kazi yako na familia yako."',
      whyMe: {
        title: 'Kwa nini uniamini?',
        reason1: { t: 'Ukaribu na Kusikiliza', d: 'Ninachukua muda kuelewa matatizo yako ili kupendekeza kile unachohitaji tu.' },
        reason2: { t: 'Ukali wa Kiufundi', d: 'Ninaheshimu viwango vya ubora, iwe katika kodi au matengenezo ya vifaa.' },
        reason3: { t: 'Ufuatiliaji na Mafunzo', d: 'Sipotei baada ya kazi; ninakuonyesha jinsi ya kuweka zana zako katika hali nzuri.' }
      },
      stack: 'Zana zangu za kiufundi',
      stackDesc: 'Ninatumia teknolojia za kisasa, thabiti na zinazookoa rasilimali.',
      approach: 'Njia yangu ya kazi',
      values: {
        analysis: { t: 'Utambuzi wa awali', d: 'Uchambuzi kamili wa hali ya vifaa vyako au mahitaji ya programu bila ahadi.' },
        rigor: { t: 'Utekelezaji', d: 'Usakinishaji safi wa mifumo na uendelezaji wa kodi iliyopangwa na salama.' },
        support: { t: 'Utawala', d: 'Kutoa mwongozo rahisi na mafunzo ya haraka ili uwe na raha.' }
      },
      stats: { projects: 'Miradi Iliyokamilika', experience: 'Miaka ya U pengalaman' },
      whyChooseTitle: 'Kwa Nini Kunichague',
      whyChooseSubtitle: 'Kutoa Excellence katika Kila Mradi',
      whyChooseDesc: 'NingCombine ujuzi wa kiufundi na ujuzi wa biashara kutoa suluthizo zinazonga Matokeo halisi.',
      features: {
        fastDelivery: { title: 'Utangazaji wa Haraka', desc: 'Muda wa haraka bila kuhatarisha ubora. Mradi wako unabakia kwenye ratiba.' },
        secureSolutions: { title: 'Suluhisho Salama', desc: 'Mbinu za usalama za kiwango cha kibiashara zilizojengwa kwenye kila laini ya namiandishi.' },
        globalStandards: { title: 'Viwango vya Kimataifa', desc: 'Mbinu za uendelezaji za kiwango cha juu zilizoambatana na viwango vya teknolojia ya kimataifa.' }
      },
      aboutTitle: 'Kuhusu Mimi',
      aboutSubtitle: 'Kuwasha Biashara za Afrika kwa Teknolojia',
      aboutDesc: 'Kwa uzoefu wa zaidi ya miaka 5 katika uhandisi wa kidijitali, nasaidia biashara kubadilisha shughuli zao kwa suluhisho za teknolojia za ubunifu. Kutoka miundombinu ya wingu hadi uunganisho wa AI, ninakuja na utaalamu wa kiwango cha juu kwa kila mradi.',
      stats: { projects: 'Miradi Iliyokamilika', experience: 'Miaka ya U pengalaman', projectsNum: '50+', experienceNum: '5+' },
      whatIOfferTitle: 'Ninachokutoa',
      whatIOffer: [
         'Uundaji wa Programu za Wavuti Maalum',
        'Uundaji wa Muonekano wa Wavuti Unaovutia (Front-End)',
        'Muundo wa Mifumo ya Ndani Inayoweza Kukua (Back-End)',
        'Mifumo ya Juu ya Biashara Mtandaoni (E-commerce)',
        'Ukarabati na Uboreshaji wa Tovuti',
        'Uboreshaji wa Kidijitali na Usanifu Upya'
      ]
    },
    services: {
      title: 'Huduma za IT',
      desc: "Ninatoa huduma za vitendo ili kutatua matatizo yako ya kila siku ya IT.",
      whyChooseTitle: 'Kwa nini kuchagua huduma zangu?',
      readyToStart: 'Uko tayari kuanza mradi wako?',
      readyToStartDesc: 'Tujadili jinsi ninavyoweza kusaidia kufanikisha maono yako.',
      getInTouch: 'Wasiliana Nami',
      process: {
        title: 'Mchakato',
        subtitle: 'Namna ninavyofanya kazi',
        desc: 'Nafuatilia mkono wa muundo ili kuhakikisha kila mradi unakidhi viwango vya juu vya ubora na kutoa thamani halisi kwa biashara yako.'
      },
      qualifications: {
        title: "Utaalamu na Vyeti",
        degree: "Shahada ya Sayansi ya Kompyuta (USA) na Kompyuta ya Biashara (Uganda)",
        regional: "Mtaalamu wa kikanda anayezingatia mhimili wa Goma-Kampala",
        certified: "Aliidhinishwa na Cisco Academy na HP IT for Business",
        learner: "Ahadi ya 'Life-long Learner' kwa upatikanaji wa kidijitali",
        leadership: "Uongozi wa kimaadili na teknolojia inayomlenga binadamu"
      },
      items: {
        web: {
          title: 'Uhandisi wa Wavuti na CMS',
          desc: 'Uendelezaji wa majukwaa yanayobadilika na mifumo ya usimamizi wa maudhui (CMS) iliyoundwa kwa utendaji wa juu.',
          features: ['Suluhisho za Full-Stack', 'CMS Maalum', 'Dashibodi zinazobadilika', 'Muundo unaoweza kupanuka']
        },
        data: {
          title: 'Utaalamu wa Data (Kobo/ODK)',
          desc: 'Uwekaji wa kidijitali wa tafiti na ukusanyaji wa data kwenye simu kwa ajili ya sekta za kibinadamu na utafiti.',
          features: ['Usanidi wa Kobo Collect', 'Muunganisho wa ODK', 'Uingizaji data nje ya mtandao', 'Uchambuzi wa wakati halisi']
        },
        installation: {
          title: 'Usakinishaji na Mifumo',
          desc: 'Usambazaji wa kitaalamu wa mifumo ya uendeshaji, matengenezo ya vifaa, na usaidizi muhimu wa kiufundi.',
          features: ['Usambazaji wa OS', 'Matengenezo ya Vifaa', 'Uboreshaji wa Mfumo', 'Utatuzi wa matatizo']
        },
        network: {
          title: 'Miundombinu na Mitandao',
          desc: 'Usanidi na matengenezo ya miundombinu ya mtandao wa ndani kwa kutumia viwango vya Cisco.',
          features: ['Mitandao ya Cisco', 'Uboreshaji wa WiFi', 'Usanidi wa LAN/WAN', 'Usalama wa Mtandao']
        },
        security: {
          title: 'Usalama wa Mtandao na Ukaguzi',
          desc: 'Tathmini ya udhaifu, ulinzi wa data, na mafunzo ya uelewa wa kidijitali kwa watumiaji.',
          features: ['Ukaguzi wa Usalama', 'Ulinzi wa Data', 'Uelewa wa Kidijitali', 'Kuondoa Malware']
        },
        office: {
          title: 'Otomatiki ya Ofisi (MS 365)',
          desc: 'Otomatiki ya Excel, ripoti za biashara, na uundaji wa data kwa ajili ya mtiririko bora wa kazi.',
          features: ['Otomatiki ya Excel', 'Akili ya Biashara', 'Uundaji wa Data', 'Ufanisi wa mtiririko']
        }
      }
    },
    approach: {
      title: 'Suluhisho za Kidijitali & Utajiri',
      subtitle: 'Mbinu kamili kwa mageuzi yako ya kidijitali',
      sections: [
        {
          title: 'Uhandisi wa Wavuti & Mifumo ya CMS',
          intro: 'Zaidi ya tovuti tu, ninajenga miundombinu ya kidijitali kwa mafanikio yako.',
          items: [
            'Uendelezaji wa Full-Stack: Ubuni wa programu za wavuti zenye nguvu na zinazoweza kukua, zilizolingana na sekta yako.',
            'Mifumo ya Usimamizi ya Custom: vInterfaces Rahisi kwa uhuru kamili kwenye maudhui yako.',
            'K experience ya Offline-First (PWA): Suluhisho zinazopatikana mahali popote, hata kwenye mtandao mbaya.'
          ]
        },
        {
          title: 'Digitalization ya Field & Utajiri wa Data (Kobo/ODK)',
          intro: 'Geuza ukusanyaji wa data ya mkono kuwa faida ya mkakati wa haraka.',
          items: [
            'Uhandisi wa Fomu ngumu: mantiki ya kuruka, kukokotoa vilivyowekwa na kijiografia kwa data za kuaminika.',
            'Uhamisho wa Digital kwa NGO: Mpito kamili kutoka karatasi hadi simu kwa utafiti na ufuatiliaji wa miradi yako.',
            'Ripoti za Wakati Halisi: Kukusanya na Uchambuzi wa haraka wa data zako za shamba.'
          ]
        },
        {
          title: 'Ubora wa Operesheni & Suite Microsoft 365',
          intro: 'Boresha utendakazi wako kwa nguvu ya otomatiki.',
          items: [
            'Utajiri wa MS 365: Usanidi na uboreshaji wa mazingira ya kushirikiana (Teams, SharePoint, OneDrive).',
            'Akili ya Biashara & Excel: Otomatiki ya ripoti ngumu na uundaji wa data kwa uongozi sahihi.',
            'Utendakazi wa Wingu: Rahisisha mawasiliano kati ya timu zako, kutoka Goma hadi Kampala.'
          ]
        },
        {
          title: 'Miundombinu, Mitandao & Usalama (Viwango vya Cisco)',
          intro: 'Muundo wa mtandao wa kuaminika kwa shirika ambalo halikwi.',
          items: [
            'Muunganisho muhimu: Ubuni na matengenezo ya mitandao ya ndani (LAN/Wi-Fi) yenye utendaji na kugawanywa.',
            'Matengenezaji ya Kuzingatia: Usimamizi wa mapema wa vifaa vyako vya IT (Hardware & Software) kuondoa kuchelewa kazini.',
            'Ukaguzi wa Usalama: Tambua udhaifu na uwahimize timu kwa mazoezi mazuri ya kidijitali.'
          ]
        }
      ],
      difference: {
        title: 'Tofauti ya Alexis Mupole',
        intro: 'Mbinu yangu inategemea umbali wa kipekee wa kitaaluma:',
        items: [
          'Ukali wa Kiufundi: BSc katika Sayansi ya Kompyuta (UoPeople, USA).',
          'Maono ya Mkakati: BSc katika Kompyuta ya Biashara (Bugema University, Uganda).'
        ],
        quote: 'Ahadi yangu: kuweka uhandisi wa programu kwa huduma ya malengo yako ya kibinadamu na biashara.'
      }
    },
    method: {
      step1: { t: 'Kusikiliza', d: 'Kuelewa mahitaji yako.' },
      step2: { t: 'Suluhisho', d: 'Kutoa bei ya wazi.' },
      step3: { t: 'Utekelezaji', d: 'Kazi ya uangalifu na vipimo.' },
      step4: { t: 'Dhamana', d: 'Usaidizi wa kiufundi baada ya huduma.' }
    },
    contact: {
      title: 'Tuzungumzie mahitaji yako',
      desc: 'Niko hapa kusikiliza swali lolote la kiufundi. Majibu ndani ya masaa 24 zaidi.',
      form: { name: 'Jina lako', email: 'Barua pepe yako', subject: 'Mada', msg: 'Ujumbe', send: 'Tuma' },
      getInTouch: 'Wasiliana Nami',
      formTitle: 'Tujadili Mradi Wako',
      formDesc: "Una mradi akilini? Ningependa kusikia kuhusu. Nitume ujumbe na nitakujibu haraka iwezekanavyo.",
      whatsappTitle: 'Unapendelea WhatsApp?',
      whatsappDesc: 'Wasiliana moja kwa moja WhatsApp kwa majibu ya haraka.',
      whatsappButton: 'Onesha WhatsApp',
      sentTitle: 'Ujumbe Umetumwa!',
      sentDesc: 'Asante kwa kuwasiliana. Nitakujibu ndani ya saa 24.',
      sendAnother: 'Tuma ujumbe mwingine',
      info: {
        email: 'Barua pepe',
        phone: 'Simu',
        location: 'Mahali',
        availability: 'Upatikanaji'
      }
    },
    projects: {
      title: 'Miradi ya Hivi Karibuni',
      desc: 'Gundua baadhi ya mafanikio yangu ya kiufundi na kidijitali.',
      portfolio: 'Kazi Zangu',
      recentProjects: 'Miradi ya Hivi Karibuni',
      items: {
        stock: { t: 'Mfumo wa Usimamizi wa Hisa', d: 'Programu ya wavuti kwa ufuatiliaji wa hesabu kwa wakati halisi na arifa za upungufu.' },
        showcase: { t: 'Tovuti ya Kitaaluma', d: 'Usanifu wa tovuti ya kisasa na inayojibu kwa biashara ya ndani.' },
        maintenance: { t: 'Uboreshaji wa Vifaa vya IT', d: 'Kukarabati na kulinda vituo 15 vya kazi vya Windows na Linux.' },
        network: { t: 'Usakinishaji wa Mtandao wa Ndani', d: 'Usanidi wa mtandao salama wenye kushiriki faili na printa.' }
      }
    },
    footer: {
      about: 'Kujenga mustakabali wa kidijitali kupitia suluhisho za uhandisi wa ubunifu. Maspecialization katika miundombinu ya wingu, uunganisho wa AI, na uendelezaji wa full-stack kwa biashara za Afrika.',
      quickLinks: 'Viungo vya Haraka',
      services: 'Huduma',
      getInTouch: 'Wasiliana Nami',
      copyright: 'Haki zote zimehifadhiwa.',
      privacy: 'Sera ya Faragha',
      terms: 'Sheria za Huduma',
      webDev: 'Uendelezaji wa Wavuti',
      cloud: 'Suluhisho za Wingu',
      ai: 'Uunganisho wa AI',
      consulting: 'Ushauri wa Kiufundi'
    },
    projectsPage: {
      stats: { projects: 'Miradi Iliyokamilika', clients: 'Wateja Wenye Furaha', countries: 'Nchi' },
      cta: { title: 'Una mradi sawa akilini?', desc: 'Kila mradi ni wa kipekee. Ninajibia mahitaji yako ya kiufundi na bajeti yako ili kutoa matokeo bora iwezekanavyo.', button: 'Pata Tenda bila Malipo' }
    },
  }
};
