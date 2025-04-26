import React, { useState } from 'react';
import './App.css';
import RegisterModal from './components/Login/RegisterModal';
import FaqSection from './components/FAQ/FAQSection';
import BottomNavbar from './components/BNB/bottomNavBar';
import LoginModal from './components/Login/LoginModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaShoppingCart, FaExchangeAlt, FaDonate, FaSearch, FaShareAlt } from 'react-icons/fa';

// 🔹 COMPONENTE: Podrás
const Podras = () => (
  
  <div className="aliados-container-custom rounded-3xl p-8 bg-[#1A1230] shadow-[0_0_20px_2px_rgba(176,70,255,0.6)]">
    <h2 className="podras-title">PODRAS...</h2>
    <div className="podras-options">
      <div className="podras-option">
        <FaShoppingCart size={40} />
        <p>Comprar</p>
      </div>
      <div className="podras-option">
        <FaExchangeAlt size={40} />
        <p>Vender</p>
      </div>
      <div className="podras-option">
        <FaDonate size={40} />
        <p>Donar</p>
      </div>
      <div className="podras-option">
        <FaSearch size={40} />
        <p>Explorar</p>
      </div>
      <div className="podras-option">
        <FaShareAlt size={40} />
        <p>Compartir ideas</p>
      </div>
    </div>
  </div>
);

// 🔹 COMPONENTE: Reseñas
const Reseñas = () => (
  <div className="reviews-section">
     <div className="aliados-container-custom rounded-3xl p-8 bg-[#1A1230] shadow-[0_0_20px_2px_rgba(176,70,255,0.6)]">
    <h2 className="reviews-title">RESENAS</h2>
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
    >
      <SwiperSlide>
        <div className="review-card">
          <div className="review-stars">★★★☆☆</div>
          <p className="review-text">Excelente plataforma, probé antes de suscribirme.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="review-card">
          <div className="review-stars">★★★☆☆</div>
          <p className="review-text">Excelente plataforma, probé antes de suscribirme.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="review-card">
          <div className="review-stars">★★★★☆</div>
          <p className="review-text">Excelente plataforma, probé antes de suscribirme.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="review-card">
          <div className="review-stars">★★☆☆☆</div>
          <p className="review-text">Excelente plataforma, probé antes de suscribirme.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="review-card">
          <div className="review-stars">★★★★☆</div>
          <p className="review-text">Muy útil, aunque podría tener más apps.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">Ideal para estudiantes, fácil de usar.</p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  </div>
);

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); 


  return (
    
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="brand-R3">Unete a </span> 
          <span className="brand-Unete">R3</span>
        </div>
        <div className="navbar-buttons">
          <button 
            className="btn-login" 
            onClick={() => setIsLoginModalOpen(true)}
          >
            Iniciar Sesion
          </button>

          <button 
          className="btn-join" 
          onClick={() => setIsRegisterModalOpen(true)}
          >
            Unirse
            </button>

        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
      />

      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)}
      />
      
      
      
      <main className="main-content">
        
        <div className="premium-services">
          <div className="text-content">
            <h1>
              ENCARGATE DE <span className="premium">VENDER O DONAR</span> LO QUE NO VAS A USAR
            </h1>
            <p className="descripcion-home">
              Dale una segunda vida a todos los productos que crees que no servirán más.
            </p>
            <button className="btn-join-2">UNIRSE</button>
          </div>
          <div className="image-content">
            <img src="/assets/images/fondo.png" alt="App Screenshots" className="app-image" />
          </div>
        </div>

        
<div className="opciones-aliados px-6 py-10">
  <div className="aliados-container-custom rounded-3xl p-8 bg-[#1A1230] shadow-[0_0_20px_2px_rgba(176,70,255,0.6)]">
    <h2 className="h2">Aliados</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
      <div className="aliado-card">
        <img src="/assets/images/aliado1.jpg" alt="aliado1" className="aliado-img" />
      </div>
      <div className="aliado-card">
        <img src="/assets/images/aliado2.jpg" alt="aliado2" className="aliado-img" />
      </div>
      <div className="aliado-card">
        <img src="/assets/images/aliado3.jpg" alt="aliado3" className="aliado-img" />
      </div>
      <div className="aliado-card">
        <img src="/assets/images/aliado4.png" alt="aliado4" className="aliado-img" />
      </div>
      <div className="aliado-card">
        <img src="/assets/images/aliado5.webp" alt="aliado5" className="aliado-img" />
      </div>
      <div className="aliado-card">
        <img src="/assets/images/aliado6.jpg" alt="aliado6" className="aliado-img" />
      </div>
    </div>
  </div>
</div>

        {/* NUEVAS SECCIONES */}
        <Podras />
        <Reseñas />

        {/* FAQ */}
        <FaqSection />
      </main>

      {/* Bottom Navigation Bar */}
      <BottomNavbar />
    </div>
  );
}

export default App;
