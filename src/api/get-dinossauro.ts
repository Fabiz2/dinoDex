import React from 'react'

export async function BuscarDinossauro(id: string) {
  const resposta = await fetch("http://10.92.198.29:8080/dinossauro/" + id)


  if(!resposta.ok){
    throw new Error("Erro ao buscar dinossauro")
  }

  const json = await resposta.json()
  return json
}

