import React from "react";
import { UseFormRegisterReturn } from 'react-hook-form';
import { cls } from '../lib/client/utils';

interface TextareaCompoentProps {
  name?:string;
  register:UseFormRegisterReturn;
}

export default ({name, register}:TextareaCompoentProps) => (
  <div>
  {name ? <div className='h-[8rem]  '>
    {name && <label htmlFor={name} >{name}</label>}
    <textarea id={name} {...register}  className={"border p-5 focus:outline-none border-green-600 w-full  rounded-b-lg "}/>
   </div>
  :
    <textarea id={name} {...register}  className={"border p-5 focus:outline-none border-green-600 w-full h-[20rem] rounded-b-lg "}/>}
</div>
);

