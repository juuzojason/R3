import React, { useState } from 'react';
import styles from './LoginModal.module.css';

const RegisterModal = ({ isOpen, onClose }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    if (contrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    const data = {
      nombre: nombre.trim(),
      correo: correo.trim().toLowerCase(),
      usuario: usuario.trim(),
      direccion: direccion.trim(),
      telefono: telefono.trim(),
      contrasena
    };

    console.log('Sending data:', data); // Debug log

    try {
      const response = await fetch('http://localhost:3003/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      console.log('Response status:', response.status); // Debug log

      const result = await response.json();
      console.log('Response data:', result); // Debug log

      if (response.ok) {
        alert(result.message || 'Usuario registrado correctamente');
        // Clear form
        setNombre('');
        setCorreo('');
        setUsuario('');
        setDireccion('');
        setTelefono('');
        setContrasena('');
        setConfirmarContrasena('');
        onClose();
      } else {
        alert(result.error || `Error al registrar: ${response.status}`);
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('Error de conexión. Verifica que el servidor esté funcionando.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <h1>
          <span className={styles.brandPrime}>Crea tu cuenta en </span>
          <span className={styles.brandTesting}>R3</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>NOMBRE COMPLETO</label>
            <input 
              type="text" 
              value={nombre} 
              onChange={e => setNombre(e.target.value)} 
              required 
              disabled={loading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>CORREO ELECTRÓNICO</label>
            <input 
              type="email" 
              value={correo} 
              onChange={e => setCorreo(e.target.value)} 
              required 
              disabled={loading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>USUARIO</label>
            <input 
              type="text" 
              value={usuario} 
              onChange={e => setUsuario(e.target.value)} 
              required 
              disabled={loading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>DIRECCIÓN</label>
            <input 
              type="text" 
              value={direccion} 
              onChange={e => setDireccion(e.target.value)} 
              required 
              disabled={loading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>TELÉFONO</label>
            <input 
              type="tel" 
              value={telefono} 
              onChange={e => setTelefono(e.target.value)} 
              required 
              disabled={loading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>CONTRASEÑA</label>
            <input 
              type="password" 
              value={contrasena} 
              onChange={e => setContrasena(e.target.value)} 
              required 
              minLength="6"
              disabled={loading}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>CONFIRMAR CONTRASEÑA</label>
            <input 
              type="password" 
              value={confirmarContrasena} 
              onChange={e => setConfirmarContrasena(e.target.value)} 
              required 
              minLength="6"
              disabled={loading}
            />
          </div>
          <button type="submit" className={styles.modalButton} disabled={loading}>
            {loading ? 'REGISTRANDO...' : 'REGISTRARSE'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;