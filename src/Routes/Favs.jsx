import React from "react";
import Card from "../Components/Card";
import { Context } from 'react'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let dentist = JSON.parse(localStorage.getItem("odontologos"));
  const {tema} = useContext(ContextGlobal)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid" style={{background:tema.fav, color: tema.letras}}>
      {dentist.map(item => (
          <Card name={item.name} username={item.username} key={item.id} id={item.id}/>
        ))} 
      </div>
    </>
  );
};

export default Favs;