

import client from '../../../lib/db';
// import withHandler,{ResponseType} from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from "next";



 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body:{ email, password}} = req
   
  let user = await client.user.findUnique({
    where:{
      email
    }
  })
  if(!user) return res.status(404).json({ok:false})
  if(user.password !== password) return res.status(404).json({ok:false})
  
  return res.json({
    ok:true
  })
}

export default handler
// export default withHandler({ methods: ["GET"], handler,} );
// export default withHandler({ methods: ["POST"], handler, isPrivate: false });
