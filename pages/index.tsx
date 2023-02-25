import React from "react";
import Link from 'next/link'
import FloatingButton from '../components/floatingButton';
export default () => (
  <div className='h-screen  '>
    {new Array(10).fill('test').map((e, i) =>
      <Link href={`/tweet/${i}`}>
        <div className='bg-green-100 w-full h-20  drop-shadow-lg px-5  border-b-8  border-gray-100  hover:bg-green-300 cursor-pointer '>
          <div className='h-12 flex items-center px-3'>
            <h1>{e}</h1>
          </div>
          <div className='h-8 flex items-center pb-3 w-full justify-between px-3'>
            <div className='flex space-x-5'>

              <div className='flex space-x-2'>
                <svg className='   w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"></path>
                </svg>
                <span>{'1'}</span>
              </div>
              <div className='flex space-x-2'>
                <span >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>{'1'}</span>
              </div>
            </div>
            <div>
              by asd
            </div>
          </div>
        </div>
      </Link>
    )}

    <FloatingButton href="/write" />


  </div>
);
