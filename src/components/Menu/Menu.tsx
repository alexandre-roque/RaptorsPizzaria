import React from "react";
import { ItemProps } from "../../components/Item";

const Menu = ({ items } : { items: ItemProps[] }) => {
  return (
      <div className="section-center">
        {items.map((product : ItemProps) => {
          const { id, nome, preco, foto } = product;
          return (
            <article key={id} className="menu-item">
              <img src={foto} alt={nome} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{nome}</h4>
                  <h4 className="price">${preco}</h4>
                </header>
              </div>
            </article>
          );
        })}
      </div>
  );
};

export default Menu;
