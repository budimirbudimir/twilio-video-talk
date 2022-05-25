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

const Fourth = () => {
  return (
    <Slide>
      <Heading>What will Twilio handle for us?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Establishing connection</ListItem>
        </Appear>
        <Appear>
          <ListItem>Security</ListItem>
        </Appear>
        <Appear>
          <ListItem>Participant presence</ListItem>
        </Appear>
        <Appear>
          <ListItem>Track creation and publication</ListItem>
        </Appear>
        <Appear>
          <ListItem>Observes participants and tracks</ListItem>
        </Appear>
        <Appear>
          <ListItem>Observes room connection states and changes</ListItem>
        </Appear>
        <Appear>
          <ListItem>Able to automatically deal with dynamic workloads on the server</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  )
}

export default Fourth