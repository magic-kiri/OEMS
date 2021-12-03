import { DocumentNode } from "@apollo/client";
import client from "../../apollo-client";

export const query = async (query: DocumentNode) => {
  try {
    const { data } = await client.query({
      query,
    });

    return data;
  } catch (err) {
    return { message: err };
  }
};

export const mutation = async (query: DocumentNode) => {
  try {
    const { data } = await client.mutate({
      mutation: query,
    });

    return data;
  } catch (err) {
    return { message: err };
  }
};