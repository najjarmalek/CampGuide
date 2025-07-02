import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex flex-col gap-20 py-10 pb-32 max-container padding-container md:gap-28 lg:py-20 xl:flex-row">
        <div className='hero-map'/>
        <div className='relative z-20 flex-col flex-1 xl:w-1/2'>
            <h1 className='bold-55 lg:bold-88'>Camp Arena</h1>
            <p className='mt-6 regular-16 text-gray-30 xl:max-w-[520px]'>
                We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature.
                We can help you on an adventure around the world in just one app
            </p>

            <div className='flex flex-wrap gap-5 my-11'>
                <div className='flex items-center gap-2'>
                    {Array(5).fill(1).map( (_, index) => (
                        <Image
                            key={index}
                            src="/star.svg"
                            alt="star"
                            width={24}
                            height={24}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero