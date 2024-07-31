import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-900 h-screen w-screen flex justify-center items-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">Hello Memory</h1>
        <Link href={"/memory"} className="bg-teal-700 px-2 py-1 rounded-lg">
          Go Memory
        </Link>
      </div>
    </main>
  );
}
