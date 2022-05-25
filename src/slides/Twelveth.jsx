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

const Twelveth = () => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="100px">
          <i>Thank you for attending!</i> 
        </Heading>
        <Heading margin="0px" fontSize="h3">
          Hope to see you soon with some new topics :)
        </Heading>
      </FlexBox>
    </Slide>
  )
}

export default Twelveth