import axios from "axios";
import { url, headers } from "./header";

export const query = async (query) => {
  const res = await axios({
    method: "post",
    url,
    headers,
    data: {
      query,
    },
  });
  console.log(res.data);
  return res.data;
};
