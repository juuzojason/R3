import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <div className="modal-left">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="modal-right">
          <h2>{product.name}</h2>
          <span className="tag">{product.price === 0 ? 'Donación' : 'Venta'}</span>
          <h3>{product.price === 0 ? 'GRATIS' : `$${product.price.toLocaleString()}`}</h3>
          <p>Descripción: {product.description || 'Sin descripción'}</p>

          <div className="selectors">
            <label>Estado:</label>
            <span className="tagestado">{product.estado}</span>

            <label>Serie:</label>
            <span className="tagestado">{product.serie}</span>
          </div>

          <button className="action-btn">Agregar al carrito</button>

          <details>
            <summary>Descripción</summary>
            <p>{product.longDescription || 'Aquí se puede ampliar más información del producto.'}</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
