import React from 'react';
import styles from './Topbar.module.css';
import { Link } from 'react-router-dom';
import { FaBell, FaShoppingCart } from 'react-icons/fa';

const Topbar = ({ isAuthenticated, onLoginClick, onRegisterClick }) => {
    return (
        <header className={styles.topbar}>
            {/* Izquierda: Logo */}
            <div className={styles.leftSection}>
                <Link to="/" className={styles.logo}>
                    R3
                </Link>
            </div>

            {/* Centro: navegación (solo si está autenticado) */}
            {isAuthenticated && (
                <nav className={styles.navLinks}>
                    <Link to="/">Inicio</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/foros">Foros</Link>
                </nav>
            )}

            {/* Derecha: iconos o botones */}
            <div className={styles.rightSection}>
                {isAuthenticated ? (
                    <>
                        <FaBell className={styles.icon} />
                        <FaShoppingCart className={styles.icon} />
                        <img
                            src="https://i.postimg.cc/25HQ2f92/default.png"
                            alt="Perfil"
                            className={styles.profileImg}
                        />

                    </>
                ) : (
                    <>
                        <div className={styles.rightSection}>
    <button onClick={onLoginClick} className={styles.loginBtn}>Iniciar sesión</button>
    <button onClick={onRegisterClick} className={styles.registerBtn}>Unirse</button>
  </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Topbar;
