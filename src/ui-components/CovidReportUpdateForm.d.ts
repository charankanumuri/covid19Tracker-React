/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CovidReport } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CovidReportUpdateFormInputValues = {
    Recovered?: number;
    Infected?: number;
    Died?: number;
    Country?: string;
    lastUpdatedAt?: string;
};
export declare type CovidReportUpdateFormValidationValues = {
    Recovered?: ValidationFunction<number>;
    Infected?: ValidationFunction<number>;
    Died?: ValidationFunction<number>;
    Country?: ValidationFunction<string>;
    lastUpdatedAt?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CovidReportUpdateFormOverridesProps = {
    CovidReportUpdateFormGrid?: FormProps<GridProps>;
    Recovered?: FormProps<TextFieldProps>;
    Infected?: FormProps<TextFieldProps>;
    Died?: FormProps<TextFieldProps>;
    Country?: FormProps<TextFieldProps>;
    lastUpdatedAt?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CovidReportUpdateFormProps = React.PropsWithChildren<{
    overrides?: CovidReportUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    covidReport?: CovidReport;
    onSubmit?: (fields: CovidReportUpdateFormInputValues) => CovidReportUpdateFormInputValues;
    onSuccess?: (fields: CovidReportUpdateFormInputValues) => void;
    onError?: (fields: CovidReportUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CovidReportUpdateFormInputValues) => CovidReportUpdateFormInputValues;
    onValidate?: CovidReportUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CovidReportUpdateForm(props: CovidReportUpdateFormProps): React.ReactElement;
