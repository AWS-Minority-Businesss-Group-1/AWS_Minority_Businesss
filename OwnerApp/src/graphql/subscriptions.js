/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
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
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
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
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
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
`;
export const onCreateBusinessProfile = /* GraphQL */ `
  subscription OnCreateBusinessProfile(
    $filter: ModelSubscriptionBusinessProfileFilterInput
  ) {
    onCreateBusinessProfile(filter: $filter) {
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
export const onUpdateBusinessProfile = /* GraphQL */ `
  subscription OnUpdateBusinessProfile(
    $filter: ModelSubscriptionBusinessProfileFilterInput
  ) {
    onUpdateBusinessProfile(filter: $filter) {
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
export const onDeleteBusinessProfile = /* GraphQL */ `
  subscription OnDeleteBusinessProfile(
    $filter: ModelSubscriptionBusinessProfileFilterInput
  ) {
    onDeleteBusinessProfile(filter: $filter) {
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
