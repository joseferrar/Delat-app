import {gql} from '@apollo/client';

const USER_QUERY = gql`
  mutation Mutation($userId: String) {
    getUser(userId: $userId) {
      email
    }
  }
`;

export {USER_QUERY};
