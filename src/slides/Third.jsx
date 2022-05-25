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

const Third = () => {
  return (
    <Slide>
      <Heading>How does it work?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            First, we need to establish the connection via server (STUN/TURN)
          </ListItem>
        </Appear>

        <Appear>
          <ListItem>
            Then, we can exchange data directly in between participants
          </ListItem>
        </Appear>

        <Appear>
          <ListItem>
            Sometimes, servers can be used as intermediaries for more advanced purposes (recording, stream altering, resampling, simulcast, etc)
          </ListItem> 
        </Appear>
      </UnorderedList>
    </Slide>
  )
  // return (
  //   <Slide>
  //     <CodePane language="jsx">
  //       {`
  //       import { createSlice, PayloadAction } from '@reduxjs/toolkit'

  //       interface CounterState { value: number }

  //       const initialState: CounterState = { value: 0 }

  //       const counterSlice = createSlice({
  //         name: 'counter',
  //         initialState,
  //         reducers: {
  //           incremented(state) {
  //             state.value++
  //           },
  //         },
  //       })

  //       export const { incremented } = counterSlice.actions
  //       export default counterSlice.reducer
  //       `}
  //     </CodePane>
  //     <p style={{ textAlign: 'center' }}>Simple slice sample</p>
  //   </Slide>
  // )
}

export default Third