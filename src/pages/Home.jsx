import React, { useEffect, useState } from "react";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";
import { Detail } from "../components/details";

export function Home() {
  const [posters, setPosters] = useState([]);
  const navigate = useNavigate();
  const [selectedPoster, setSelectedPoster] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get();
        console.log(response.data);
        setPosters(response.data);
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    };

    fetchData();
  }, []);

  const handleCreatePost = () => {
    navigate('/newpost')
  };

  const handleOpenModal = (poster) => {
    setSelectedPoster(poster);
  };

  const handleCloseModal = () => {
    setSelectedPoster(null);
  };

  return (
    <div>
      {posters.length > 0 ? (
        <>
          <button onClick={handleCreatePost}>Criar novo poster</button>
          {posters.map((data) => (
            <div key={data.id} onClick={() => handleOpenModal(data)}>
              {data.title}
              <br />
              {data.author}
            </div>
          ))}
          <div>
            {selectedPoster && (
              <>
               <Detail poster={selectedPoster} />
               <div onClick={handleCloseModal}>x</div>
              </>
            )}
          </div>
        </>
      ) : (
        <div>
          <p>O blog está vazio, crie o primeiro poster...</p>
          <button>Criar o primeiro pôster</button>
        </div>
      )}
    </div>
  );
}
