import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation SignInUser($userSignIn: UserSignInInput!) {
    signInUser(userSignIn: $userSignIn) {
      token
      user {
        email
      }
    }
  }
`;
export const SIGNUP_USER = gql`
  mutation SignupUser($userNew: UserInput!) {
    signUpUser(userNew: $userNew) {
      token
    }
  }
`;
