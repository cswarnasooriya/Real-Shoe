import { HiCheck } from "react-icons/hi";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop:{
        breakpoint: {max:4000, min:3000},
        items:3,
    },

    desktop:{
        breakpoint: {max:3000, min:1024},
        items:3,
    },
    tablet:{
        breakpoint: {max:1024, min:464},
        items:2,
    },
    module:{
        breakpoint: {max:464, min:0},
        items:1,
    },  
};

const CustomDots = ({index, onClick}) =>{
    return(
        <li onClick={onClick} className="pl-8">
            {index === 0 && (
                <button className="rounded-full w-3 h-3 bg-red-500 border border-white border-solid cursor-pointer"></button>
            )}
            {index === 1 && (
                <button className="rounded-full w-3 h-3 bg-red-500 border border-white border-solid cursor-pointer"></button>
            )}
            {index === 2 && (
                <button className="rounded-full w-3 h-3 bg-red-500 border border-white border-solid cursor-pointer"></button>
            )}

        </li>
    );
};



const About = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-[1600px] xl:w-4/5 mx-auto lg:pt-24 " id="about">
        <div className="lg:flex items-center justify-center lg:h-[35rem] my-40 ">
            <div className="bg-yellow-50 shadow-md lg:w-1/3 lg:px-0 px-4 lg:pl-16 h-full flex flex-col justify-center rounded-md">
                <h1 className="lg:text-5xl text-2xl font-semibold py-8">
                    Adidas <br/>
                    Alphabounce
                </h1>
                <span className="flex items-center gap-x-4 py-3">
                    <button className="bg-[#feedd9] border-none outline-none px-2 py-1">
                        <HiCheck className="text-2xl"/>
                    </button>
                    <p className="font-bold text-xl">
                       Molded Sockliner Mimics 
                    </p>
                </span>

                <span className="flex items-center gap-x-4 py-3">
                    <button  className="bg-[#feedd9] border-none outline-none px-2 py-1">
                        <HiCheck className="text-2xl"/>
                    </button>
                    <p className="font-bold text-xl">
                      Waffle Outside Pistons
                    </p>
                </span>
                <span className="flex items-center gap-x-4 py-3">
                    <button  className="bg-[#feedd9] border-none outline-none px-2 py-1">
                        <HiCheck className="text-2xl"/>
                    </button>
                    <p className="font-bold text-xl">
                       Thin Mesh Sewer Panel 
                    </p>
                </span>
                <span className="flex items-center gap-x-4 py-3">
                    <button  className="bg-[#feedd9] border-none outline-none px-2 py-1">
                        <HiCheck className="text-2xl"/>
                    </button>
                    <p className="font-bold text-xl">
                       Segments of Solid Rubbers
                    </p>
                </span>
                <span className="flex items-center gap-x-4 py-3">
                    <button  className="bg-[#feedd9] border-none outline-none px-2 py-1">
                        <HiCheck className="text-2xl" />
                    </button>
                    <p className="font-bold text-xl">
                       Flexible and Sock Absorbment 
                    </p>
                </span>
            </div>


            <div className="lg:w-[45rem] h-full bg-green-50 flex items-center relative rounded-md shadow-md">
                <img src="/main3.png" alt="adidas shoe-3"  className="w-full"/>
                <img src="logo-black.png" alt="logo image" className="absolute bottom-0 w-full h-full opacity-5 flip_image"/>
            </div>
        </div>
        <div>
            <p>
                Adidas Primeknit upper wraps on the foot in adaptive support and ultralight comfort zoneguarenteed.
            </p>
            <p>
                You want that product bad & can't wait, then purchase immediatly at the lowest ask; or make an offer that no seller can refuse.
            </p>
        </div>
    </div>
    <div className="bg-slide py-24 lg:overflow-hidden " id="features">
        <Carousel
            swipeable={true}
            draggable={false}
            responsive={responsive}
            ssr={true}
            infinite
            autoPlay={true}
            arrows={false}
            showDots={true}
            customDot={<CustomDots />}
            keyBoardControl={true}
            renderButtonGroupOutside={true}
            className="py-12"

        
        >

            <div className="w-full">
                <img src="/red-shoe.png" alt="red shoe" className="w-full py-8 hoverBtn"/>
            </div>
            <div className="w-full py-8 hoverBtn relative">
                <p className="text-[#fcbc6d] lg:text-5xl font-bold absolute lg:top-16 left-8">LKR 12,500</p>
                <img src="/red-shoe.png" alt="yellow shoe" className="w-full" />
            </div>

            <div>
                <img src="/red-shoe.png" alt="green shoe" className="w-full py-8 hoverBtn"/>
            </div>
            

        </Carousel>

    </div>
      
    </div>
  )
}

export default About
