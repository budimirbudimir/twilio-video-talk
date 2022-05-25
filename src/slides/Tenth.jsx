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

import flow from '../data-transfer-overview.png';
import tree from '../sdk-class-tree.png';
import lifecycle from '../track-lifecycle.png';

const Tenth = () => {
  return (
    <>
      <Slide>
        <Heading>Diagram time!</Heading>
        <h1 style={{ textAlign: 'center' }}>Some useful diagrams before we proceed (:</h1>
      </Slide>

      <Slide>
        <Image src={flow} style={{ maxWidth: '100%' }} />
      </Slide>

      <Slide>
        <Image src={tree} style={{ maxWidth: 'fit-content', maxHeight: '100%', margin: '0 auto' }} />
      </Slide>

      <Slide>
        <Image src={lifecycle} style={{ maxHeight: '100%', width: 'fit-content', margin: '0 auto' }} />
      </Slide>
    </>
  )
}

export default Tenth