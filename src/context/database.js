
// Import Images

// Clothes
import img1 from '../images/classic-watch.png'
import ankleBoots from '../images/ankle-boots.png'
import baseballCap from '../images/baseball-cap.png'
import blackHandbag from '../images/black-handbag.png'
import blackHat from '../images/black-hat.png'
import blackStrappyPeeptoe from '../images/black-strappy-peeptoe.png'
import casualFlatLoafers from '../images/casual-flat-loafers.png'
import designerSandals from '../images/designer-sandals.png'
import diamondRing from '../images/diamond-ring.png'
import diorHandbag from '../images/dior-handbag.png'
import embellishedSlides from '../images/embellished-slides.png'
import facemask from '../images/facemask.png'
import flatSandalSportFashion from '../images/flat-sandals-sport-fashion.png'
import greyBeeWatch from '../images/grey-bee-watch.png'
import HAJINKBoatShoes from '../images/HAJINK-boat-shoes.png'
import highHeelsShoes from '../images/high-heels-shoes.png'
import kedsSneakers from '../images/keds-sneakers.png'
import luxuryWatch from '../images/luxury-watch.png'
import multiColoredArmlessTop from '../images/multi-colored-armless-top.png'
import newmoonNecklace from '../images/newmoon-necklace.png'
import ovalGlasses from '../images/oval-glasses.png'
import simpleDiamondRing from '../images/simple-diamond-ring.png'
import summerShoes from '../images/summer-shoes.png'
import supergaPlaidSneakers from '../images/superga-plaid-sneakers.png'
import supergaSneakersMan from '../images/superga-sneakers-man.png'
import tambourineBag from '../images/tambourine-bag.png'
import tearDropNecklace from '../images/tear-drop-necklace.png'
import winterFleece from '../images/winter-fleece.png'



import React, { useState, createContext } from 'react';

