'use client'

import Link from 'next/link'
import React, { MouseEventHandler, ReactNode, useState } from 'react'
import { Url } from 'next/dist/shared/lib/router/router'
import { FaAngleDown, FaAngleLeft } from 'react-icons/fa'

type Props = {
  onClick?: MouseEventHandler
  href: Url
  name: string
  state?: boolean
  children?: React.ReactNode
  icon?: ReactNode
}

const Anchor = (props: Props) => {
  const [ isHovered, setIsHovered ] = useState("rotate-0")

  return (
    <div onMouseEnter={ () => setIsHovered("-rotate-90") } onMouseLeave={ () => setIsHovered("rotate-0") } className="h-full relative flex flex-col justify-center items-center cursor-pointer ">
      <Link onClick={ props.onClick } href={ props.href } className={`${ props.state? '[&>div]:-rotate-90 [&>div]:bg-electric-pink [&>div]:dark:bg-electric-pink w-[100px]' : '[&>div]:rotate-0' } h-full rounded text-sm text-center hover:text-electric-pink dark:hover:text-electric-pink [&>div]:hover:bg-electric-pink [&>div]:dark:hover:bg-electric-pink w-[100px] py-2 flex justify-center items-center gap-2  capitalize`}>
        { props.name } 
        <div className="rounded-full bg-black p-1 dark:bg-transparent">
          <FaAngleLeft />
        </div>
      </Link>
      {props.state && (
      <div className="absolute top-[60px] flex flex-col gap-2 px-4 py-8 rounded-lg bg-rich-black ">
        { props.children }
      </div>)}
    </div>
  )
}

export default Anchor