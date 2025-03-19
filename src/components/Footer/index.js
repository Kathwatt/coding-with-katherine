"use client"
import React from "react"
import siteMetadata from "@/src/utils/siteMetaData"

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 md:mt-24 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        “Code is like humor. When you have to explain it, it’s bad. – Cory
        House”
      </h3>

      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <div className="text-center">✨{siteMetadata.author}</div>
      </div>
    </footer>
  )
}

export default Footer
