import React, { useState } from "react";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  /*  const handleAdd = () => {
    //setCategories(["HunterXHunter", ...categories]);// primera solución
    setCategories((cat) => [...cat, "HunterXHunter..."]); // segunda solución, puede tener un callback en el cual el primer argumento   es el valor del estado anterior, y  luego tiene que regresar el nuevo estado.
  }; */

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, index) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
