import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#22223B] bg-[radial-gradient(circle_at_center,_#2a2a4f,_#22223B)] p-8">
      <h1 className="text-3xl font-bold mb-4 text-[#F9F5F2] pt-3 pl-15">Sarah J. Fleming</h1>
        <div className="flex flex-wrap items-start justify-between p-4 pt-10 max-w-7xl mx-auto w-full"
              style={{ columnGap: '7vw' }}>
          <div
            className="w-[400px] h-[350px] rounded-md bg-cover bg-center select-none pointer-events-none"
            style={{backgroundImage: "url('/api/image?name=376A0314.jpg')"}}
          />
          <p className="flex-1 min-w-[300px] text-left text-[#F9F5F2] text-xl">Hello! My name is Sarah Fleming and I'm a rising senior at Boston College studying Computer Science and minoring in Management and Leadership.
          I'm passionate about using technology and collaboration to solve real-world problems and make a positive impact. Outside of CS, I also serve as the Photo Editor for The Heights, Inc., Boston College's
          independent student newspaper. Check out some of my projects and photography on this site!
          </p>
      </div>
      <h2 className="text-2xl mb-4 text-[#F9F5F2] pt-18 pl-15">Latest Updates:</h2>
    </main>
  );
}
