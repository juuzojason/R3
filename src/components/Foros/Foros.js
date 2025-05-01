import React, { useState } from 'react';
import './Foros.css';
import NewPostForm from './NewPostForm';


const topicsData = [
  {
    id: 1,
    title: '¿Qué hago con esto?',
    content: 'Tengo cinco tablas de madera de olijarde....',
    date: 'Hace 8 días',
    tag: 'Reutilización'
  },
  {
    id: 2,
    title: 'Motores DC juguetes',
    content: 'Discusión sobre uso de motores DC para juguetes caseros.',
    date: 'Hace 7 días',
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=aLTX%2fEMI&id=9B30C07319DCA64B894B789DDDA924CD83EAB964&thid=OIP.aLTX_EMIzRbHgUKhrgbsBQHaFj&mediaurl=https%3a%2f%2flovtechnology.com%2fwp-content%2fuploads%2f2024%2f05%2fcomparacion-motores-DC.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.68b4d7fc4308cd16c78142a1ae06ec05%3frik%3dZLnqg80kqd2deA%26pid%3dImgRaw%26r%3d0&exph=768&expw=1024&q=motores+dc&simid=608022522431361364&FORM=IRPRST&ck=3E148A79A72FB3172EAD08D9AC0A7098&selectedIndex=16&itb=0'
  },
  {
    id: 3,
    title: 'Reutilidad de libros',
    content: 'Ideas para reutilizar libros viejos o dañados.',
    date: 'Hace 6 días',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    title: '¿Es mejor donar o vender?',
    content: 'Debate abierto sobre donar o vender productos usados.',
    date: 'Hace 3 días'
  },
  {
    id: 5,
    title: 'Peores reutilidades',
    content: 'Comparte tu peor experiencia reutilizando algo.',
    date: 'Hace 8 días'
  },
  {
    id: 6,
    title: 'Mejores piezas de PC',
    content: '¿Qué partes se pueden rescatar o reutilizar?',
    date: 'Hace 5 días',
    image: 'https://images.unsplash.com/photo-1581092917759-bf5b76c78967?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 7,
    title: '¿Los productos son de calidad?',
    content: 'Discusión sobre calidad en productos de segunda.',
    date: 'Hace 10 días',
    image: 'https://images.unsplash.com/photo-1580894894513-07a8e3c7dbd4?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 8,
    title: 'Objetos usuales dañados',
    content: '¿Vale la pena arreglar o mejor desechar?',
    date: 'Hace 2 días',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 9,
    title: 'Ropa de segunda',
    content: 'Compartamos ideas sobre ropa reutilizada.',
    date: 'Hace 12 días',
  }
];

const Foros = () => {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]); // solo si aún no se tiene
  const handleNewPost = (post) => {
    setPosts([post, ...posts]);
    setShowForm(false);
  };

  const [search, setSearch] = useState('');

  const filteredTopics = topicsData.filter(topic =>
    topic.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="forum-container">
      <div className="forum-header">
        <input
          type="text"
          placeholder="Buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="search-icon">🔍</span>
      </div>
      <div className="new-post-controls">
        <button className="toggle-form-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancelar' : 'Crear nueva publicación'}
        </button>

        {showForm && <NewPostForm onSubmit={handleNewPost} />}
      </div>

      <div className="forum-grid">
        {posts.map((post) => (
  <div key={post.id} className="forum-card">
    <img
      src={post.image ? post.image : '/assets/images/sinimagen.jpg'}
      alt={post.title}
      className="forum-img"
    />
    <div className="forum-content">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="forum-footer">
        <span>{post.date}</span>
      </div>
    </div>
  </div>
))}
      
        {filteredTopics.map((topic) => (
          <div key={topic.id} className="forum-card">
            <img
              src={topic.image ? topic.image : '/assets/images/sinimagen.jpg'}
              alt={topic.title}
              className="forum-img"
            />
            <div className="forum-content">
              <h3>{topic.title}</h3>
              <p>{topic.content}</p>
              <div className="forum-footer">
                <span>{topic.date}</span>
                {topic.tag && <span className="forum-tag">{topic.tag}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="forum-pagination">
        <button>&larr; Anterior</button>
        <span className="page-numbers">
          <strong>1</strong> 2 3 ... 67 68
        </span>
        <button>Siguiente &rarr;</button>
      </div>
    </div>
  );
};

export default Foros;
