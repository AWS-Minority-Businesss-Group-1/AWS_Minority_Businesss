/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      username
      accountType
      email
      passwordHash
      creationDate
      lastLoginDate
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
    $id: ID
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAccounts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        username
        accountType
        email
        passwordHash
        creationDate
        lastLoginDate
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
    $id: ID
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserProfiles(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
    $id: ID
    $filter: ModelBusinessProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBusinessProfiles(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        address
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
