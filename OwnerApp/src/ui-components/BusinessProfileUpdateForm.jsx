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
import { getBusinessProfile } from "../graphql/queries";
import { updateBusinessProfile } from "../graphql/mutations";
const client = generateClient();
export default function BusinessProfileUpdateForm(props) {
  const {
    id: idProp,
    businessProfile: businessProfileModelProp,
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
    businessState: "",
    licenceNumber: "",
    name: "",
    description: "",
    openingHours: "",
    contactInfo: "",
  };
  const [address, setAddress] = React.useState(initialValues.address);
  const [businessState, setBusinessState] = React.useState(
    initialValues.businessState
  );
  const [licenceNumber, setLicenceNumber] = React.useState(
    initialValues.licenceNumber
  );
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
    const cleanValues = businessProfileRecord
      ? { ...initialValues, ...businessProfileRecord }
      : initialValues;
    setAddress(cleanValues.address);
    setBusinessState(cleanValues.businessState);
    setLicenceNumber(cleanValues.licenceNumber);
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setOpeningHours(cleanValues.openingHours);
    setContactInfo(cleanValues.contactInfo);
    setErrors({});
  };
  const [businessProfileRecord, setBusinessProfileRecord] = React.useState(
    businessProfileModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBusinessProfile.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBusinessProfile
        : businessProfileModelProp;
      setBusinessProfileRecord(record);
    };
    queryData();
  }, [idProp, businessProfileModelProp]);
  React.useEffect(resetStateValues, [businessProfileRecord]);
  const validations = {
    address: [],
    businessState: [{ type: "Required" }],
    licenceNumber: [{ type: "Required" }],
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
          address: address ?? null,
          businessState,
          licenceNumber,
          name,
          description: description ?? null,
          openingHours: openingHours ?? null,
          contactInfo: contactInfo ?? null,
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
            query: updateBusinessProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                id: businessProfileRecord.id,
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
      {...getOverrideProps(overrides, "BusinessProfileUpdateForm")}
      {...rest}
    >
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address: value,
              businessState,
              licenceNumber,
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
        label="Business state"
        isRequired={true}
        isReadOnly={false}
        value={businessState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              businessState: value,
              licenceNumber,
              name,
              description,
              openingHours,
              contactInfo,
            };
            const result = onChange(modelFields);
            value = result?.businessState ?? value;
          }
          if (errors.businessState?.hasError) {
            runValidationTasks("businessState", value);
          }
          setBusinessState(value);
        }}
        onBlur={() => runValidationTasks("businessState", businessState)}
        errorMessage={errors.businessState?.errorMessage}
        hasError={errors.businessState?.hasError}
        {...getOverrideProps(overrides, "businessState")}
      ></TextField>
      <TextField
        label="Licence number"
        isRequired={true}
        isReadOnly={false}
        value={licenceNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              businessState,
              licenceNumber: value,
              name,
              description,
              openingHours,
              contactInfo,
            };
            const result = onChange(modelFields);
            value = result?.licenceNumber ?? value;
          }
          if (errors.licenceNumber?.hasError) {
            runValidationTasks("licenceNumber", value);
          }
          setLicenceNumber(value);
        }}
        onBlur={() => runValidationTasks("licenceNumber", licenceNumber)}
        errorMessage={errors.licenceNumber?.errorMessage}
        hasError={errors.licenceNumber?.hasError}
        {...getOverrideProps(overrides, "licenceNumber")}
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
              businessState,
              licenceNumber,
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
              businessState,
              licenceNumber,
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
              businessState,
              licenceNumber,
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
              businessState,
              licenceNumber,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || businessProfileModelProp)}
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
              !(idProp || businessProfileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
