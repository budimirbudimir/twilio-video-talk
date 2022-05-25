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
      <Heading>How is it used? pt2</Heading>

      <h2>Get all remote tracks from all remote participants in the room</h2>
      <CodePane language="ts">
        {`
          const remoteParticipants = room.participants.values()
          const remoteTracks = remoteParticipants.reduce((acc, rp) => {
            acc = [...acc, ...tracks.values()]
          }, [])
        `}
      </CodePane>

      <h2>Get raw tracks from local participant’s devices</h2>
      <CodePane language="ts">
        {`
          const tracks = navigator.mediaDevices.getUserMedia().then(stream => stream.getTracks())
        `}
      </CodePane>

      <h2>Display published track in the application</h2>
      <CodePane language="ts">
        {`
          const video = twilioVideo.publishLocalTrack(track: LocalTrack): HTMLVideoElement<any>
          document.appendChild(video)
        `}
      </CodePane>
    </Slide>
  )
}

export default Seventh