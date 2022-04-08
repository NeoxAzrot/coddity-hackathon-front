import { gql } from '@apollo/client';

export const EXAMPLE = gql`
  query GetExample($id: String!) {
    example(id: $id) {
      title
      description
    }
  }
`;
