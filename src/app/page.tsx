import { Suspense } from "react";
import Template from "./template";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import Logo from "@/components/ui/Logo";
import { GrFavorite } from "react-icons/gr";
import { RiShareLine } from "react-icons/ri";

export default function HomePage() {
  return (
    <Template>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <main className="flex flex-col w-[95%] mx-auto my-10 gap-15">
            <section>
              <div className="flex justify-between items-center mt-5">
                <div className="w-[70%] mx-auto flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <h1 className="lg:text-5xl text-2xl font-bold">Découvrez les <br /> meilleurs projets du CongoCD</h1>
                    <p className="w-[50%] lg:text-lg text-zinc-600">Découvrez le travail des designers les plus talentueux et les plus accomplis, prêts à entreprendre votre prochain projet.</p>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-4 mb-4">
                      <button className="capitalize bg-[#007FFF] text-white hover:bg-blue-500 active:bg-blue-800 border-zinc-950/5 cursor-pointer py-3 px-8 duration-300 active:scale-90 rounded-lg font-light text-xs lg:text-[15px]">projets</button>
                      <button className="capitalize bg-[#007FFF] text-white hover:bg-blue-500 active:bg-blue-800 border-zinc-950/5 cursor-pointer py-3 px-8 duration-300 active:scale-90 rounded-lg font-light text-xs lg:text-[15px]">concepteurs</button>
                      <button className="capitalize bg-[#007FFF] text-white hover:bg-blue-500 active:bg-blue-800 border-zinc-950/5 cursor-pointer py-3 px-8 duration-300 active:scale-90 rounded-lg font-light text-xs lg:text-[15px]">services</button>
                    </div>

                    {/* Search Bar */}
                    <div className="">
                      <input type="text" placeholder="Rechercher..." className="" />
                    </div>
                  </div>
                </div>
                <div className="w-[30%] mx-auto">
                  <div className="w-full h-[300px] relative border border-zinc-950/10 rounded-2xl"></div>
                </div>
              </div>
            </section>

            {/* Annonce Section */}
            <section className="">
              <div className="w-full h-[60px] px-4 flex justify-start items-center gap-4 relative border border-zinc-950/5 rounded-2xl">
                <span className="border-4 border-[#FFD700] p-1 rounded-xl font-semibold">Annonce</span>
                <p className="font-light">Dites-nous ce dont vous avez besoin et soyez instantanément mis en relation avec des talents de classe mondiale prêts à travailler sur votre projet.</p>
              </div>
            </section>

            {/* Projects Preview Section */}
            <section className="">
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="border border-zinc-950/5 p-1 rounded-xl flex flex-col gap-2">
                
                  <div className="w-full h-72 relative rounded-xl overflow-hidden">
                    <Image
                      src="/ct.webp"        // <-- corrige l’extension !
                      alt="Project Image"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col px-3 py-2 gap-2">

                    <div className="flex flex-col mb-4 gap-2">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="font-bold text-lg">
                          <Logo />
                        </h2>
                        <div className="flex gap-4">
                          <GrFavorite size={25} />
                          <RiShareLine size={25} />
                        </div>
                      </div>
                      <p className="font-light text-sm line-clamp-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum velit assumenda ullam sint facere animi beatae, nesciunt eos molestias eaque! Non ut tenetur dolorum? Perferendis culpa sequi quo nesciunt voluptatibus.</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="">
                        <span className="border border-zinc-950/5 rounded-full px-2 py-1 bg-[#007FFF] text-white">TypeScript</span>
                      </div>
                      <div className="">
                        <a href="#" className="font-light hover:underline hover:text-[#007FFF]">Jules MUKADI</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </Suspense>
      </ErrorBoundary>
    </Template>
  );
}
