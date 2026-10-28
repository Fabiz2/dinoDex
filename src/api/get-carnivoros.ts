import React from 'react'

export async function Buscarcarnivoros() {
  const resposta = await fetch("http://10.92.198.29:8080/carnivoros")


  if(!resposta.ok){
    throw new Error("Erro ao buscar dinossauro carnivoro")
  }

  const json = await resposta.json()
  return json
}

