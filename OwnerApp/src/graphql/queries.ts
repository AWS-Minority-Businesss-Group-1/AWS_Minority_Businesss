/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAccount = /* GraphQL */ `query GetAccount($id: ID!) {
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
      businessState
      licenceNumber
      name
      address
      description
      website
      tags
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
` as GeneratedQuery<
  APITypes.GetAccountQueryVariables,
  APITypes.GetAccountQuery
>;
export const listAccounts = /* GraphQL */ `query ListAccounts(
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
` as GeneratedQuery<
  APITypes.ListAccountsQueryVariables,
  APITypes.ListAccountsQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
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
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
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
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const getBusinessProfile = /* GraphQL */ `query GetBusinessProfile($id: ID!) {
  getBusinessProfile(id: $id) {
    id
    businessState
    licenceNumber
    name
    address
    description
    website
    contactInfo {
      email
      phoneNumber
      __typename
    }
    operatingHours {
      dayOfWeek
      opens
      closes
      __typename
    }
    tags
    profilePicture {
      fileName
      createdAt
      imageUrl
      __typename
    }
    albums {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBusinessProfileQueryVariables,
  APITypes.GetBusinessProfileQuery
>;
export const listBusinessProfiles = /* GraphQL */ `query ListBusinessProfiles(
  $filter: ModelBusinessProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinessProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      businessState
      licenceNumber
      name
      address
      description
      website
      tags
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusinessProfilesQueryVariables,
  APITypes.ListBusinessProfilesQuery
>;
export const getAlbum = /* GraphQL */ `query GetAlbum($id: ID!) {
  getAlbum(id: $id) {
    id
    fileName
    createdAt
    imageUrl
    businessProfileId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAlbumQueryVariables, APITypes.GetAlbumQuery>;
export const listAlbums = /* GraphQL */ `query ListAlbums(
  $filter: ModelAlbumFilterInput
  $limit: Int
  $nextToken: String
) {
  listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      fileName
      createdAt
      imageUrl
      businessProfileId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAlbumsQueryVariables,
  APITypes.ListAlbumsQuery
>;
export const albumsByBusinessProfileId = /* GraphQL */ `query AlbumsByBusinessProfileId(
  $businessProfileId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAlbumFilterInput
  $limit: Int
  $nextToken: String
) {
  albumsByBusinessProfileId(
    businessProfileId: $businessProfileId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      fileName
      createdAt
      imageUrl
      businessProfileId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AlbumsByBusinessProfileIdQueryVariables,
  APITypes.AlbumsByBusinessProfileIdQuery
>;
