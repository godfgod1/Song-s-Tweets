import client from '../../../lib/db';
// import withHandler,{ResponseType} from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from '../../../lib/server/withSession';



 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body:{ email, password}} = req
   
  let exists = await client.user.findUnique({
    where:{
      email
    }
  })
  if(!exists) return res.status(404).json({ok:false})
  if(exists.password !== password) return res.status(404).json({ok:false})
  const id  = exists.id
  req.session.user = {
    id:id
  }
  await req.session.save()
  return res.json({
    ok:true
  })
}

// export default handler
export default withApiSession(handler)
// export default withHandler({ methods: ["GET"], handler,} );
// export default withHandler({ methods: ["POST"], handler, isPrivate: false });
