import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("/sifre");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
