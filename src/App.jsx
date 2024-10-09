import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchPhotos } from "./services/api";
import { BallTriangle } from "react-loader-spinner";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setPhotos([]);
      setError(false);
      setLoading(true);
      const data = await fetchPhotos(topic);
      setPhotos(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  // useEffect(() => {
  //   async function getPhotos() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchPhotos("react");
  //       setPhotos(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getPhotos();
  // }, []);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {photos.length > 0 && <ImageGallery items={photos} />}
    </div>
  );
}

export default App;
