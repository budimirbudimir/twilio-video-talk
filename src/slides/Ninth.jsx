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

const Ninth = () => {
  return (
    <Slide>
      <Heading style={{ marginBottom: 10 }}>Useful resources</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Twilio Video JS SDK repo: https://github.com/twilio/twilio-video.js
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Twilio Video React app repo: https://github.com/twilio/twilio-video-app-react
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Mitt, functional-friendly event emitter: https://github.com/developit/mitt
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Media Devices API: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Media Streams API: https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  )
}

export default Ninth