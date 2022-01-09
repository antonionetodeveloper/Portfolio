import React from "react";

import myPhoto from "./images/myPhoto.jpeg"

function App() {
  return (
    <div className="App">
      <header>
        <p>Sobre mim</p>
        <p>Serviços</p>
        <p>Portifólio</p>
        <p>Contato</p>
      </header>

      <main>
        <section id="slogan">
          <div>
            <h1>Antônio Fernandes</h1>
            <div className="profissions">
              <h2>Desenvolvedor Web</h2>
              <h2>Desenvolvedor Full-Stack</h2>
              <h2>Programador React</h2>
            </div>
          </div>
        </section>

        <section id="aboutMe">
          <div className="imgAndText">
            <img src={myPhoto} className="img"></img>
            <text className="text">
              Antônio Fernandes. 
              Programador e desenvolvedor há mais de 3 anos.
              Teve início na carreira de desenvolvimento em 
              2018, quando foi chamado para fazer um curso
              na UFS (Universidade Federal de Sergipe), a 
              partir daí começou com projetos externos das
              mais diversas formas: Websites, Aplicativos
              e Sistemas, adquirindo um vasto conhecimento
              nas diversas linguagens de programação e
              tecnologias hoje utilizadas no mercado.
              <br/><br/>
              Fundador da ideia <a href="https://antonionetodeveloper.github.io/Site2it_NEW/"
              target="_blank">Site2it</a>,
              aplicativo queconecta desenvolvedores a clientes, usando 
              tecnologias do mercado para atender da melhor
              maneira seus clientes, buscando desenvolvedores
              específicos para clientes específicos, 
              agendando e combinando valores.
              <br/><br/>
              Participou de varios projetos propostos pela UFS
              (anteriormente citada), empresas de educação,
              COD3R, Fundação Bradesco, Curso em Video e 
              alguns cursos na Udemy.
              <br/><br/>
              Continua amando desafios e ideias inovadoras, 
              atualmente divide seu tempo entre projetos pessoais
              e desenvolvimento de novas features de seus projetos.
              Com muita motivação, estuda e põe em prática, dia
              após dia todo o conhecimento que adquire, 
              administrando, também, o trajeto que suas ideias 
              e projetos tomam.
              <br></br>
              <br></br>
              <p className="descricao"><a href="https://wa.me/+5579988105028" target="_blank">Whatsapp: (79) 9 8810-5028</a> / Aracaju - SE</p>
            </text>
          </div>
        </section>

        <section id="services">
          <div className="sites">
            <img src={myPhoto}/>
            <div className="subtitle">
              <h3>Criação de sites</h3>
              <p>Sites com as tecnologias HTML, <br/>CSS, JavaScript, ReactJS e MySQL</p>
            </div>
          </div>

          <div className="apps">
            <img src={myPhoto}/>
            <div className="subtitle">
              <h3>Desenvolvimento de Apps</h3>
              <p>Para despositivos IOS e ANDROID com<br/> a tecnologia React-Native</p>
            </div>
          </div>

          <div className="Ecomerces">
            <img src={myPhoto}/>
            <div className="subtitle">
              <h3>Ecomerce</h3>
              <p>Sua loja virtual que funciona 24hrs <br/> efetuando compras 100% online</p>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="content">
            <h2>Portifólio</h2>
            <div className="imgs">
              <a href="#" target="_blank"><img src={myPhoto}/></a>
              <a href="#" target="_blank"><img src={myPhoto}/></a>
              <a href="#" target="_blank"><img src={myPhoto}/></a>
              <a href="#" target="_blank"><img src={myPhoto}/></a>
              <a href="#" target="_blank"><img src={myPhoto}/></a>
            </div>
          </div>
        </section>

        <section id="contact">
          <p>Quase sempre online, entre em contato :</p>
          <p>Whatsapp :  <a href="https://wa.me/+5579988105028" target="_blank">(79) 9 8810-5028</a></p>
          <p>Instagram :  <a href="https://www.instagram.com/antonio_netu/" target="_blank">@antonio_netu</a></p>
          <p>Email :
            <a href="https://antonionetodeveloper.github.io/Send-Me-a-Email/" target="_blank"> devantonio.fer@gmail.com
            </a>
          </p>
          <p>Feito por: <a href="https://github.com/antonionetodeveloper" target="_blank">Dev Antônio Fernandes</a></p>
        </section>


      </main>

    </div>
  );
}

export default App;
