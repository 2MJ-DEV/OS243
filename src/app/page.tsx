import { Suspense } from "react";
import Template from "./template";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";

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
              <div className="w-full h-[300px] relative border p-5 grid grid-cols-3 gap-4">
                <div className="">
                  <div className="w-full h-50 relative border"></div>
                  <div className="">
                    <div className="">
                      <h2 className="font-bold text-lg">Titre du projet</h2>
                      <p className="font-light text-sm">Brève description du projet...</p>
                    </div>
                    <div className="">
                      <div className="">
                        <span>NextJs</span>
                      </div>
                      <div className="">
                        <AiOutlineLike size={25} />
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
