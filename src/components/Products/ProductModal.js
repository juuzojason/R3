import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, setNewProduct }) => {
  if (!product) return null;

  const esModoCrear = !!setNewProduct;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      estado: product.estado,
      serie: product.serie,
      category: product.category,
      longDescription: product.longDescription
    };

    try {
      const response = await fetch('http://localhost:3001/api/articulos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Producto agregado correctamente');
        onClose();
      } else {
        alert('Error al agregar producto: ' + result.error);
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        {esModoCrear ? (
          <form onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <label>Nombre:
              <input type="text" name="name" value={product.name} onChange={handleChange} />
            </label>
            <label>Precio:
              <input type="number" name="price" value={product.price} onChange={handleChange} />
            </label>
            <label>Imagen URL:
              <input type="text" name="image" value={product.image} onChange={handleChange} />
            </label>
            <label>Descripción:
              <input type="text" name="description" value={product.description} onChange={handleChange} />
            </label>
            <label>Estado:
              <input type="text" name="estado" value={product.estado} onChange={handleChange} />
            </label>
            <label>Serie:
              <input type="text" name="serie" value={product.serie} onChange={handleChange} />
            </label>
            <label>Categoría:
              <input type="text" name="category" value={product.category} onChange={handleChange} />
            </label>
            <label>Descripción larga:
              <textarea name="longDescription" value={product.longDescription} onChange={handleChange} />
            </label>
            <button type="submit">Agregar Producto</button>
          </form>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
