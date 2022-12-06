/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { CovidReport } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function CovidReportCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Country: undefined,
    Died: undefined,
    Infected: undefined,
    Recovered: undefined,
  };
  const [Country, setCountry] = React.useState(initialValues.Country);
  const [Died, setDied] = React.useState(initialValues.Died);
  const [Infected, setInfected] = React.useState(initialValues.Infected);
  const [Recovered, setRecovered] = React.useState(initialValues.Recovered);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCountry(initialValues.Country);
    setDied(initialValues.Died);
    setInfected(initialValues.Infected);
    setRecovered(initialValues.Recovered);
    setErrors({});
  };
  const validations = {
    Country: [{ type: "Required" }],
    Died: [],
    Infected: [],
    Recovered: [],
  };
  const runValidationTasks = async (fieldName, value) => {
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
          Country,
          Died,
          Infected,
          Recovered,
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
          await DataStore.save(new CovidReport(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "CovidReportCreateForm")}
    >
      <TextField
        label="Country"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Country: value,
              Died,
              Infected,
              Recovered,
            };
            const result = onChange(modelFields);
            value = result?.Country ?? value;
          }
          if (errors.Country?.hasError) {
            runValidationTasks("Country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("Country", Country)}
        errorMessage={errors.Country?.errorMessage}
        hasError={errors.Country?.hasError}
        {...getOverrideProps(overrides, "Country")}
      ></TextField>
      <TextField
        label="Died"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              Died: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              Country,
              Died: value,
              Infected,
              Recovered,
            };
            const result = onChange(modelFields);
            value = result?.Died ?? value;
          }
          if (errors.Died?.hasError) {
            runValidationTasks("Died", value);
          }
          setDied(value);
        }}
        onBlur={() => runValidationTasks("Died", Died)}
        errorMessage={errors.Died?.errorMessage}
        hasError={errors.Died?.hasError}
        {...getOverrideProps(overrides, "Died")}
      ></TextField>
      <TextField
        label="Infected"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              Infected: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              Country,
              Died,
              Infected: value,
              Recovered,
            };
            const result = onChange(modelFields);
            value = result?.Infected ?? value;
          }
          if (errors.Infected?.hasError) {
            runValidationTasks("Infected", value);
          }
          setInfected(value);
        }}
        onBlur={() => runValidationTasks("Infected", Infected)}
        errorMessage={errors.Infected?.errorMessage}
        hasError={errors.Infected?.hasError}
        {...getOverrideProps(overrides, "Infected")}
      ></TextField>
      <TextField
        label="Recovered"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              Recovered: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              Country,
              Died,
              Infected,
              Recovered: value,
            };
            const result = onChange(modelFields);
            value = result?.Recovered ?? value;
          }
          if (errors.Recovered?.hasError) {
            runValidationTasks("Recovered", value);
          }
          setRecovered(value);
        }}
        onBlur={() => runValidationTasks("Recovered", Recovered)}
        errorMessage={errors.Recovered?.errorMessage}
        hasError={errors.Recovered?.hasError}
        {...getOverrideProps(overrides, "Recovered")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
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
