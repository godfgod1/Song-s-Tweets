
import client from '../../lib/db';
// import withHandler,{ResponseType} from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from '../../lib/server/withSession';

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const AllWrite = await client.write.findMany({
    include:{
      user:{
        select:{
          name:true,
        }
      }
      ,
      _count:{
        select:{
          reply:true,
          Like:true
        }
      },
      
      
    }
  })
  console.log('AllWrite',AllWrite)
  return res.json({
    ok:true, tweetAllData:AllWrite
  })
}

export default withApiSession(handler)

