import React, { useState } from 'react';
import styles from './FAQSection.module.css';

function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "¿PUEDO HABLAR CON EMPRESAS DIRECTAMENTE??",
      answer: "SI, tratamos de que las empresas tengan alguien encargado de manejar toda el area de donaciones o ventas por nuestros canales o directamente con redireccion al de ellos propio."
    },
    {
      question: "¿LOS FOROS ESTAN MODERADOS?",
      answer: "Si,"
    },
    {
      question: "¿MAYOR DIFERENCIA ENTRE VENDER Y DONAR?",
      answer: "La mayor diferencia entre vender y donar radica en la transferencia de propiedad a cambio de una compensación económica (vender) versus una transferencia voluntaria sin esperar un pago a cambio (donar). En la venta, hay una transacción comercial, mientras que en la donación hay un acto de generosidad."
    },
    {
      question: "TIENE ANUNCIOS LA PAGINA?",
      answer: "Los anuncios seran solo promocion del contenido de algunas paginas y funciones extras."
    }
  ];

  return (
    <div className={styles['faq-section']}>
        <div className="aliados-container-custom rounded-3xl p-8 bg-[#1A1230] shadow-[0_0_20px_2px_rgba(176,70,255,0.6)]">
      <div className={styles['faq-content']}>
        <div className={styles['faq-header']}>
          <h1>ENCUENTRA LAS<br />RESPUESTAS QUE<br />NECESITAS</h1>
          
          <div className={styles['help-card']}>
            <h2>NECESITAS MAS AYUDA?</h2>
            <p>EXPLORA SUGERENCIAS Y GUÍAS PASO A PASO DISEÑADAS TANTO PARA USUARIOS NUEVOS COMO AVANZADOS.</p>
            <div className={styles['help-link-container']}>
              <a href="#" className={styles['help-link']}>CENTRO DE AYUDA</a>
              <span className={styles['arrow-icon']}>↗</span>
            </div>
          </div>
        </div>

        <div className={styles['faq-questions']}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles['faq-item']}>
              <button 
                className={styles['faq-button']}
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                {faq.question}
                <span className={`${styles.arrow} ${openQuestion === index ? styles.up : ''}`}>
                  {openQuestion === index ? '∧' : '∨'}
                </span>
              </button>
              
              {openQuestion === index && (
                <div className={styles['faq-answer']}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default FAQSection;
