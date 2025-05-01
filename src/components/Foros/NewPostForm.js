import React, { useState } from 'react';
import './NewPostForm.css';

const NewPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) return;

      const newPost = {
          id: Date.now(),
          title,
          body,
          image,
          date: new Date().toLocaleDateString(),
      };

    onSubmit(newPost);

    setTitle('');
    setBody('');
    setImage('');
  };

  return (
    <form className="new-post-form" onSubmit={handleSubmit}>
      <h2>Crear nueva publicación</h2>
      <input
        type="text"
        placeholder="Título..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="¿Qué quieres compartir?"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <label>URL de imagen (opcional)</label>
       <input
        type="text"
        placeholder="URL de imagen (opcional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit">Publicar</button>
    </form>
  );
};

export default NewPostForm;
