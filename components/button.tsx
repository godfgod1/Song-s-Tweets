import React from "react";
import { cls } from '../lib/client/utils';

interface ButtonProps{
  text:string;
  [key:string]:any
}


export default ({text,...rest}:ButtonProps) => (
  <button  className={cls("w-full border text-white border-green-600 bg-green-400 rounded-lg h-8 hover:bg-green-500" )} {...rest}  >
    {text}
  </button>
);

