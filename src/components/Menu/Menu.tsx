import React, { useState } from "react";
import { ItemProps } from "../../components/Item";
import Button from "../Button";
import { ImageContainer, ItemsContainer, ButtonContainer, AmountContainer, AmountNumber, AmountButton } from "./styles";

const Menu = ({ items, isCustomPizza } : { items: ItemProps[], isCustomPizza: Boolean }) => {
  const doSomething = null;

  return (
      <div className="section-center">
        {items.map((product : ItemProps) => {
          const { id, nome, preco, foto, tamanho, ingredientes, categoria } = product;
          const [amountState, setAmountState] = useState(0);

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
                    <Button onClick={() => doSomething} children="Adicionar ao carrinho" />
                  }
                </ButtonContainer>
            </ItemsContainer>  
          );
        })}
      </div>
  );
};

export default Menu;
