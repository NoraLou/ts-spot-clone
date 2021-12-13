import { Box } from '@chakra-ui/layout'

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        Sidebar
      </Box>
      <Box></Box>
    </Box>
  );
};

export default PlayerLayout;
