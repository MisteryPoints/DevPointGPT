'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {
  return (
    <div className='bg-[#ABDEE6] h-screen flex flex-col items-center justify-center text-center' >
      <Image src='/logo.png' width={240} height={240} alt='logo' className='pb-[30px] w-auto' priority/>
      <button onClick={() => signIn('google')} className='text-white font-bold text-3xl animate-pulse'>Sign In to Use DevPoint Chat GPT</button>
    </div>
  )
}

export default Login
