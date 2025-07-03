import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps{
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}



const CampSite = ({backgroundImage,title,subtitle,peopleJoined}:CampProps) => {
  return (
    <div className={`w-full h-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl sm:rounded-5xl` }>
      <div className="flex flex-col items-start justify-between h-full p-6 lg:px-20 lg:py-10">
        <div className="gap-4 flexCenter">
          <div className="p-4 rounded-full bg-green-50">
            <Image 
              src='folded-map.svg' 
              alt='map' 
              width={28} 
              height={28}/>
          </div>
          <div className="flex-col gap-1">
            <h4 className="text-white bold-18">{title}</h4>
            <p className="text-white regular-14">{subtitle}</p>
          </div>
        </div>
        <div className="gap-6 flexCenter">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) =>(
              <Image
                className="inline-block w-10 h-10 rounded-full"
                src={url}
                key={url}
                alt='person'
                width={52}
                height={52}
                />
            ))}
          </span>
          <p className="text-white bold-16 md:bold-20">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 lg:max-container'>
      <div className='flex hide-scrollbar h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title ="Dar Janna"
          subtitle="Bizerte,Tunisia"
          peopleJoined="50+ Joined"
          
          />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title ="Dar Janna"
          subtitle="Bizerte,Tunisia"
          peopleJoined="70+ Joined"
        />
      </div>
    </section>
  )
}

export default Camp