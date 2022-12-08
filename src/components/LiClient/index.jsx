import React from 'react'

export function LiClient ({ nome, descricao, genero, img, alt }) {
  return (
    <li>
        <img src={genero} alt={alt} />
        <h2>{nome}</h2>
        <span>{descricao}</span>
        <h3>{genero}</h3>
    </li>
  )
}
