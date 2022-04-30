import React from "react";

type CategoriesProps = { categories: string[], filterItems: any, activeCategory: string};

const Categories = ({ categories, filterItems, activeCategory } : CategoriesProps) => {
  return (
    <div className="btn-container">
      {categories.map((category : string, index : number) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
