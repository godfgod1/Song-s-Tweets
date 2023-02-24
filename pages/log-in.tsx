import React from "react";
import { useForm } from 'react-hook-form';
import Button from "../components/button"
import Input from "../components/input"


interface submitProps {
  email:string;
  password:any;
}

export default () => {
  const { register, handleSubmit} = useForm<submitProps>();

  const onValid = (data:submitProps) =>{
    console.log(data)
  }

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
