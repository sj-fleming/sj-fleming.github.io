export default async function Page(){
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-4 pt-3 pl-15">Photography Page</h1>
            <div className="flex gap-6 flex-nowrap justify-center overflow-x-auto">
                <div
                className="flex-shrink-0 w-[30%] min-w-[250px] lg:w-[30%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/api/image?name=fenway/FenwayALSGame_SarahFleming-030.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[30%] min-w-[250px] lg:w-[30%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/api/image?name=concerts/376A0315.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[30%] min-w-[250px] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/api/image?name=beanpot/376A0248.jpg')"}}
                />
            </div>
            <div className='flex gap-6 flex-nowrap justify-center mt-6 overflow-x-auto'>
                <div
                className="flex-shrink-0 w-[20%] min-w-[150px] lg:w-[20%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/api/image?name=lacrosse/376A9770.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[35%] min-w-[250px] lg:w-[35%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/api/image?name=showdown/Showdown2025_SFleming-080.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[35%] min-w-[250px] lg:w-[35%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/api/image?name=gradPhotos/Tiff1.jpg')"}}
                />
            </div>
            <div className='flex gap-6 flex-nowrap justify-center mt-6 overflow-x-auto'>
                <div
                className="flex-shrink-0 w-[35%] min-w-[250px] lg:w-[35%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/api/image?name=GingerRun.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[20%] min-w-[150px] lg:w-[20%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/api/image?name=Modstock.jpg')"}}
                />
                <div
                className="flex-shrink-0 w-[35%] min-w-[250px] lg:w-[35%] aspect-[10/7] bg-cover bg-center select-none pointer-events-none"
                style={{backgroundImage: "url('/api/image?name=VBvsPitt.jpg')"}}
                />
            </div>
        </main>
    )
}