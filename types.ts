export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  enrollmentCount: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
}