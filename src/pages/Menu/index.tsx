import React from 'react'
import { Item } from '../../components/Item'
import { useState } from 'react'


export default function Menu() {
  const [ itens, setItens] = useState<(typeof Item)[]>([]);

  return (
    <>    
    <div>Menu</div>
      <ul>

      </ul>
    </>
  )
}
