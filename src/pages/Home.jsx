import { useEffect, useState } from "react"
import { api } from "../service/api"
import axios from "axios";
export function Home(){
    const [posters, setPosters] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
            
              const response = await api.get();
              console.log(response.data)
              setPosters(response.data);
            } catch (error) {
                console.log(api)
              console.error('Ocorreu um erro:', error);
            }
        };

        fetchData();
    }, []); 
    
    return(
        <div>
        {posters.length > 0  ? (
        <>
          <button>Criar novo poster</button>
          {posters.map((data) => (
              <div key={data.id}>
                {data.title} 
                <br />
                {data.author}
              </div>
          ))}
        </>
        ) : (
            <div>
                <p>O blog está vazio, crie o primeiro poster...</p>
                <button>
                    Criar o primeiro pôster
                </button>
            </div>
        )}
      </div>
    )
}