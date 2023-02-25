import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import Button from "../components/button"
import Input from "../components/input"
import useMutation from '../lib/client/useMutation';
import router from 'next/router';

interface SubmitProps {
  email:string;
  password:string;
}
interface MutatiionResult{
  ok:boolean;
}

export default () => {
  const { register, handleSubmit  } = useForm<SubmitProps>();
  const [ login, { loading, data, error }] = useMutation<MutatiionResult>("/api/users/login")
  const onValid = (contents:SubmitProps) =>{
    login(contents)
  }

  useEffect(()=>{
    console.log(data)
    if(data?.ok) router.push("/")
    if(data?.ok === false){
      alert("등록된 이메일이 없거나 비밀번호가 틀렸습니다")
    }
    
  },[data,router])

  return(
    <div className=' h-screen  flex items-center  justify-center'>
      <form onSubmit={handleSubmit(onValid)} className='h-[18rem]  border border-gray-300 p-10 flex flex-col   justify-between '>
      <Input name={"email"} register={register("email", {required:true})} type="email"/>
      <Input name={"password"} register={register("password", {required:true})} type="password"/>
      <Button text={"로그인"} />
      </form>
    </div>
  )
};
