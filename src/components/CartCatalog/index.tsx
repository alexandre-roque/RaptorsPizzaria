import React from "react";
import { Item, ItemProps } from "../Item";
import { CartItem } from "../CartItem";

const CartCatalog = ({ items } : { items: ItemProps[] }) => {
  return (
      <div className="section-center">
        {items.map((product : ItemProps) => {
          const { id, nome, preco, foto, tamanho, ingredientes, categoria, amount } = product;
          return (<CartItem id={id} nome={amount! + ' x ' + nome} preco={preco * amount!} foto={foto} tamanho={tamanho} ingredientes={ingredientes} categoria={categoria} />);
        })}
      </div>
  );
};

export default CartCatalog;