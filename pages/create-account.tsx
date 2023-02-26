import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import Button from "../components/button"
import Input from "../components/input"
import useMutation from "../lib/client/useMutation"
import router from 'next/router';
interface SubmitProps {
  email:string;
  name:string;
  password:string;
  repassword:string;
}
interface MutatiionResult{
  ok:boolean;
}


export default () => {
  const { register, handleSubmit  } = useForm<SubmitProps>();
  const [ enroll, { loading, data, error }] = useMutation<MutatiionResult>("/api/users/create")
  const onValid = (contents:SubmitProps) =>{
    if(contents.password !== contents.repassword) return alert('비밀번호가 같지 않습니다')
    enroll(contents)
  }

  useEffect(()=>{
    if(data?.ok) router.push("/")

  },[data,router])

  return(
    <div className=' h-screen  flex items-center  justify-center'>
      <div className='h-[32rem] flex flex-col justify-between'>
        <form onSubmit={handleSubmit(onValid)} className='h-[28rem]  border border-gray-300 p-10 flex flex-col   justify-between '>
        <Input name={"email"} register={register("email", {required:true})} type="email"/>
        <Input name={"name"} register={register("name", {required:true})} type="text"/>
        <Input name={"password"} register={register("password", {required:true})} type="password"/>
        <Input name={"password for double-check"} register={register("repassword", {required:true})} type="password"/>
        <Button text={"회원가입"} />
        </form>
      <Button text={"로그인 페이지로"} onClick={()=>router.push("/log-in")}/>
      </div>
    </div>
  )
};
