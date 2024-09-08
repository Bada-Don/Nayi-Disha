function Hero() {
    return (
        <div className=" mx-auto overflow-x-hidden flex flex-col items-center gap-10">
            <h1>Build your dream tech team</h1>
            <p className="text-[1.25rem]">Flexiple is your 1-stop solution to hire dream developers for full-time or contract roles</p>
            <button
                className='w-fit px-[1.5rem] py-[.25rem]  rounded-xl bg-[#7c35c7] hover:bg-[#4d217b] text-xl'

            >
                Hire Developers
            </button>
            <div class=" mx-auto max-w-4xl pt-5 md:pt-15"><video loop playsinline autoplay src="https://misc-flexiple.s3.amazonaws.com/flexiple-product.mp4" class="w-full rounded-[10px]"></video></div>
           <ul className="flex flex-row ">
            <li><div className="flex flex-col"><h2>$6 Million</h2><p>Talent Payments</p></div></li><hr />
            <div class="my-5 h-[1px] w-full bg-white opacity-20 md:mx-8 md:h-10 md:w-[1px] lg:mx-10 "></div>
            <li><div className="flex flex-col"><h2>100,000+</h2><p>Engineers Vetted</p></div></li>
            <div class="my-5 h-[1px] w-full bg-white opacity-20 md:mx-8 md:h-10 md:w-[1px] lg:mx-10 "></div>
            <li><div className="flex flex-col"><h2>72 Hrs</h2><p>Average time to hire</p></div></li>
           </ul>
        </div>
    );
}

export default Hero;