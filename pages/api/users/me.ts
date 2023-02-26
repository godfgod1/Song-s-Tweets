

import client from '../../../lib/db';
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from '../../../lib/server/withSession';

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.session.user){
    const { id } = req.session.user
    const me = await client.user.findUnique({where:{
      id
    },select:{
      id:true
    }
  })
  console.log(me)
    if(!me) res.status(404).json({ok:false})
    return res.json({ok:true})
  }
  return res.status(404).json({ok:false})
}

export default withApiSession(handler)

