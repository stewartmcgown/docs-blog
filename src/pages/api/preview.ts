import { NextApiRequest, NextApiResponse } from 'next'
import getPageData from '../../lib/Docs/getPageData'
import getBlogIndex from '../../lib/Docs/getBlogIndex'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.token !== 'string') {
    return res.status(401).json({ message: 'invalid token' })
  }
  if (req.query.token !== process.env.Docs_TOKEN) {
    return res.status(404).json({ message: 'not authorized' })
  }

  const postsTable = await getBlogIndex()

  if (!postsTable) {
    return res.status(401).json({ message: 'Failed to fetch posts' })
  }

  res.setPreviewData({})
  res.writeHead(307, { Location: `/blog` })
  res.end()
}
