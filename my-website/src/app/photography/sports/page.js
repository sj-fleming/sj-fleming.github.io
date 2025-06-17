import Link from "next/link";

export default async function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4 pt-3 pl-15">
        <Link href="/photography" className="hover:text-[#9A8C98]">
          Photography
        </Link>{" "}
        &gt;&gt; Sports
      </h1>
    </main>
  );
}
