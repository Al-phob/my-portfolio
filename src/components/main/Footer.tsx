
import Social from "./Social"

function Footer() {
  return (
    <section className="w-full mt-10 text-white bg-black">
        <div className="flex flex-col justify-center items-center gap-5 md:max-w-6xl md:mx-auto md:flex md:px-12 md:py-14">
            <div className="mx-3 mt-2 font-main text-md font-medium">Handcrafted with ❤️ by Al Wahid Bio-Tchané</div>
            <div className="flex justify-center items-center">
                <Social 
                    containerStyles="flex"
                    iconStyles="w-10 h-10 border-white rounded-full flex justify-center items-center hover:transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:animate-bounce hover:text-white duration-500"
                />
            </div>

        </div>
        
    </section>
  )
}

export default Footer