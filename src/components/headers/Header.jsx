import React from 'react'
import TextLarge from '../headertext/TextLarge'
import img from '../../assets/images/flat-lay-batch-cooking-composition-with-copy-space-removebg.png'
import Button from '../buttons/Button'
export default function Header() {
  return (
    <div className="p-10 max-sm:p-2">
      {/* split section */}

      <div className="flex max-sm:flex-col max-sm:gap- rounded-3xl bg-yellow-100  ">
        <img
          src={img}
          alt=""
          className=" h-screen object-cover   rounded-l-3xl max-sm:w-full max-sm:h-[400px]  w-1/2 object-left"
        />
        <div className="z-[2] pt-28 pr-5 max-sm:p-3">
          <h1 className="text-black text-6xl max-sm:text-4xl font-medium font- ">
            All your delicacies <br /> in one stop. <br /> Served with Class
          </h1>
          <p>Crave-worthy bites, vibrant vibes. Dive into a flavor fiesta.</p>
          <Button text="Discover Menu" width="w-1/2 max-sm:w-4/5" />
        </div>
      </div>

      {/* hero text section */}
    </div>
  );
}
