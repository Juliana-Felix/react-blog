import { api } from "../service/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../styles/create.module.css"
import retorna from "../assets/retorna.png"

export function CreatePost() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/', {
        title,
        author,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Ocorreu um erro ao enviar o formulário:", error);
    }
    setTitle('')
    setAuthor('')
  };

  function handlePage() {
    navigate('/')
  }

  return (
    <div className={styles.create_screen}>
      <button onClick={handlePage} className={styles.botao_voltar}><img src={retorna} className={styles.icon_voltar} /> Voltar</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div><br />
        <div>
          <label htmlFor="author">Autor:</label>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <button className={styles.botao_inserir}>Inserir</button>
      </form>
    </div>
  )
}