import React from "react";
import { useForm } from 'react-hook-form';
import Button from "../components/button"
import Input from "../components/input"


interface SubmitProps {
  email:string;
  password:any;
}

export default () => {
    const { register, handleSubmit } = useForm<SubmitProps>();

  const onValid = (data:SubmitProps) =>{
    console.log(data)
  }

  return(
    <div className=' h-screen  flex items-center  justify-center'>
      <form onSubmit={handleSubmit(onValid)} className='h-[28rem]  border border-gray-300 p-10 flex flex-col   justify-between '>
      <Input name={"email"} register={register("email", {required:true})} type="email"/>
      <Input name={"name"} register={register("password", {required:true})} type="password"/>
      <Input name={"password"} register={register("password", {required:true})} type="password"/>
      <Input name={"password"} register={register("password", {required:true})} type="password"/>
      <Button text={"회원가입"} />
      </form>
    </div>
  )
};
