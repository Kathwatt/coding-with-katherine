"use client"
import React from "react"
import { useForm } from "react-hook-form"
import siteMetadata from "@/src/utils/siteMetaData"

export default function ContactForm() {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
