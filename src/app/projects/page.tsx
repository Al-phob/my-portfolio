import React from 'react'

function page() {
  return (
    <section className="flex flex-col justify-center items-center mt-20 text-white">

        <h3 className="text-3xl text-center font-serif">
            Tech Stack
        </h3>

        <div className="w-24 h-1 border-b-2 border-white"/>

        <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-grey-800 p-2 flex justify-between items-center gap-3 rounded-md">
            <span className="p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md bg-violet-600 dark:bg-violet-600 text-white transition-all capitalize">
                Frontend
            </span>
            <span className="p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md text-gray-800 bg-white dark:bg-grey-800 hover:bg-grey-900 transition-all capitalize">
                Backend
            </span>
            <span className="p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md text-gray-800 bg-white dark:bg-grey-800 hover:bg-gray-100 hover:dark:bg-grey-900 transition-all capitalize">
                Others
            </span>
        </div>

    </section>
  )
}

export default page