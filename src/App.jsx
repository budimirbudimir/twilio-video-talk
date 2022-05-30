import React from 'react';
import {
  FlexBox,
  FullScreen,
  Progress,
  Deck,
  Box,
} from 'spectacle';

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};


import First from './slides/First';
import Second from './slides/Second';
import Third from './slides/Third';
import Fourth from './slides/Fourth';
import Fifth from './slides/Fifth';
import Sixth from './slides/Sixth';
import Seventh from './slides/Seventh';
import Eighth from './slides/Eighth';
import EighthB from './slides/EighthB';
import Ninth from './slides/Ninth';
import Tenth from './slides/Tenth';
import Eleventh from './slides/Eleventh';
import Twelveth from './slides/Twelveth';

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

function Presentation() {
  return (
    <Deck theme={theme} template={template}>
    {/* SLIDE 1 - RTK splash */}
    <First />

    {/* SLIDE 2 - RTK  */}
    <Second />

    {/* SLIDE 3 - Simple slice sample */}
    <Third />

    {/* SLIDE 4 - RTK Query intro */}
    <Fourth />
    
    {/* SLIDE 5 - Query slice sample */}
    <Fifth />

    {/* SLIDE 10x - Screenshots */}
    <Tenth />

    {/* SLIDE 6 - Beautiful RTK Query */}
    <Sixth />

    {/* SLIDE 7 - Beautiful Caching */}
    <Seventh />

    {/* SLIDE 8 - Beautiful Caching */}
    <Eighth />
    <EighthB />

    {/* SLIDE 9 - Beautiful Debugging */}
    <Ninth />

    {/* SLIDE 11 - Q&A */}
    <Eleventh />

    {/* SLIDE 12 - Goodbye */}
    <Twelveth />
    
  </Deck>
  );
}
export default Presentation;
