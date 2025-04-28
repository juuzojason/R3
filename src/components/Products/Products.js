import React, { useState, useEffect } from 'react';
import './Products.css';


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    { id: 1, category: 'Ropa', name: 'Buzo Azul', price: '$35.000', image: 'https://th.bing.com/th/id/OIP._e6RKSC1t79wgvAjhJeLvgAAAA?rs=1&pid=ImgDetMain' },
    { id: 2, category: 'Animales', name: 'Perrito', price: 'GRATIS', image: 'https://th.bing.com/th/id/OIP.k6XwmsZC74RsZpgSu4U8vAHaIx?rs=1&pid=ImgDetMain' },
    { id: 3, category: 'Electrodomesticos', name: 'Licuadora', price: '$355.000', image: 'https://th.bing.com/th/id/R.13f85b1e425c793cfe5688e27de879cb?rik=0Uw9A9O9deYTJg&riu=http%3a%2f%2fsalpimenta.com.ar%2fwp-content%2fuploads%2f2014%2f12%2fLicuadora-Color-Oster-alta-2.jpg&ehk=BKPxg93u65Lv72OxSp7XZPhwcJfUszP2QW46PCwDzH8%3d&risl=&pid=ImgRaw&r=0' },
    { id: 4, category: 'Celulares', name: 'Iphone X', price: '$832.000', image: 'https://i.blogs.es/b1cb6d/iphone_x/1366_2000.png' },
  ];

  const carouselImages = [
    '/assets/images/Donaton.jpeg',
    '/assets/images/donaton.jpg',
    '/assets/images/donatt.jpg'
  ];
  

  const filteredProducts = selectedCategory === 'Todos'? products
    : products.filter(product => product.category === selectedCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="products-page">
      <aside className="filters">
        <h3>Categorías</h3>
        <ul>
          <li onClick={() => setSelectedCategory('Todos')}>Todos</li>
          <li onClick={() => setSelectedCategory('Juguetes')}>Juguetes</li>
          <li onClick={() => setSelectedCategory('Electrodomesticos')}>Electrodomésticos</li>
          <li onClick={() => setSelectedCategory('Ropa')}>Ropa</li>
          <li onClick={() => setSelectedCategory('Sacos de comida')}>Sacos de comida</li>
          <li onClick={() => setSelectedCategory('Animales')}>Animales</li>
          <li onClick={() => setSelectedCategory('Jaulas')}>Jaulas</li>
          <li onClick={() => setSelectedCategory('Celulares')}>Celulares</li>
          <li onClick={() => setSelectedCategory('Platos')}>Platos</li>
          <li onClick={() => setSelectedCategory('Peceras')}>Peceras</li>
          <li onClick={() => setSelectedCategory('Colchones')}>Colchones</li>
        </ul>
      </aside>

      <main className="product-list">
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
        </div>

        <div className="carousel">
          <img src={carouselImages[currentSlide]} alt="Publicidad" />
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <span className="tag">{product.price === 'GRATIS' ? 'Donación' : 'Venta'}</span>
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button>Anterior</button>
          <span>1</span>
          <button>Siguiente</button>
        </div>
      </main>
    </div>
  );
};

export default Products;
