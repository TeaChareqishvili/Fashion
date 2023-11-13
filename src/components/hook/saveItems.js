import { useState, useEffect } from "react";

const useAddFavorites = () => {

 

  const [chosenItem, setChosenItem] = useState(() => {
    
    const storedChosenItems = localStorage.getItem('chosenItem');
    return storedChosenItems ? JSON.parse(storedChosenItems) : [];
  });

  const addItem = (clickedItem) => {
    setChosenItem([...chosenItem, clickedItem]);
  
  };

  useEffect(() => {
    localStorage.setItem('chosenItem', JSON.stringify(chosenItem));
    
  }, [chosenItem]);

  return { addItem, chosenItem };
};

export { useAddFavorites };
