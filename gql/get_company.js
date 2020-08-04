import { gql } from '@apollo/client';
export const GET_COMPANY = gql`
  query company {
    company {
      name
      cto
      founder
      summary
      links {
        elon_twitter
        twitter
        website
      }
    }
  }
`;
