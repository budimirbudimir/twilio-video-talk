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

const Sixth = () => {
  return (
    <Slide>
      <Heading>Main entities in Twilio Video SDK</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            <u>Room</u>: Top-level entity containing rest of the connection data
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <u>Participant</u>: Unique connection to our room, i.e. browser tab
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <u>Track</u>: Media stream track, acquired locally via browser, and shared via Room
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <u>Event</u>: Events Twilio SDK emits to notify us about room state changes
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <u>TwilioError</u>: Custom Twilio-defined errors that can be thrown by SDK
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  )
}

export default Sixth