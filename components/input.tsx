import React from "react";
import { UseFormRegisterReturn } from 'react-hook-form';
import { cls } from '../lib/client/utils';

interface InputProps {
  name:string;
  type:string;
  register:UseFormRegisterReturn;
  classAdd?:string;
  
}

export default ({name, register, type, classAdd}:InputProps) => (
  <div className='flex flex-col text-slate-500 w-full '>
    <label htmlFor={name}>{name}</label>
    <input  id={name} {...register} type={type} className={cls(`border px-4 focus:outline-none  border-green-600 w-60   rounded-lg h-8`, classAdd ? classAdd : '')}/>
  </div>
);

