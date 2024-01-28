/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAccount } from "../graphql/queries";
import { updateAccount } from "../graphql/mutations";
const client = generateClient();
export default function AccountUpdateForm(props) {
  const {
    id: idProp,
    account: accountModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    accountType: "",
    email: "",
    passwordHash: "",
    creationDate: "",
    lastLoginDate: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [accountType, setAccountType] = React.useState(
    initialValues.accountType
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [passwordHash, setPasswordHash] = React.useState(
    initialValues.passwordHash
  );
  const [creationDate, setCreationDate] = React.useState(
    initialValues.creationDate
  );
  const [lastLoginDate, setLastLoginDate] = React.useState(
    initialValues.lastLoginDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = accountRecord
      ? { ...initialValues, ...accountRecord }
      : initialValues;
    setUsername(cleanValues.username);
    setAccountType(cleanValues.accountType);
    setEmail(cleanValues.email);
    setPasswordHash(cleanValues.passwordHash);
    setCreationDate(cleanValues.creationDate);
    setLastLoginDate(cleanValues.lastLoginDate);
    setErrors({});
  };
  const [accountRecord, setAccountRecord] = React.useState(accountModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAccount.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAccount
        : accountModelProp;
      setAccountRecord(record);
    };
    queryData();
  }, [idProp, accountModelProp]);
  React.useEffect(resetStateValues, [accountRecord]);
  const validations = {
    username: [{ type: "Required" }],
    accountType: [{ type: "Required" }],
    email: [{ type: "Required" }],
    passwordHash: [{ type: "Required" }],
    creationDate: [{ type: "Required" }],
    lastLoginDate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          username,
          accountType,
          email,
          passwordHash,
          creationDate,
          lastLoginDate: lastLoginDate ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateAccount.replaceAll("__typename", ""),
            variables: {
              input: {
                id: accountRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AccountUpdateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              accountType,
              email,
              passwordHash,
              creationDate,
              lastLoginDate,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <SelectField
        label="Account type"
        placeholder="Please select an option"
        isDisabled={false}
        value={accountType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              accountType: value,
              email,
              passwordHash,
              creationDate,
              lastLoginDate,
            };
            const result = onChange(modelFields);
            value = result?.accountType ?? value;
          }
          if (errors.accountType?.hasError) {
            runValidationTasks("accountType", value);
          }
          setAccountType(value);
        }}
        onBlur={() => runValidationTasks("accountType", accountType)}
        errorMessage={errors.accountType?.errorMessage}
        hasError={errors.accountType?.hasError}
        {...getOverrideProps(overrides, "accountType")}
      >
        <option
          children="Customer"
          value="CUSTOMER"
          {...getOverrideProps(overrides, "accountTypeoption0")}
        ></option>
        <option
          children="Owner"
          value="OWNER"
          {...getOverrideProps(overrides, "accountTypeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              accountType,
              email: value,
              passwordHash,
              creationDate,
              lastLoginDate,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Password hash"
        isRequired={true}
        isReadOnly={false}
        value={passwordHash}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              accountType,
              email,
              passwordHash: value,
              creationDate,
              lastLoginDate,
            };
            const result = onChange(modelFields);
            value = result?.passwordHash ?? value;
          }
          if (errors.passwordHash?.hasError) {
            runValidationTasks("passwordHash", value);
          }
          setPasswordHash(value);
        }}
        onBlur={() => runValidationTasks("passwordHash", passwordHash)}
        errorMessage={errors.passwordHash?.errorMessage}
        hasError={errors.passwordHash?.hasError}
        {...getOverrideProps(overrides, "passwordHash")}
      ></TextField>
      <TextField
        label="Creation date"
        isRequired={true}
        isReadOnly={false}
        value={creationDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              accountType,
              email,
              passwordHash,
              creationDate: value,
              lastLoginDate,
            };
            const result = onChange(modelFields);
            value = result?.creationDate ?? value;
          }
          if (errors.creationDate?.hasError) {
            runValidationTasks("creationDate", value);
          }
          setCreationDate(value);
        }}
        onBlur={() => runValidationTasks("creationDate", creationDate)}
        errorMessage={errors.creationDate?.errorMessage}
        hasError={errors.creationDate?.hasError}
        {...getOverrideProps(overrides, "creationDate")}
      ></TextField>
      <TextField
        label="Last login date"
        isRequired={false}
        isReadOnly={false}
        value={lastLoginDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              accountType,
              email,
              passwordHash,
              creationDate,
              lastLoginDate: value,
            };
            const result = onChange(modelFields);
            value = result?.lastLoginDate ?? value;
          }
          if (errors.lastLoginDate?.hasError) {
            runValidationTasks("lastLoginDate", value);
          }
          setLastLoginDate(value);
        }}
        onBlur={() => runValidationTasks("lastLoginDate", lastLoginDate)}
        errorMessage={errors.lastLoginDate?.errorMessage}
        hasError={errors.lastLoginDate?.hasError}
        {...getOverrideProps(overrides, "lastLoginDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || accountModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || accountModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
