import testimonialback from '/testimonialback.svg';
function Features() {
    return (
    <div className='w-[90%]'>
        <div className=" flex flex-col scale-110  justify-center items-center h-screen bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${testimonialback})` }}>

            <h1 className='mb-[5rem] text-5xl max-xl:text-3xl max-xl:mb-[2rem]'>Tech hiring made easy</h1>

            <div className='flex w-full flex-row justify-around max-xl:flex-col max-xl:items-center max-xl:gap-10'>
                <img className='w-[30%] max-xl:w-[90%]' src="https://flexiple.com/_next/static/media/1.c0338260.webp" alt="" />
                <div className='flex flex-col w-[30%] max-xl:w-[90%] max-xl:gap-5'>

                    <p className='font-bold max-xl:text-sm'>Quality talent</p>
                    <h2 className=' max-xl:text-xl'>Access pre-vetted quality engineers</h2>
                    <p className=' max-xl:text-sm'>Stop evaluating 100s of candidates and directly get access to Flexiple’s talent who are carefully vetted through an extensive screening process.</p>
                </div>
            </div>
        </div>
{/* **************************************************************** */}
        <div className=" flex flex-col scale-110  justify-center items-center h-screen bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${testimonialback})` }}>

            <h1 className='mb-[5rem] text-5xl max-xl:text-3xl max-xl:mb-[2rem]'>Tech hiring made easy</h1>

            <div className='flex w-full flex-row justify-around max-xl:flex-col max-xl:items-center max-xl:gap-10'>
                <img className='w-[30%] max-xl:w-[90%]' src="https://flexiple.com/_next/static/media/1.c0338260.webp" alt="" />
                <div className='flex flex-col w-[30%] max-xl:w-[90%] max-xl:gap-5'>

                    <p className='font-bold max-xl:text-sm'>Quality talent</p>
                    <h2 className=' max-xl:text-xl'>Access pre-vetted quality engineers</h2>
                    <p className=' max-xl:text-sm'>Stop evaluating 100s of candidates and directly get access to Flexiple’s talent who are carefully vetted through an extensive screening process.</p>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Features;