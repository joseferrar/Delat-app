import {gql} from '@apollo/client';

const REGISTER_QUERY = gql`
  mutation Register($userInput: UserInput) {
    register(userInput: $userInput) {
      username
      email
      photoUrl
    }
  }
`;

export {REGISTER_QUERY};
