import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="flex flex-col gap-20 py-10 pb-32 max-container padding-container md:gap-28 lg:py-20 xl:flex-row ">
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
                <p className='bold-16 lg:bold-20 text-blue-70'>
                    198K
                    <span className='ml-1 regular-16 lg:regular-20'>+ reviews</span>
                </p>
            </div>
            <div className='flex flex-col w-full gap-3 sm:flex-row'>
                <Button
                    type="button"
                    title="Download App"
                    variant="btn_green"    
                />
                <Button
                    type="button"
                    title="How it works"
                    icon="/play.svg"
                    variant="btn_white_text"    
                />
            </div>
        </div>
        <div className='relative flex items-start flex-1'>
            <div className='relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
                <div className='flex flex-col'>
                    <div className='flexBetween'>
                        <p className='regular-16 text-gray-20'>Location</p>
                        <Image
                            src="/close.svg"
                            alt="close"
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className='text-white bold-20'>Rafraf</p>
                </div>
                <div className='flexBetween'>
                    <div className='flex flex-col'>
                        <p className="block regular-16 text-gray-20">Distance</p>
                        <p className='text-white bold-20'>10 km</p>  
                    </div> 
                    <div className='flex flex-col'>
                        <p className="block regular-16 text-gray-20">Elevation</p>
                        <p className='text-white bold-20'>1.21 km</p>  
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero