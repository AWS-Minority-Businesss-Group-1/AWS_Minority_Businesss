/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null,
  username: string,
  accountType: AccountType,
  email: string,
  accountUserProfileId?: string | null,
  accountBusinessProfileId?: string | null,
};

export enum AccountType {
  CUSTOMER = "CUSTOMER",
  OWNER = "OWNER",
}


export type ModelAccountConditionInput = {
  username?: ModelStringInput | null,
  accountType?: ModelAccountTypeInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
  accountUserProfileId?: ModelIDInput | null,
  accountBusinessProfileId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelAccountTypeInput = {
  eq?: AccountType | null,
  ne?: AccountType | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  username: string,
  accountType: AccountType,
  email: string,
  userProfile?: UserProfile | null,
  businessProfile?: BusinessProfile | null,
  createdAt: string,
  updatedAt: string,
  accountUserProfileId?: string | null,
  accountBusinessProfileId?: string | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  firstName: string,
  lastName: string,
  address?: string | null,
  bio?: string | null,
  phoneNumber: string,
  location?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type BusinessProfile = {
  __typename: "BusinessProfile",
  id: string,
  businessState: string,
  licenceNumber: string,
  name: string,
  address?: string | null,
  description?: string | null,
  website?: string | null,
  contactInfo?: ContactInfo | null,
  operatingHours?:  Array<BusinessOperatingHours > | null,
  tags?: Array< string > | null,
  profilePicture?: BusinessProfilePicture | null,
  albums?: ModelAlbumConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ContactInfo = {
  __typename: "ContactInfo",
  email?: string | null,
  phoneNumber?: string | null,
};

export type BusinessOperatingHours = {
  __typename: "BusinessOperatingHours",
  dayOfWeek: string,
  opens: string,
  closes: string,
};

export type BusinessProfilePicture = {
  __typename: "BusinessProfilePicture",
  fileName: string,
  createdAt: number,
  imageUrl: string,
};

export type ModelAlbumConnection = {
  __typename: "ModelAlbumConnection",
  items:  Array<Album | null >,
  nextToken?: string | null,
};

export type Album = {
  __typename: "Album",
  id: string,
  fileName: string,
  createdAt: number,
  imageUrl: string,
  businessProfileId: string,
  updatedAt: string,
};

export type UpdateAccountInput = {
  id: string,
  username?: string | null,
  accountType?: AccountType | null,
  email?: string | null,
  accountUserProfileId?: string | null,
  accountBusinessProfileId?: string | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateUserProfileInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  address?: string | null,
  bio?: string | null,
  phoneNumber: string,
  location?: string | null,
};

export type ModelUserProfileConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  address?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  address?: string | null,
  bio?: string | null,
  phoneNumber?: string | null,
  location?: string | null,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreateBusinessProfileInput = {
  id?: string | null,
  businessState: string,
  licenceNumber: string,
  name: string,
  address?: string | null,
  description?: string | null,
  website?: string | null,
  contactInfo?: ContactInfoInput | null,
  operatingHours?: Array< BusinessOperatingHoursInput > | null,
  tags?: Array< string > | null,
  profilePicture?: BusinessProfilePictureInput | null,
};

export type ContactInfoInput = {
  email?: string | null,
  phoneNumber?: string | null,
};

export type BusinessOperatingHoursInput = {
  dayOfWeek: string,
  opens: string,
  closes: string,
};

export type BusinessProfilePictureInput = {
  fileName: string,
  createdAt: number,
  imageUrl: string,
};

export type ModelBusinessProfileConditionInput = {
  businessState?: ModelStringInput | null,
  licenceNumber?: ModelStringInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  description?: ModelStringInput | null,
  website?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelBusinessProfileConditionInput | null > | null,
  or?: Array< ModelBusinessProfileConditionInput | null > | null,
  not?: ModelBusinessProfileConditionInput | null,
};

export type UpdateBusinessProfileInput = {
  id: string,
  businessState?: string | null,
  licenceNumber?: string | null,
  name?: string | null,
  address?: string | null,
  description?: string | null,
  website?: string | null,
  contactInfo?: ContactInfoInput | null,
  operatingHours?: Array< BusinessOperatingHoursInput > | null,
  tags?: Array< string > | null,
  profilePicture?: BusinessProfilePictureInput | null,
};

export type DeleteBusinessProfileInput = {
  id: string,
};

export type CreateAlbumInput = {
  id?: string | null,
  fileName: string,
  createdAt: number,
  imageUrl: string,
  businessProfileId: string,
};

export type ModelAlbumConditionInput = {
  fileName?: ModelStringInput | null,
  createdAt?: ModelFloatInput | null,
  imageUrl?: ModelStringInput | null,
  businessProfileId?: ModelIDInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAlbumInput = {
  id: string,
  fileName?: string | null,
  createdAt?: number | null,
  imageUrl?: string | null,
  businessProfileId?: string | null,
};

export type DeleteAlbumInput = {
  id: string,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  accountType?: ModelAccountTypeInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
  accountUserProfileId?: ModelIDInput | null,
  accountBusinessProfileId?: ModelIDInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  address?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelBusinessProfileFilterInput = {
  id?: ModelIDInput | null,
  businessState?: ModelStringInput | null,
  licenceNumber?: ModelStringInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  description?: ModelStringInput | null,
  website?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelBusinessProfileFilterInput | null > | null,
  or?: Array< ModelBusinessProfileFilterInput | null > | null,
  not?: ModelBusinessProfileFilterInput | null,
};

export type ModelBusinessProfileConnection = {
  __typename: "ModelBusinessProfileConnection",
  items:  Array<BusinessProfile | null >,
  nextToken?: string | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  fileName?: ModelStringInput | null,
  createdAt?: ModelFloatInput | null,
  imageUrl?: ModelStringInput | null,
  businessProfileId?: ModelIDInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  accountType?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
};

export type ModelSubscriptionBusinessProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  businessState?: ModelSubscriptionStringInput | null,
  licenceNumber?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBusinessProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionBusinessProfileFilterInput | null > | null,
};

export type ModelSubscriptionAlbumFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fileName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionFloatInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  businessProfileId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAlbumFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlbumFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    username: string,
    accountType: AccountType,
    email: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      firstName: string,
      lastName: string,
      address?: string | null,
      bio?: string | null,
      phoneNumber: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    businessProfile?:  {
      __typename: "BusinessProfile",
      id: string,
      businessState: string,
      licenceNumber: string,
      name: string,
      address?: string | null,
      description?: string | null,
      website?: string | null,
      tags?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountUserProfileId?: string | null,
    accountBusinessProfileId?: string | null,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    username: string,
    accountType: AccountType,
    email: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      firstName: string,
      lastName: string,
      address?: string | null,
      bio?: string | null,
      phoneNumber: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    businessProfile?:  {
      __typename: "BusinessProfile",
      id: string,
      businessState: string,
      licenceNumber: string,
      name: string,
      address?: string | null,
      description?: string | null,
      website?: string | null,
      tags?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountUserProfileId?: string | null,
    accountBusinessProfileId?: string | null,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    username: string,
    accountType: AccountType,
    email: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      firstName: string,
      lastName: string,
      address?: string | null,
      bio?: string | null,
      phoneNumber: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    businessProfile?:  {
      __typename: "BusinessProfile",
      id: string,
      businessState: string,
      licenceNumber: string,
      name: string,
      address?: string | null,
      description?: string | null,
      website?: string | null,
      tags?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountUserProfileId?: string | null,
    accountBusinessProfileId?: string | null,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    address?: string | null,
    bio?: string | null,
    phoneNumber: string,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    address?: string | null,
    bio?: string | null,
    phoneNumber: string,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    address?: string | null,
    bio?: string | null,
    phoneNumber: string,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBusinessProfileMutationVariables = {
  input: CreateBusinessProfileInput,
  condition?: ModelBusinessProfileConditionInput | null,
};

export type CreateBusinessProfileMutation = {
  createBusinessProfile?:  {
    __typename: "BusinessProfile",
    id: string,
    businessState: string,
    licenceNumber: string,
    name: string,
    address?: string | null,
    description?: string | null,
    website?: string | null,
    contactInfo?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phoneNumber?: string | null,
    } | null,
    operatingHours?:  Array< {
      __typename: "BusinessOperatingHours",
      dayOfWeek: string,
      opens: string,
      closes: string,
    } > | null,
    tags?: Array< string > | null,
    profilePicture?:  {
      __typename: "BusinessProfilePicture",
      fileName: string,
      createdAt: number,
      imageUrl: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBusinessProfileMutationVariables = {
  input: UpdateBusinessProfileInput,
  condition?: ModelBusinessProfileConditionInput | null,
};

export type UpdateBusinessProfileMutation = {
  updateBusinessProfile?:  {
    __typename: "BusinessProfile",
    id: string,
    businessState: string,
    licenceNumber: string,
    name: string,
    address?: string | null,
    description?: string | null,
    website?: string | null,
    contactInfo?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phoneNumber?: string | null,
    } | null,
    operatingHours?:  Array< {
      __typename: "BusinessOperatingHours",
      dayOfWeek: string,
      opens: string,
      closes: string,
    } > | null,
    tags?: Array< string > | null,
    profilePicture?:  {
      __typename: "BusinessProfilePicture",
      fileName: string,
      createdAt: number,
      imageUrl: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBusinessProfileMutationVariables = {
  input: DeleteBusinessProfileInput,
  condition?: ModelBusinessProfileConditionInput | null,
};

export type DeleteBusinessProfileMutation = {
  deleteBusinessProfile?:  {
    __typename: "BusinessProfile",
    id: string,
    businessState: string,
    licenceNumber: string,
    name: string,
    address?: string | null,
    description?: string | null,
    website?: string | null,
    contactInfo?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phoneNumber?: string | null,
    } | null,
    operatingHours?:  Array< {
      __typename: "BusinessOperatingHours",
      dayOfWeek: string,
      opens: string,
      closes: string,
    } > | null,
    tags?: Array< string > | null,
    profilePicture?:  {
      __typename: "BusinessProfilePicture",
      fileName: string,
      createdAt: number,
      imageUrl: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum?:  {
    __typename: "Album",
    id: string,
    fileName: string,
    createdAt: number,
    imageUrl: string,
    businessProfileId: string,
    updatedAt: string,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum?:  {
    __typename: "Album",
    id: string,
    fileName: string,
    createdAt: number,
    imageUrl: string,
    businessProfileId: string,
    updatedAt: string,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum?:  {
    __typename: "Album",
    id: string,
    fileName: string,
    createdAt: number,
    imageUrl: string,
    businessProfileId: string,
    updatedAt: string,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    username: string,
    accountType: AccountType,
    email: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      firstName: string,
      lastName: string,
      address?: string | null,
      bio?: string | null,
      phoneNumber: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    businessProfile?:  {
      __typename: "BusinessProfile",
      id: string,
      businessState: string,
      licenceNumber: string,
      name: string,
      address?: string | null,
      description?: string | null,
      website?: string | null,
      tags?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountUserProfileId?: string | null,
    accountBusinessProfileId?: string | null,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      username: string,
      accountType: AccountType,
      email: string,
      createdAt: string,
      updatedAt: string,
      accountUserProfileId?: string | null,
      accountBusinessProfileId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    address?: string | null,
    bio?: string | null,
    phoneNumber: string,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      firstName: string,
      lastName: string,
      address?: string | null,
      bio?: string | null,
      phoneNumber: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBusinessProfileQueryVariables = {
  id: string,
};

export type GetBusinessProfileQuery = {
  getBusinessProfile?:  {
    __typename: "BusinessProfile",
    id: string,
    businessState: string,
    licenceNumber: string,
    name: string,
    address?: string | null,
    description?: string | null,
    website?: string | null,
    contactInfo?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phoneNumber?: string | null,
    } | null,
    operatingHours?:  Array< {
      __typename: "BusinessOperatingHours",
      dayOfWeek: string,
      opens: string,
      closes: string,
    } > | null,
    tags?: Array< string > | null,
    profilePicture?:  {
      __typename: "BusinessProfilePicture",
      fileName: string,
      createdAt: number,
      imageUrl: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBusinessProfilesQueryVariables = {
  filter?: ModelBusinessProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessProfilesQuery = {
  listBusinessProfiles?:  {
    __typename: "ModelBusinessProfileConnection",
    items:  Array< {
      __typename: "BusinessProfile",
      id: string,
      businessState: string,
      licenceNumber: string,
      name: string,
      address?: string | null,
      description?: string | null,
      website?: string | null,
      tags?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum?:  {
    __typename: "Album",
    id: string,
    fileName: string,
    createdAt: number,
    imageUrl: string,
    businessProfileId: string,
    updatedAt: string,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums?:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      fileName: string,
      createdAt: number,
      imageUrl: string,
      businessProfileId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AlbumsByBusinessProfileIdQueryVariables = {
  businessProfileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AlbumsByBusinessProfileIdQuery = {
  albumsByBusinessProfileId?:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      fileName: string,
      createdAt: number,
      imageUrl: string,
      businessProfileId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    username: string,
    accountType: AccountType,
    email: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      firstName: string,
      lastName: string,
      address?: string | null,
      bio?: string | null,
      phoneNumber: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    businessProfile?:  {
      __typename: "BusinessProfile",
      id: string,
      businessState: string,
      licenceNumber: string,
      name: string,
      address?: string | null,
      description?: string | null,
      website?: string | null,
      tags?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountUserProfileId?: string | null,
    accountBusinessProfileId?: string | null,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    username: string,
    accountType: AccountType,
    email: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      firstName: string,
      lastName: string,
      address?: string | null,
      bio?: string | null,
      phoneNumber: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    businessProfile?:  {
      __typename: "BusinessProfile",
      id: string,
      businessState: string,
      licenceNumber: string,
      name: string,
      address?: string | null,
      description?: string | null,
      website?: string | null,
      tags?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountUserProfileId?: string | null,
    accountBusinessProfileId?: string | null,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    username: string,
    accountType: AccountType,
    email: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      firstName: string,
      lastName: string,
      address?: string | null,
      bio?: string | null,
      phoneNumber: string,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    businessProfile?:  {
      __typename: "BusinessProfile",
      id: string,
      businessState: string,
      licenceNumber: string,
      name: string,
      address?: string | null,
      description?: string | null,
      website?: string | null,
      tags?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountUserProfileId?: string | null,
    accountBusinessProfileId?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    address?: string | null,
    bio?: string | null,
    phoneNumber: string,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    address?: string | null,
    bio?: string | null,
    phoneNumber: string,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    firstName: string,
    lastName: string,
    address?: string | null,
    bio?: string | null,
    phoneNumber: string,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBusinessProfileSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessProfileFilterInput | null,
};

export type OnCreateBusinessProfileSubscription = {
  onCreateBusinessProfile?:  {
    __typename: "BusinessProfile",
    id: string,
    businessState: string,
    licenceNumber: string,
    name: string,
    address?: string | null,
    description?: string | null,
    website?: string | null,
    contactInfo?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phoneNumber?: string | null,
    } | null,
    operatingHours?:  Array< {
      __typename: "BusinessOperatingHours",
      dayOfWeek: string,
      opens: string,
      closes: string,
    } > | null,
    tags?: Array< string > | null,
    profilePicture?:  {
      __typename: "BusinessProfilePicture",
      fileName: string,
      createdAt: number,
      imageUrl: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBusinessProfileSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessProfileFilterInput | null,
};

export type OnUpdateBusinessProfileSubscription = {
  onUpdateBusinessProfile?:  {
    __typename: "BusinessProfile",
    id: string,
    businessState: string,
    licenceNumber: string,
    name: string,
    address?: string | null,
    description?: string | null,
    website?: string | null,
    contactInfo?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phoneNumber?: string | null,
    } | null,
    operatingHours?:  Array< {
      __typename: "BusinessOperatingHours",
      dayOfWeek: string,
      opens: string,
      closes: string,
    } > | null,
    tags?: Array< string > | null,
    profilePicture?:  {
      __typename: "BusinessProfilePicture",
      fileName: string,
      createdAt: number,
      imageUrl: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBusinessProfileSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessProfileFilterInput | null,
};

export type OnDeleteBusinessProfileSubscription = {
  onDeleteBusinessProfile?:  {
    __typename: "BusinessProfile",
    id: string,
    businessState: string,
    licenceNumber: string,
    name: string,
    address?: string | null,
    description?: string | null,
    website?: string | null,
    contactInfo?:  {
      __typename: "ContactInfo",
      email?: string | null,
      phoneNumber?: string | null,
    } | null,
    operatingHours?:  Array< {
      __typename: "BusinessOperatingHours",
      dayOfWeek: string,
      opens: string,
      closes: string,
    } > | null,
    tags?: Array< string > | null,
    profilePicture?:  {
      __typename: "BusinessProfilePicture",
      fileName: string,
      createdAt: number,
      imageUrl: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum?:  {
    __typename: "Album",
    id: string,
    fileName: string,
    createdAt: number,
    imageUrl: string,
    businessProfileId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum?:  {
    __typename: "Album",
    id: string,
    fileName: string,
    createdAt: number,
    imageUrl: string,
    businessProfileId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum?:  {
    __typename: "Album",
    id: string,
    fileName: string,
    createdAt: number,
    imageUrl: string,
    businessProfileId: string,
    updatedAt: string,
  } | null,
};
