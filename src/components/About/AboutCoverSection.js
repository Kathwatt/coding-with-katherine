import Image from "next/image"
import React from "react"
//import profileCharacter from "../../../public/coding.lottie"
import LottieAnimation from "@/src/components/Contact/LottieAnimation"

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
        <LottieAnimation src="/coding.lottie" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          Solving Problems, One Line of Code at a Time!
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          I'm a passionate developer on a journey of continuous learning,
          problem-solving, and innovation. Sharing my experiences, challenges,
          and lessons from the world of software development.
        </p>
      </div>
    </section>
  )
}

export default AboutCoverSection
