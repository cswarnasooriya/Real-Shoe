 

const Hero = () => {
  return (
    <div className="background pt-24 relative overflow-x-clip" id="home">
      <div className="max-w-[1600px] mx-auto xl:flex">
        <div className="xl:w-1/2 pb-24 pt-9 relative">
            <div className="xl:ml-[10%] xl:w-auto md:w-1/2 xl:px-0 px-6 relative z-10">

                <p className="text-[#be863b] text-2xl font-semibold">2022</p>

                <h1 className="xl:text-[90px] md:text-6xl text-3xl leading-none font-semibold py-8">
                    Adidas <br/>
                    Alphabounce
                </h1>

                <p className="font-semibold leading-8 text-[17px]">
                    The company was started by Michel Ronsel in his home. <br/>
                    He was joined by his eldeer brother Roger in 2019 under the foot name Dassler Brothers Shoe Factory...
                </p>

                <button className="bg-black text-[#f5ba6e] mt-8 lg:w-1/2 h-16 lg:px-0 px-8 text-lg outline-none rounded-md cursor-pointer button-hover">SHOP NOW</button>
            </div>
            <img 
                src="/logo-black.png" 
                alt="logo image" 
                className="absolute bottom-0 h-full opacity-5"
            />

        </div>

        <div className="xl:w-[70rem] md:w-[50rem] w-[25rem] absolute bottom-0 xl:top-1/4 -right-24">
            <img 
                src="/main1.png" 
                alt="adidas shoe1"
                className="w-full"
             />
        </div>

      </div>
    </div>
  )
}

export default Hero
