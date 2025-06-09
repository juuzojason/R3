import React, { useState } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, onSubmit, setNewProduct }) => {
  const isNew = !!onSubmit && !!setNewProduct;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!product.name || !product.description || !product.category) {
      setError('Por favor completa todos los campos obligatorios');
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log('Enviando producto:', product);
      
      // Hacer petición al backend
      const response = await fetch('http://localhost:3003/api/articulos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: product.name,
          price: product.price || 0,
          image: product.image || '',
          description: product.description,
          estado: product.estado || 'Nuevo',
          serie: product.serie || '',
          category: product.category,
          longDescription: product.longDescription || ''
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Artículo insertado exitosamente:', data);
        alert('Producto subido correctamente!');
        
        // Llamar onSubmit para actualizar la lista de productos
        if (onSubmit) {
          await onSubmit();
        }
        
        // No cerrar el modal aquí, ya se cierra en onSubmit
      } else {
        console.error('Error del servidor:', data);
        setError(data.error || 'Error al subir el producto');
      }
    } catch (err) {
      console.error('Error en la petición:', err);
      setError('Error de conexión. Verifica que el servidor esté funcionando.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✕</button>

        {isNew ? (
          <>
            <h2>Subir nuevo producto</h2>
            <form onSubmit={handleSubmit}>
              <label>Nombre: *</label>
              <input
                type="text"
                value={product.name || ''}
                onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                required
                disabled={loading}
              />

              <label>Precio:</label>
              <input
                type="number"
                value={product.price || 0}
                onChange={(e) => setNewProduct(prev => ({ ...prev, price: parseInt(e.target.value) || 0 }))}
                min="0"
                disabled={loading}
              />

              <label>Imagen (URL):</label>
              <input
                type="text"
                value={product.image || ''}
                onChange={(e) => setNewProduct(prev => ({ ...prev, image: e.target.value }))}
                placeholder="https://ejemplo.com/imagen.jpg"
                disabled={loading}
              />

              <label>Descripción corta: *</label>
              <textarea
                value={product.description || ''}
                onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                required
                disabled={loading}
              />

              <label>Estado:</label>
              <select
                value={product.estado || 'Nuevo'}
                onChange={(e) => setNewProduct(prev => ({ ...prev, estado: e.target.value }))}
                disabled={loading}
              >
                <option value="Nuevo">Nuevo</option>
                <option value="Como nuevo">Como nuevo</option>
                <option value="Buen estado">Buen estado</option>
                <option value="Estado regular">Estado regular</option>
                <option value="Para reparar">Para reparar</option>
              </select>

              <label>Serie:</label>
              <input
                type="text"
                value={product.serie || ''}
                onChange={(e) => setNewProduct(prev => ({ ...prev, serie: e.target.value }))}
                placeholder="Número de serie (opcional)"
                disabled={loading}
              />

              <label>Categoría: *</label>
              <select
                value={product.category || ''}
                onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value }))}
                required
                disabled={loading}
              >
                <option value="">Selecciona una categoría</option>
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
                value={product.longDescription || ''}
                onChange={(e) => setNewProduct(prev => ({ ...prev, longDescription: e.target.value }))}
                placeholder="Descripción detallada del producto (opcional)"
                rows="4"
                disabled={loading}
              />

              {/* Mostrar errores */}
              {error && (
                <div className="error-message" style={{
                  backgroundColor: '#ffebee',
                  color: '#c62828',
                  padding: '10px',
                  borderRadius: '4px',
                  margin: '10px 0',
                  border: '1px solid #ef5350'
                }}>
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
                style={{
                  padding: '10px 20px',
                  backgroundColor: loading ? '#ccc' : '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                {loading ? 'Subiendo...' : 'Subir producto'}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2>{product.name}</h2>
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image"
              onError={(e) => {
                e.target.src = '/placeholder-image.jpg';
              }}
            />
            <p><strong>Precio:</strong> {product.price === 0 ? 'GRATIS' : `$${product.price.toLocaleString()}`}</p>
            <p><strong>Descripción:</strong> {product.description}</p>
            <p><strong>Estado:</strong> {product.estado}</p>
            {product.serie && <p><strong>Serie:</strong> {product.serie}</p>}
            <p><strong>Categoría:</strong> {product.category}</p>
            {product.longDescription && (
              <>
                <p><strong>Descripción larga:</strong></p>
                <p>{product.longDescription}</p>
              </>
            )}
            {product.vendedor && (
              <p><strong>Vendedor:</strong> {product.vendedor}</p>
            )}
            {product.fechaPublicacion && (
              <p><strong>Fecha de publicación:</strong> {new Date(product.fechaPublicacion).toLocaleDateString()}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductModal;