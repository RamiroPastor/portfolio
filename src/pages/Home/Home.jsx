
import React from "react";

import { Nav } from "../../core/Nav/Nav";



export function Home(props) {
  
  return(
    <div className="Home">
      <div className="Home__background">
        <div className="Home__foreground">

          <main className="HomeMain">

            <h3 className="HomeMain__subtitle">
              Bienvenido/a a la página personal de
            </h3>
            <h1 className="HomeMain__title">
              Ramiro Pastor Martín
            </h1>

            <article className="HomeMain__content">
              <section className="HomeMain__description">
                <p>Soy afable, pero introvertido</p>
                <p>Soy creativo y un poco perezoso, pero trabajo duro cuando me apasiono</p>
                <p>Soy lento en aprender, porque intento entender antes que memorizar</p>
                <i>
                  —Doctor, tengo todo el cuerpo cubierto de pelo. ¿Qué padezco?
                  <br/>
                  —Padece uzté un ozito.
                </i>
              </section>
              <section className="HomeMain__likesAndDislikes">
                <div className="HomeMain__likes">
                  <h5>Aficiones:</h5>
                  <ul>
                    <li>videojuegos</li>
                    <li>ver vídeos de youtube</li>
                    <li>escuchar música (clásica u otras)</li>
                    <li>dormir y comer</li>
                  </ul>
                </div>
                <div className="HomeMain__dislikes">
                  <h5>Cosas que odio:</h5>
                  <ul>
                    <li>hacer deporte</li>
                    <li>comer sano</li>
                    <li>madrugar</li>
                    <li>PHP (mucho)</li>
                    <li>Docker (un poco)</li>
                  </ul>
                </div>
              </section>
            </article>

          </main>

          <Nav/>

        </div>
      </div>
    </div>
  )
}