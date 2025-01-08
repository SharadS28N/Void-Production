export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Tournament {
  id: number;
  name: string;
  date: string;
  fee: number;
  game: string;
  slots: number;
  registeredTeams: number;
  prizePool: number;
}

export interface OrganizationForm {
  organizationName: string;
  organizationType: 'school' | 'college' | 'organization';
  contactPerson: string;
  email: string;
  phone: string;
  eventType: 'pubg' | 'freefire' | 'valorant' | 'mobilelegends';
  expectedParticipants: string;
  preferredDate: string;
  paymentMethod: 'esewa' | 'khalti';
}