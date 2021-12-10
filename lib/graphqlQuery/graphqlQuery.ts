import { DocumentNode, gql } from "@apollo/client";
import { ExamType, InsertExamType } from "../types/types";

export const getAllExamsQuery: () => DocumentNode = () =>
  gql(getAllExamsQueryString());

export const getAllCourseQuery: () => DocumentNode = () =>
  gql(getAllCourseQueryString());

export const getSignInInformationQuery: (email: string) => DocumentNode = (
  email
) => gql(getSignInInformationQueryString(email));

export const getUpsertQueryWithEmail: (
  email: string,
  name: string,
  imageUrl: string
) => DocumentNode = (name, email, imageUrl) =>
  gql(getUpsertQueryWithEmailString(name, email, imageUrl));

export const getInsertExamQuery: (examInfo: InsertExamType) => DocumentNode = (
  examInfo
) => {
  return gql(getInsertExamQueryString(examInfo));
};

export const getExamByIdQuery: (id: string) => DocumentNode = (id) =>
  gql(getExamByIdQueryString(id));

export const getAllExamsQueryString: () => string = () => {
  return `
  query MyQuery {
    exams {
      id
      exam_title
      start_date
      start_time
      end_time
      course {
        course_title
        course_code
      }
      user {
        name
        email
      }
    }
  }
`;
};

export const getAllCourseQueryString: () => string = () => `
  query MyQuery {
    courses {
      course_code
      course_title
    }
  }
`;

export const getSignInInformationQueryString: (email: string) => string = (
  email
) => `
    query MyQuery {
        users(where: {email: {_eq: "${email}"}}) {
        adminRole
        name
        }
    }
`;

export const getUpsertQueryWithEmailString: (
  email: string,
  name: string,
  imageUrl: string
) => string = (name, email, imageUrl) => `
  mutation random {
    insert_users_one(
      object: {
        email: "${email}"
        imageUrl: "${imageUrl}"
        name: "${name}"
      }
      on_conflict: {
        constraint: users_email_key
        update_columns: [imageUrl, name]
      }
    ) {
      imageUrl
      name
      email
      adminRole
    }
  }
`;

export const getInsertExamQueryString: (examInfo: InsertExamType) => string = (
  examInfo
) => {
  return `
    mutation MyMutation {
        insert_exams_one(
          object: {
            course_code: "${examInfo.course_code}"
            creatorEmail: "${examInfo.creatorEmail}"
            end_time: "${examInfo.end_time}"
            start_time: "${examInfo.start_time}"
            exam_title: "${examInfo.exam_title}"
            start_date: "${examInfo.start_date}"
          }
        ) {
          id
        }
      }
    `;
};

export const getExamByIdQueryString: (id: string) => string = (id) => `
  query MyQuery {
    exams(where: {id: {_eq: ${id}}}) {
      id
      exam_title
      start_date
      start_time
      end_time
      course {
        course_title
        course_code
      }
      user {
        name
        email
      }
    }
  }`;
