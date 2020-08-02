import { gql } from '@apollo/client';

export const GET_LAUNCHES_PAST = gql`
  query launchesPast {
    launchesPast {
      id
      mission_name
      launch_date_local
    }
  }
`;
