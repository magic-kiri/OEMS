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
