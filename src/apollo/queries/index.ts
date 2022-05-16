import { gql } from '@apollo/client';

export const GET_USER = gql`
  query ($email: String!, $password: String!) {
    getUser(email: $email, password: $password) {
      _id
      about
      state
      lastActive
      profilePic
      country
      activeChats
      name
      publicKey
      email
    }
  }
`;
export const GET_CHAT = gql`
  query ($chatId: ID!) {
    getChat(chatId: $chatId) {
      lastMessage {
        content
        sender
        sentAt
      }
      people
    }
  }
`;
export const GET_PROFILES = gql`
  query ($filter: JSON, $skip: Int!) {
    getProfiles(filter: $filter, skip: $skip) {
      _id
      about
      state
      country
      email
      lastActive
      name
      publicKey
      profilePic
    }
  }
`;
export const GET_PROFILE = gql`
  query ($userId: ID!) {
    getProfile(userId: $userId) {
      _id
      about
      state
      country
      email
      lastActive
      name
      publicKey
      profilePic
    }
  }
`;
export const GET_MESSAGES = gql`
  query ($chatId: ID!, $from: Int!) {
    getMessages(chatId: $chatId, from: $from) {
      messages {
        content
        sender
        sentAt
      }
    }
  }
`;
export const CHECK_USERNAME = gql`
  query ($username: String!) {
    checkUsername(username: $username)
  }
`;
export const CHECK_EMAIL = gql`
  query ($email: String!) {
    checkEmail(email: $email)
  }
`;

// mutation
export const CREATE_USER = gql`
  mutation (
    $state: String!
    $country: String!
    $username: String!
    $name: String!
    $publicKey: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      state: $state
      username: $username
      publicKey: $publicKey
      country: $country
      name: $name
      email: $email
      password: $password
    ) {
      _id
      about
      state
      country
      activeChats
      email
      lastActive
      name
      publicKey
      profilePic
    }
  }
`;
export const UPDATE_USER = gql`
  mutation ($userId: ID!, $update: JSON!) {
    updateUser(userId: $userId, update: $update)
  }
`;
export const DELETE_USER = gql`
  mutation ($userId: ID!, $password: String!) {
    deleteUser(userId: $userId, password: $password)
  }
`;
export const SET_LAST_ACTIVE = gql`
  mutation ($userId: ID!) {
    setLastActive(userId: $userId)
  }
`;
export const IS_ONLINE = gql`
  mutation ($userId: String!) {
    isOnline(userId: $userId)
  }
`;
export const IS_TYPING = gql`
  mutation ($userId: String!, $chatId: String!, $typing: Boolean!) {
    isTyping(userId: $userId, chatId: $chatId, typing: $typing)
  }
`;
export const CREATE_CHAT = gql`
  mutation ($people: [String!]!, $message: JSON!) {
    createChat(people: $people, message: $message)
  }
`;
export const DELETE_CHAT = gql`
  mutation ($userId: ID!, $chatId: ID!) {
    deleteChat(userId: $userId, chatId: $chatId)
  }
`;
export const NEW_MESSAGE = gql`
  mutation ($senderId: ID!, $chatId: ID!, $message: JSON!) {
    newMessage(senderId: $senderId, chatId: $chatId, message: $message)
  }
`;
// mutations
export const SUB_IS_TYPING = gql`
  subscription ($userId: String!) {
    isTyping(userId: $userId) {
      chatId
      typing
    }
  }
`;
export const SUB_IS_ONLINE = gql`
  subscription ($userId: String!) {
    isOnline(userId: $userId)
  }
`;
export const SUB_NEW_MESSAGE = gql`
  subscription ($userId: String!) {
    newMessage(userId: $userId) {
      chatId
      message
    }
  }
`;
export const SUB_NEW_CHAT = gql`
  subscription ($userId: String!) {
    newChat(userId: $userId) {
      _id
      lastMessage
      people
    }
  }
`;