const db = [

    {id: 1, productType: "clothes", category: "Dresses", productName: "Multicolored armless top", img: multiColoredArmlessTop, price: 1000, discountPercent: 0, availableInStock: 700, count: 0, color: 'red', size: 'XXII', isLiked: false, isBought: false},
    {id: 2, productType: "clothes", category: "Skirts", productName: "Mini Skirt", img: multiColoredArmlessTop, price: 300, discountPercent: 0, availableInStock: 700, count: 0, color: 'orange', size: 'M', isLiked: false, isBought: false},
    {id: 3, productType: "clothes", category: "Dresses", productName: "Lightweight gown", img: img1, price: 350, discountPercent: 0, availableInStock: 700, count: 0, color: 'grey', size: 'XL', isLiked: false, isBought: false},
    {id: 4, productType: "clothes", category: "Pants", productName: "Ladies bush pants", img: img1, price: 32, discountPercent: 0, availableInStock: 700, count: 0, color: 'pink', size: 'S', isLiked: false, isBought: false},
    {id: 5, productType: "clothes", category: "Jeans", productName: "Checked ladies trousers", img: img1, price: 120, discountPercent: 0, availableInStock: 700, count: 0, color: 'black', size: 'L', isLiked: false, isBought: false},
    {id: 6, productType: "clothes", category: "Coat", productName: "Beanie winter fleece", img: winterFleece, price: 16, discountPercent: 0, availableInStock: 700, count: 0, color: 'black', size: 'M', isLiked: false, isBought: false},
    {id: 7, productType: "clothes", category: "Caps", productName: "Summer caps", img: summerShoes, price: 14, discountPercent: 0, availableInStock: 700, count: 0, color: 'brown', isLiked: false, size: '20', isBought: false},
    {id: 8, productType: "clothes", category: "Jeans", productName: "Jeans jacket", img: img1, price: 350, discountPercent: 0, availableInStock: 700, count: 0, color: 'blue', size: '28', isLiked: false, isBought: false},
    {id: 9, productType: "clothes", category: "Dresses", productName: "Blue button-down gown", img: greyBeeWatch, price: 10, discountPercent: 0, availableInStock: 700, count: 0, color: 'pink', size: '18', isLiked: false, isBought: false},
    {id: 10, productType: "clothes", category: "Shorts", productName: "Man shorts", img: img1, price: 12, discountPercent: 0, availableInStock: 700, count: 0, color: 'grey', size: '27', isLiked: false, isBought: false},
    {id: 11, productType: "clothes", category: "Dresses", productName: "T-shirts", img: img1, price: 9, discountPercent: 0, availableInStock: 700, count: 0, color: 'white', size: 'S', isLiked: false, isBought: false},
    {id: 12, productType: "clothes", category: "Coat", productName: "Fall Coat", img: img1, price: 680, discountPercent: 0, availableInStock: 700, count: 0, color: 'orange', size: 'XL', isLiked: false, isBought: false},
    {id: 13, productType: "clothes", category: "Coat", productName: "Winter Coat", img: img1, price: 990, discountPercent: 0, availableInStock: 700, count: 0, color: 'blue', size: 'XL', isLiked: false, isBought: false},
    {id: 14, productType: "clothes", category: "Dresses", productName: "Lady Jacket", img: img1, price: 1190, discountPercent: 0, availableInStock: 700, count: 0, color: 'yellow', size: 'M', isLiked: false, isBought: false},
    {id: 15, productType: "clothes", category: "Jeans", productName: "Jeans Trousers", img: img1, price: 690, discountPercent: 0, availableInStock: 700, count: 0, color: 'blue', size: '29', isLiked: false, isBought: false},
    {id: 16, productType: "clothes", category: "Dresses", productName: "Multicolored top", img: multiColoredArmlessTop, price: 790, discountPercent: 0, availableInStock: 700, count: 0, color: 'orange', size: 'S', isLiked: false, isBought: false},
    {id: 17, productType: "clothes", category: "Shorts", productName: "Summer lady shorts", img: img1, price: 190, discountPercent: 0, availableInStock: 700, count: 0, color: 'white', size: '20', isLiked: false, isBought: false},
    {id: 18, productType: "clothes", category: "Dresses", productName: "Man Jacket", img: img1, price: 580, discountPercent: 0, availableInStock: 700, count: 0, color: 'grey', size: '27', isLiked: false, isBought: false},
 
    {id: 19, productType: "shoes", category: "Sneakers", productName: "Keds sneakers", img: kedsSneakers, price: 210, discountPercent: 0, availableInStock: 700, count: 0, color: 'pink', size: '35', isLiked: false, isBought: false},
    {id: 20, productType: "shoes", category: "Slides & Slippers", productName: "Guilhermina Embellished Slides", img: embellishedSlides, price: 17, discountPercent: 0, color: 'brown', size: '38', availableInStock: 700, count: 0, isLiked: false, isBought: false},
    {id: 21, productType: "shoes", category: "Flats", productName: "Black strappy peeptoe", img: blackStrappyPeeptoe, price: 16.50, discountPercent: 0, availableInStock: 700, count: 0, color: 'black', size: '39', isLiked: false, isBought: false},
    {id: 22, productType: "shoes", category: "Flats", productName: "Casual flat loafers", img: casualFlatLoafers, price: 11, discountPercent: 0, availableInStock: 700, count: 0, color: 'pink', size: '38', isLiked: false, isBought: false},
    {id: 23, productType: "shoes", category: "Flats", productName: "Summer shoes", img: summerShoes, price: 21, discountPercent: 0, availableInStock: 700, count: 0, color: 'orange', size: '36', isLiked: false, isBought: false},
    {id: 24, productType: "shoes", category: "Party shoes", productName: "High heels ladies shoes", img: highHeelsShoes, price: 99, discountPercent: 0, availableInStock: 700, count: 0, color: 'brown', size: '39', isLiked: false, isBought: false},
    {id: 25, productType: "shoes", category: "Sneakers", productName: "Superga plaid Sneakers", img: supergaPlaidSneakers, price: 59, discountPercent: 0, availableInStock: 700, count: 0, color: 'red', size: '37', isLiked: false, isBought: false},
    {id: 26, productType: "shoes", category: "Sandals", productName: "Healed sandals", img: highHeelsShoes, price: 23, discountPercent: 0, availableInStock: 700, count: 0, color: 'brown', size: '38', isLiked: false, isBought: false},
    {id: 27, productType: "shoes", category: "Boots", productName: "HAJINK Boat Shoes", img: HAJINKBoatShoes, price: 119, discountPercent: 0, availableInStock: 700, count: 0, color: 'blue', size: '35', isLiked: false, isBought: false},
    {id: 28, productType: "shoes", category: "Boots", productName: "Ankle boots", img: ankleBoots, price: 138, discountPercent: 0, availableInStock: 700, count: 0, color: 'black', size: '40', isLiked: false, isBought: false},
    {id: 29, productType: "shoes", category: "Sneakers", productName: "Superga Men Sneakers", img: supergaSneakersMan, price: 59, discountPercent: 0, availableInStock: 700, count: 0, color: 'blue', size: '42', isLiked: false, isBought: false},
    {id: 30, productType: "shoes", category: "Slides & Slippers", productName: "Summer Cork Slippers", img: summerShoes, price: 28, discountPercent: 0, availableInStock: 700, count: 0, color: 'pink', size: '41', isLiked: false, isBought: false},
    {id: 31, productType: "shoes", category: "Sandals", productName: "Casual Flat Sandals", img: flatSandalSportFashion, price: 48, discountPercent: 0, availableInStock: 700, count: 0, color: 'white', size: '38', isLiked: false, isBought: false},
    {id: 32, productType: "shoes", category: "Sandals", productName: "Casual healless sandals", img: designerSandals, price: 27, discountPercent: 0, availableInStock: 700, count: 0, color: 'black', size: '41', isLiked: false, isBought: false},

    {id: 33, productType: "accessories", category: "Hats", productName: "Ladies Hat", img: blackHat, price: 12, discountPercent: 0, availableInStock: 700, count: 0, color: 'brown', size: 'M', isLiked: false, isBought: false},
    {id: 34, productType: "accessories", category: "Handbags", productName: "Tambourine Crossbody Bag", img: tambourineBag, price: 35, discountPercent: 0, availableInStock: 700, count: 0, color: 'black', size: 'S', isLiked: false, isBought: false},
    {id: 35, productType: "accessories", category: "Hats", productName: "Panama Ladies Hat", img: tambourineBag, price: 23, discountPercent: 0, availableInStock: 700, count: 0, color: 'orange', size: 'ML', isLiked: false, isBought: false},
    {id: 36, productType: "accessories", category: "Handbags", productName: "Summer Handbag", img: blackHandbag, price: 31, discountPercent: 0, availableInStock: 700, count: 0, color: 'pink', size: 'S', isLiked: false, isBought: false},
    {id: 37, productType: "accessories", category: "Sunglasses & Eyewears", productName: "Nereide Oval", img: ovalGlasses, price: 7, discountPercent: 0, availableInStock: 700, count: 0, color: 'gold', size: '6', isLiked: false, isBought: false},
    {id: 38, productType: "accessories", category: "Hats", productName: "Panama Men Hat", img: blackHat, price: 16, discountPercent: 0, availableInStock: 700, count: 0, color: 'black', size: 'XL', isLiked: false, isBought: false},
    {id: 39, productType: "accessories", category: "Jewelry", productName: "Diamond ladies ring", img: diamondRing, price: 12000, discountPercent: 0, availableInStock: 700, count: 0, color: 'gold', size: '7', isLiked: false, isBought: false},
    {id: 41, productType: "accessories", category: "Hats", productName: "Casual baseball cap", img: baseballCap, price: 52, discountPercent: 0, availableInStock: 700, count: 0, color: 'red', size: '8', isLiked: false, isBought: false},
    {id: 42, productType: "accessories", category: "Jewelry", productName: "Tear-drop store necklace", img: tearDropNecklace, price: 8990, discountPercent: 0, availableInStock: 700, count: 0, color: 'blue', size: '8', isLiked: false, isBought: false},
    {id: 43, productType: "accessories", category: "Watches", productName: "Ladies Luxury watch", img: luxuryWatch, price: 990, discountPercent: 0, availableInStock: 700, count: 0, color: 'orange', size: '6', isLiked: false, isBought: false},
    {id: 44, productType: "accessories", category: "Facemask", productName: "Pattern cloth face mask", img: facemask, price: 2, discountPercent: 0, availableInStock: 700, count: 0, color: 'blue', size: 'S', isLiked: false, isBought: false},
    {id: 45, productType: "accessories", category: "Watches", productName: "Fashion ladies watch", img: greyBeeWatch, price: 590, discountPercent: 0, availableInStock: 700, count: 0, color: 'pink', size: '6', isLiked: false, isBought: false},
    {id: 46, productType: "accessories", category: "Jewelry", productName: "New Moon Necklace", img: newmoonNecklace, price: 16700, discountPercent: 0, availableInStock: 700, count: 0, color: 'grey', size: '8', isLiked: false, isBought: false},
    {id: 47, productType: "accessories", category: "Bagpacks", productName: "Black Ladies bagpack", img: blackHandbag, price: 480, discountPercent: 0, availableInStock: 700, count: 0, color: 'black', size: 'XL', isLiked: false, isBought: false},
    {id: 48, productType: "accessories", category: "Watches", productName: "Men Sport Watch", img: luxuryWatch, price: 679, discountPercent: 0, availableInStock: 700, count: 0, color: 'blue', size: '7', isLiked: false, isBought: false},
    {id: 49, productType: "accessories", category: "Watches", productName: "Classic Watch", img: greyBeeWatch, price: 477, discountPercent: 0, availableInStock: 700, count: 0, color: 'pink', size: '7', isLiked: false, isBought: false},
    {id: 50, productType: "accessories", category: "Handbags", productName: "Dior Classic Handbag", img: diorHandbag, price: 245, discountPercent: 0, availableInStock: 700, count: 0, color: 'pink', size: 'M', isLiked: false, isBought: false},
    {id: 51, productType: "accessories", category: "Watches", productName: "Grey Bee Watch", img: greyBeeWatch, price: 122, discountPercent: 0, availableInStock: 700, count: 0, color: 'grey', size: '8', isLiked: false, isBought: false},
    {id: 52, productType: "accessories", category: "Jewelry", productName: "Diamond ring", img: simpleDiamondRing, price: 11900, discountPercent: 0, availableInStock: 700, count: 0, color: 'gold', size: '7', isLiked: false, isBought: false},
    {id: 53, productType: "accessories", category: "Hats", productName: "Black Ladies Hat", img: blackHat, price: 300, discountPercent: 0, availableInStock: 700, count: 0, color: 'black', size: 'X', isLiked: false, isBought: false},

]

export const DB = createContext();

export const DBProvider = ({children}) => {

    const [database, setDatabase] = useState(db);

    const add = id => {
        setDatabase(database.map( item => item.id === id ? {...item, count: item.count + 1} : item ))
    }
    
    const remove = id => {
        setDatabase(database.map( item => item.id === id && item.count > 0 ? {...item, count: item.count - 1} : item ))
    }

    const setLike = id => {
        setDatabase(database.map( item => item.id === id ? {...item, isLiked: !item.isLiked} : item ))
    }
    
    const buyItem = id => {
        setDatabase(database.map( item => item.id === id 
            ? {...item, isBought: !item.isBought, count: item.isBought ? 0 : item.count + 1} 
            : item ))
    }


    const sortByCategory = categoryName => {
        let arr = database;
        if (categoryName !== "All") 
            arr = database.filter(item => item.category === categoryName);        
        setDatabase(arr);
    }

    return (
        <DB.Provider value={{ database, setLike, buyItem, sortByCategory, add, remove }}>
            {children}
        </DB.Provider>
    )
}