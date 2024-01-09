import React from 'react'
import BentoItem from './BentoItem'
import img from '../../assets/images/top-view-table-full-delicious-food-composition (1).jpg'
import breakfast from '../../assets/images/breakfast-outside-with-nuts-dried-fruit-honey-orange-juice-tea-side-view.jpg'
import soup from '../../assets/images/chicken-red-curry-black-cup.jpg'
import food from '../../assets/images/delicious-indian-food-tray-high-angle.jpg'
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
          image={food}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          action={() => {
            setItems("swallow");
            useModal.setState({ modal: true });
          }}
        />
        <BentoItem
          header="Eatery Meals"
          span=""
          image={food}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          action={() => {
            setItems("swallow");
            useModal.setState({ modal: true });
          }}
        />
        <BentoItem
          header="Breakfast Menu"
          span="col-span-2 max-sm:col-span-1"
          image={breakfast}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
        />
        <BentoItem
          header="Lounge Meals"
          span=""
          image={food}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          location="Lounge"
        />
        <BentoItem
          header="Mocktails"
          span=""
          image={food}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          location="Lounge"
        />
        <BentoItem
          header="Alcoholic Cocktails"
          span=""
          image={food}
          desc="Feast on Flavorful Creations—Your Culinary Adventure Starts Now! Join Us"
          location="Lounge"
        />
      </div>
    </div>
  );
}

