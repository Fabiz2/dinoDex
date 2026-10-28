import React from 'react'

export async function BuscarHerbivoros() {
  const resposta = await fetch("http://10.92.198.29:8080/herbivoros")


  if(!resposta.ok){
    throw new Error("Erro ao buscar dinossauro herbivoro")
  }

  const json = await resposta.json()
  return json
}

