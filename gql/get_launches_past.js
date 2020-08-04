import { gql } from '@apollo/client';

export const GET_LAUNCHES_PAST = gql`
  query launchesPast($limit: Int!, $offset: Int!) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_success
      launch_date_local
      launch_date_utc
      details
      links {
        wikipedia
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;

export const launchesPastQueryVars = {
  offset: 0,
  limit: 12,
};
