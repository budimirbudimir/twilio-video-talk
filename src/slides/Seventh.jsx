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
      <Heading>How is it used?</Heading>

      <h2>Get access token</h2>
      <CodePane language="ts">
        {`
          const accessToken: string = getToken(name: string, roomId: string, options: ConnectOptions)
        `}
      </CodePane>

      <h2>Establishing connection to the room</h2>
      <CodePane language="ts">
        {`
          const room: Room = connect(accessToken: string, connectOptions: ConnectOptions)
        `}
      </CodePane>

      <h2>Being aware of room participants</h2>
      <CodePane language="ts">
        {`
          const remoteParticipants: RemoteParticipant[] = room.participants.values()
          const localParticipant: LocalParticipant = room.localParticipant
        `}
      </CodePane>
    </Slide>
  )
}

export default Seventh