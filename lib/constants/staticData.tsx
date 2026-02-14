import AC from "@/assets/icons/AC.png";
import Cleaning from "@/assets/icons/cleaning.png";
import Electrical from "@/assets/icons/Electrical.png";
import Maintenance from "@/assets/icons/Maintenance.png";
import Plumbing from "@/assets/icons/Plumbing.png";
import Truck from "@/assets/icons/Truck.png";

// Service images
import Carousel from "@/assets/images/Carousel1.png";
import ProfessionalProfile from "@/assets/images/professional-profile.png";
import ServiceAC from "@/assets/images/service-ac.png";
import ServiceCleaning from "@/assets/images/service-cleaning.png";
import ServiceMaintenance from "@/assets/images/service-maintenance.png";
import ServicePlumbing from "@/assets/images/service-plumbing.png";
import SpecialOfferWoman from "@/assets/images/special-offer-woman.png";
import { BadgeDollarSign, CalendarDays, CreditCard, HardHat, PhoneCall, ShieldCheck } from "lucide-react-native";

export const services = [
  { id: 1, name: 'Cleaning', icon: Cleaning, bgColor: '#FFF5E6' },
  { id: 2, name: 'Maintenance', icon: Maintenance, bgColor: '#E6F3FF' },
  { id: 3, name: 'Plumbing', icon: Plumbing, bgColor: '#FFE6E6' },
  { id: 4, name: 'Electrical', icon: Electrical, bgColor: '#F3E6FF' },
  { id: 5, name: 'AC', icon: AC, bgColor: '#FFE6F0' },
  { id: 6, name: 'Parking', icon: AC, bgColor: '#E6FFF0' },
  { id: 7, name: 'Moving', icon: Truck, bgColor: '#E6F9FF' },
  { id: 8, name: 'More', icon: Truck, bgColor: '#E6ECFF' },
];

export const popularServices = [
  { id: 1, name: 'Full House Cleaning', price: 'SAR 300', rating: '4.9', reviews: '234', image: ServiceCleaning },
  { id: 2, name: 'Maintenance', price: 'SAR 300', rating: '4.9', reviews: '234', image: ServiceMaintenance },
  { id: 3, name: 'Plumbing', price: 'SAR 300', rating: '4.9', reviews: '234', image: ServicePlumbing },
  { id: 4, name: 'AC Service', price: 'SAR 300', rating: '4.9', reviews: '234', image: ServiceAC },
];

export const allServices = [
  { id: 1, name: 'Cleaning', price: 'SAR 300/hr', rating: '4.9', image: ServiceCleaning, slug: 'cleaning' },
  { id: 2, name: 'Maintenance', price: 'SAR 300/hr', rating: '4.9', image: ServiceMaintenance, slug: 'maintenance' },
  { id: 3, name: 'Plumbing', price: 'SAR 300/hr', rating: '4.9', image: ServicePlumbing, slug: 'plumbing' },
  { id: 4, name: 'Electrical', price: 'SAR 300/hr', rating: '4.9', image: ServiceMaintenance, slug: 'electrical' },
  { id: 5, name: 'AC', price: 'SAR 300/hr', rating: '4.9', image: ServiceAC, slug: 'ac' },
  { id: 6, name: 'Painting', price: 'SAR 300/hr', rating: '4.9', image: ServiceCleaning, slug: 'painting' },
  { id: 7, name: 'Moving', price: 'SAR 300/hr', rating: '4.9', image: ServicePlumbing, slug: 'moving' },
];

export const cleaningServices = [
  {
    id: 1,
    name: 'Living Room Cleaning',
    image: ServiceCleaning,
    rating: 5,
    reviews: 130,
    price: 150,
    originalPrice: 180,
  },
  {
    id: 2,
    name: 'Complete Kitchen Cleaning',
    image: ServiceMaintenance,
    rating: 5,
    reviews: 130,
    price: 150,
    originalPrice: 180,
  },
  {
    id: 3,
    name: 'Window Cleaning',
    image: ServiceCleaning,
    rating: 5,
    reviews: 130,
    price: 150,
    originalPrice: 180,
  },
];

