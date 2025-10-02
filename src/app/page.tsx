import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-extrabold leading-[1.1] text-center sm:text-left flex gap-2">
          <span>CodeTogether</span>
          <div className="">
            <span className="text-[#007FFF]">d</span>
          <span className="text-[#FF0000]">r</span>
          <span className="text-[#FFD700]">c</span>
          </div>
        </h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
