/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
export const createBusinessProfile = /* GraphQL */ `
  mutation CreateBusinessProfile(
    $input: CreateBusinessProfileInput!
    $condition: ModelBusinessProfileConditionInput
  ) {
    createBusinessProfile(input: $input, condition: $condition) {
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
export const updateBusinessProfile = /* GraphQL */ `
  mutation UpdateBusinessProfile(
    $input: UpdateBusinessProfileInput!
    $condition: ModelBusinessProfileConditionInput
  ) {
    updateBusinessProfile(input: $input, condition: $condition) {
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
export const deleteBusinessProfile = /* GraphQL */ `
  mutation DeleteBusinessProfile(
    $input: DeleteBusinessProfileInput!
    $condition: ModelBusinessProfileConditionInput
  ) {
    deleteBusinessProfile(input: $input, condition: $condition) {
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
