import React from 'react';
import styles from './LoginModal.module.css';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose, onLogin }) => {

  const navigate = useNavigate(); // 👈 AQUÍ adentro, no afuera del componente

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLogin = () => {
    onLogin(); // ✅ Cambia el estado a autenticado en App.js
    onClose(); // ✅ Cierra el modal
    navigate('/productos'); // ✅ Redirige
  };
  

  return (
    <>
      <div className={styles.modalOverlay} onClick={handleOverlayClick}>
        <div className={styles.modal}>
          <h1>
            <span className={styles.brandPrime}>Bienvenidos a </span>
            <span className={styles.brandTesting}>R3</span>
          </h1>
          <form>
            <div className={styles.inputGroup}>
              <label>USUARIO</label>
              <input type="text" placeholder="Ingresar usuario..." />
            </div>
            <div className={styles.inputGroup}>
              <label>CONTRASEÑA</label>
              <input type="password" placeholder="Ingresar contraseña..." />
            </div>
            <div className={styles.forgotPassword}>
              <a href="#">¿OLVIDASTE LA CONTRASEÑA?</a>
            </div>
            {/* Botón ahora llama a handleLogin */}
            <button 
              type="button" 
              className={styles.modalButton} 
              onClick={handleLogin}
            >
              ENTRAR
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
