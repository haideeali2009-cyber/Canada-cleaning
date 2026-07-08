export interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet?: number;
  preferredDate: string;
  preferredTimeSlot: string;
  additionalNotes?: string;
  status: 'pending' | 'approved' | 'completed' | 'cancelled';
  createdAt: string;
  totalCost: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  basePrice: number;
  perBedroomPrice: number;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
}

export interface StatsCounter {
  value: number;
  label: string;
  suffix: string;
}

export interface EmailLog {
  id: string;
  to: string;
  subject: string;
  body: string;
  sentAt: string;
  type: 'customer' | 'business';
}
