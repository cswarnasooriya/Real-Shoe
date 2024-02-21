

const Cart = () => {
  return (
    <div className="pt-16" id="cart">
      <div className="lg:flex items-end justify-between gap-x-12 max-w-[1600px] mx-auto pb-24 lg:h-[40rem]">
        <div className="lg:w-2/3 flex items-end relative h-full ">
            <img 
                src="/shoe4.png" 
                alt="adidas shoe"
                className="w-4/5 lg:mt-[205px] lg:ml-[15%]" 

            />

            <img 
                src="/logo-black.png" 
                alt="adidas shoe" 
                className="absolute bottom-8 left-0 w-full h-full opacity-5 flip_image"
            />

        </div>



        <div className="lg:w-[30rem] lg:py-0 py-5 lg:px-0 px-4 lg:mr-[8%]">
            <h2 className="lg:text-3xl pb-4 font-semibold ">Support and Ultralight comfort zone is guaranted</h2>
            <p className="font-semibold leading-8 text-[17px]">
                The company was started by Adolf Carsoff in his own house he was joined by his elder brother Gerine smith EVA midsole plug as well.
            </p>

            <h2 className="text-5xl font-bold py-8">LKR 9,850</h2>
            <button className="bg-black text-[#f5ba6e] lg:w-2/3 h-1/6 lg:px-0 px-8 text-lg outline-none rounded-md border-none button-hover ">Add To Cart</button>
        </div>

      </div>
      <section className="background relative py-32 overflow-x-clip">
        <div className="max-w-[1600px] mx-auto flex items-center">
            <div className="lg:ml-[5%] lg:px-0 px-4">
                <h2 className="lg:text-4xl font-semibold py-8">
                    Buy the Adidas Alpahabounce Now...!
                </h2>
                <p className="font-semibold leading-8 text-[17px] lg:w-2/3">
                    The company was started by Adolf Dasser in his own house <br/>
                    he was joined by his elder brother Roulf in 2021 under the foot name DSP brothers Shoe Factory...
                </p>

                <button className="bg-black text-[#f5ba6e] mt-8 lg:w-1/3 h-16 lg:px-0 px-8 text-lg outline-none rounded-md border-none button-hover ">SHOP NOW</button>
            </div>
            <div className="xl:w-[70rem] lg:w-[50rem] w-80 absolute lg:-bottom-24 -bottom-8 lg:-right-54 right-0 ">
                <img src="/shoe1.png" alt="shoe-1" className="w-full" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
