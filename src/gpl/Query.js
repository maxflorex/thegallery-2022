import {gql} from '@apollo/client'

export const country_list = gql`
  {
    countries {
      name
      code
    }
  }
`;