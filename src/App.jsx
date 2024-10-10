import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchPhotos } from "./services/api";
import { DNA } from "react-loader-spinner";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [totalPages, setTotalPages] = useState(999);

  const handleSearch = async (newTopic) => {
    setPhotos([]);
    setPage(1);
    setTopic(newTopic);
  };

  const handleLoadMore = () => {
    console.log(handleLoadMore);
    setPage(page + 1);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getPhotos() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchPhotos(topic, page);
        if (page === 1) {
          setTotalPages(data.total_pages);
        }

        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPhotos();
  }, [page, topic]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {photos.length > 0 && <ImageGallery items={photos} />}
      {loading && (
        <div className="loader - wrapper">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {photos.length > 0 && !loading && (
        // photos.length > 0 && !loading && page < totalPages && (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
      {page >= totalPages && <p>The end!</p>}
      <div>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid black",
              padding: "16px",
              color: "black",
              background: "aqua",
            },
          }}
          containerStyle={{
            position: "relative",
          }}
        />
      </div>
    </div>
  );
}

export default App;
