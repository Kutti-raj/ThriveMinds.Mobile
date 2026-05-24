export type Employee = {
  id: number;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  address: string;
  joining_date: string;
  profile_image: string;
};

export type RootStackParamList = {
  SplashScreen: undefined;
  EmployeeList: undefined;
  EmployeeDetail: {
    employee: Employee;
  };
};
