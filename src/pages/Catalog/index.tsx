import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Categories from "../../components/Categories/Categories";
import { cardapio } from "../../cardapio";
import Header from "../../components/Header";
import { CatalogContainer } from "./styles";

const allCategories = ["Todos", ...new Set(cardapio.map((item) => item.categoria))];
allCategories.push("Monte sua pizza grande com dois sabores");

const Catalog = () => {
  const [menuItems, setMenuItems] = useState(cardapio);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: string) => {
    setActiveCategory(category);
    if (category === "Todos") {
      setMenuItems(cardapio);
      return;
    } else if (category === "Monte sua pizza grande com dois sabores") {
      setMenuItems(cardapio.filter((item) => item.categoria === "Pizza"));
      return;
    }
    const newItems = cardapio.filter((item) => item.categoria === category);
    setMenuItems(newItems);
  };

  if (!activeCategory)
    setActiveCategory("Todos");
  
  return (
    <>
      <Header/>
      <CatalogContainer>
        <section className="menu section">
          <div className="title">
            <h2>Cardápio</h2>
            <div className="underline"></div>
          </div>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
          />
          <Menu items={menuItems} isCustomPizza={activeCategory === "Monte sua pizza grande com dois sabores"}/>
        </section>
      </CatalogContainer>
    </>
  );
};

export default Catalog;
