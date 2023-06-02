import { useState } from 'react';
import { api } from "../service/api"
import styles from "../styles/detail.module.css"


export function Detail({ poster, onCloseModal }) {
  const [postter, setPostter] = useState({
    Pid: poster.id,
    Ptitulo: poster.title,
    Pauthor: poster.author
  });

  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.put(`/${postter.Pid}`, {
        title: postter.Ptitulo,
        author: postter.Pauthor,
      });
      console.log(response.data);
      setError(''); // Limpa o erro se a requisição for bem-sucedida
      window.location.reload(); // Recarrega a página
    } catch (error) {
      console.error("Ocorreu um erro ao enviar o formulário:", error);
      setError("Erro ao enviar o formulário. Por favor, tente novamente."); // Define a mensagem de erro
    }
  };

  const handleDelete = async () => {
    try {
      const response = await api.delete(`/${postter.Pid}`);
      console.log(response.data);
      setError(''); // Limpa o erro se a requisição for bem-sucedida
      window.location.reload(); // Recarrega a página
    } catch (error) {
      console.error("Ocorreu um erro ao excluir o registro:", error);
      setError("Erro ao excluir o registro. Por favor, tente novamente."); // Define a mensagem de erro
    }
  };

  return (
    <div>
      {isOpen && (
        <div className={styles.formulario_screen}>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <div onClick={onCloseModal} className={styles.botao_fechar}>X</div>
            {error && <div>{error}</div>} {/* Renderiza a mensagem de erro, se houver */}
            <div className={styles.titulo}>
              <label htmlFor="title">Titulo:</label>
              <input
                type="text"
                value={postter.Ptitulo}
                onChange={(e) => setPostter({ ...postter, Ptitulo: e.target.value })}
              /><br></br>
            </div>
            <div>
              <label htmlFor="author">Autor:</label>
              <input
                type="text"
                value={postter.Pauthor}
                onChange={(e) => setPostter({ ...postter, Pauthor: e.target.value })}
              /><br></br>
            </div>
            <div className={styles.button_container}>
              <button onClick={handleSubmit} className={styles.botao_alterar}>Alterar</button><br></br>
              <button type="button" onClick={handleDelete} className={styles.botao_excluir}>Excluir</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}