export const serviceDetailsData = {
  1: {
    id: 1,
    name: 'Living Room Cleaning',
    image: ServiceCleaning,
    rating: 4.9,
    reviews: 130,
    price: 150,
    duration: '3 Hours',
    team: '2 Peoples',
    booking: 'Instant',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    inclusions: [
      'Wiping windows to remove dust.',
      'Stain removal using safe materials that do not affect the colors.',
      'Professional drying to ensure perfect cleanliness.',
    ],
    provider: {
      name: 'Zubair Bin Talha',
      role: 'Service Provider',
      image: ProfessionalProfile,
    },
    safetyGuarantee: '100% vaccinated staff & background checked',
    reviewsList: [
      {
        id: 1,
        name: 'Abdullah',
        avatar: ProfessionalProfile,
        rating: 5,
        date: '04 Apr 2023',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name: 'Aleem',
        avatar: ProfessionalProfile,
        rating: 5,
        date: '04 Apr 2023',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        name: 'Ayesha',
        avatar: ProfessionalProfile,
        rating: 5,
        date: '04 Apr 2023',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  2: {
    id: 2,
    name: 'Complete Kitchen Cleaning',
    image: ServiceMaintenance,
    rating: 4.9,
    reviews: 130,
    price: 150,
    duration: '3 Hours',
    team: '2 Peoples',
    booking: 'Instant',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    inclusions: [
      'Deep cleaning of all kitchen surfaces.',
      'Appliance cleaning and sanitization.',
      'Cabinet and countertop polishing.',
    ],
    provider: {
      name: 'Zubair Bin Talha',
      role: 'Service Provider',
      image: ProfessionalProfile,
    },
    safetyGuarantee: '100% vaccinated staff & background checked',
    reviewsList: [
      {
        id: 1,
        name: 'Abdullah',
        avatar: ProfessionalProfile,
        rating: 5,
        date: '04 Apr 2023',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name: 'Aleem',
        avatar: ProfessionalProfile,
        rating: 5,
        date: '04 Apr 2023',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        name: 'Ayesha',
        avatar: ProfessionalProfile,
        rating: 5,
        date: '04 Apr 2023',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  3: {
    id: 3,
    name: 'Window Cleaning',
    image: ServiceCleaning,
    rating: 4.9,
    reviews: 130,
    price: 150,
    duration: '2 Hours',
    team: '1 People',
    booking: 'Instant',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    inclusions: [
      'Interior and exterior window cleaning.',
      'Frame and sill wipe-down.',
      'Streak-free finish guarantee.',
    ],
    provider: {
      name: 'Zubair Bin Talha',
      role: 'Service Provider',
      image: ProfessionalProfile,
    },
    safetyGuarantee: '100% vaccinated staff & background checked',
    reviewsList: [
      {
        id: 1,
        name: 'Abdullah',
        avatar: ProfessionalProfile,
        rating: 5,
        date: '04 Apr 2023',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name: 'Aleem',
        avatar: ProfessionalProfile,
        rating: 5,
        date: '04 Apr 2023',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        name: 'Ayesha',
        avatar: ProfessionalProfile,
        rating: 5,
        date: '04 Apr 2023',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
};

export const userProfile = {
  name: 'Abdullah Tahir',
  email: 'abdullah.tahir@email.com',
  firstName: 'Abdullah',
  lastName: 'Tahir',
  phone: '553097831',
  countryCode: '+966',
  title: 'mr',
  avatar: ProfessionalProfile,
  walletBalance: '0.00',
  points: 0,
};

export { Carousel, ProfessionalProfile, SpecialOfferWoman };

export const whyHomeyFeatures = [
  { icon: <HardHat size={20} color="#C59315" />, title: 'Professional\nTechnicians' },
  { icon: <CalendarDays size={20} color="#C59315" />, title: 'Quick\nBooking' },
  { icon: <BadgeDollarSign size={20} color="#C59315" />, title: 'Price\nGuarantee' },
  { icon: <PhoneCall size={20} color="#C59315" />, title: 'Customer\nService 24/7' },
  { icon: <CreditCard size={20} color="#C59315" />, title: 'Secure\nPayments' },
  { icon: <ShieldCheck size={20} color="#C59315" />, title: 'Golden\nGuarantee' },
];

export const workerProfile = {
  id: 1,
  name: 'Zubair Bin Talha',
  role: 'Senior House Cleaner',
  location: 'Riyadh',
  availability: 'Available Today',
  verified: true,
  backgroundChecked: true,
  experience: '8 Yrs',
  experienceLabel: 'Experience',
  jobsDone: '1.2k+',
  jobsLabel: 'Jobs Done',
  rating: '4.9',
  ratingLabel: 'Rating',
  about: 'Specializing in residential wiring and smart home installation. I prioritize safety and cleanliness in every home I visit. Fully certified and trained for modern electrical systems.',
  price: 150,
  profileImage: ProfessionalProfile,
  recentWork: [ServiceCleaning, ServiceMaintenance, ServicePlumbing],
  reviews: {
    overall: 4.4,
    count: 128,
    breakdown: {
      punctuality: { label: 'Punctuality', value: 5.0 },
      service: { label: 'Service', value: 4.8 },
      price: { label: 'Price', value: 4.9 },
    },
    list: [
      {
        id: 1,
        name: 'Abdullah',
        avatar: ProfessionalProfile,
        rating: 5,
        date: '04 Apr 2023',
        comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
      {
        id: 2,
        name: 'Aleem',
        avatar: ProfessionalProfile,
        rating: 4,
        date: '04 Apr 2023',
        comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
    ],
  },
};

export const bookingsData = {
  active: [
    {
      id: 1,
      name: 'AC Maintenance',
      orderId: '8821',
      serviceType: 'Standard Service',
      status: 'On the way',
      statusColor: '#EEFBF4',
      statusText: '#4ADE80',
      date: 'Today, 4:00 PM',
      image: ServiceAC,
      provider: {
        name: 'Zubair Bin Talha',
        rating: 4.8,
        image: ProfessionalProfile,
      }
    },
    {
      id: 2,
      name: 'Living Room Cleaning',
      orderId: '8821',
      serviceType: 'Standard Service',
      status: 'Scheduled',
      statusColor: '#E0E7FF',
      statusText: '#4F46E5',
      date: 'Tomorrow, 10:00 AM',
      image: ServiceCleaning,
    },
    {
      id: 3,
      name: 'Plumbing Repair',
      orderId: '8830',
      serviceType: 'Leak Fix',
      status: 'Pending',
      statusColor: '#FFF7ED',
      statusText: '#F97316',
      date: 'Assigning Professional...',
      image: ServicePlumbing,
    }
  ],
  past: [
    {
      id: 4,
      name: 'Living Room Cleaning',
      orderId: '8821',
      serviceType: 'Standard Service',
      status: 'Completed',
      statusColor: '#EEFBF4',
      statusText: '#4ADE80',
      date: 'Mon, Jan 01, 2026',
      image: ServiceCleaning,
      price: 150,
      rating: 5.0,
      provider: {
        name: 'Zubair Bin Talha',
        image: ProfessionalProfile,
      }
    }
  ]
};

export const trackingData = {
  id: 1,
  estimatedArrival: '12 mins',
  distance: '2.4 km',
  status: 'On the Way',
  progress: 0.6,
  provider: {
    name: 'Zubair Bin Talha',
    role: 'Service Provider',
    image: ProfessionalProfile,
  },
  jobDetails: {
    orderId: '#HS-78429',
    service: 'AC Maintenance & Cleaning',
    scheduled: 'Today, 2:30 PM',
    location: 'Villa 24, Al Narjis District, Riyadh',
  }
};

export const reviewOptions = [
  'Service Quality',
  'Technician Behavior',
  'On Time Service',
  'Customer Support'
];
export const commonQuestions = [
  { id: 1, question: 'What is the order id?', icon: 'ClipboardList' },
  { id: 2, question: 'How can I know my order is accepted?', icon: 'CheckCircle' },
  { id: 3, question: 'Are the professionals verified?', icon: 'ShieldCheck' },
  { id: 4, question: 'What is the cancellation policy?', icon: 'XCircle' },
];

export const faqsData = {
  General: [
    { id: 1, question: 'How to contact with riders ?', answer: 'You can contact riders through the chat or call button in your booking details.' },
    { id: 2, question: 'How to change my selected Service ?', answer: 'To change a service, you may need to cancel and rebook or contact support for assistance.' },
    { id: 3, question: 'What is cost of each item ?', answer: 'Costs vary by service and are shown in the service catalog and your payment details.' },
  ],
  Contact: [
    { id: 4, question: 'What is the customer care number?', answer: 'Our customer care number is available 24/7 at +966 55 XXX XXXX.' },
    { id: 5, question: 'Can I Cancel the order after one week?', answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 6, question: 'How to call any service now?', answer: 'Simply browse our services and click on "Book Now" for instant booking.' },
  ]
};

export const supportChatMessages = [
  { id: 1, text: 'Hey, I need help !', time: '08:15 AM', type: 'user' },
  { id: 2, text: 'Good morning ! How Can I Help?', time: '08:20 AM', type: 'support' },
  { id: 3, text: 'I ordered today, but I forget to add some furniture, so How can I add more?', time: '08:22 AM', type: 'user' },
  { id: 4, text: 'Ok, you just need to search for history and there you can see your order details.', time: '08:24 AM', type: 'support' },
  { id: 5, text: 'You can edit anything there super fast 🔥', time: '08:25 AM', type: 'support' },
];

export const earningsData = {
  workerName: 'Zubair Bin Talha',
  availableBalance: 4250.00,
  pendingCash: 840.00,
  currency: 'SAR',
  weeklyTrend: {
    percentage: 12.5,
    isPositive: true,
  },
  chartData: [], // 7 days of earnings data
  statistics: {
    totalEarnings: 125,
    rating: 4.9,
    totalJobs: 24,
  },
  recentJobs: []
}


export const walletData = {
  balance: 'SAR 0.00',
  history: [
    { id: 1, type: 'AC Maintenance', date: 'Today, 10:30 AM', amount: '- SAR250.00', isExpense: true },
    { id: 2, type: 'Wallet Top Up', date: 'Yesterday, 5:15 PM', amount: '+ SAR 500.00', isExpense: false },
  ],
  vouchers: 0,
};

export const paymentMethods = [
  { id: 1, name: 'Paytm', icon: 'paytm', selected: true },
  { id: 2, name: 'Amazon Pay', icon: 'amazon', selected: false },
  { id: 3, name: 'Paytm UPI', icon: 'paytm', selected: false },
  { id: 4, name: 'Google Pay', icon: 'google', selected: false },
  { id: 5, name: 'Cash on Delivery', icon: 'cash', selected: false },
];

export const referralData = {
  code: '0505505',
  credit: '50 SAR',
  benefits: [
    'Get 50 SAR credit after your friend’s first order',
    'Your friend receives 50 SAR on their first order',
  ]
};

// Worker home screen data
export const workerHomeData = {
  statusMessage: 'Ready to receive jobs.',
  metrics: {
    earnings: '450',
    rating: '4.92',
    jobs: '12',
  },
  activeJob: {
    id: '49202',
    title: 'Central AC Repair',
    time: '09:00 AM-11:30 AM',
    client: {
      name: 'Omar Al-Saud',
      location: 'Al Malqa District, Riyadh',
      image: ProfessionalProfile,
    },
    status: 'In Progress',
  },
  recentActivity: [
    { id: 1, type: 'job', title: 'AC Repair', amount: '+150 SAR', status: 'Done', time: '4 hours ago' },
    { id: 2, type: 'job', title: 'Electrical Work', amount: '+180 SAR', status: 'Done', time: 'Yesterday' },
    { id: 3, type: 'review', title: 'New Review', snippet: 'Excellent service, very fast!', rating: '5.0', time: 'Yesterday' },
  ],
};
