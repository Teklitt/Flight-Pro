import Head from 'next/head'
import Layout from '@/components/Layout'
// import Image from 'next/image'

// import AnimatedText from '@/components/AnimatedText'
// import Link from 'next/link'
// import { LinkArrow } from '@/components/Icons'

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
