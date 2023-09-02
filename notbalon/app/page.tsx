import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full  bg-slate-900 flex-col items-center gap-2 p-10">
      <div>Beef cake!</div>
      <Image src="/Level_1.png" alt="Level_1" height={600} width={600} />
      <div className="flex items-center justify-center flex-col overflow-hidden m-5">
        <Image
          src="/pink_blub.png"
          alt="Level_1"
          height={100}
          width={100}
          className="bg-transparent rounded"
        />
        <div className="m-2 p-2 rounded text-black bg-slate-100 border-violet-500 border-2  textarea-bordered w-5/6 max-w-xs overflow-hidden text-black">
          What do we have here? A puny hooman who thinks he can solve my
          riddles? Let's see if your little hooman brain can deal with this
          ancient text from my home planet. Surely you won't be able to
          comprehend the wisdom hidden within.
        </div>
      </div>
      <div>
        {/* <textarea
          className="textarea textarea-primary w-[100%] overflow-hidden text-black"
          placeholder="Bio"
        >
          What do we have here? A puny hooman who thinks he can solve my
          riddles? Let's see if your little hooman brain can deal with this
          ancient text from my home planet. Surely you won't be able to
          comprehend the wisdom hidden within.
        </textarea> */}
      </div>
    </main>
  );
}
