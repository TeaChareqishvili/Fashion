import { useState, useEffect } from "react";

const useAddFavorites = () => {
  // saves data for cart
  const [chosenItem, setChosenItem] = useState(() => {
    const storedChosenItems = localStorage.getItem("chosenItem");
    return storedChosenItems ? JSON.parse(storedChosenItems) : [];
  });

  const addItem = (clickedItem) => {
    setChosenItem([...chosenItem, clickedItem]);
  };

  // saves data for favorite

  const [addFavorite, setAddFavorite] = useState(() => {
    const storedFavorites = localStorage.getItem("addFavorite");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const chooseFavorite = (clickedItem) => {
    const isItemAlreadyFavorite = addFavorite.some(
      (item) => item.id === clickedItem.id
    );

    if (!isItemAlreadyFavorite) {
      setAddFavorite([...addFavorite, clickedItem]);
    } else {
      console.log("Item is already in favorites");
    }
  };

  useEffect(() => {
    localStorage.setItem("addFavorite", JSON.stringify(addFavorite));
    console.log("add", addFavorite);
  }, [addFavorite]);

  // deletes items form favorite

  const handleRemoveItemFavorite = (clickedItem) => {
    setAddFavorite((prevSelectedItems) =>
      prevSelectedItems.filter((item) => item.id !== clickedItem)
    );
    const updatedFavorite = addFavorite.filter(
      (item) => item.id !== clickedItem
    );
    localStorage.setItem("addFavorite", JSON.stringify(updatedFavorite));
  };

  // deletes data from cart
  const handleRemoveItem = (clickedItem) => {
    setChosenItem((prevSelectedItems) =>
      prevSelectedItems.filter((item) => item.id !== clickedItem)
    );
    const updatedItems = chosenItem.filter((item) => item.id !== clickedItem);
    localStorage.setItem("chosenItems", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    localStorage.setItem("chosenItem", JSON.stringify(chosenItem));
  }, [chosenItem]);

  return {
    addItem,
    chosenItem,
    handleRemoveItem,
    chooseFavorite,
    addFavorite,
    handleRemoveItemFavorite,
  };
};

export { useAddFavorites };
