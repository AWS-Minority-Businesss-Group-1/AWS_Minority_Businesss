/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAccount = /* GraphQL */ `mutation CreateAccount(
  $input: CreateAccountInput!
  $condition: ModelAccountConditionInput
) {
  createAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAccountMutationVariables,
  APITypes.CreateAccountMutation
>;
export const updateAccount = /* GraphQL */ `mutation UpdateAccount(
  $input: UpdateAccountInput!
  $condition: ModelAccountConditionInput
) {
  updateAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAccountMutationVariables,
  APITypes.UpdateAccountMutation
>;
export const deleteAccount = /* GraphQL */ `mutation DeleteAccount(
  $input: DeleteAccountInput!
  $condition: ModelAccountConditionInput
) {
  deleteAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAccountMutationVariables,
  APITypes.DeleteAccountMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const createBusinessProfile = /* GraphQL */ `mutation CreateBusinessProfile(
  $input: CreateBusinessProfileInput!
  $condition: ModelBusinessProfileConditionInput
) {
  createBusinessProfile(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBusinessProfileMutationVariables,
  APITypes.CreateBusinessProfileMutation
>;
export const updateBusinessProfile = /* GraphQL */ `mutation UpdateBusinessProfile(
  $input: UpdateBusinessProfileInput!
  $condition: ModelBusinessProfileConditionInput
) {
  updateBusinessProfile(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBusinessProfileMutationVariables,
  APITypes.UpdateBusinessProfileMutation
>;
export const deleteBusinessProfile = /* GraphQL */ `mutation DeleteBusinessProfile(
  $input: DeleteBusinessProfileInput!
  $condition: ModelBusinessProfileConditionInput
) {
  deleteBusinessProfile(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBusinessProfileMutationVariables,
  APITypes.DeleteBusinessProfileMutation
>;
