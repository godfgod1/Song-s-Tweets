import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from '../../../lib/server/withSession';

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(!req.session.user)  return res.status(404).json({ok:false})
  req.session.destroy()
  return res.json({ok:true})
}

export default withApiSession(handler)

