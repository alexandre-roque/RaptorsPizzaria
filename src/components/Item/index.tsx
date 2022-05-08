import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addHalfFlavorToCart, addItemToCart, selectCart } from '../../store/ducks/cart';
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
  isCustomPizza?: Boolean,
  amount?: number
};

export function Item(props: ItemProps) {
  const dispatch = useDispatch();
  const doSomething = null;
  const [amountState, setAmountState] = useState(0);
  const { id, nome, preco, foto, tamanho, ingredientes, categoria, isCustomPizza } = props;
  
  const makeDoubleFlavorPizza = () => {
    dispatch(addHalfFlavorToCart({ ...props, amount: 1, tamanho: 'Grande', isCustomPizza: true}));
  };

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
          {isCustomPizza ?
            <Button onClick={() => makeDoubleFlavorPizza()} children="Escolher sabor" />
            :
            <>
              <AmountContainer>
                <AmountButton onClick={() => {if(amountState) setAmountState(amountState - 1)}} children="-" />
                <AmountNumber>{amountState}</AmountNumber>
                <AmountButton onClick={() => setAmountState(amountState + 1)} children="+" />
              </AmountContainer>
              <Button onClick={() => {if(amountState) dispatch(addItemToCart({ ...props, amount: amountState}))}} children="Adicionar ao carrinho" />
            </>
          }
        </ButtonContainer>
    </ItemsContainer>  
  );
}
