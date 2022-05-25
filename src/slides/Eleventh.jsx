import React from 'react'
import {
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Box,
  Image,
  CodePane,
  Notes
} from 'spectacle';

const Eleventh = () => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="100px">
          <i>Q & A</i> 
        </Heading>
        <Heading margin="0px" fontSize="h3">
          5 minutes for your questions
        </Heading>
      </FlexBox>
    </Slide>
  )
}

export default Eleventh