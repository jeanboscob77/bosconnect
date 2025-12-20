// Utils/translations.
import { Service, ServiceGroup } from "./types";

export const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    projects: "Projects",

    //home page
    hero: "Driving digital growth in Rwanda — web development, hosting, training, and smart online solutions for your business.",
    exploreService: "Explore Services",
    seeProjects: "See Projects",
    trustedClient: "Our Trusted Clients",
    cta: {
      title: "Let’s Build Together",
      subtitle:
        "Ready to take your business to the next level? Partner with Bosconnect for reliable digital solutions.",
      button: "Contact Us",
    },

    servicesSection: {
      title: "What We Offer",
      subtitle:
        "We provide digital services that empower individuals, businesses, and organizations to grow and succeed in the modern world.",
      groupedServices: [
        {
          category: "Education & Career Support",
          services: [
            {
              title: "University & School Applications",
              description:
                "We assist with applications to universities and schools to boost your success rate.",
              icon: "GraduationCap", // we will map icons later
            },
            {
              title: "Job Application & CV Assistance",
              description:
                "Professional help with CV writing and job application strategies tailored to your goals.",
              icon: "Briefcase",
            },
            {
              title: "Motivation Letter Writing",
              description:
                "Compelling motivation letters tailored to your academic or professional ambitions.",
              icon: "PenLine",
            },
            {
              title: "Education Consultancy & Advisory",
              description:
                "Get personalized guidance for academic planning, scholarships, and study abroad.",
              icon: "Globe",
            },
            {
              title: "Online Programming Training",
              description:
                "Interactive training sessions to help learners master programming and technology skills.",
              icon: "GraduationCap",
            },
          ] as Service[],
        },
        {
          category: "Business & Branding",
          services: [
            {
              title: "Graphic Design Services",
              description:
                "Creative design of banners, stickers, business cards, and other branding assets.",
              icon: "Palette",
            },
            {
              title: "Marketing & Branding Services",
              description:
                "Boost your business visibility with our strategic marketing and branding solutions.",
              icon: "Megaphone",
            },
          ] as Service[],
        },
        {
          category: "Technology & IT Services",
          services: [
            {
              title: "Web and App Development",
              description:
                "We design and develop responsive, modern websites and mobile applications tailored to your needs.",
              icon: "Code",
            },
            {
              title: "24/7 Customer Support",
              description:
                "Our support team is available around the clock to help you resolve issues quickly and efficiently.",
              icon: "Headphones",
            },
            {
              title: "Hosting",
              description:
                "Reliable and secure hosting services to keep your business online and running smoothly.",
              icon: "Cloud",
            },
            {
              title: "IT Support & Computer Skills Training",
              description:
                "Tech support and digital skills training to keep you ahead in a digital world.",
              icon: "Laptop2",
            },
            {
              title: "Software Installation & Troubleshooting",
              description:
                "Expert help with installing, configuring, and fixing software issues on your devices.",
              icon: "Download",
            },
            {
              title: "Affordable Internet Sharing Service",
              description:
                "Stay connected with cost-effective and accessible internet sharing solutions.",
              icon: "Wifi",
            },
          ] as Service[],
        },
      ] as ServiceGroup[],
    },

    //FOOTER COMPONENT
    followUs: "FOLLOW US",
    quickLinks: "QUICK LINKS",
    conclude: "Empowering digital growth with smart solutions.",
    reserved: "All rights reserved.",

    //SERVICE PAGE
    all: "All",
    ourService: "Our Service",
    serviceTitle: "Trusted digital services tailored to meet your needs.",
    allservice: "All Services",
    readyToWork: "Ready to Work With Us?",
    readyToworkDes:
      "Whether you’re looking for development, hosting, or training, Bosconnect has the right solution for you.",
    //ABOUT PAGE TRANSLATIONS
    aboutTitle: "About Us",
    aboutDescription:
      "At Bosconnect Ltd, we are dedicated to driving digital growth and empowering businesses with innovative technology solutions. From web development to online services, we aim to connect people and ideas through technology.",
    missionTitle: "Our Mission",
    missionDescription:
      "To provide affordable and reliable digital solutions that empower individuals, businesses, and communities in Rwanda and beyond.",
    visionTitle: "Our Vision",
    visionText:
      "To become a leading tech company that shapes the digital future across Africa by fostering innovation and inclusive growth.",
    valuesTitle: "Our Values",
    innovation: "Innovation",
    integrity: "Integrity",
    excellence: "Excellence",
    customerCentricService: "Customer-Centric Service",
    meetTheFounder: "Meet the Founder",

    aboutFounder:
      "With a strong background in Business Information Technology and a passion for innovation, Jean Bosco founded Bosconnect Ltd to empower communities through technology and digital solutions.",
    founderTitle: "Founder & CEO",

    /// PROJECT PAGE TRANSLATIONS
    ourProjects: "Our Projects",
    projectsSubtitle:
      "Take a look at some of the work we've done for our clients.",
    startProject: "Start Your Project With Us",
    contactCTA:
      "Want to see your ideas come to life? Contact Bosconnect and let's build something amazing together.",

    /// CONTACT PAGE TRANSLATIONS
    contactPrompt:
      "Have a question or feedback? Fill out the form below or reach out to us directly.",
    readyToPartner:
      "Ready to take your business to the next level? Partner with Bosconnect for reliable digital solutions.",
  },
  rw: {
    home: "Ahabanza",
    about: "Ibyerekeye",
    services: "Serivisi",
    projects: "Ibikorwa",
    contact: "Twandikire",

    // home page

    hero: "Guteza imbere ikoranabuhanga mu Rwanda — imbuga za interineti, ububiko bw’amakuru, amahugurwa, n’serivisi z’ikoranabuhanga zigenewe ubucuruzi bwawe.",
    exploreService: "Menya Serivisi",
    seeProjects: "Reba Ibikorwa",
    trustedClient: "Abakiriya bacu bizewe",
    cta: {
      title: "Tugire Ubufatanye",
      subtitle:
        "Witeguye kuzamura ubucuruzi bwawe? Fatanya na Bosconnect mu gukoresha ibisubizo by'Ikoranabuhanga byizewe.",
      button: "Twandikire",
    },
    servicesSection: {
      title: "Serivisi Dutanga",
      subtitle:
        "Dutanga serivisi z’ikoranabuhanga zigamije guteza imbere abantu, ibigo, n’imiryango mu iterambere ryabo.",
      groupedServices: [
        {
          category: "Uburezi & Ubufasha mugushaka Akazi",
          services: [
            {
              title: "Gusaba Amashuri & Kaminuza",
              description:
                "Dutera inkunga mu gusaba amashuri na kaminuza kugira ngo wongere amahirwe yo gutsinda.",
              icon: "GraduationCap",
            },
            {
              title: "Gusaba Akazi & CV",
              description:
                "Ubufasha mu kwandika CV no gusaba akazi bijyanye n’intego zawe.",
              icon: "Briefcase",
            },
            {
              title: "Kwandika Ibaruwa y’Intego",
              description:
                "Inyandiko zikurura z’intego zishingiye ku masomo cyangwa akazi kawe.",
              icon: "PenLine",
            },
            {
              title: "Inama & Ubufasha bw’Uburezi",
              description:
                "Ubufasha bwihariye mu gutegura amasomo, buruse, no kwiga mu mahanga.",
              icon: "Globe",
            },
            {
              title: "Amahugurwa yo Kuri Internet ya Programming",
              description:
                "Amahugurwa y’imikoranire afasha abanyeshuri kumenya programming n’ikoranabuhanga.",
              icon: "GraduationCap",
            },
          ] as Service[],
        },
        {
          category: "Ubucuruzi & Kubaka Izina",
          services: [
            {
              title: "Serivisi za Graphic Design",
              description:
                "Igishushanyo gishya cya banners, stickers, business cards n’ibindi.",
              icon: "Palette",
            },
            {
              title: "Kwamamaza no Kumenyekanisha Ikirango",
              description:
                "Tuzamura ubucuruzi bwawe ukoresheje marketing n’uburyo bwo kubaka izina.",
              icon: "Megaphone",
            },
          ],
        },
        {
          category: "Ikoranabuhanga & Serivisi za IT",
          services: [
            {
              title: "Serivisi zo gukora Website & App",
              description:
                "Dukora imbuga na applications zigezweho kandi zinoze bijyanye n’ibyo ukeneye.",
              icon: "Code",
            },
            {
              title: "Ubufasha 24/7",
              description:
                "Itsinda ryacu rihora ryiteguye kugufasha gukemura ibibazo byihuse.",
              icon: "Headphones",
            },
            {
              title: "Ububiko (Hosting)",
              description:
                "Serivisi zizewe kandi zitekanye zo kubika website zawe kuri internet.",
              icon: "Cloud",
            },
            {
              title: "Ubufasha bwa IT & Amahugurwa ku Bumenyi bwa Computer",
              description:
                "Support y’ikoranabuhanga n’amahugurwa ku bumenyi bwa digital.",
              icon: "Laptop2",
            },
            {
              title: "Gushyira Software & Gukemura Ibibazo",
              description:
                "Ubufasha bw’inzobere mu gushyira software no gukemura ibibazo bya tekinike.",
              icon: "Download",
            },
            {
              title: "Serivisi yo Gusangira Internet ku Giciro Gito",
              description:
                "Huguruka ku murongo ukoresheje uburyo buhendutse bwo gusangira internet.",
              icon: "Wifi",
            },
          ] as Service[],
        },
      ] as ServiceGroup[],
    },

    //FOOTER COMPONENT
    followUs: "DUKURIKIRE",
    quickLinks: "IMIYOBORO YIHUSE",
    conclude:
      "Guha imbaraga iterambere ry'Ikoranabuhanga hamwe nibisubizo byubwenge.",
    reserved: "Uburenganzira bwose burabitswe.",

    //SERVICE PAGE
    all: "Zose",
    ourService: "Servisi Zacu",
    serviceTitle:
      "Serivisi z’ikoranabuhanga zizewe, zateguwe bijyanye n’ibyo ukeneye.",
    allservice: "Serivisi zose",
    readyToWork: "Witeguye gukorana natwe?",
    readyToworkDes:
      "Niba ushaka serivisi z’iterambere rya porogaramu, kwakira imbuga (hosting), cyangwa amahugurwa, Bosconnect ifite igisubizo gikwiye ku byo ukeneye.",

    //ABOUT PAGE TRANSLATIONS
    aboutTitle: "Abo Turibo",
    aboutDescription:
      "Muri Bosconnect Ltd, twiyemeje guteza imbere iterambere ry’ikoranabuhanga no gufasha ubucuruzi gukura binyuze mu bisubizo bishya by’ikoranabuhanga. Duhereye ku gukora imbuga n’ikorabuhanga kugeza kuri serivisi zo kuri internet, intego yacu ni guhuza abantu n’ibitekerezo hifashishijwe ikoranabuhanga.",
    missionTitle: "Inshingano Yacu",
    missionDescription:
      "Gutanga ibisubizo by’ikoranabuhanga bihendutse kandi byizewe bifasha abantu ku giti cyabo, ubucuruzi, n’imiryango mu Rwanda no hanze yarwo gutera imbere.",
    visionTitle: "Icyerekezo Cyacu",
    visionText:
      "Kuba ikigo cy’ikoranabuhanga kiyoboye mu guhanga ejo hazaza h’ikoranabuhanga muri Afurika, binyuze mu guteza imbere udushya n’iterambere rigera kuri bose.",
    valuesTitle: "Indangagaciro Zacu",
    innovation: "Udushya",
    integrity: "Ubunyangamugayo",
    excellence: "Guharanira Ubudashyikirwa",
    customerCentricService: "Serivisi Ikwiranye n’Umukiriya",
    meetTheFounder: "Menye Uwayishinze",
    aboutFounder:
      "Afite ubumenyi bukomeye mu by'Ikoranabuhanga mu Bucuruzi (BIT) n’urukundo rwo guhanga udushya, Jean Bosco yashinze Bosconnect Ltd agamije guteza imbere imiryango binyuze mu ikoranabuhanga n'ibisubizo by'ikoranabuhanga.",
    founderTitle: "Umuyobozi Mukuru",

    ///PROJECT PAGE TRANSLATIONS
    ourProjects: "Imishinga Yacu",
    projectsSubtitle: "Reba bimwe mu bikorwa twakoze ku bakiliya bacu.",
    startProject: "Tangira Umushinga Wawe Natwe",
    contactCTA:
      "Urashaka kubona ibitekerezo byawe bishyirwa mu bikorwa? Vugana na Bosconnect kandi twubake ikintu gikomeye hamwe.",

    //// CONTACT PAGE TRANSLATIONS
    contactPrompt:
      "Ufite ikibazo cyangwa igitekerezo? Wuzuza ifishi iri hasi cyangwa kuri Telephone cyagwa emeyili bigaragara hasi.",
    readyToPartner:
      "Witeguye kuzamura ubucuruzi bwawe? Korana na Bosconnect ku bisubizo byizewe by'Ikoranabuhanga.",
  },
} as const;
