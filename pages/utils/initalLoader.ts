import { query } from "../api/databaseQuery/query";

export const getInitialInformation = async (email: string) => {
  const res = await query(`
    query MyQuery {
      users(where: {email: {_eq: "${email}"}}) {
        adminRole
        name
      }
    }
  `);
  if(res.data.users.length){
    return res.data.users[0];
  }
  return {adminRole: false};
};
