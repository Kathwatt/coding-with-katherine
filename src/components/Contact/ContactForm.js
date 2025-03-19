"use client"
import React from "react"
import siteMetadata from "@/src/utils/siteMetaData"

export default function ContactForm() {
  return (
    <form
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hi, I’m {siteMetadata.author}, a dedicated developer specializing in
      JavaScript. <br></br>
      You can email me at &nbsp;
      <a
        style={{ textDecoration: "underline" }}
        href={`mailto:${siteMetadata.email}`}
      >
        {siteMetadata.email}
      </a>
    </form>
  )
}
