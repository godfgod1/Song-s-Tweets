import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from "swr";



export default function useUser(){
  const {data, error}  = useSWR("/api/users/me")
    

  return {login:data, isLoading:!data&& !error}
}
