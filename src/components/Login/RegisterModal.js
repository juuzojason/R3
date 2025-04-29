import React from 'react';
import styles from './LoginModal.module.css'; 

const RegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className={styles.modalOverlay} onClick={handleOverlayClick}>
        <div className={styles.modal}>
          <h1>
            <span className={styles.brandPrime}>Crea tu cuenta en </span>
            <span className={styles.brandTesting}>R3</span>
          </h1>
          <form>
            <div className={styles.inputGroup}>
              <label>NOMBRE COMPLETO</label>
              <input type="text" placeholder="Ingresar nombre completo..." required />
            </div>
            <div className={styles.inputGroup}>
              <label>CORREO ELECTRÓNICO</label>
              <input type="email" placeholder="Ingresar correo electronico..." required />
            </div>
            <div className={styles.inputGroup}>
              <label>USUARIO</label>
              <input type="text" placeholder="Crear nombre de usuario..." required />
            </div>
            
            <div className={styles.inputGroup}>
              <label>Direccion</label>
              <input type="direcc" placeholder="Ingresar direccion" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Telefono</label>
              <input type="tel" placeholder="Ingresar numero de celular" required />
            </div>
            <div className={styles.inputGroup}>
              <label>CONTRASEÑA</label>
              <input type="password" placeholder="Crear contrasena..." required />
            </div>
            <div className={styles.inputGroup}>
              <label>CONFIRMAR CONTRASEÑA</label>
              <input type="password" placeholder="Confirmar contrasena..." required />
            </div>
            <button type="submit" className={styles.modalButton}>
              REGISTRARSE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
