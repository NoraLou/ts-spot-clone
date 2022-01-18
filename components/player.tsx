import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text
} from '@chakra-ui/react'
import ReactHowler from 'react-howler'
import { useEffect, useRef, useState } from 'react'
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
  MdPlayCircleFilled,
 } from 'react-icons/md'
import { useStoreActions } from 'easy-peasy'

const Player = () => {
  return (
    <Box>
      <Box>
        {/* <ReactHowler /> */}
      </Box>
      <Center >
        <ButtonGroup>
          <IconButton
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            icon={ <MdShuffle />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="skip"
            fontSize="24px"
            icon={<MdSkipPrevious/> }
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="play"
            fontSize="40px"
            color="white"
            icon={ <MdPlayCircleFilled />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="pause"
            fontSize="40px"
            color="white"
            icon={ <MdOutlinePauseCircleFilled />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="next"
            fontSize="24px"
            icon={ <MdSkipNext />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="repeat"
            fontSize="24px"
            icon={ <MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>
    </Box>
  )
}

export default Player
