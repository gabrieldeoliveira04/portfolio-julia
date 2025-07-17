import { FaInstagram } from 'react-icons/fa';
export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Olá,</h3>
        <h1>Eu sou a Julia</h1>
        <h3>
          Esteticista <span>Profissional </span>
        </h3>

        <p>
Bem-vinda ao meu portfólio! 🌸✨

Aqui, sua pele é tratada com carinho, responsabilidade e um olhar atento às suas necessidades. Meu trabalho como esteticista vai muito além da estética: é sobre cuidar de você, da sua autoestima e do seu bem-estar.

Ofereço procedimentos especializados que unem técnicas seguras, tecnologia e produtos de alta qualidade para entregar resultados visíveis e uma experiência acolhedora.
        </p>
        <div className="flex">
        <div className="social-media">
          <a href="https://www.instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} color="#a889c9" />
          </a>
          <a href="https://wa.me/5515992726780?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio">
            <i className="bx bxl-whatsapp-square"></i>
          </a>
        </div>
        </div>
      </div>

      <div>
        <div className="home-img">
          <img src="LOGO.jpeg" alt="Profile Picture" />
        </div>
      </div>
    </section>
  );
}
