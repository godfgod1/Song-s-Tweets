

import client from '../../../../lib/db';
// import withHandler,{ResponseType} from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from '../../../../lib/server/withSession';

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    session:{ user },
    query:{id}
  } = req
  const liked = await client.like.findFirst({
    where:{
      userId:user.id,
      writeId:+id!.toString()
    }
  })
  console.log('liked',liked)
  if(liked){
    await client.like.delete({
      where:{
        id:liked.id
      }
    })
  }else{
    await client.like.create({
      data:{
        user:{
          connect:{
            id:user?.id
          }
        },
        write:{
          connect:{
            id:+id!.toString()
          }
        }
      }
    })
  }
  return res.json({
    ok:true
  })
}

export default withApiSession(handler)

