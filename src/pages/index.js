import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flight Pro</title>
        <meta name="description" content="Created By CodeBear" />
      </Head>

      <main className=" flex items-center text-dark w-full min-h-screen dark:text-light px-10">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="absolute -z-10">
              <Image src="" alt="Backround image" className="w-full h-auto" />

              {/* Your home page content goes here */}
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
