import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { DefaultTheme } from 'styled-components';
import { totalAmout } from '../../store/ducks/cart';
import { AmountButton, AmountContainer, AmountNumber, ImageContainer, ItemsContainer } from './styles';
import { useState } from 'react';

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

export function CartItem(props: ItemProps) {
  const dispatch = useDispatch();
  const theme= useSelector<RootState, DefaultTheme>(state => state.theme);
  const totalAmount= useSelector<RootState, number>(totalAmout);
  const [amountState, setAmountState] = useState(totalAmount);
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
        <AmountContainer>
          <AmountButton onClick={() => {if(amountState) setAmountState(amountState - 1)}} children="-" />
          <AmountNumber>{amountState}</AmountNumber>
          <AmountButton onClick={() => setAmountState(amountState + 1)} children="+" />
        </AmountContainer>
    </ItemsContainer>  
  );
}
