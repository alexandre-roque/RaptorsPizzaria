import React from "react";
import { Item, ItemProps } from "../../components/Item";

const Menu = ({ items, isCustomPizza } : { items: ItemProps[], isCustomPizza: Boolean }) => {
  return (
      <div className="section-center">
        {items.map((product : ItemProps) => {
          const { id, nome, preco, foto, tamanho, ingredientes, categoria } = product;
          return (<Item isCustomPizza= {isCustomPizza} id={id} nome={nome} preco={preco} foto={foto} tamanho={tamanho} ingredientes={ingredientes} categoria={categoria} />);
        })}
      </div>
  );
};

export default Menu;
