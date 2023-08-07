"use client"

import Image from 'next/image'
import illustration_mobile from '@/public/images/illustration-sign-up-mobile.svg'
import illustration_desktop from '@/public/images/illustration-sign-up-desktop.svg'
import check_icon from '@/public/images/icon-list.svg'
import Form from '@/components/Form'
import { useState } from 'react'

export default function Home() {
  const [emailSubmitted, setEmailSubmitted] = useState('')

  return (
    <main className={`min-h-screen grid desktop:place-content-center
      ${emailSubmitted? 'bg-charcoal_gray' : ''}`}>
      {
      emailSubmitted ?
      <article className='h-full place-content-center grid px-7
        gap-7 max-w-[500px] rounded-3xl bg-white py-10'>
        <Image src={check_icon} alt='check icon' width={60}/>
        <h1 className='font-heavy text-4xl desktop:text-[3.5em]
          desktop:leading-[3.3rem]'>
          Thanks for subscribing!
        </h1>
        <p className='tracking-wide'>
          A confirmation email has been sent to &nbsp;<b>{emailSubmitted}</b>. 
          Please open it and click the button 
          inside to confirm your subscription
        </p>
        <button className='bg-dark_slate_gray text-white py-4
          font-heavy tracking-wider rounded-lg mt-[14em] shadow-xl
          desktop:mt-4'>
          Dismiss message
        </button>
      </article>
      :
      <article className='h-full grid desktop:grid-cols-2 
        desktop:place-content-center max-w-[1000px] desktop:gap-10'>
        <picture className='w-full h-auto desktop:h-full desktop:w-auto
          desktop:order-last'>
          <source srcSet={illustration_desktop.src} media='(min-width: 700px)'/>
          <Image src={illustration_mobile} alt="illustration showing dashboard mockups and graphs"
          className='w-full h-full'/>
        </picture>
        <section className='grid py-10 px-7 gap-5 place-content-center'>
          <h1 className='font-heavy text-4xl'>
            Stay updated!
          </h1>
          <p>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className='grid gap-4'>
            <li className='flex gap-4 items-start'>
              <Image src={check_icon} alt="icon showing check sign"/>
              <p>Product discovery and building what matters</p>
            </li>
            <li className='flex gap-4 items-start'>
              <Image src={check_icon} alt="icon showing check sign"/>
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className='flex gap-4 items-start'>
              <Image src={check_icon} alt="icon showing check sign"/>
              <p>And much more!</p>
            </li>
          </ul>
          <Form setEmail={setEmailSubmitted}/>
        </section>
      </article>
      }
    </main>
  )
}
