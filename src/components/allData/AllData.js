import glasses from "../../assets/accessorie.webp";
import watch from "../../assets/accessorie2.webp";
import glasses2 from "../../assets/accessorie3.webp";
import bag from "../../assets/accessorie4.webp";
import scarve from "../../assets/accessorie5.webp";
import hat from "../../assets/hat.webp";
import necklace from "../../assets/accessorie7.webp";
import ring from "../../assets/accessorie8.webp";

import cosmetics from "../../assets/cosmetic2.webp";
import cosmetics1 from "../../assets/cosmetics3.jpg";
import cosmetics2 from "../../assets/cosmetics4.webp";
import cosmetics3 from "../../assets/cosmetics5.webp";
import cosmetics4 from "../../assets/cosmetics6.webp";

import kid from "../../assets/kid.webp";
import kid2 from "../../assets/kid2.webp";
import kid3 from "../../assets/kid3.webp";
import kid4 from "../../assets/kid4.webp";
import kid5 from "../../assets/kid5.webp";
import kid6 from "../../assets/kid6.webp";

import men from "../../assets/men.webp";
import men1 from "../../assets/men2.webp";
import men2 from "../../assets/men3.webp";
import men3 from "../../assets/men4.webp";
import men4 from "../../assets/men5.webp";
import men5 from "../../assets/men6.webp";


import woman from "../../assets/woman.webp";
import woman1 from "../../assets/woman2.webp";
import woman2 from "../../assets/woman3.webp";
import woman3 from "../../assets/woman4.webp";
import woman6 from "../../assets/women7.webp";



