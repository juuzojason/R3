import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, onSubmit, setNewProduct }) => {
  const isNew = !!onSubmit && !!setNewProduct;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✕</button>

        {isNew ? (
          <>
            <h2>Subir nuevo producto</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
              <label>Nombre:</label>
              <input
                type="text"
                value={product.name}
                onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
              />

              <label>Precio:</label>
              <input
                type="number"
                value={product.price}
                onChange={(e) => setNewProduct(prev => ({ ...prev, price: parseInt(e.target.value) }))}
              />

              <label>Imagen (URL):</label>
              <input
                type="text"
                value={product.image}
                onChange={(e) => setNewProduct(prev => ({ ...prev, image: e.target.value }))}
              />

              <label>Descripción corta:</label>
              <textarea
                value={product.description}
                onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
              />

              <label>Estado:</label>
              <input
                type="text"
                value={product.estado}
                onChange={(e) => setNewProduct(prev => ({ ...prev, estado: e.target.value }))}
              />

              <label>Serie:</label>
              <input
                type="text"
                value={product.serie}
                onChange={(e) => setNewProduct(prev => ({ ...prev, serie: e.target.value }))}
              />

              <label>Categoría:</label>
              <select
                value={product.category}
                onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value }))}
              >
                <option value="Ropa">Ropa</option>
                <option value="Juguetes">Juguetes</option>
                <option value="Electrodomesticos">Electrodomésticos</option>
                <option value="Sacos de comida">Sacos de comida</option>
                <option value="Animales">Animales</option>
                <option value="Jaulas">Jaulas</option>
                <option value="Celulares">Celulares</option>
                <option value="Platos">Platos</option>
              </select>

              <label>Descripción larga:</label>
              <textarea
                value={product.longDescription}
                onChange={(e) => setNewProduct(prev => ({ ...prev, longDescription: e.target.value }))}
              />

              <button type="submit" className="submit-btn">Subir producto</button>
            </form>
          </>
        ) : (
          <>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} className="product-image" />
            <p><strong>Precio:</strong> {product.price === 0 ? 'GRATIS' : `$${product.price.toLocaleString()}`}</p>
            <p><strong>Descripción:</strong> {product.description}</p>
            <p><strong>Estado:</strong> {product.estado}</p>
            <p><strong>Serie:</strong> {product.serie}</p>
            <p><strong>Categoría:</strong> {product.category}</p>
            <p><strong>Descripción larga:</strong></p>
            <p>{product.longDescription}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
