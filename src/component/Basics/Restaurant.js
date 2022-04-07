import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

//map all categories to store in a array
//create a set to store unique categories only
//then convert set object to array
//then use spread operator (...)
const uniqueList = [
  "All",
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
];

const Restaurant = () => {
  // const [menuData, setMenuData] = React.useState(initialData);

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuAttribute={menuData} />
    </>
  );
};

export default Restaurant;
