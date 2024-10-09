import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const CLIENT_ID = "51zLVqzMW1IyaGydfIDPgkvKGcvx2JDVAUCKiVuXH0o";

export const fetchPhotos = async (topic) => {
  const response = await axios.get(
    `/photos?client_id=${CLIENT_ID}&query=${topic}}`
  );
  return response.data;
};
