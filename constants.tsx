
import { Leader, CampusEvent, EmergencyContact, NavLocation } from './types';

export const UNIVERSITY_INFO = {
  name: "Swami Vivekananda University",
  location: "Barrackpore, West Bengal, India",
  coords: { lat: 22.766, lng: 88.396 }
};

export const UNIVERSITY_HIGHLIGHTS = [
  {
    title: "Innovation Hub",
    description: "Our state-of-the-art labs foster a culture of research and technological advancement.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Green Campus",
    description: "A sustainable ecosystem promoting environmental consciousness among students.",
    image: "https://images.unsplash.com/photo-1523050335392-9beffa5d0944?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Cultural Diversity",
    description: "Celebrating heritage and unity through various cultural festivals and student clubs.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Expert Faculty",
    description: "Guided by industry veterans and academic scholars dedicated to student success.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
  }
];

export const LEADERS: Leader[] = [
  {
    id: '1',
    name: "Dr. S. K. Bhattacharya",
    role: "Chancellor / Owner",
    image: "https://picsum.photos/seed/chancellor/400/400",
    bio: "Visionary educator dedicated to bringing world-class technical education to West Bengal."
  },
  {
    id: '2',
    name: "Prof. Animesh Das",
    role: "HOD - Computer Science",
    department: "Engineering",
    image: "https://picsum.photos/seed/hodcs/400/400",
    bio: "Expert in Artificial Intelligence and Machine Learning with over 20 years of academic experience."
  },
  {
    id: '3',
    name: "Dr. Rina Mukherjee",
    role: "HOD - Biotechnology",
    department: "Life Sciences",
    image: "https://picsum.photos/seed/hodbio/400/400",
    bio: "Leading researcher in genetic engineering and sustainable biological systems."
  },
  {
    id: '4',
    name: "Dr. Amitav Ghosh",
    role: "HOD - Management",
    department: "Business Administration",
    image: "https://picsum.photos/seed/hodmgmt/400/400",
    bio: "Focuses on strategic innovation and industrial relations in the modern corporate era."
  }
];

export const EVENTS: CampusEvent[] = [
  {
    id: 'e1',
    title: "Annual Tech Fest 2024",
    date: "2024-11-15",
    location: "Main Auditorium",
    description: "A showcase of engineering excellence and coding competitions.",
    type: 'academic'
  },
  {
    id: 'e2',
    title: "Vivekananda Cultural Night",
    date: "2024-12-05",
    location: "Campus Grounds",
    description: "Traditional music, dance, and cultural performances by students.",
    type: 'cultural'
  },
  {
    id: 'e3',
    title: "Inter-College Cricket Cup",
    date: "2025-01-10",
    location: "Sports Complex",
    description: "The biggest sports event of the semester.",
    type: 'sports'
  }
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  { name: "Campus Security", number: "+91 98765 43210", icon: "fa-shield-halved" },
  { name: "Medical Emergency", number: "102 / +91 90000 11111", icon: "fa-heart-pulse" },
  { name: "Fire Safety", number: "101", icon: "fa-fire-extinguisher" },
  { name: "Anti-Ragging Helpline", number: "1800 123 4567", icon: "fa-handshake-slash" }
];

export const CAMPUS_LOCATIONS: NavLocation[] = [
  { name: "Main Administrative Building", lat: 22.7661, lng: 88.3962, description: "Office of the Chancellor, Registrar, and Admissions." },
  { name: "Engineering Block (B-Tech)", lat: 22.7665, lng: 88.3958, description: "Department of CS, ME, CE, and EE." },
  { name: "Science and Biotech Lab", lat: 22.7658, lng: 88.3965, description: "Modern laboratories for research." },
  { name: "Main Library", lat: 22.7663, lng: 88.3967, description: "Central library with over 50k volumes." },
  { name: "Cafeteria & Student Center", lat: 22.7655, lng: 88.3960, description: "Multi-cuisine cafeteria and hangouts." }
];
