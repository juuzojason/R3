

import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Products.css';
import ProductModal from './ProductModal';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    image: '',
    description: '',
    estado: '',
    serie: '',
    category: 'Ropa',
    longDescription: ''
  });

  const defaultProducts = [
    { id: 1, category: 'Ropa', name: 'Buzo Azul', price: 35000, image: 'https://th.bing.com/th/id/OIP._e6RKSC1t79wgvAjhJeLvgAAAA?rs=1&pid=ImgDetMain', description: 'Un buzo azul cómodo y abrigado.', estado: 'Usado', serie: '2', longDescription: 'Buzo de alta calidad, ideal para climas fríos, hecho de algodón grueso.' },
    { id: 2, category: 'Animales', name: 'Perrito', price: 0, image: 'https://th.bing.com/th/id/OIP.k6XwmsZC74RsZpgSu4U8vAHaIx?rs=1&pid=ImgDetMain', description: 'Adopta un perrito.', estado: 'Nuevo', serie: '1', longDescription: 'Hermoso perrito en adopción, vacunado y desparasitado, listo para un nuevo hogar.' },
    { id: 3, category: 'Electrodomesticos', name: 'Licuadora', price: 355000, image: 'https://salpimenta.com.ar/wp-content/uploads/2014/12/Licuadora-Color-Oster-alta-2.jpg', description: 'Licuadora potente Oster de múltiples velocidades.', estado: 'Nuevo', serie: '3', longDescription: 'Licuadora Oster con 8 velocidades, motor de alto rendimiento para todo tipo de preparaciones.' },
    { id: 4, category: 'Celulares', name: 'Iphone X', price: 832000, image: 'https://i.blogs.es/b1cb6d/iphone_x/1366_2000.png', description: 'iPhone X en excelente estado.', estado: 'Usado', serie: '2', longDescription: 'iPhone X de 64GB en perfecto funcionamiento, batería al 85%, incluye caja y accesorios originales.' },
    { id: 5, category: 'Animales', name: 'Conejo Blanco', price: 0, image: 'https://animales.me/wp-content/uploads/2020/04/conejo-blanco.jpg', description: 'No puedo tenerlo porque no tengo espacio', estado: 'Nuevo', serie: '1', longDescription: 'Conejito blanco, dos meses de nacido.' },
  ];

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleAddProduct = () => {
    const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setNewProduct({
      name: '',
      price: 0,
      image: '',
      description: '',
      estado: '',
      serie: '',
      category: 'Ropa',
      longDescription: ''
    });
    setSelectedProduct(null); // cerrar modal al agregar
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const carouselImages = [
    '/assets/images/Donaton.jpeg',
    '/assets/images/donaton.jpg',
    '/assets/images/donatt.jpg'
  ];

  useEffect(() => {
    localStorage.removeItem('products');
    setProducts(defaultProducts);
    localStorage.setItem('products', JSON.stringify(defaultProducts));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchCategory && matchPrice;
  });

  return (
    <div className="products-page">
      <button onClick={() => setSelectedProduct('new')}>Subir Producto</button>

      <aside className="filters">
        <h3>Categorías</h3>
        <ul>
          {['Todos', 'Juguetes', 'Electrodomesticos', 'Ropa', 'Sacos de comida', 'Animales', 'Jaulas', 'Celulares', 'Platos'].map((cat) => (
            <li key={cat} onClick={() => setSelectedCategory(cat)}>{cat}</li>
          ))}
        </ul>

        <h3>Precio</h3>
        <div style={{ margin: '20px 10px' }}>
          <Slider
            range
            min={0}
            max={1000000}
            step={10000}
            defaultValue={priceRange}
            onChange={handlePriceChange}
            trackStyle={[{ backgroundColor: '#333' }]}
            handleStyle={[{ borderColor: '#333' }, { borderColor: '#333' }]}
          />
          <p style={{ marginTop: '10px' }}>${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}</p>
        </div>
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
            <div 
              className="product-card" 
              key={product.id}
              onClick={() => setSelectedProduct(product)}  // <--- Aquí agregamos el click para abrir modal con detalles
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.name} />
              <span className="tag">{product.price === 0 ? 'Donación' : 'Venta'}</span>
              <h4>{product.name}</h4>
              <p>{product.price === 0 ? 'GRATIS' : `$${product.price.toLocaleString()}`}</p>
              {/* Botón para eliminar producto, evitar que el click en eliminar abra modal */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // para que no se dispare el onClick del padre
                  handleDeleteProduct(product.id);
                }}
                className="delete-btn"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button>Anterior</button>
          <span>1</span>
          <button>Siguiente</button>
        </div>
      </main>

      {/* Modal para agregar producto */}
      {selectedProduct === 'new' && (
        <ProductModal
          product={newProduct}
          onClose={() => setSelectedProduct(null)}
          onSubmit={handleAddProduct}
          setNewProduct={setNewProduct}
        />
      )}

      {/* Modal para ver detalles de producto */}
      {selectedProduct && selectedProduct !== 'new' && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;
