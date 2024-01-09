import { create } from "zustand";
import { catalogue } from "../data/items";


export const useItemsStore=create(set=>({
    items:[],
    setItems:(query)=>{
        set({items:catalogue.filter(item=>item.category==query)})
    }
}))

export const useModal=create(set=>({
    modal:false
}))
