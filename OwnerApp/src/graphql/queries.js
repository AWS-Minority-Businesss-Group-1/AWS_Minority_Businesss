/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      username
      accountType
      email
      userProfile {
        id
        firstName
        lastName
        address
        bio
        phoneNumber
        location
        createdAt
        updatedAt
        __typename
      }
      businessProfile {
        id
        address
        businessState
        licenceNumber
        name
        description
        openingHours
        contactInfo
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      accountUserProfileId
      accountBusinessProfileId
      __typename
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        accountType
        email
        createdAt
        updatedAt
        accountUserProfileId
        accountBusinessProfileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      firstName
      lastName
      address
      bio
      phoneNumber
      location
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        address
        bio
        phoneNumber
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBusinessProfile = /* GraphQL */ `
  query GetBusinessProfile($id: ID!) {
    getBusinessProfile(id: $id) {
      id
      address
      businessState
      licenceNumber
      name
      description
      openingHours
      contactInfo
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBusinessProfiles = /* GraphQL */ `
  query ListBusinessProfiles(
    $filter: ModelBusinessProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        address
        businessState
        licenceNumber
        name
        description
        openingHours
        contactInfo
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
