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

const Seventh = () => {
  return (
    <Slide>
      <Heading>How is it used: Tracks</Heading>

      <h2>Get all remote tracks from all remote participants in the room</h2>
      <CodePane language="ts">
        {`
          const remoteTracks = remoteParticipants.reduce((acc, rp) => {
            acc = [...acc, ...tracks.values()]
          }, [])
        `}
      </CodePane>

      <h2>Get raw tracks from local participant’s devices</h2>
      <CodePane language="ts">
        {`
          const tracks = navigator.mediaDevices.getUserMedia()
            .then(stream => handleTracks(stream.getTracks()))
            .catch(err => handleError(err))
        `}
      </CodePane>
    </Slide>
  )
}

export default Seventh