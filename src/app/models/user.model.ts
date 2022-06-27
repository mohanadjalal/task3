export interface userPreview {
  id: number;
  title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
  firstName: string;
  lastName: string;
  picture: string;
}

export interface userFull extends userPreview {
  gender: 'male' | 'female' | 'other';
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: object;
}

export interface List<type> {
  data: Array<type>;
  total: number;
  page: number;
  limit: number;
}
