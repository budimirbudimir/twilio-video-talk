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
      <Heading>How is it used: Updates</Heading>

      <h2>Listening for the events from the Twilio room</h2>
      <CodePane language="ts">
        {`
          useEffect(() => {
            room.on('participantConnected', handleParticipantConnected)
            return () => {
              room.off('participantConnected', handleParticipantConnected)
            }
          }, [])
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