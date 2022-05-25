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
            Room: Top-level entity containing rest of the connection data
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Participant: Unique connection to our room, i.e. browser tab
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Track: Media stream track, acquired locally via browser, and shared via Room
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Event: Events Twilio SDK emits to notify us about room state changes
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            TwilioError: Custom Twilio-defined errors that can be thrown by SDK
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  )
}

export default Sixth