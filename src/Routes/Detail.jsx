import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentista, setDentista] = useState({})
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams()

  async function handleFetch(){
      const response = await(
        await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      ).json()
        setDentista(response)
  }

  useEffect (() => {
    handleFetch()
  }, [])


  return (
    <div>
      <h1>Detail Dentist id </h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Mail</th>
            <th>Telefono</th>
            <th>Web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentista.name}</td>
            <td>{dentista.email}</td>
            <td>{dentista.phone}</td>
            <td>{dentista.website }</td>
          </tr>
        </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
    
  )
}

export default Detail