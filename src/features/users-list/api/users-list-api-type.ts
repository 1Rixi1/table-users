export type UsersDataType = {
  success: boolean;
  message: string;
  total_users: number;
  offset: number;
  limit: number;
  users: UsersListType[];
};

export type UsersListType = {
  id: number;
  gender: number;
  date_of_birth: number;
  job: number;
  city: number;
  zipcode: number;
  latitude: number;
  profile_picture: number;
  first_name: number;
  last_name: number;
  email: number;
  phone: number;
  street: number;
  state: number;
  country: number;
  longitude: number;
};
