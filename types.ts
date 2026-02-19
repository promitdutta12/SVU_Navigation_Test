
export interface Leader {
  id: string;
  name: string;
  role: string;
  department?: string;
  image: string;
  bio: string;
}

export interface CampusEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'academic' | 'cultural' | 'sports' | 'seminar';
}

export interface EmergencyContact {
  name: string;
  number: string;
  icon: string;
}

export interface NavLocation {
  name: string;
  lat: number;
  lng: number;
  description: string;
}
