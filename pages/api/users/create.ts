

import client from '../../../lib/db';
// import withHandler,{ResponseType} from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from "next";



 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body:{ email,name, password}} = req
  
  await client.user.upsert({
    where:{
      email
    },
    create:{
      name,
      email,
      password
    },
    update:{}
  })
  return res.json({
    ok:true
  })
}

export default handler
// export default withHandler({ methods: ["GET"], handler,} );
// export default withHandler({ methods: ["POST"], handler, isPrivate: false });
