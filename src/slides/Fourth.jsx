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
          <ListItem>Establishing <u>connection</u></ListItem>
        </Appear>
        <Appear>
          <ListItem><u>Security</u> concerns</ListItem>
        </Appear>
        <Appear>
          <ListItem>Participant <u>presence</u></ListItem>
        </Appear>
        <Appear>
          <ListItem>Track <u>creation and publication</u></ListItem>
        </Appear>
        <Appear>
          <ListItem><u>Participants and tracks</u> observability</ListItem>
        </Appear>
        <Appear>
          <ListItem><u>Room</u> connection states and changes</ListItem>
        </Appear>
        <Appear>
          <ListItem>Dynamic <u>workloads/processing</u> on the server</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  )
}

export default Fourth