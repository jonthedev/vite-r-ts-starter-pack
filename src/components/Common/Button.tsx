import React from "react"

import { twMerge } from "tailwind-merge"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ className }: ButtonProps) => {
  return (
    <h1
      className={twMerge("rounded bg-blue-500 px-4 py-2 text-white", className)}
    >
      Submit
    </h1>
  )
}

export default Button
