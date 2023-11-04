import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flight Pro</title>
        <meta name="description" content="Created By CodeBear" />
      </Head>

      <main className=" flex items-center text-dark w-full min-h-screen dark:text-light px-10">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div>Hello</div>
        </Layout>
      </main>
    </>
  )
}
