import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full bg-slate-900 w-[100%] flex-col items-center gap-8 p-4">
      <Image src="/Level_1.png" alt="Level_1" height={600} width={600} />
      <div className="flex items-center flex-col overflow-hidden m-2 max-w-md">
        <div className="">
          <Image
            src="/pinkblub_circle_final circle.png"
            alt="Level_1"
            height={180}
            width={180}
            className="bg-transparent rounded border-[D0B5E9]"
          />
        </div>
        <div
          className="
          m-2
          p-2
          rounded
          text-black
          -translate-y-9
          bg-slate-100 
          border-[#D0B5E9] 
          border-2 textarea-bordered
          w-7/8
          overflow-hidden"
        >
          {`What do we have here? A little hooman who thinks he can solve my
          riddles? Let's see if your puny hooman brain can deal with this
          ancient text from my home planet, Riddleium. Surely you won't be able to
          comprehend the wisdom hidden within.`}
        </div>
      </div>
    </main>
  );
}
