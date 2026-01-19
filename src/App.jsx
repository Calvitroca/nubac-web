import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      
      {/* --- HEADER --- */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 5%',
        position: 'sticky',
        top: 0,
        backgroundColor: 'var(--blanco)',
        zIndex: 100,
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}>
        <div className="logo" style={{
          fontSize: '2rem',
          fontWeight: 800,
          color: 'var(--nubac-gris)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          {/* --- AQUÍ ESTÁ LA CORRECCIÓN --- */}
          {/* Usamos la etiqueta img apuntando a la carpeta public */}
          <img 
            src="public/images/logo.png" 
            alt="Logo NUBAC" 
            style={{ height: '50px', width: 'auto' }} 
          />
          
          {/* Si tu imagen de logo YA tiene las letras, puedes borrar la línea de abajo. */}
          {/* Si solo es el dibujo, deja esto: */}
        </div>

        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', padding: 0 }}>
            {['Inicio', 'Nosotros', 'Productos', 'Contacto'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} style={{
                  textDecoration: 'none',
                  color: 'var(--nubac-gris)',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase'
                }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="inicio" style={{
        backgroundColor: 'var(--nubac-gris)',
        color: 'var(--blanco)',
        padding: '100px 5%',
        display: 'flex',
        alignItems: 'center',
        minHeight: '70vh',
        background: `linear-gradient(135deg, rgba(87,87,86,0.95) 0%, rgba(87,87,86,0.8) 100%), url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <h1 style={{ fontSize: '3.5rem', lineHeight: 1, marginBottom: '20px' }}>
            ALIMENTAMOS VÍNCULOS <br />
            <span style={{ color: 'var(--nubac-verde)' }}>FELICES Y SALUDABLES</span>
          </h1>
          <span style={{
            fontSize: '1.5rem',
            color: 'var(--nubac-naranja)',
            marginBottom: '30px',
            display: 'block',
            borderLeft: '5px solid var(--nubac-verde)',
            paddingLeft: '20px'
          }}>
            Nutrición balanceada completa
          </span>
          <p style={{ fontSize: '1.1rem' }}>
            Celebramos la vida de pequeñas y grandes especies con fórmulas efectivas para todas las etapas.
          </p>
          <a href="#contacto" className="btn">Conoce Más</a>
        </div>
      </section>

      {/* --- QUIÉNES SOMOS --- */}
      <section id="nosotros" style={{ padding: '80px 10%', textAlign: 'center', backgroundColor: 'var(--blanco)' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '30px', color: 'var(--nubac-gris)' }}>SOMOS NUBAC</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 20px', fontSize: '1.2rem' }}>
          Somos una empresa orgullosamente mexicana que rápidamente se ha posicionado en el gusto de los animales y sus dueños.
        </p>
        <p style={{ maxWidth: '800px', margin: '0 auto' }}>
          Invertimos constantemente en innovación e implementamos tendencias de mercado para asegurar la salud y nutrición que los animales necesitan.
        </p>

        <div style={{
          marginTop: '50px',
          backgroundColor: 'var(--fondo-claro)',
          borderLeft: '8px solid var(--nubac-verde-sec)',
          padding: '30px',
          textAlign: 'left',
          borderRadius: '0 10px 10px 0'
        }}>
          <h3 style={{ color: 'var(--nubac-gris)' }}>RESPALDO Y SOLIDEZ</h3>
          <p style={{ margin: 0 }}>
            Estamos respaldados por la trayectoria de <strong>Grupo Sesajal</strong>, caracterizado por el compromiso con el campo mexicano.
          </p>
        </div>
      </section>

      {/* --- VALORES --- */}
      <section id="valores" style={{ padding: '80px 5%', backgroundColor: 'var(--nubac-gris)', color: 'var(--blanco)' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ color: 'var(--nubac-verde)' }}>EN QUÉ CREEMOS</h2>
          <p>Nuestros pilares fundamentales:</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          <ValorCard title="INNOVACIÓN" text="Equipos técnicos y científicos a la vanguardia en la industria." />
          <ValorCard title="CALIDAD" text="Estándares por encima de las normas sanitarias." />
          <ValorCard title="PASIÓN" text="Nutrimos vínculos y compartimos vida." />
          <ValorCard title="CONFIANZA" text="Transparencia y seguridad para los dueños." />
        </div>
      </section>

      {/* --- COMPROMISO --- */}
      <section style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{
          flex: '1 1 500px',
          minHeight: '500px',
          background: `url('https://images.unsplash.com/photo-1529429612779-c8e40df2f5ce?auto=format&fit=crop&w=1000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div style={{
          flex: '1 1 500px',
          padding: '80px',
          backgroundColor: 'var(--nubac-naranja)',
          color: 'var(--blanco)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--nubac-gris)' }}>NUESTRO COMPROMISO</h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '20px', marginTop: '20px' }}>
            La salud y bienestar de tus mascotas nos mueve.
          </p>
          <p>
            Tenemos un compromiso inquebrantable con la nutrición balanceada. Porque sabemos que nuestras mascotas nos entregan todo su cariño y se han vuelto parte importante de nuestra vida.
          </p>
          <a href="#" className="btn" style={{ backgroundColor: 'var(--nubac-gris)', width: 'fit-content' }}>
            Ver Productos
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacto" style={{
        backgroundColor: 'var(--nubac-gris)',
        color: 'var(--blanco)',
        padding: '60px 5% 30px',
        textAlign: 'center',
        borderTop: '10px solid var(--nubac-verde)'
      }}>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>NUBAC</div>
        <p>Nutrición balanceada completa</p>
        <p>Parque Industrial La Laja, Jalisco, México</p>
        <div style={{ marginTop: '40px', fontSize: '0.8rem', opacity: 0.5 }}>
          © 2024 NUBAC. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

// Componente pequeño auxiliar para las tarjetas de valores
function ValorCard({ title, text }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.1)',
      padding: '40px',
      borderRadius: '20px',
      borderTop: '5px solid var(--nubac-verde)',
      transition: '0.3s'
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--blanco)';
        e.currentTarget.querySelector('h3').style.color = 'var(--nubac-gris)';
        e.currentTarget.querySelector('p').style.color = 'var(--nubac-gris)';
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
        e.currentTarget.querySelector('h3').style.color = 'var(--nubac-naranja)';
        e.currentTarget.querySelector('p').style.color = 'var(--blanco)';
    }}
    >
      <h3 style={{ fontSize: '1.8rem', color: 'var(--nubac-naranja)', marginBottom: '15px' }}>{title}</h3>
      <p style={{ color: 'var(--blanco)' }}>{text}</p>
    </div>
  );
}

export default App;