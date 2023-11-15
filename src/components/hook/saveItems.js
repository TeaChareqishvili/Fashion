import { useState, useEffect } from "react";

const useAddFavorites = () => {

 
// saves data for cart
  const [chosenItem, setChosenItem] = useState(() => {
    
    const storedChosenItems = localStorage.getItem('chosenItem');
    return storedChosenItems ? JSON.parse(storedChosenItems) : [];
  });

  const addItem = (clickedItem) => {
    setChosenItem([...chosenItem, clickedItem]);
  
  };

  // saves data for favorite

  const [addFavorite, setAddFavorite] = useState(()=>{
    const storedFavorites = localStorage.getItem("addFavorite");
    return storedFavorites ? JSON.parse(storedFavorites) : []
   
  })

  const chooseFavorite =(clickedItem)=>{
    setAddFavorite([...addFavorite,clickedItem])
   
  }

  useEffect(()=>{
    localStorage.setItem("addFavorite", JSON.stringify(addFavorite))
    console.log("add", addFavorite)
  },[addFavorite])
  
  // deletes data from cart
  const handleRemoveItem = (clickedItem) => {
    setChosenItem((prevSelectedItems) =>
      prevSelectedItems.filter((item) => item.id !== clickedItem)
    );
    const updatedItems = chosenItem.filter((item) => item.id !== clickedItem);
    localStorage.setItem('chosenItems', JSON.stringify(updatedItems));
  };

  useEffect(() => {
    localStorage.setItem('chosenItem', JSON.stringify(chosenItem));
    
  }, [chosenItem]);

  return { addItem, chosenItem, handleRemoveItem, chooseFavorite, addFavorite};
};

export { useAddFavorites };
