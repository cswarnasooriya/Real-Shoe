import { useState } from "react"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () =>{
        setDropdown(!dropdown);
    }
  return (
    <nav>
        <div>
            <div>
                <div>
                    <span>
                        <img src="/logo-black.png" alt="logo image" />
                    </span>
                </div>

                <ul>
                    <a href="#home">Home</a>
                    <a href="#home">About</a>
                    <a href="#home">Colors</a>
                    <a href="#home">Features</a>
                    <a href="#home">Cart</a>
                </ul>

                {dropdown ? (
                    <div onClick={showDropdown}>
                        <IoMdCloseCircleOutline/>
                    </div> 
                ) : (
                    <div onClick={showDropdown}>
                        <IoMenu/>
                    </div> 
                )}
            </div>

            {dropdown ? (
                    <div onClick={showDropdown}>
                        <div>
                            <ul>
                                <a href="#home">Home</a>
                                <a href="#home">About</a>
                                <a href="#home">Colors</a>
                                <a href="#home">Features</a>
                                <a href="#home">Cart</a>
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
