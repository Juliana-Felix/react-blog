import React, { useState } from 'react';

export function Detail({ poster }) {
    const [postter, setPostter] = useState({
        Ptitulo: poster.title,
        Pauthor: poster.author
      });

  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

        try {
        const response = await api.put('/',{
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

  return (
    <div>
      {isOpen && (
       /* <div className="modal">
          <div className="modal-content">
            <h2>{poster.title}</h2>
            <p>Autor: {poster.author}</p>
          </div>
        </div>*/
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Titulo:</label>
            <input type="text" value={postter.Ptitulo} onChange={(e) => setPostter.Ptitulo(e.target.value)}/>
            <label htmlFor="author">Autor:</label>
            <input type="text" value={postter.Pauthor} onChange={(e) => setPostter.Pauthor(e.target.value)}  />
            <button>Alterar</button>
        </form>
      )}
    </div>
  );
}