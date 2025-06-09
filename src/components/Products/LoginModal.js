import React, { useState } from 'react';
import styles from './LoginModal.module.css';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  // Estados para el formulario
  const [formData, setFormData] = useState({
    usuario: '',
    contrasena: ''
  });
  
  // Estados para el manejo de errores y carga
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario empiece a escribir
    if (error) setError('');
  };

  // Función para validar el login
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!formData.usuario.trim() || !formData.contrasena.trim()) {
      setError('Por favor ingresa usuario y contraseña');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Hacer petición al backend
      const response = await fetch('http://localhost:3003/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Para cookies de sesión si las usas
        body: JSON.stringify({
          usuario: formData.usuario,
          contrasena: formData.contrasena
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Login exitoso
        console.log('Login exitoso:', data);
        
        // Guardar información del usuario en localStorage (opcional)
        localStorage.setItem('user', JSON.stringify({
          id: data.usuario.id,
          nombre: data.usuario.nombre,
          correo: data.usuario.correo,
          token: data.token // si usas JWT
        }));

        // Cerrar modal y redirigir
        onClose();
        navigate('/productos');
      } else {
        // Error en el login
        setError(data.error || 'Error al iniciar sesión');
      }
    } catch (err) {
      console.error('Error en el login:', err);
      setError('Error de conexión. Verifica que el servidor esté funcionando.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.modalOverlay} onClick={handleOverlayClick}>
        <div className={styles.modal}>
          <h1>
            <span className={styles.brandPrime}>Bienvenidos a </span>
            <span className={styles.brandTesting}>R3</span>
          </h1>
          
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label>USUARIO</label>
              <input 
                type="text" 
                name="usuario"
                value={formData.usuario}
                onChange={handleInputChange}
                placeholder="Ingresar usuario..." 
                disabled={loading}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label>CONTRASEÑA</label>
              <input 
                type="password" 
                name="contrasena"
                value={formData.contrasena}
                onChange={handleInputChange}
                placeholder="Ingresar contraseña..." 
                disabled={loading}
              />
            </div>
            
            {/* Mostrar errores */}
            {error && (
              <div className={styles.errorMessage}>
                {error}
              </div>
            )}
            
            <div className={styles.forgotPassword}>
              <a href="#">¿OLVIDASTE LA CONTRASEÑA?</a>
            </div>
            
            <button 
              type="submit" 
              className={styles.modalButton}
              disabled={loading}
            >
              {loading ? 'CARGANDO...' : 'ENTRAR'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;