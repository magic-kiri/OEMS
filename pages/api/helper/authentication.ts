import { getUpsertQueryWithEmail } from '../../../lib/graphqlQuery/graphqlQuery';
import client from "../apollo-client";

export async function upsertUser({name, email, imageUrl}){
  const {data} = await client.query({query: getUpsertQueryWithEmail(name,email,imageUrl)})
}