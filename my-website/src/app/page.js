import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F5F2] p-8">
      <h1 className="text-3xl font-bold mb-4 text-[#22223B] pt-3 pl-15">Sarah J. Fleming</h1>
        <div className="flex items-start justify-center gap-30 p-4 pt-10">
          <div
            className="w-[350px] h-[350px] rounded-md bg-cover bg-center select-none pointer-events-none"
            style={{backgroundImage: "url('/api/image?name=376A0314.jpg')"}}
          />
          <p className="max-w-md text-left text-gray-700">Hello! My name is Sarah Fleming and I'm a rising senior at Boston College studying Computer Science and minoring in Management and Leadership.
          I'm passionate about using technology and collaboration to solve real-world problems and make a positive impact. Outside of CS, I also serve as the Photo Editor for The Heights, Inc., Boston College's
          independent student newspaper. Check out some of my projects and photography on this site!
          </p>
      </div>
    </main>
  );
}
