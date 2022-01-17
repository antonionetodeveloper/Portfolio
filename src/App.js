import React, { useEffect, useState } from "react";
import axios from "axios";


import myPhoto from "./images/myPhoto.png"

import monitor from "./images/icons/monitor.png"
import phone from "./images/icons/celular.png"
import ecomerce from "./images/icons/compras-online.png"

import buscaCEP from "./images/portfolio/buscaCEP.png"
import SendMeAemail from "./images/portfolio/SendMeAemail.png"
import site2itnew from "./images/portfolio/site2itnew.png"
import site2itold from "./images/portfolio/site2it_old.png"
import portfolio from "./images/portfolio/portfolio.png"


function App() {
  return (
    <div className="App">

      <header>
        <a href="#aboutMe" rel="noreferrer"><p>Sobre mim</p></a>
        <a href="#services" rel="noreferrer"><p>Serviços</p></a>
        <a href="#portfolio" rel="noreferrer"><p>Portifólio</p></a>
        <a href="#contact" rel="noreferrer"><p>Contato</p></a>
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
            <img alt="Foto de Antônio" src={myPhoto} className="img"></img>
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
              target="_blank" rel="noreferrer">Site2it</a>,
              aplicativo que conecta desenvolvedores a clientes, usando 
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
              <p className="descricao"><a href="https://wa.me/+5579988105028" target="_blank" rel="noreferrer">Whatsapp: (79) 9 8810-5028</a> / Aracaju - SE</p>
            </text>
          </div>
        </section>

        <section id="services">
          <div className="sites">
            <img alt="" src={monitor}/>
            <div className="subtitle">
              <h3>Criação de sites</h3>
              <p>Sites com as tecnologias HTML, <br/>CSS, JavaScript, ReactJS e MySQL</p>
            </div>
          </div>

          <div className="apps">
            <img alt=""  src={phone}/>
            <div className="subtitle">
              <h3>Desenvolvimento de Apps</h3>
              <p>Para despositivos IOS e ANDROID com<br/> a tecnologia React-Native</p>
            </div>
          </div>

          <div className="Ecomerces">
            <img alt=""  src={ecomerce}/>
            <div className="subtitle">
              <h3>Ecomerce</h3>
              <p>Agilizando vendas virtuais<br/> efetuando compras 100% online</p>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="content">
            <h2>Portifólio</h2>
            <div className="imgs">
              <a href="https://antonionetodeveloper.github.io/Send-Me-a-Email/" target="_blank" rel="noreferrer"><img alt="" src={SendMeAemail}/></a>
              <a href="https://antonionetodeveloper.github.io/Site2it_NEW/" target="_blank" rel="noreferrer"><img alt="" src={site2itnew}/></a>
              <a href="https://antonionetodeveloper.github.io/BuscaCEP/" target="_blank" rel="noreferrer"><img alt="" src={buscaCEP}/></a>
              <a href="https://antonionetodeveloper.github.io/Portfolio/" target="_blank" rel="noreferrer"><img alt="" src={portfolio}/></a>
              <a href="https://antonionetodeveloper.github.io/Site2it/" target="_blank" rel="noreferrer"><img alt="" src={site2itold}/></a>
            </div>
          </div>
        </section>

        <section id="contact">
          <p>Quase sempre online, entre em contato :</p>
          <p>Whatsapp :  <a href="https://wa.me/+5579988105028" target="_blank" rel="noreferrer">(79) 9 8810-5028</a></p>
          <p>Instagram :  <a href="https://www.instagram.com/antonio_netu/" target="_blank" rel="noreferrer">@antonio_netu</a></p>
          <p>Email :
            <a href="https://antonionetodeveloper.github.io/Send-Me-a-Email/" target="_blank" rel="noreferrer"> devantonio.fer@gmail.com
            </a>
          </p>
          <p>Feito por: <a href="https://github.com/antonionetodeveloper" target="_blank" rel="noreferrer">Dev Antônio Fernandes</a></p>
        </section>


      </main>
    </div>
  );
}

export default App;
