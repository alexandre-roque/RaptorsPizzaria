import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Categories from "../../components/Categories/Categories";
import { cardapio } from "../../cardapio";
import Header from "../../components/Header";
import { CatalogContainer } from "./styles";

const allCategories = ["all", ...new Set(cardapio.map((item) => item.categoria))];

const Catalog = () => {
  const [menuItems, setMenuItems] = useState(cardapio);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: string) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(cardapio);
      return;
    }
    const newItems = cardapio.filter((item) => item.categoria === category);
    setMenuItems(newItems);
  };
  
  return (
    <>
      <Header/>
      <CatalogContainer>
        <section className="menu section">
          <div className="title">
            <h2>Menu List</h2>
            <div className="underline"></div>
          </div>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
          />
          <Menu items={menuItems} />
        </section>
      </CatalogContainer>
    </>
  );
};

export default Catalog;
