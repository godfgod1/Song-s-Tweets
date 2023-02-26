import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import Button from "../../components/button"
import TextArea from "../../components/textarea"
import Link from 'next/link'
import Router, { useRouter } from 'next/router';
import useUser from '../../lib/client/useUser';
import useMutation from '../../lib/client/useMutation';
import useSWR from 'swr';
import { Reply, User } from '@prisma/client';
interface TextAreaProps {
  write: string;
}
interface MutatiionResult{
  ok:boolean;
}

interface replyWithUser extends Reply{
  user:User
}

export default () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<TextAreaProps>();
  const { data:tweet, mutate } = useSWR(router.query.id ? `/api/write/${router.query.id}`: null)

  const [ replyWrite, { loading, data, error }] = useMutation(`/api/write/${router.query.id}/reply`)
  const [ like ] = useMutation(`/api/write/${router.query.id}/like`)
  // router.query.id ? `/api/products/${router.query.id}`: null

  const LikeHandler = () =>{
    mutate( prev=>prev&& ({...prev, isLike:!prev.isLike}),false)
    like({})
  }

  const onValid = (contents: TextAreaProps) => {
    console.log('asdasda')
    replyWrite(contents)
  }

  const {login, isLoading} = useUser()
  useEffect(()=>{
    if(data?.ok) router.push("/")
  },[data,router])

  useEffect(()=>{
    if(isLoading ===false){
      if(login.ok === false){  
        Router.push('/log-in')
        return
      }else{
        return 
      }
    }
  },[login,Router])
  console.log('tweet',tweet)
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
          {tweet?.tweetData?.id}
        </h1>
        <div className='w-10' />
      </div>
      <div className='h-[20rem]  border border-green-300 p-10 flex flex-col   justify-between'>
          {tweet?.tweetData?.postWrite}
      </div>
      <div className='h-[14rem] w-full  border border-green-300 p-5'>
        <div className='w-full flex justify-end  space-x-2'>
 
   <span>Like </span>
   <button onClick={LikeHandler}>

       { tweet?.isLike
        ?
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
   :
<svg
className="h-6 w-6 "
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
aria-hidden="true"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
/>
</svg>}
</button>
        </div>
      <form onSubmit={handleSubmit(onValid)} className='h-[10rem] w-full   flex flex-col justify-between '>
        <TextArea register={register("write", { required: true })} name={'댓글'} />
        <Button text={"등록"} />
      </form>
      </div>
      <ul className='mt-5 flex flex-col space-y-5 '>
        {tweet?.tweetData?.reply?.map((e:replyWithUser, i:number) =>
          <li key={i} className='w-full flex space-x-2  even:flex-row-reverse even:space-x-reverse'>
            <div>
            {e.user.name}    
            </div>
            <div className='border border-green-500 rounded-md min-h-[5rem] p-3'>
             {e.replyWrite}
            </div>
          </li>)}
      </ul>
    </div>
  )
};
