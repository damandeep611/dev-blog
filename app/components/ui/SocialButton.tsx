import Link from "next/link"
import React from "react"

interface SocialButtonsProps{
  icon: React.ReactNode,
  href: string,
  ariaLabel?: string,
  className?: string,
  target?: "_blank" | "_self" | "_parent" | "_top"
  onClick?: (e:React.MouseEvent<HTMLAnchorElement>) => void
}

export default function SocialButton({icon, href, ariaLabel, className, target, onClick}:SocialButtonsProps){
  return(
    <Link href={href} aria-label={ariaLabel} rel={target === '_blank' ? 'noopener noreferer' : undefined} className={`w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center text-gray-300 hover:text-gray-100 hover:bg-gray-800 transition-colors`} >
    {icon}
    </Link>
  )
}