const fullData = [
    {
      id: 1,
      image: glasses,
      description: "Sun Glasses",
      price: "$58",
      type: "accessorie",
      stock:"New",
      about:"Elevate your style and make a statement with our Trendsetter Accessories Collection. Dive into a world of exquisite craftsmanship and timeless designs. From stunning statement necklaces to elegant watches and chic handbags, we've curated the perfect accessories to complement your unique personality and enhance your everyday look. Unveil the charm of our Trendsetter Accessories and let your style speak for itself."
     
    },
    {
      id: 2,
      image: watch,
      description: "Wristwatch",
      price: "$75",
      type: "accessorie",
      stock:"Out Of Stock",
      about:"Elevate your style and make a statement with our Trendsetter Accessories Collection. Dive into a world of exquisite craftsmanship and timeless designs. From stunning statement necklaces to elegant watches and chic handbags, we've curated the perfect accessories to complement your unique personality and enhance your everyday look. Unveil the charm of our Trendsetter Accessories and let your style speak for itself."
    },
    {
      id: 3,
      image: glasses2,
      description: "Stylish Glasses",
      price: "$65",
      type: "accessorie",
      stock:"New",
      about:"Elevate your style and make a statement with our Trendsetter Accessories Collection. Dive into a world of exquisite craftsmanship and timeless designs. From stunning statement necklaces to elegant watches and chic handbags, we've curated the perfect accessories to complement your unique personality and enhance your everyday look. Unveil the charm of our Trendsetter Accessories and let your style speak for itself."
    },
    {
      id: 4,
      image: bag,
      description: "Leather Bag",
      price: "$110",
      type: "accessorie",
      stock:"New",
      about:"Elevate your style and make a statement with our Trendsetter Accessories Collection. Dive into a world of exquisite craftsmanship and timeless designs. From stunning statement necklaces to elegant watches and chic handbags, we've curated the perfect accessories to complement your unique personality and enhance your everyday look. Unveil the charm of our Trendsetter Accessories and let your style speak for itself."
    },
    {
      id: 5,
      image: scarve,
      description: "Silk Scarf",
      price: "$30",
      type: "accessorie",
      stock:"Sale",
      about:"Elevate your style and make a statement with our Trendsetter Accessories Collection. Dive into a world of exquisite craftsmanship and timeless designs. From stunning statement necklaces to elegant watches and chic handbags, we've curated the perfect accessories to complement your unique personality and enhance your everyday look. Unveil the charm of our Trendsetter Accessories and let your style speak for itself."
    },
    {
      id: 6,
      image: hat,
      description: "Fashion Hat",
      price: "$45",
      type: "accessorie",
      stock:"Out Of Stock",
      about:"Elevate your style and make a statement with our Trendsetter Accessories Collection. Dive into a world of exquisite craftsmanship and timeless designs. From stunning statement necklaces to elegant watches and chic handbags, we've curated the perfect accessories to complement your unique personality and enhance your everyday look. Unveil the charm of our Trendsetter Accessories and let your style speak for itself."
    },
    {
      id: 7,
      image: necklace,
      description: "Necklace",
      price: "$22",
      type: "accessorie",
      stock:"Sale",
      about:"Elevate your style and make a statement with our Trendsetter Accessories Collection. Dive into a world of exquisite craftsmanship and timeless designs. From stunning statement necklaces to elegant watches and chic handbags, we've curated the perfect accessories to complement your unique personality and enhance your everyday look. Unveil the charm of our Trendsetter Accessories and let your style speak for itself."
    },
    {
      id: 8,
      image: ring,
      description: "Gold Ring",
      price: "$75",
      type: "accessorie",
      stock:"New",
      about:"Elevate your style and make a statement with our Trendsetter Accessories Collection. Dive into a world of exquisite craftsmanship and timeless designs. From stunning statement necklaces to elegant watches and chic handbags, we've curated the perfect accessories to complement your unique personality and enhance your everyday look. Unveil the charm of our Trendsetter Accessories and let your style speak for itself."
    },
    {
      id: 9,
      image: cosmetics,
      description: "Makeup Kit",
      price: "$55",
      type: "cosmetics",
      stock:"New",
      about:"Discover the secret to radiant beauty with our Luxe Beauty Elixir. This exquisite cosmetic wonder is infused with nourishing botanicals, vitamins, and minerals, providing your skin with the ultimate pampering experience. Achieve a flawless, luminous complexion that will leave everyone in awe. Elevate your skincare routine with our Luxe Beauty Elixir and unveil your true radiance."
    },
    {
      id: 10,
      image: cosmetics1,
      description: "Lipstick Set",
      price: "$20",
      type: "cosmetics",
      stock:"Sale",
      about:"Discover the secret to radiant beauty with our Luxe Beauty Elixir. This exquisite cosmetic wonder is infused with nourishing botanicals, vitamins, and minerals, providing your skin with the ultimate pampering experience. Achieve a flawless, luminous complexion that will leave everyone in awe. Elevate your skincare routine with our Luxe Beauty Elixir and unveil your true radiance."
    },
    {
      id: 11,
      image: cosmetics2,
      description: "Skin Care Products",
      price: "$40",
      type: "cosmetics",
      stock:"Out Of Stock",
      about:"Discover the secret to radiant beauty with our Luxe Beauty Elixir. This exquisite cosmetic wonder is infused with nourishing botanicals, vitamins, and minerals, providing your skin with the ultimate pampering experience. Achieve a flawless, luminous complexion that will leave everyone in awe. Elevate your skincare routine with our Luxe Beauty Elixir and unveil your true radiance."
    },
    {
      id: 12,
      image: cosmetics3,
      description: "Perfume Collection",
      price: "$30",
      type: "cosmetics",
      stock:"New",
      about:"Discover the secret to radiant beauty with our Luxe Beauty Elixir. This exquisite cosmetic wonder is infused with nourishing botanicals, vitamins, and minerals, providing your skin with the ultimate pampering experience. Achieve a flawless, luminous complexion that will leave everyone in awe. Elevate your skincare routine with our Luxe Beauty Elixir and unveil your true radiance."
    },
    {
      id: 13,
      image: cosmetics4,
      description: "Beauty Essentials",
      price: "$50",
      type: "cosmetics",
      stock:"Out Of Stock",
      about:"Discover the secret to radiant beauty with our Luxe Beauty Elixir. This exquisite cosmetic wonder is infused with nourishing botanicals, vitamins, and minerals, providing your skin with the ultimate pampering experience. Achieve a flawless, luminous complexion that will leave everyone in awe. Elevate your skincare routine with our Luxe Beauty Elixir and unveil your true radiance."
    },
    {
      id: 14,
      image: kid,
      description: "Colorful Dress",
      price: "$40",
      type: "kid",
      stock:"New",
      about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
    },

    {
      id: 15,
      image: kid2,
      description: "Children's Shoes",
      price: "$30",
      type: "kid",
      stock:"Sale",
      about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
    },
    {
      id: 16,
      image: kid3,
      description: "Toy Collection",
      price: "$25",
      type: "kid",
      stock:"New",
      about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
    },
    {
        id: 30,
        image: kid4,
        description: "Toy Collection",
        price: "$25",
        type: "kid",
        stock:"Sale",
        about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
      },
      {
        id: 31,
        image: kid5,
        description: "Toy Collection",
        price: "$25",
        type: "kid",
        stock:"New",
        about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
      },
      {
        id: 32,
        image: kid6,
        description: "Toy Collection",
        price: "$25",
        type: "kid",
        stock:"Sale",
        about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
      },
   
    {
      id: 17,
      image: men,
      description: "Men's T-shirt",
      price: "$25",
      type: "men",
      stock:"New",
      about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
    },
    {
      id: 18,
      image: men1,
      description: "Casual Jacket",
      price: "$85",
      type: "men",
      stock:"Out Of Stock",
      about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
    },
    {
      id: 19,
      image: men2,
      description: "Men's Jeans",
      price: "$45",
      type: "men",
      stock:"New",
      about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
    },
    {
      id: 20,
      image: men3,
      description: "Sneakers",
      price: "$60",
      type: "men",
      stock:"New",
      about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
    },
    {
      id: 21,
      image: men4,
      description: "Formal Shirt",
      price: "$35",
      type: "men",
      stock:"New",
      about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
    },
    {
      id: 22,
      image: men5,
      description: "Sports Attire",
      price: "$70",
      type: "men",
      stock:"Out Of Stock",
      about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
    },
 
    {
      id: 23,
      image: woman,
      description: "Women's Dress",
      price: "$60",
      type: "woman",
      stock:"Sale",
      about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
    },
    {
      id: 24,
      image: woman1,
      description: "High Heels",
      price: "$50",
      type: "woman",
      stock:"Sale",
      about:"Introducing our new Essential Cotton Shirt! Crafted from the finest cotton blend, this shirt offers unparalleled comfort and style. Whether you're heading to the office or a casual gathering, this shirt will keep you looking sharp and feeling great."
    },
    {
      id: 25,
      image: woman2,
      description: "Designer Handbag",
      price: "$100",
      type: "woman",
      stock:"Out Of Stock",
      about:"Step into the spotlight with our Elegant Evening Dress. This stunning gown features a flowing chiffon skirt and intricate lace bodice. Whether it's a formal gala or a romantic dinner, this dress exudes sophistication and grace, making you the center of attention."
    },
    {
      id: 26,
      image: woman3,
      description: "Elegant Jewelry",
      price: "$80",
      type: "woman",
      stock:"New",
      about:"Step into the spotlight with our Elegant Evening Dress. This stunning gown features a flowing chiffon skirt and intricate lace bodice. Whether it's a formal gala or a romantic dinner, this dress exudes sophistication and grace, making you the center of attention."
    },
 
    {
      id: 27,
      image: woman6,
      description: "Stylish Sunglasses",
      price: "$35",
      type: "woman",
      stock:"Sale",
      about:"Step into the spotlight with our Elegant Evening Dress. This stunning gown features a flowing chiffon skirt and intricate lace bodice. Whether it's a formal gala or a romantic dinner, this dress exudes sophistication and grace, making you the center of attention."
    },
    
  ];
  
  export { fullData };
  