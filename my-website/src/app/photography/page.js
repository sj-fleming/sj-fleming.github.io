import Link from "next/link"

export default async function Page(){
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-4 pt-3 pl-15">Photography Page</h1>
            {/* First Row */}
            <div className="flex gap-6 flex-nowrap justify-center overflow-x-auto">
                {[
                    {name: "SPORTS", image: "topRow/Sports.jpg", link: "/photography/sports"},
                    {name: "CONCERTS", image: "topRow/Concerts.jpg", link: "/photography/concerts"},
                    {name: "PORTRAITS", image: "topRow/Portraits.jpg", link: "/photography/portraits"},
                    {name: "FILM", image: "topRow/Film.jpg", link: "/photography/film"},
                ].map(({name, image, link }) => (
                    <Link 
                        href={link}
                        key={name}
                        className="relative flex-shrink-0 w-[22%] min-w-[250px] lg:w-[22%] aspect-[3/2] bg-contain bg-center bg-no-repeat select-none group"
                        style={{ backgroundImage: `url('/assets/images/${image}')` }}
                    >
                        <div className="absolute inset-0 bg-white/30 flex items-center justify-center text-white text-2xl font-semibold transition-opacity duration-300 group-hover:opacity-0">
                            {name}
                        </div>
                    </Link>

                ))}
            </div>

            {/* Second Row */}
            <div className="flex gap-6 flex-nowrap justify-center mt-6 overflow-x-auto">
                <div
                className="flex-shrink-0 w-[30%] min-w-[250px] lg:w-[30%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/assets/images/sports/Sports12.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[30%] min-w-[250px] lg:w-[30%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/assets/images/oncerts/Concerts16.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[30%] min-w-[250px] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/assets/images/beanpot/376A0248.jpg')"}}
                />
            </div>
            
            {/* Third Row */}
            <div className='flex gap-6 flex-nowrap justify-center mt-6 overflow-x-auto'>
                <div
                className="flex-shrink-0 w-[20%] min-w-[150px] lg:w-[20%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/assets/images/lacrosse/376A9770.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[35%] min-w-[250px] lg:w-[35%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/assets/images/showdown/Showdown2025_SFleming-080.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[35%] min-w-[250px] lg:w-[35%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/assets/images/gradPhotos/Tiff1.jpg')"}}
                />
            </div>
            {/* Fourth Row */}
            <div className='flex gap-6 flex-nowrap justify-center mt-6 overflow-x-auto'>
                <div
                className="flex-shrink-0 w-[35%] min-w-[250px] lg:w-[35%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/assets/images/GingerRun.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[20%] min-w-[150px] lg:w-[20%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/assets/images/Modstock.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[35%] min-w-[250px] lg:w-[35%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/assets/images/VBvsPitt.jpg')"}}
                />
            </div>
        </main>
    )
}