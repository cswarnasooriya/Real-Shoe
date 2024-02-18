import { useState } from "react"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () =>{
        setDropdown(!dropdown);
    }
  return (
    <nav className="w-full h-24 flex flex-col justify-center lg:bg-transparent background lg:absolute fixed z-20">
        <div className="max-w-[1600px] lg:w-4/5 w-full mx-auto lg:px-6">
            <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
                <div className="flex flex-col gap-y-4 lg:w-1/3">
                    <span className="flex items-center gap-x-2 font-bold text-2xl">
                        <img src="/logo-black.png" alt="logo image" className="w-24"
                        />
                    </span>
                </div>

                <ul className="flex flex-1 justify-end items-center gap-16 max-lg:hidden">
                    <a href="#home" className="leading-normal no-underline text-[#8b6c47]">Home</a>
                    <a href="#about"  className="leading-normal no-underline text-[#8b6c47]">About</a>
                    <a href="#colors"  className="leading-normal no-underline text-[#8b6c47]">Colors</a>
                    <a href="#features"  className="leading-normal no-underline text-[#8b6c47]">Features</a>
                    <a href="#cart"  className="leading-normal no-underline text-[#8b6c47]">Cart</a>
                </ul>


                {dropdown ? (
                    <div onClick={showDropdown} className="lg:hidden text-black text-[22px] cursor-pointer">
                        <IoMdCloseCircleOutline/>
                    </div> 
                ) : (
                    <div onClick={showDropdown} className="lg:hidden text-black text-[22px] cursor-pointer">
                        <IoMenu/>
                    </div> 
                )}
            </div>


            {dropdown ? (
                    <div onClick={showDropdown} className="lg:hidden w-full h-[100vh] fixed top-24 background bg-cover ease-in-out duration-100">
                        <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
                            <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                                <a href="#home"  className="leading-normal no-underline text-[#8b6c47]">Home</a>
                                <a href="#about"  className="leading-normal no-underline text-[#8b6c47]">About</a>
                                <a href="#colors"  className="leading-normal no-underline text-[#8b6c47]">Colors</a>
                                <a href="#features"  className="leading-normal no-underline text-[#8b6c47]">Features</a>
                                <a href="#cart"  className="leading-normal no-underline text-[#8b6c47]">Cart</a>
                            </ul>
                        </div>
                    </div> 
                ) : null
                }
        </div>
      
    </nav>
  )
}

export default Navbar
