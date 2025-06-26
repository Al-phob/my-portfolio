import Image from "next/image";
import One from "./components/main/One";

export default function Home() {
  return (
    <main className="h-full w-full text-white">

      <div className="flex flex-col h-[850px] gap-20">
        <One />

      </div>
    
    </main>
  );
}
