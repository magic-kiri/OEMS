export type ExamType = {
  id: string;
  start_time: Date;
  end_time: Date;
  course: {
    course_code: string;
    course_title: string;
  };
  user: {
    name: string;
    email: string;
  };
};

export type UserInfoType = {
  name: string;
  email: string;
  adminRole: boolean;
  imageUrl: string;
};

// export const dummyUserInfo: UserInfo = {
//   name: "",
//   email: "",
//   adminRole: false,
//   imageUrl: ""
// }

export type UpsertUserType = {
  name: string;
  email: string;
  imageUrl: string;
};
