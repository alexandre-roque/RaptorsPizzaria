import React from 'react'
import { Item } from '../../components/Item'
import { useState } from 'react'
import Header from '../../components/Header';
import { cardapio } from '../../cardapio';

export default function Menu() {
  const [ itens, setItens] = useState<(typeof Item)[]>([]);

  return (
    <>
      <Header />
      <ul>
        { cardapio?.map(item => {
          return (
              <li key={item.item}>
                  <strong>{item.item}</strong>
                  <p>{item.preco}</p>
              </li>
          )
        })}
      </ul>
    </>
  )
}
