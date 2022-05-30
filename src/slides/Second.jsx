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

const Second = () => {
  return (
    <Slide>
      <Heading>What is WebRTC?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>It’s a web-based real-time communication specification </ListItem>
        </Appear>
        <Appear>
          <ListItem>It allows us to exchange data in between multiple connected devices</ListItem>
        </Appear>
        <Appear>
          <ListItem>It allows for audio/video to work inside the web ages, by allowing P2P communication</ListItem>
        </Appear>
        <Appear>
          <ListItem>WebRTC is used by heavyweights like Google, Meta, Discord...</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  )
}

export default Second