

import client from '../../../lib/db';
// import withHandler,{ResponseType} from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from '../../../lib/server/withSession';

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const {
    session:{ user },
    query:{id}
  } = req
  let isLike =false
  const targetWrite = await client.write.findUnique({
    where:{
      id:+id
    },
    include:{
      reply:{
        include:{
          user:true
        }
      },
      Like:true
    }
  })
  if(targetWrite){
    for(let i  of  targetWrite.Like){
      if(i.userId === user.id){
        isLike = true
      } 
    }
  }
  return res.json({
    ok:true, tweetData:targetWrite, isLike
  })
}

export default withApiSession(handler)

