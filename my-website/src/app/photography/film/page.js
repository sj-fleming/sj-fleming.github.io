// app/photography/film/page.js

import Link from "next/link";

// Indices of vertical images
const verticalIndices = [30, 9, 12, 14, 15, 18, 23, 27, 29];

export default function Page() {
  const images = Array.from({ length: 30 }, (_, i) => ({
    index: i + 1,
    isVertical: verticalIndices.includes(i + 1),
  }));

  return (
    <main className="min-h-screen p-8">
      {/* Breadcrumb */}
      <h1 className="text-3xl font-bold mb-6 pt-3">
        <Link href="/photography" className="hover:text-[#9A8C98]">
          Photography
        </Link>{" "}
        &gt;&gt; Film
      </h1>

      {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">        
            {images.map(({ index, isVertical }) => (
          <div
            key={index}
            className={`w-full break-inside-avoid bg-cover bg-center ${
            isVertical ? "aspect-[2/3]" : "aspect-[3/2]"
          }`}
            style={{
            backgroundImage: `url('/assets/images/film/Film${index}.jpg')`,
            }}
        />

        ))}
      </div>
    </main>
  );
}
