import React from 'react'
import Form from '../Components/Form'
import { Context } from 'react'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {tema} = useContext(ContextGlobal)
  return (
    <div className='contact' style={{background:tema.contact, color: tema.letras}}>
      <h2>Quieres saber mas sobre nosotros?</h2>
      <h3>Envíanos tus datos y nos pondremos en contacto</h3>
      <Form/>
    </div>
  )
}

export default Contact