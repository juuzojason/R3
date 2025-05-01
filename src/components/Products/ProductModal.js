import React, { useState } from 'react';
import './ProductModal.css';

const ProductModal = ({ onClose, onSubmit, product = {}, setNewProduct }) => {
  const [isDonation, setIsDonation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleDonation = (value) => {
    setIsDonation(value);
    setNewProduct((prev) => ({ ...prev, price: value ? 0 : prev.price }));
  };

  const countries = {
    Colombia: ['Bogotá', 'Barranquilla', 'Medellín'],
    Argentina: ['Buenos Aires', 'Córdoba', 'Rosario'],
    México: ['CDMX', 'Guadalajara', 'Monterrey']
  };

  const countryOptions = Object.keys(countries);
  const selectedCountry = product.country || 'Colombia';
  const cityOptions = countries[selectedCountry] || [];

  return (
    <div className="modal-overlay">
      <div className="modal-form">
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="mode-switch">
          <button
            className={!isDonation ? 'active' : ''}
            onClick={() => handleToggleDonation(false)}
          >
            Vender
          </button>
          <button
            className={isDonation ? 'active' : ''}
            onClick={() => handleToggleDonation(true)}
          >
            Donar
          </button>
        </div>

        <input
          type="text"
          name="image"
          value={product.image || ''}
          onChange={handleChange}
          placeholder="URL de la imagen"
        />


        <input
          type="text"
          name="name"
          value={product.name || ''}
          onChange={handleChange}
          placeholder="Título..."
        />

        {!isDonation && (
          <input
            type="number"
            name="price"
            value={product.price || ''}
            onChange={handleChange}
            placeholder="Precio..."
          />
        )}

        <select name="category" value={product.category || ''} onChange={handleChange}>
          <option value="">Categoría ...</option>
          <option value="Ropa">Ropa</option>
          <option value="Electrodomésticos">Electrodomésticos</option>
          <option value="Celulares">Celulares</option>
          <option value="Juguetes">Juguetes</option>
        </select>

        <select name="estado" value={product.estado || ''} onChange={handleChange}>
          <option value="">Estado ...</option>
          <option value="Nuevo">Nuevo</option>
          <option value="Usado">Usado</option>
        </select>

        <textarea
          name="description"
          value={product.description || ''}
          onChange={handleChange}
          placeholder="Ingrese una descripción del producto..."
        />

        <input
          type="text"
          name="tags"
          value={product.tags || ''}
          onChange={handleChange}
          placeholder="Etiquetas"
        />

        <select name="country" value={product.country || ''} onChange={handleChange}>
          <option value="">Seleccione un país</option>
          {countryOptions.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <select name="city" value={product.city || ''} onChange={handleChange}>
          <option value="">Seleccione una ciudad</option>
          {cityOptions.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <div className="location-display">
           Ubicación: {product.city && product.country ? `${product.city}, ${product.country}` : 'No seleccionada'}
        </div>

        <button className="submit-btn" onClick={onSubmit}>Publicar</button>
      </div>
    </div>
  );
};

export default ProductModal;

