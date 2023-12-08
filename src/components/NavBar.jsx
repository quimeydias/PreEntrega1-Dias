import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="contenedorNav">
        <div className="logo">
          <p className="imgLogo">
          </p><p>
          </p></div>

        <div className="estilosBuscador">
          <form action="" method="get">
            <input className="buscador" name="buscar" type="text" placeholder="Buscá productos, categorías, marcas ..." required="" />
            <button className="lupa"></button>
          </form>

          <div className="seleccionados" id="seleccionados">
            <div className="seccionP" id="seccionP"></div>
          </div>


        </div>

        <a href="html/login.html" className="log">
          <p className="imgLog"></p>
        </a>

       <CartWidget/>

      </div>
    </nav>
  )
}

export default NavBar