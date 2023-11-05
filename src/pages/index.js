import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import bg from '../../public/images/westwind.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flight Pro</title>
        <meta name="description" content="Created By CodeBear" />
      </Head>

      <main className=" flex items-center text-dark w-full min-h-screen dark:text-light px-10">
        <Layout className="relative w-full">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="absolute -z-10 w-full">
              <Image src={bg} alt="Backround image" className='w-full' width={1000} height={1000}/>


              {/* Your home page content goes here */}
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
