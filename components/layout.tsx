import { useRouter } from 'next/router';
import React, { useEffect } from "react";
import useUser from '../lib/client/useUser';

interface LayoutProps {
  children: React.ReactNode
}

export default ({ children }: LayoutProps) => {
  const router = useRouter()
  const {pathname} =router
  //  useUser();
  useEffect(() => {

  }, [router])
  return (
    <div className=' w-full max-w-xl mx-auto '>
      {pathname ==='/'  || pathname.includes('write') ?
       <div className=' flex  justify-center items-center text-2xl h-16 w-full bg-green-500 text-white'>
        <h1>
          hello!  what are you talking about?
        </h1>
      </div>:null}
      {children}
    </div>)
};

