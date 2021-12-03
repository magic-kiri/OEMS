export type ExamType = {
  id: string;
  start_time: Date;
  end_time: Date;
  course_code: string;
  course_title: string;
  teacher_name: string;
};

export type UserInfo = {
  name: string;
  email: string;
  adminRole: boolean;
};

export type UpsertUserType = {
  name: string,
  email: string,
  imageUrl: string
}
