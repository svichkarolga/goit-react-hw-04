import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const CLIENT_ID = "51zLVqzMW1IyaGydfIDPgkvKGcvx2JDVAUCKiVuXH0o";

export const fetchPhotos = async (topic, currentPage) => {
  const response = await axios.get(
    `/search/photos?client_id=${CLIENT_ID}&query=${topic}&page=${currentPage}&per_page=12`
  );
  console.log(response);
  return response.data;
};
