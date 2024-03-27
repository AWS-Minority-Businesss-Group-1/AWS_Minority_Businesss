/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAccount = /* GraphQL */ `subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onCreateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAccountSubscriptionVariables,
  APITypes.OnCreateAccountSubscription
>;
export const onUpdateAccount = /* GraphQL */ `subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onUpdateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAccountSubscriptionVariables,
  APITypes.OnUpdateAccountSubscription
>;
export const onDeleteAccount = /* GraphQL */ `subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
  onDeleteAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAccountSubscriptionVariables,
  APITypes.OnDeleteAccountSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onCreateUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onUpdateUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onDeleteUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onCreateBusinessProfile = /* GraphQL */ `subscription OnCreateBusinessProfile(
  $filter: ModelSubscriptionBusinessProfileFilterInput
) {
  onCreateBusinessProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessProfileSubscriptionVariables,
  APITypes.OnCreateBusinessProfileSubscription
>;
export const onUpdateBusinessProfile = /* GraphQL */ `subscription OnUpdateBusinessProfile(
  $filter: ModelSubscriptionBusinessProfileFilterInput
) {
  onUpdateBusinessProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessProfileSubscriptionVariables,
  APITypes.OnUpdateBusinessProfileSubscription
>;
export const onDeleteBusinessProfile = /* GraphQL */ `subscription OnDeleteBusinessProfile(
  $filter: ModelSubscriptionBusinessProfileFilterInput
) {
  onDeleteBusinessProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessProfileSubscriptionVariables,
  APITypes.OnDeleteBusinessProfileSubscription
>;
export const onCreateAlbum = /* GraphQL */ `subscription OnCreateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
  onCreateAlbum(filter: $filter) {
    id
    fileName
    createdAt
    imageUrl
    businessProfileId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAlbumSubscriptionVariables,
  APITypes.OnCreateAlbumSubscription
>;
export const onUpdateAlbum = /* GraphQL */ `subscription OnUpdateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
  onUpdateAlbum(filter: $filter) {
    id
    fileName
    createdAt
    imageUrl
    businessProfileId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAlbumSubscriptionVariables,
  APITypes.OnUpdateAlbumSubscription
>;
export const onDeleteAlbum = /* GraphQL */ `subscription OnDeleteAlbum($filter: ModelSubscriptionAlbumFilterInput) {
  onDeleteAlbum(filter: $filter) {
    id
    fileName
    createdAt
    imageUrl
    businessProfileId
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAlbumSubscriptionVariables,
  APITypes.OnDeleteAlbumSubscription
>;
