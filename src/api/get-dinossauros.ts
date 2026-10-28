import React from 'react'

export async function BuscarDinossauros() {
  const resposta = await fetch("http://10.92.198.29:8080/dinossauros")


  if(!resposta.ok){
    throw new Error("Erro ao buscar dinossauros")
  }

  const json = await resposta.json()
  return json
}

