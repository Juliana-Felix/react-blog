import React, { useState } from 'react';

export function Detail({ poster }) {
    const postter = {
        Ptitulo:poster.title,
        Pauthor:poster.author
    }
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
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
        <form action="">
            <label htmlFor="title">Titulo:</label>
            <input type="text" value={postter.Ptitulo}/>
            <label htmlFor="author">Autor:</label>
            <input type="text" value={postter.Pauthor} />
            <button>Alterar</button>
        </form>
      )}
    </div>
  );
}