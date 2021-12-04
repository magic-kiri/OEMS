import { DocumentNode, gql } from "@apollo/client";
import { ExamType, InsertExamType } from "../types/types";

export const getAllExamsQuery: () => DocumentNode = () => gql`
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

export const getAllCourseQuery: () => DocumentNode = () => gql`
  query MyQuery {
    courses {
      course_code
      course_title
    }
  }
`;

export const getSignInInformationQuery: (email: string) => DocumentNode = (
  email
) => gql`
    query MyQuery {
        users(where: {email: {_eq: "${email}"}}) {
        adminRole
        name
        }
    }
`;

export const getUpsertQueryWithEmail: (
  email: string,
  name: string,
  imageUrl: string
) => DocumentNode = (name, email, imageUrl) => gql`
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

export const getInsertExamQuery: (examInfo: InsertExamType) => DocumentNode = (
  examInfo
) => {
  return gql`
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
