import React from 'react'
import css, { Botoes, ButtonDelet, Li, Texto } from './styles.js'

export function LiClient ({ nome, descricao, genero, img, alt }) {
  return (
    <Li>
        <img src={genero} alt={alt} />
        <Texto>
            <h2>{nome}</h2>
            <span>{descricao}</span>
        </Texto>
        <Botoes>
            <button>Abrir cardeneta</button>
            <ButtonDelet>Deletar</ButtonDelet>
        </Botoes>
    </Li>
  )
}
