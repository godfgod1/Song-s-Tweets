

import client from '../../../../lib/db';
// import withHandler,{ResponseType} from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from '../../../../lib/server/withSession';

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body:{write},
    session:{ user },
    query:{id}
  } = req
  await client.reply.create({
    data:{
      replyWrite:write,
      userId:user.id,
      writeId:+id!.toString()
    }
  })
  return res.json({
    ok:true
  })
}

export default withApiSession(handler)

