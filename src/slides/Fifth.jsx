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

const Fifth = () => {
  return (
    <Slide>
      <Heading>What Twilio won’t do for us?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Local media <u>devices handling</u></ListItem>
        </Appear>
        <Appear>
          <ListItem>Local media <u>devices permissions</u></ListItem>
        </Appear>
        <Appear>
          <ListItem>Interactive (default) <u>device selection</u>, configuration</ListItem>
        </Appear>
        <Appear>
          <ListItem><u>UI</u> beyond provided HTMLVideoElement tags</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  )
}

export default Fifth