import { validateRoute } from '../../lib/auth'
import prisma from '../../lib/prisma'

export default validateRoute(async (req, res, user) => {
  const playListsCount = await prisma.playlist.count({
    where: {
      userId: user.id,
    },
  })
  console.log(playListsCount)
  res.json({...user, playListsCount})
})
