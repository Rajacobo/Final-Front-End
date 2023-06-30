import React from 'react'
import {Link} from 'react-router-dom'
import { ContextGlobal } from './utils/global.context' 
import { useContext } from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {


  const { tema, handleTheme } = useContext(ContextGlobal);

  return (
    <nav className='navBar' style={{ background: tema.nav }}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to = {'/'}>Principal</Link>
      <Link to = {'/contact'}>Contacto</Link>
      <Link to = {'/favs'}>Favoritos</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar