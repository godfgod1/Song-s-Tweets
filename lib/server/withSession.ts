import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session"{
  interface IronSessionData{
    user:{
      id:number ;
    }
  }
}


const cookieOptions = {
    cookieName:"tweetSession",
    password:"9845904809485098594385093840598df;slkgjfdl;gkfsdjg;ldfksjgdsflgjdfklgjdflgjflkgjdgd",
};


export function withApiSession(fn:any){
  return withIronSessionApiRoute(fn, cookieOptions)
}

