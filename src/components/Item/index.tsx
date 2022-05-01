import React, { Component, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/ducks/cart';
import Button from '../Button';
import { AmountButton, AmountContainer, AmountNumber, ButtonContainer, ImageContainer, ItemsContainer } from './styles';

export interface ItemProps {
  nome: string,
  tamanho?: string,
  preco: number,
  id: number,
  categoria: string,
  foto?: any,
  ingredientes?: string,
  isCustomPizza?: Boolean
};

export function Item(props: ItemProps) {
  const dispatch = useDispatch();
  const doSomething = null;
  const [amountState, setAmountState] = useState(0);
  const { id, nome, preco, foto, tamanho, ingredientes, categoria, isCustomPizza } = props;
  
  return (
    <ItemsContainer>
      <article key={id} className="menu-item">
        <ImageContainer>
          <img src={foto} alt={nome} className="photo" />
        </ImageContainer>

        <div className="item-info">
          <header>
            {isCustomPizza ?
              <h4>{nome}</h4>
              :
              <>
                <h4>{nome} {tamanho ? <>- {tamanho}</> : null}</h4>
                <h4 className="price">R${preco}</h4>
              </>
            }
          </header>
          {ingredientes ? <p className="item-text">{ingredientes}</p> : null}
        </div>
      </article>
        <ButtonContainer>
          <AmountContainer>
            <AmountButton onClick={() => {if(amountState) setAmountState(amountState - 1)}} children="-" />
            <AmountNumber>{amountState}</AmountNumber>
            <AmountButton onClick={() => setAmountState(amountState + 1)} children="+" />
          </AmountContainer>
          {isCustomPizza ?
            <Button onClick={() => doSomething} children="Escolher sabor" />
            :
            <Button onClick={() => {if(amountState) dispatch(addItemToCart({ ...props, amount: amountState}))}} children="Adicionar ao carrinho" />
          }
        </ButtonContainer>
    </ItemsContainer>  
  );
}
