import GradientLayout from '../components/gradientLayout'
import { Box, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import prisma from '../lib/prisma'
import { useMe } from '../lib/hooks'


const Home = ({ artists }) => {
  const { user } = useMe()
  return (
    <GradientLayout
      roundImage
      color="gray"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playListsCount} public playlists` }
      image="https://placekitten.com/200/300"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">Top artist this month</Text>
          <Text>only visible to you</Text>
        </Box>
        <Flex>
          {artists.map(artist => (
            <Box key={artist.name} paddingX="15px" width="20%">
              <Box bg="gray.800" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="http://placekitten.com/300/300"
                  borderRadius="100%"
                />
              </Box>
              <Box marginTop="20px">
                <Text>{artist.name}</Text>
                <Text>Artist</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})
  return {
    props: { artists },
  }
}

export default Home
