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

/**
 * 
 * What is WebRTC?
    1. It’s a web-based real-time communication protocol 
    2. It allows us to exchange data in between multiple connected devices via peer-to-peer
 */

const Second = () => {
  return (
    <Slide>
      <Heading>What is WebRTC?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>It’s a web-based real-time communication protocol </ListItem>
        </Appear>
        <Appear>
          <ListItem>It allows us to exchange data in between multiple connected devices via peer-to-peer</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  )
}

export default Second