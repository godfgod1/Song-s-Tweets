

import client from '../../../lib/db';
// import withHandler,{ResponseType} from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from '../../../lib/server/withSession';



 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body:{write},
    session:{ user:{id} }
  } = req
  
  await client.write.create({
    data:{
      postWrite:write,
      userId:id
    }
  })
  return res.json({
    ok:true
  })
}

export default withApiSession(handler)

