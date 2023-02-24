import React from "react";
import { useForm } from 'react-hook-form';
import Button from "../components/button"

import TextArea from "../components/textarea"
import { useRouter } from 'next/router';

interface TextAreaProps {
  write: string;
}

export default () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<TextAreaProps>();

  const onValid = (data: TextAreaProps) => {
    console.log(data)
  }
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
