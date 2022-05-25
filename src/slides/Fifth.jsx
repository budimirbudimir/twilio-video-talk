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

const Fifth = () => {
  return (
    <Slide>
      <Heading>What Twilio doesn’t do for us?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Local devices handling</ListItem>
        </Appear>
        <Appear>
          <ListItem>Device permissions</ListItem>
        </Appear>
        <Appear>
          <ListItem>Default devices, etc.</ListItem>
        </Appear>
        <Appear>
          <ListItem>UI beyond provided HTML video tags</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  )
  {/* return (
    <Slide>
      <CodePane language="jsx">
        {`
        import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
        export interface Dog { id: string; name: string }

        export const dogsSlice = createApi({
          reducerPath: 'dogs',
          baseQuery: fetchBaseQuery({
            baseUrl: 'https://api.thedogapi.com/v1',
            prepareHeaders(headers) {
              headers.set('x-api-key', process.env.DOGS_API_KEY)
              return headers
            },
          }),
          endpoints(builder) {
            return {
              fetchDogs: builder.query<Dog[], number | void>({
                query() { return '/breeds?limit=10' },
              }),
            }
          },
        })

        export const { useFetchDogsQuery } = dogsSlice // autogenerated
        `}
      </CodePane>
      <p style={{ textAlign: 'center' }}>Query slice sample</p>
    </Slide>
  ) */}
}

export default Fifth