"use client"
import React from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const LottieAnimation = ({ src }) => {
  return <DotLottieReact src={src} autoplay loop></DotLottieReact>
}

export default LottieAnimation
