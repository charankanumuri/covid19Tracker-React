/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CovidReportCreateFormInputValues = {
    Recovered?: number;
    Infected?: number;
    Died?: number;
    Country?: string;
    lastUpdatedAt?: string;
};
export declare type CovidReportCreateFormValidationValues = {
    Recovered?: ValidationFunction<number>;
    Infected?: ValidationFunction<number>;
    Died?: ValidationFunction<number>;
    Country?: ValidationFunction<string>;
    lastUpdatedAt?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CovidReportCreateFormOverridesProps = {
    CovidReportCreateFormGrid?: FormProps<GridProps>;
    Recovered?: FormProps<TextFieldProps>;
    Infected?: FormProps<TextFieldProps>;
    Died?: FormProps<TextFieldProps>;
    Country?: FormProps<TextFieldProps>;
    lastUpdatedAt?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CovidReportCreateFormProps = React.PropsWithChildren<{
    overrides?: CovidReportCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CovidReportCreateFormInputValues) => CovidReportCreateFormInputValues;
    onSuccess?: (fields: CovidReportCreateFormInputValues) => void;
    onError?: (fields: CovidReportCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CovidReportCreateFormInputValues) => CovidReportCreateFormInputValues;
    onValidate?: CovidReportCreateFormValidationValues;
} & React.CSSProperties>;
export default function CovidReportCreateForm(props: CovidReportCreateFormProps): React.ReactElement;
