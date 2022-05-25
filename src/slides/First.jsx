import React from 'react'
import {
  FlexBox,
  Heading,
  Slide,
} from 'spectacle';

const First = () => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="100px">
          ✨<i>React + Twilio Video</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h3">
          Customer driven conferencing apps
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h2">
          using WebRTC and Twilio Video SDK
        </Heading>
      </FlexBox>
    </Slide>
  )
}

export default First