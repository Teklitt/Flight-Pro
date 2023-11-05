import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/flight pro logo.png'
import logo2 from '../../public/flight_pro_logo-removebg-preview.png'

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()
  //console.log(router)

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter()
  //console.log(router)

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="w-full px-32 py-0 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className=" flex-col justify-center items-center hidden lg:flex mb-2"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
      {/* full size navbar */}

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="w-full flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo on the left-hand side */}
            <Link href="/" className="flex gap-2 flex-center">
              <Image
                src={logo}
                width={300}
                height={300}
                className=""
                alt="flight pro"
              />
              
            </Link>
          </div>

          {/* Links on the far right */}
          <div className="flex justify-between">
            <CustomLink href="/" title="Home" className="ml-4" />
            <CustomLink
              href="/aaPage"
              title="Flight Details"
              className="ml-4"
            />
          </div>
        </nav>
      </div>

      {/* mobilelink navbar */}

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/50 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/aaPage"
              title="Flight Details"
              className="mx-4"
              toggle={handleClick}
            />
          </nav>
        </motion.div>
      ) : null}
    </header>
  )
}

export default NavBar
