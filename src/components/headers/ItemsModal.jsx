import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useItemsStore,useModal } from '../../store/store';

export default function ItemsModal() {
    let {items}=useItemsStore(state=>state)
    let {modal}=useModal(state=>state)

  return (
    <div
      className={
        modal
          ? "fixed h-screen w-full bg-[rgb(0,0,0,.7)] flex items-center top-0 right-0 z-[3] p-10 max-sm:p-3"
          : "hidden"
      }
    >
      {/* display items */}
      <div className="bg-yellow-100 lg:w-1/2 w-full rounded-2xl p-10 relative  mx-auto">
        <IoMdClose size={25} className="absolute right-5 top-5" onClick={()=>{useModal.setState({modal:false})}} />
        <div className=" flex flex-col gap-5">
          <h1 className="text-2xl font-medium ">
            {items[0]?.category.toUpperCase()}
          </h1>
          <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-2">
            {items.map((item) => (
              <p className="underline">{item.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

