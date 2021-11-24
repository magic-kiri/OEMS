import { query } from "../../lib/databaseQuery/query";
import { getSignInInformationQuery } from "../../lib/graphqlQuery/graphqlQuery";

export const getSignInInformation = async (email: string) => {
  const res = await query(getSignInInformationQuery(email));
  if (res?.data?.users?.length) {
    return res.data.users[0];
  }
  return { adminRole: false };
};
