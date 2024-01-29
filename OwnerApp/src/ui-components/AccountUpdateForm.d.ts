/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AccountUpdateFormInputValues = {
    username?: string;
    accountType?: string;
    email?: string;
};
export declare type AccountUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    accountType?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountUpdateFormOverridesProps = {
    AccountUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    accountType?: PrimitiveOverrideProps<SelectFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountUpdateFormProps = React.PropsWithChildren<{
    overrides?: AccountUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    account?: any;
    onSubmit?: (fields: AccountUpdateFormInputValues) => AccountUpdateFormInputValues;
    onSuccess?: (fields: AccountUpdateFormInputValues) => void;
    onError?: (fields: AccountUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountUpdateFormInputValues) => AccountUpdateFormInputValues;
    onValidate?: AccountUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AccountUpdateForm(props: AccountUpdateFormProps): React.ReactElement;
