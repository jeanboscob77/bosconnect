// utils/types.ts

export type ServiceIcon =
  | "GraduationCap"
  | "Briefcase"
  | "PenLine"
  | "Globe"
  | "Palette"
  | "Megaphone"
  | "Code"
  | "Headphones"
  | "Cloud"
  | "Laptop2"
  | "Download"
  | "Wifi";

export interface Service {
  title: string;
  description: string;
  icon: ServiceIcon;
}

export interface ServiceGroup {
  category: string;
  services: Service[];
}
