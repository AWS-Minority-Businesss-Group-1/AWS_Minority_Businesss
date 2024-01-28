/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessProfileCreateFormInputValues = {
    address?: string;
    name?: string;
    description?: string;
    openingHours?: string;
    contactInfo?: string;
};
export declare type BusinessProfileCreateFormValidationValues = {
    address?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    openingHours?: ValidationFunction<string>;
    contactInfo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessProfileCreateFormOverridesProps = {
    BusinessProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    openingHours?: PrimitiveOverrideProps<TextFieldProps>;
    contactInfo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: BusinessProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BusinessProfileCreateFormInputValues) => BusinessProfileCreateFormInputValues;
    onSuccess?: (fields: BusinessProfileCreateFormInputValues) => void;
    onError?: (fields: BusinessProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessProfileCreateFormInputValues) => BusinessProfileCreateFormInputValues;
    onValidate?: BusinessProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessProfileCreateForm(props: BusinessProfileCreateFormProps): React.ReactElement;
