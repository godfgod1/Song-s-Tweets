import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import Button from "../components/button"

import TextArea from "../components/textarea"
import { useRouter } from 'next/router';
import useUser from '../lib/client/useUser';
import useMutation from '../lib/client/useMutation';
interface TextAreaProps {
  write: string;
}
interface MutatiionResult{
  ok:boolean;
}

export default () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<TextAreaProps>();
  const [ write, { loading, data, error }] = useMutation<MutatiionResult>("/api/write")


  const onValid = (data: TextAreaProps) => {
    write(data)
  }

  useEffect(()=>{
    if(data?.ok) router.push("/")
  },[data,router])


  const {login, isLoading} = useUser()
  useEffect(()=>{
    console.log('login',login)
    if(isLoading ===false){
      if(login.ok === false){  
        router.push('/log-in')
        return
      }else{
        return 
      }
    }
  },[login,router])

  return (
    <div className=' h-screen  '>
      <form onSubmit={handleSubmit(onValid)} className=' w-full    flex flex-col space-y-5 justify-between '>
        <TextArea register={register("write", {required:true})}  />
        <Button text={"등록"} />
      </form>
      <div className='w-full mt-20'>
      <Button text={"홈으로"} onClick={()=> router.push('/')}/>

      </div>
      
    </div>
  )
};
