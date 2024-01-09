import React from 'react'
import BentoItem from './BentoItem'
import img from '../../assets/images/top-view-table-full-delicious-food-composition (1).jpg'
import breakfast from '../../assets/images/breakfast-outside-with-nuts-dried-fruit-honey-orange-juice-tea-side-view.jpg'
import soup from '../../assets/images/chicken-red-curry-black-cup.jpg'
import food from '../../assets/images/delicious-indian-food-tray-high-angle.jpg'
import swallow from '../../assets/images/pounded-yam-garri-ready-eat_539365-1045.jpg'
import snacks from '../../assets/images/top-view-pastries-along-with-croissants-yummy-sweet-brown-desk-dark-floor (1).jpg'
import mocktail from '../../assets/images/cocktail-glasses.jpg'
import lmeals from '../../assets/images/breakfast-outside-with-nuts-dried-fruit-honey-orange-juice-tea-side-view.jpg'
import alcohol from '../../assets/images/orange-cocktail-inside-glass-with-minced-ice-cubes-pipes.jpg'
import ItemsModal from './ItemsModal'
import { useItemsStore,useModal } from '../../store/store'
import { catalogue } from '../../data/items'


export default function Sections() {
  let setItems=useItemsStore(state=>state.setItems)
  return (
    <div className="p-10 max-sm:p-5 flex flex-col items-center">
      <ItemsModal />
      <h1 className="text-5xl font-medium pb-3 text-center max-sm:text-3xl">
        Discover our Catalogue
      </h1>
      <p className="w-1/2 text-center max-sm:w-full">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
      </p>
      {/* Bento grid display for the menu categories */}
      <div className="grid grid-cols-3 mt-5 max-sm:grid-cols-1 w-full gap-10 ">
        <BentoItem
          header="Proteins"
          span="col-span-2 max-sm:col-span-1"
          image={img}
          desc="Indulge in our Protein Palette: Varied, Succulent, and Unforgettable Delights."
          action={() => {
            setItems("protein");
            useModal.setState({ modal: true });
          }}
        />
        <BentoItem
          header="Soup"
          span=""
          image={soup}
          desc="Deliciously Bold Soups—Embark on a Flavor Journey with Every Spoonful!"
          action={() => {
            setItems("soup");
            useModal.setState({ modal: true });
          }}
        />
        <BentoItem
          header="Swallow"
          span=""
          image={swallow}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          action={() => {
            setItems("swallow");
            useModal.setState({ modal: true });
          }}
        />
        <BentoItem
          header="Eatery Meals"
          span="col-span-2 max-sm:col-span-1"
          image={food}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          action={() => {
            setItems("Eatery Meal");
            useModal.setState({ modal: true });
          }}
        />
        <BentoItem
          header="Snacks"
          span="col-span-2 max-sm:col-span-1"
          image={snacks}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          action={() => {
            setItems("Eatery Meal");
            useModal.setState({ modal: true });
          }}
        />
        <BentoItem
          header="Breakfast Menu"
          image={breakfast}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          action={() => {
            setItems("Breakfast Menu");
            useModal.setState({ modal: true });
          }}
        />
        <BentoItem
          header="Lounge Meals"
          span=""
          image={lmeals}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          location="Lounge"
          action={() => {
            setItems("Eatery Meal");
            useModal.setState({ modal: true });
          }}
        />
        <BentoItem
          header="Mocktails"
          span=""
          image={mocktail}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          location="Lounge"
          action={() => {
            setItems("Eatery Meal");
            useModal.setState({ modal: true });
          }}
        />
        <BentoItem
          header="Alcoholic Cocktails"
          span=""
          image={alcohol}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          location="Lounge"
          action={() => {
            setItems("Eatery Meal");
            useModal.setState({ modal: true });
          }}
        />
      </div>
    </div>
  );
}

