import React from "react";
import { useForm } from 'react-hook-form';
import Button from "../../components/button"
import TextArea from "../../components/textarea"
import Link from 'next/link'
interface TextAreaProps {
  write: string;
}


export default () => {
  const { register, handleSubmit } = useForm<TextAreaProps>();

  const onValid = (data: TextAreaProps) => {
    console.log(data)
  }
  return (
    <div className=' h-screen  '>
      <div className=' flex justify-between px-5  items-center text-2xl h-16 w-full bg-green-500 text-white'>
        <Link href={'/'} >
          <div className='cursor-pointer'>
            <svg className='w-10' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path>
            </svg>
          </div>
        </Link>
        <h1 className=' '>
          title
        </h1>
        <div className='w-10' />
      </div>
      <div className='h-[20rem]  border border-green-300 p-10 flex flex-col   justify-between'>

      </div>
      <form onSubmit={handleSubmit(onValid)} className='h-[12rem] w-full  border border-green-300 p-5 flex flex-col justify-between '>
        <TextArea register={register("write", { required: true })} name={'댓글'} />
        <Button text={"등록"} />
      </form>
      <ul className='mt-5 flex flex-col space-y-5 '>
        {new Array(5).fill('asd').map((e, i) =>
          <li className='w-full flex space-x-2  even:flex-row-reverse even:space-x-reverse'>
            <div>
              song
            </div>
            <div className='border border-green-500 rounded-md min-h-[5rem] p-3'>
              sadjaldjalsjdkajdajlsdjlajdlajsdklasjlk
            </div>
          </li>)}
      </ul>
    </div>
  )
};
