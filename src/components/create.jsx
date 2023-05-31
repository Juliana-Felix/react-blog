import axios from "axios"
import { api } from "../service/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function CreatePost(){
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await api.post('/',{
            title,
            author,
          });
          console.log(response.data);
          // Realizar ações adicionais após o envio bem-sucedido do formulário
        } catch (error) {
          console.error("Ocorreu um erro ao enviar o formulário:", error);
        }
        setTitle('')
        setAuthor('')
    };

    function handlePage(){
        navigate('/')
    }

    return (
        <div>
            <button onClick={handlePage}>Voltar</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Título:</label>
                <input type="text"  id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="author">Ator:</label>
                <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <button>Inserir</button>
            </form>
        </div>
    )
}