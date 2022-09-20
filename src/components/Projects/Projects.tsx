import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useKeenSlider } from "keen-slider/react";

import { CardProjects } from "../Cards/CardProjects";
import { ProjectsData } from "../../data/ProjectsData";
import { TitleSection } from "../TitleSection";
import "keen-slider/keen-slider.min.css";

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },

    breakpoints: {
      "(min-width: 450px)": {
        slides: { perView: 1 },
      },
      "(min-width: 1025px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1290px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },

    slides: { perView: 1 },
  });

  return (
    <section
      data-aos="fade-right"
      aria-label="Projetos desenvolvidos"
      className="z-30 relative"
    >
      <div className="max-w-6xl px-4 m-auto pb-6 mt-16 md:mt-32 " id="projetos">
        <TitleSection title="Projetos destaque:" />
        <p className="text-lg font-medium text-white max-w-[90ch] leading-8 mt-4 mb-2">
          Trabalhei em projetos no caminho para ser desenvolvedor web, aqui
          estão alguns projetos desenvolvidos.
        </p>
      </div>
      <div
        ref={ref}
        className=" m-auto max-w-[350px] sm:max-w-[350px] md:max-w-[750px] xl:max-w-6xl md:gap-4 lg:gap-0 flex gap-y-10 keen-slider z-0 relative"
      >
        {Object.entries(ProjectsData).map(([key, item]) => {
          return (
            <CardProjects
              key={key}
              title={item.title}
              imgURL={item.imgURL}
              imgALT={item.title}
              description={item.description}
              deployLink={item.deployLink}
              repositoryLink={item.repositoryLink}
              techs={item.techs}
              className="keen-slider__slide slide-content"
            />
          );
        })}
      </div>

      {loaded && instanceRef.current && (
        <div className="flex p-4 gap-4 justify-center">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "border-none w-3 h-3 bg-slate-400 rounded-full " +
                  (currentSlide === idx ? "!bg-purple-500 animate-pulse" : "")
                }
              ></button>
            );
          })}
        </div>
      )}
      <div className="text-white  absolute flex justify-between lg:max-w-[97%] xl:max-w-[100%] 2xl:max-w-[1400px] w-full  top-[60%] items-center left-1/2 -translate-x-1/2 -translate-y-1/2   ">
        <IoIosArrowBack
          className="text-3xl sm:text-5xl place-self-start -ml-0 sm:ml-5 cursor-pointer animate-pulse hover:text-purple-500 hover:animate-none"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        />

        <IoIosArrowForward
          className="text-3xl sm:text-5xl place-self-end -mr-0 sm:mr-5 cursor-pointer animate-pulse  hover:text-purple-500 hover:animate-none "
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        />
      </div>
    </section>
  );
}
