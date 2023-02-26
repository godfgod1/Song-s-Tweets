import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import Button from "../components/button"
import Input from "../components/input"
import useMutation from '../lib/client/useMutation';
import router from 'next/router';
import useUser from '../lib/client/useUser';

interface SubmitProps {
  email:string;
  password:string;
}
interface MutatiionResult{
  ok:boolean;
}

export default () => {
  const { register, handleSubmit  } = useForm<SubmitProps>();
  const [ loginSuccess, { loading, data, error }] = useMutation<MutatiionResult>("/api/users/login")
  const {login, isLoading} = useUser()
  useEffect(()=>{
    console.log('login',login)
    if(isLoading ===false){
      if(login.ok === false){  
        router.push('/log-in')
        return
      }else{
        router.push('/')
        return 
      }
    }
  },[login, router])

  const onValid = (contents:SubmitProps) =>{
    loginSuccess(contents)
  }
  useEffect(()=>{
    if(data?.ok) {
      alert("로그인 성공")
      router.push("/")
      return
    }
    if(data?.ok === false){
      alert("등록된 이메일이 없거나 비밀번호가 틀렸습니다")
    }
  },[data])
  return(
    <div className=' h-screen  flex items-center  justify-center'>
      <div className='h-[24rem] flex flex-col   justify-between'>
        <form onSubmit={handleSubmit(onValid)} className='h-[18rem]  border border-gray-300 p-10 flex flex-col   justify-between'>
        <Input name={"email"} register={register("email", {required:true})} type="email"/>
        <Input name={"password"} register={register("password", {required:true})} type="password"/>
        <Button text={"로그인"} />
        </form>
      <Button text={"회원가입"} onClick={()=>router.push("/create-account")}/>
      </div>
    </div>
  )
};
