/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createBusinessProfile } from "../graphql/mutations";
const client = generateClient();
export default function BusinessProfileCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    address: "",
    name: "",
    description: "",
    openingHours: "",
    contactInfo: "",
  };
  const [address, setAddress] = React.useState(initialValues.address);
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [openingHours, setOpeningHours] = React.useState(
    initialValues.openingHours
  );
  const [contactInfo, setContactInfo] = React.useState(
    initialValues.contactInfo
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAddress(initialValues.address);
    setName(initialValues.name);
    setDescription(initialValues.description);
    setOpeningHours(initialValues.openingHours);
    setContactInfo(initialValues.contactInfo);
    setErrors({});
  };
  const validations = {
    address: [{ type: "Required" }],
    name: [{ type: "Required" }],
    description: [],
    openingHours: [],
    contactInfo: [],
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
          address,
          name,
          description,
          openingHours,
          contactInfo,
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
            query: createBusinessProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BusinessProfileCreateForm")}
      {...rest}
    >
      <TextField
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address: value,
              name,
              description,
              openingHours,
              contactInfo,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              name: value,
              description,
              openingHours,
              contactInfo,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              name,
              description: value,
              openingHours,
              contactInfo,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Opening hours"
        isRequired={false}
        isReadOnly={false}
        value={openingHours}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              name,
              description,
              openingHours: value,
              contactInfo,
            };
            const result = onChange(modelFields);
            value = result?.openingHours ?? value;
          }
          if (errors.openingHours?.hasError) {
            runValidationTasks("openingHours", value);
          }
          setOpeningHours(value);
        }}
        onBlur={() => runValidationTasks("openingHours", openingHours)}
        errorMessage={errors.openingHours?.errorMessage}
        hasError={errors.openingHours?.hasError}
        {...getOverrideProps(overrides, "openingHours")}
      ></TextField>
      <TextField
        label="Contact info"
        isRequired={false}
        isReadOnly={false}
        value={contactInfo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              name,
              description,
              openingHours,
              contactInfo: value,
            };
            const result = onChange(modelFields);
            value = result?.contactInfo ?? value;
          }
          if (errors.contactInfo?.hasError) {
            runValidationTasks("contactInfo", value);
          }
          setContactInfo(value);
        }}
        onBlur={() => runValidationTasks("contactInfo", contactInfo)}
        errorMessage={errors.contactInfo?.errorMessage}
        hasError={errors.contactInfo?.hasError}
        {...getOverrideProps(overrides, "contactInfo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
