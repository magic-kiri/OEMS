import { DocumentNode, gql } from "@apollo/client";

export const getAllExamsQuery: () => DocumentNode = () => gql`
  query MyQuery {
    exams {
      end_time
      id
      start_time
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
