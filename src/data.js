let data = [
  {
    "company_name": "Skipstorm",
    "verification_status": "Pending Verification",
    "rating": 2.0,
    "number_of_reviews": 335,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 402,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 185,
      "dosage": "0.5mg"
    },
    "state": "California"
  },
  {
    "company_name": "Gabspot",
    "verification_status": "Not Verified",
    "rating": 3.3,
    "number_of_reviews": 165,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 204,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 489,
      "dosage": "2.4mg"
    },
    "state": "Oslo"
  },
  {
    "company_name": "Gabtype",
    "verification_status": "Pending Verification",
    "rating": 3.3,
    "number_of_reviews": 177,
    "offers": "New Customer Discount",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 117,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 663,
      "dosage": "0.25mg"
    },
    "state": "Texas"
  },
  {
    "company_name": "Zooxo",
    "verification_status": "Pending Verification",
    "rating": 2.9,
    "number_of_reviews": 168,
    "offers": "Discount on Refills",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 424,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 396,
      "dosage": "2.4mg"
    },
    "state": "New York"
  },
  {
    "company_name": "BlogXS",
    "verification_status": "Pending Verification",
    "rating": 1.7,
    "number_of_reviews": 809,
    "offers": "New Customer Discount",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 511,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 488,
      "dosage": "1mg"
    },
    "state": "Florida"
  },
  {
    "company_name": "Photospace",
    "verification_status": "Not Verified",
    "rating": 3.0,
    "number_of_reviews": 695,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 371,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 420,
      "dosage": "1mg"
    },
    "state": "Pennsylvania"
  },
  {
    "company_name": "Demimbu",
    "verification_status": "Verified",
    "rating": 3.2,
    "number_of_reviews": 720,
    "offers": "New Customer Discount",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 498,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 59,
      "dosage": "0.5mg"
    },
    "state": "Illinois"
  },
  {
    "company_name": "Lajo",
    "verification_status": "Pending Verification",
    "rating": 1.9,
    "number_of_reviews": 288,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 13,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 976,
      "dosage": "1mg"
    },
    "state": "Ohio"
  },
  {
    "company_name": "Mybuzz",
    "verification_status": "Pending Verification",
    "rating": 3.9,
    "number_of_reviews": 61,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 739,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 42,
      "dosage": "2.4mg"
    },
    "state": "Georgia"
  },
  {
    "company_name": "Wikibox",
    "verification_status": "Pending Verification",
    "rating": 3.3,
    "number_of_reviews": 322,
    "offers": "Fast Sign-Up",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 351,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 683,
      "dosage": "1.7mg"
    },
    "state": "North Carolina"
  },
  {
    "company_name": "Flipopia",
    "verification_status": "Not Verified",
    "rating": 4.4,
    "number_of_reviews": 298,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 278,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 5,
      "dosage": "1mg"
    },
    "state": "Michigan"
  },
  {
    "company_name": "Latz",
    "verification_status": "Verified",
    "rating": 1.4,
    "number_of_reviews": 60,
    "offers": "New Customer Discount",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 360,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 376,
      "dosage": "0.5mg"
    },
    "state": "New Jersey"
  },
  {
    "company_name": "Fanoodle",
    "verification_status": "Not Verified",
    "rating": 4.1,
    "number_of_reviews": 457,
    "offers": "New Customer Discount",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 380,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 927,
      "dosage": "2.4mg"
    },
    "state": "Virginia"
  },
  {
    "company_name": "Jabberbean",
    "verification_status": "Not Verified",
    "rating": 1.1,
    "number_of_reviews": 862,
    "offers": "Discount on Refills",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 586,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 668,
      "dosage": "0.25mg"
    },
    "state": "Washington"
  },
  {
    "company_name": "Zoombox",
    "verification_status": "Verified",
    "rating": 2.2,
    "number_of_reviews": 373,
    "offers": "New Customer Discount",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 656,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 105,
      "dosage": "1mg"
    },
    "state": "Massachusetts"
  },
  {
    "company_name": "Viva",
    "verification_status": "Not Verified",
    "rating": 0.9,
    "number_of_reviews": 918,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 778,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 230,
      "dosage": "2.4mg"
    },
    "state": "Arizona"
  },
  {
    "company_name": "Roomm",
    "verification_status": "Verified",
    "rating": 4.6,
    "number_of_reviews": 712,
    "offers": "Fast Sign-Up",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 862,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 712,
      "dosage": "0.5mg"
    },
    "state": "Colorado"
  },
  {
    "company_name": "Zoomcast",
    "verification_status": "Verified",
    "rating": 3.6,
    "number_of_reviews": 996,
    "offers": "New Customer Discount",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 974,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 719,
      "dosage": "0.25mg"
    },
    "state": "Maryland"
  },
  {
    "company_name": "Skalith",
    "verification_status": "Verified",
    "rating": 0.8,
    "number_of_reviews": 488,
    "offers": "Fast Sign-Up",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 165,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 428,
      "dosage": "0.5mg"
    },
    "state": "Oregon"
  },
  {
    "company_name": "Blogpad",
    "verification_status": "Pending Verification",
    "rating": 2.3,
    "number_of_reviews": 867,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 771,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 405,
      "dosage": "1.7mg"
    },
    "state": "Wisconsin"
  },
  {
    "company_name": "Lazzy",
    "verification_status": "Pending Verification",
    "rating": 2.3,
    "number_of_reviews": 490,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 190,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 342,
      "dosage": "2.4mg"
    },
    "state": "Nevada"
  },
  {
    "company_name": "Jaxnation",
    "verification_status": "Verified",
    "rating": 2.0,
    "number_of_reviews": 29,
    "offers": "New Customer Discount",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 710,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 437,
      "dosage": "0.5mg"
    },
    "state": "Minnesota"
  },
  {
    "company_name": "Kwideo",
    "verification_status": "Verified",
    "rating": 1.6,
    "number_of_reviews": 744,
    "offers": "New Customer Discount",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 376,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 753,
      "dosage": "0.5mg"
    },
    "state": "Porto"
  },
  {
    "company_name": "Kamba",
    "verification_status": "Not Verified",
    "rating": 3.1,
    "number_of_reviews": 238,
    "offers": "Fast Sign-Up",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 133,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 966,
      "dosage": "0.5mg"
    },
    "state": "Indiana"
  },
  {
    "company_name": "Babblestorm",
    "verification_status": "Not Verified",
    "rating": 4.9,
    "number_of_reviews": 672,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 505,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 443,
      "dosage": "2.4mg"
    },
    "state": "Missouri"
  },
  {
    "company_name": "Brainbox",
    "verification_status": "Pending Verification",
    "rating": 2.7,
    "number_of_reviews": 192,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 862,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 499,
      "dosage": "1mg"
    },
    "state": "Tennessee"
  },
  {
    "company_name": "Wordtune",
    "verification_status": "Pending Verification",
    "rating": 4.0,
    "number_of_reviews": 378,
    "offers": "New Customer Discount",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 949,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 565,
      "dosage": "0.5mg"
    },
    "state": "Québec"
  },
  {
    "company_name": "Ntags",
    "verification_status": "Not Verified",
    "rating": 3.9,
    "number_of_reviews": 331,
    "offers": "Fast Sign-Up",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 781,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 77,
      "dosage": "1.7mg"
    },
    "state": "Louisiana"
  },
  {
    "company_name": "Skajo",
    "verification_status": "Not Verified",
    "rating": 2.0,
    "number_of_reviews": 790,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 196,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 764,
      "dosage": "1.7mg"
    },
    "state": "Kentucky"
  },
  {
    "company_name": "Kazu",
    "verification_status": "Pending Verification",
    "rating": 3.2,
    "number_of_reviews": 97,
    "offers": "Discount on Refills",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 765,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 995,
      "dosage": "0.25mg"
    },
    "state": "Alabama"
  },
  {
    "company_name": "Skinder",
    "verification_status": "Not Verified",
    "rating": 3.8,
    "number_of_reviews": 42,
    "offers": "Discount on Refills",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 920,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 612,
      "dosage": "2.4mg"
    },
    "state": "South Carolina"
  },
  {
    "company_name": "Digitube",
    "verification_status": "Pending Verification",
    "rating": 2.8,
    "number_of_reviews": 524,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 648,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 250,
      "dosage": "0.25mg"
    },
    "state": "Delaware"
  },
  {
    "company_name": "Browsebug",
    "verification_status": "Verified",
    "rating": 4.5,
    "number_of_reviews": 378,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 848,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 459,
      "dosage": "2.4mg"
    },
    "state": "New Hampshire"
  },
  {
    "company_name": "Dablist",
    "verification_status": "Pending Verification",
    "rating": 3.1,
    "number_of_reviews": 827,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 79,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 431,
      "dosage": "2.4mg"
    },
    "state": "Vermont"
  },
  {
    "company_name": "Devify",
    "verification_status": "Not Verified",
    "rating": 2.7,
    "number_of_reviews": 102,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 282,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 705,
      "dosage": "0.25mg"
    },
    "state": "Rhode Island"
  },
  {
    "company_name": "Agimba",
    "verification_status": "Not Verified",
    "rating": 1.0,
    "number_of_reviews": 907,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 720,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 507,
      "dosage": "0.25mg"
    },
    "state": "Connecticut"
  },
  {
    "company_name": "Npath",
    "verification_status": "Not Verified",
    "rating": 2.8,
    "number_of_reviews": 565,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 883,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 456,
      "dosage": "0.25mg"
    },
    "state": "Maine"
  },
  {
    "company_name": "Jaxbean",
    "verification_status": "Pending Verification",
    "rating": 0.3,
    "number_of_reviews": 316,
    "offers": "Fast Sign-Up",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 252,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 857,
      "dosage": "0.25mg"
    },
    "state": "Kansas"
  },
  {
    "company_name": "Feednation",
    "verification_status": "Not Verified",
    "rating": 1.2,
    "number_of_reviews": 288,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 408,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 461,
      "dosage": "0.25mg"
    },
    "state": "Nebraska"
  },
  {
    "company_name": "Skinder",
    "verification_status": "Not Verified",
    "rating": 2.6,
    "number_of_reviews": 619,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 374,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 810,
      "dosage": "0.25mg"
    },
    "state": "Iowa"
  },
  {
    "company_name": "Jazzy",
    "verification_status": "Verified",
    "rating": 4.2,
    "number_of_reviews": 846,
    "offers": "New Customer Discount",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 750,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 744,
      "dosage": "0.5mg"
    },
    "state": "Oklahoma"
  },
  {
    "company_name": "Agivu",
    "verification_status": "Not Verified",
    "rating": 0.7,
    "number_of_reviews": 866,
    "offers": "Fast Sign-Up",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 737,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 679,
      "dosage": "1.7mg"
    },
    "state": "Arkansas"
  },
  {
    "company_name": "Edgeblab",
    "verification_status": "Verified",
    "rating": 0.6,
    "number_of_reviews": 963,
    "offers": "New Customer Discount",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 476,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 987,
      "dosage": "0.25mg"
    },
    "state": "Mississippi"
  },
  {
    "company_name": "Zoomcast",
    "verification_status": "Verified",
    "rating": 4.2,
    "number_of_reviews": 31,
    "offers": "Discount on Refills",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 435,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 12,
      "dosage": "0.5mg"
    },
    "state": "Utah"
  },
  {
    "company_name": "Youtags",
    "verification_status": "Not Verified",
    "rating": 0.6,
    "number_of_reviews": 873,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 172,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 498,
      "dosage": "0.25mg"
    },
    "state": "New Mexico"
  },
  {
    "company_name": "Tazz",
    "verification_status": "Pending Verification",
    "rating": 3.2,
    "number_of_reviews": 535,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 229,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 601,
      "dosage": "1.7mg"
    },
    "state": "West Virginia"
  },
  {
    "company_name": "Yata",
    "verification_status": "Not Verified",
    "rating": 0.2,
    "number_of_reviews": 696,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 567,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 651,
      "dosage": "2.4mg"
    },
    "state": "Hawaii"
  },
  {
    "company_name": "Quire",
    "verification_status": "Not Verified",
    "rating": 1.7,
    "number_of_reviews": 433,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 414,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 402,
      "dosage": "0.25mg"
    },
    "state": "Alaska"
  },
  {
    "company_name": "Bubblebox",
    "verification_status": "Not Verified",
    "rating": 2.9,
    "number_of_reviews": 782,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 951,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 95,
      "dosage": "1mg"
    },
    "state": "Idaho"
  },
  {
    "company_name": "Fadeo",
    "verification_status": "Verified",
    "rating": 2.1,
    "number_of_reviews": 226,
    "offers": "New Customer Discount",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 949,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 492,
      "dosage": "1.7mg"
    },
    "state": "Wyoming"
  },
  {
    "company_name": "Ntags",
    "verification_status": "Not Verified",
    "rating": 3.1,
    "number_of_reviews": 242,
    "offers": "Discount on Refills",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 903,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 857,
      "dosage": "0.5mg"
    },
    "state": "Montana"
  },
  {
    "company_name": "Edgetag",
    "verification_status": "Verified",
    "rating": 2.1,
    "number_of_reviews": 330,
    "offers": "New Customer Discount",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 603,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 245,
      "dosage": "1.7mg"
    },
    "state": "North Dakota"
  },
  {
    "company_name": "Zooveo",
    "verification_status": "Pending Verification",
    "rating": 2.9,
    "number_of_reviews": 195,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 19,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 505,
      "dosage": "2.4mg"
    },
    "state": "Cantabria"
  },
  {
    "company_name": "Wikizz",
    "verification_status": "Pending Verification",
    "rating": 1.0,
    "number_of_reviews": 935,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 287,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 149,
      "dosage": "0.25mg"
    },
    "state": "South Dakota"
  },
  {
    "company_name": "Brainsphere",
    "verification_status": "Pending Verification",
    "rating": 4.0,
    "number_of_reviews": 460,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 53,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 321,
      "dosage": "0.25mg"
    },
    "state": "Vermont"
  },
  {
    "company_name": "Yata",
    "verification_status": "Verified",
    "rating": 2.2,
    "number_of_reviews": 995,
    "offers": "New Customer Discount",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 988,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 891,
      "dosage": "0.5mg"
    },
    "state": "Delaware"
  },
  {
    "company_name": "Centidel",
    "verification_status": "Verified",
    "rating": 3.5,
    "number_of_reviews": 725,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 761,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 699,
      "dosage": "0.5mg"
    },
    "state": "New Hampshire"
  },
  {
    "company_name": "Kanoodle",
    "verification_status": "Verified",
    "rating": 3.6,
    "number_of_reviews": 371,
    "offers": "New Customer Discount",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 626,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 306,
      "dosage": "1mg"
    },
    "state": "Rhode Island"
  },
  {
    "company_name": "Feedfire",
    "verification_status": "Pending Verification",
    "rating": 2.5,
    "number_of_reviews": 210,
    "offers": "New Customer Discount",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 331,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 128,
      "dosage": "1mg"
    },
    "state": "Braga"
  },
  {
    "company_name": "Lajo",
    "verification_status": "Not Verified",
    "rating": 4.4,
    "number_of_reviews": 51,
    "offers": "New Customer Discount",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 789,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 457,
      "dosage": "2.4mg"
    },
    "state": "Connecticut"
  },
  {
    "company_name": "Fivespan",
    "verification_status": "Not Verified",
    "rating": 3.6,
    "number_of_reviews": 327,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 647,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 750,
      "dosage": "0.5mg"
    },
    "state": "Maine"
  },
  {
    "company_name": "Thoughtmix",
    "verification_status": "Pending Verification",
    "rating": 0.1,
    "number_of_reviews": 509,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 390,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 1,
      "dosage": "0.5mg"
    },
    "state": "Kansas"
  },
  {
    "company_name": "Skaboo",
    "verification_status": "Verified",
    "rating": 1.6,
    "number_of_reviews": 116,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 701,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 735,
      "dosage": "2.4mg"
    },
    "state": "Nebraska"
  },
  {
    "company_name": "Photobean",
    "verification_status": "Verified",
    "rating": 2.9,
    "number_of_reviews": 56,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 189,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 103,
      "dosage": "0.5mg"
    },
    "state": "Iowa"
  },
  {
    "company_name": "Feedbug",
    "verification_status": "Not Verified",
    "rating": 3.7,
    "number_of_reviews": 737,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 760,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 375,
      "dosage": "0.5mg"
    },
    "state": "Oklahoma"
  },
  {
    "company_name": "Edgepulse",
    "verification_status": "Verified",
    "rating": 4.1,
    "number_of_reviews": 479,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 219,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 566,
      "dosage": "1mg"
    },
    "state": "Arkansas"
  },
  {
    "company_name": "JumpXS",
    "verification_status": "Not Verified",
    "rating": 2.8,
    "number_of_reviews": 673,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 489,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 637,
      "dosage": "0.5mg"
    },
    "state": "Mississippi"
  },
  {
    "company_name": "Dabshots",
    "verification_status": "Verified",
    "rating": 4.9,
    "number_of_reviews": 641,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 389,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 946,
      "dosage": "2.4mg"
    },
    "state": "Utah"
  },
  {
    "company_name": "Tekfly",
    "verification_status": "Verified",
    "rating": 1.4,
    "number_of_reviews": 141,
    "offers": "Discount on Refills",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 884,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 40,
      "dosage": "1mg"
    },
    "state": "New Mexico"
  },
  {
    "company_name": "Skyndu",
    "verification_status": "Verified",
    "rating": 3.2,
    "number_of_reviews": 33,
    "offers": "Fast Sign-Up",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 184,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 890,
      "dosage": "1mg"
    },
    "state": "West Virginia"
  },
  {
    "company_name": "Skimia",
    "verification_status": "Verified",
    "rating": 1.4,
    "number_of_reviews": 176,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 953,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 415,
      "dosage": "1mg"
    },
    "state": "Hawaii"
  },
  {
    "company_name": "Mudo",
    "verification_status": "Verified",
    "rating": 3.2,
    "number_of_reviews": 428,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 347,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 286,
      "dosage": "0.5mg"
    },
    "state": "Alaska"
  },
  {
    "company_name": "Rhynoodle",
    "verification_status": "Pending Verification",
    "rating": 4.1,
    "number_of_reviews": 173,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 19,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 412,
      "dosage": "1mg"
    },
    "state": "Idaho"
  },
  {
    "company_name": "Meeveo",
    "verification_status": "Not Verified",
    "rating": 2.5,
    "number_of_reviews": 30,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 345,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 664,
      "dosage": "1mg"
    },
    "state": "Wyoming"
  },
  {
    "company_name": "Zoozzy",
    "verification_status": "Not Verified",
    "rating": 2.6,
    "number_of_reviews": 161,
    "offers": "New Customer Discount",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 632,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 164,
      "dosage": "0.25mg"
    },
    "state": "Montana"
  },
  {
    "company_name": "Twitternation",
    "verification_status": "Verified",
    "rating": 0.8,
    "number_of_reviews": 588,
    "offers": "Fast Sign-Up",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 428,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 639,
      "dosage": "0.5mg"
    },
    "state": "Florida"
  },
  {
    "company_name": "Babbleopia",
    "verification_status": "Pending Verification",
    "rating": 2.0,
    "number_of_reviews": 642,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 32,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 343,
      "dosage": "0.25mg"
    },
    "state": "Veracruz Llave"
  },
  {
    "company_name": "Dazzlesphere",
    "verification_status": "Not Verified",
    "rating": 1.2,
    "number_of_reviews": 47,
    "offers": "Fast Sign-Up",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 630,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 594,
      "dosage": "1mg"
    },
    "state": "South Dakota"
  },
  {
    "company_name": "Zoomzone",
    "verification_status": "Pending Verification",
    "rating": 4.9,
    "number_of_reviews": 469,
    "offers": "New Customer Discount",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 503,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 560,
      "dosage": "0.5mg"
    },
    "state": "North Dakota"
  },
  {
    "company_name": "Janyx",
    "verification_status": "Pending Verification",
    "rating": 0.0,
    "number_of_reviews": 370,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 745,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 521,
      "dosage": "1mg"
    },
    "state": "Virginia"
  },
  {
    "company_name": "Chatterpoint",
    "verification_status": "Verified",
    "rating": 4.3,
    "number_of_reviews": 874,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 151,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 661,
      "dosage": "2.4mg"
    },
    "state": "Maryland"
  },
  {
    "company_name": "Devify",
    "verification_status": "Not Verified",
    "rating": 0.9,
    "number_of_reviews": 691,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 344,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 720,
      "dosage": "1mg"
    },
    "state": "California"
  },
  {
    "company_name": "Zoomdog",
    "verification_status": "Not Verified",
    "rating": 3.2,
    "number_of_reviews": 505,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 560,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 308,
      "dosage": "0.5mg"
    },
    "state": "New York"
  },
  {
    "company_name": "Ainyx",
    "verification_status": "Verified",
    "rating": 3.6,
    "number_of_reviews": 515,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 651,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 723,
      "dosage": "1.7mg"
    },
    "state": "Ilha do Pico"
  },
  {
    "company_name": "Linkbridge",
    "verification_status": "Pending Verification",
    "rating": 1.8,
    "number_of_reviews": 798,
    "offers": "Discount on Refills",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 894,
      "dosage": "0.5mg"
    },
    "Tirzepatide": {
      "price_per_month": 8,
      "dosage": "2.4mg"
    },
    "state": "Florida"
  },
  {
    "company_name": "Midel",
    "verification_status": "Not Verified",
    "rating": 1.3,
    "number_of_reviews": 452,
    "offers": "New Customer Discount",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 220,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 817,
      "dosage": "1mg"
    },
    "state": "Provence-Alpes-Côte d'Azur"
  },
  {
    "company_name": "Eadel",
    "verification_status": "Pending Verification",
    "rating": 2.3,
    "number_of_reviews": 175,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 795,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 745,
      "dosage": "1.7mg"
    },
    "state": "Pennsylvania"
  },
  {
    "company_name": "Ailane",
    "verification_status": "Pending Verification",
    "rating": 4.6,
    "number_of_reviews": 874,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 688,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 672,
      "dosage": "0.5mg"
    },
    "state": "Illinois"
  },
  {
    "company_name": "Browseblab",
    "verification_status": "Pending Verification",
    "rating": 3.2,
    "number_of_reviews": 147,
    "offers": "Discount on Refills",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 424,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 296,
      "dosage": "1mg"
    },
    "state": "Ohio"
  },
  {
    "company_name": "Devify",
    "verification_status": "Not Verified",
    "rating": 3.1,
    "number_of_reviews": 838,
    "offers": "Fast Sign-Up",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 921,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 949,
      "dosage": "0.5mg"
    },
    "state": "Texas"
  },
  {
    "company_name": "Gigabox",
    "verification_status": "Verified",
    "rating": 0.3,
    "number_of_reviews": 809,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 680,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 663,
      "dosage": "0.25mg"
    },
    "state": "Georgia"
  },
  {
    "company_name": "Voomm",
    "verification_status": "Not Verified",
    "rating": 2.1,
    "number_of_reviews": 498,
    "offers": "Discount on Refills",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 806,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 856,
      "dosage": "1.7mg"
    },
    "state": "North Carolina"
  },
  {
    "company_name": "Skynoodle",
    "verification_status": "Pending Verification",
    "rating": 4.2,
    "number_of_reviews": 321,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 921,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 543,
      "dosage": "1.7mg"
    },
    "state": "Michigan"
  },
  {
    "company_name": "Skidoo",
    "verification_status": "Pending Verification",
    "rating": 0.3,
    "number_of_reviews": 350,
    "offers": "Discount on Refills",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 146,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 942,
      "dosage": "0.5mg"
    },
    "state": "Centre"
  },
  {
    "company_name": "Meevee",
    "verification_status": "Not Verified",
    "rating": 3.6,
    "number_of_reviews": 996,
    "offers": "Free Shipping",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 811,
      "dosage": "1.7mg"
    },
    "Tirzepatide": {
      "price_per_month": 170,
      "dosage": "1mg"
    },
    "state": "New Jersey"
  },
  {
    "company_name": "Kwimbee",
    "verification_status": "Pending Verification",
    "rating": 4.8,
    "number_of_reviews": 697,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 223,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 482,
      "dosage": "1.7mg"
    },
    "state": "Washington"
  },
  {
    "company_name": "Geba",
    "verification_status": "Verified",
    "rating": 5.0,
    "number_of_reviews": 98,
    "offers": "New Customer Discount",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 147,
      "dosage": "0.25mg"
    },
    "Tirzepatide": {
      "price_per_month": 113,
      "dosage": "2.4mg"
    },
    "state": "Massachusetts"
  },
  {
    "company_name": "Trupe",
    "verification_status": "Pending Verification",
    "rating": 3.5,
    "number_of_reviews": 216,
    "offers": "Fast Sign-Up",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 468,
      "dosage": "1mg"
    },
    "Tirzepatide": {
      "price_per_month": 639,
      "dosage": "1mg"
    },
    "state": "Arizona"
  },
  {
    "company_name": "Blognation",
    "verification_status": "Not Verified",
    "rating": 4.8,
    "number_of_reviews": 526,
    "offers": "Free Shipping",
    "medications": "Semaglutide",
    "Semaglutide": {
      "price_per_month": 738,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 514,
      "dosage": "2.4mg"
    },
    "state": "Colorado"
  },
  {
    "company_name": "Gabtune",
    "verification_status": "Verified",
    "rating": 3.5,
    "number_of_reviews": 464,
    "offers": "Discount on Refills",
    "medications": "Tirzepatide",
    "Semaglutide": {
      "price_per_month": 722,
      "dosage": "2.4mg"
    },
    "Tirzepatide": {
      "price_per_month": 680,
      "dosage": "0.25mg"
    },
    "state": "Kuala Lumpur"
  }

]

export default data;