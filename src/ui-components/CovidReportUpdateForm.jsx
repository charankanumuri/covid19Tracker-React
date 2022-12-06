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
export default function CovidReportUpdateForm(props) {
  const {
    id,
    covidReport,
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
    Recovered: undefined,
    Infected: undefined,
    Died: undefined,
    Country: undefined,
    lastUpdatedAt: undefined,
  };
  const [Recovered, setRecovered] = React.useState(initialValues.Recovered);
  const [Infected, setInfected] = React.useState(initialValues.Infected);
  const [Died, setDied] = React.useState(initialValues.Died);
  const [Country, setCountry] = React.useState(initialValues.Country);
  const [lastUpdatedAt, setLastUpdatedAt] = React.useState(
    initialValues.lastUpdatedAt
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...covidReportRecord };
    setRecovered(cleanValues.Recovered);
    setInfected(cleanValues.Infected);
    setDied(cleanValues.Died);
    setCountry(cleanValues.Country);
    setLastUpdatedAt(cleanValues.lastUpdatedAt);
    setErrors({});
  };
  const [covidReportRecord, setCovidReportRecord] = React.useState(covidReport);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(CovidReport, id) : covidReport;
      setCovidReportRecord(record);
    };
    queryData();
  }, [id, covidReport]);
  React.useEffect(resetStateValues, [covidReportRecord]);
  const validations = {
    Recovered: [],
    Infected: [],
    Died: [],
    Country: [],
    lastUpdatedAt: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          Recovered,
          Infected,
          Died,
          Country,
          lastUpdatedAt,
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
          await DataStore.save(
            CovidReport.copyOf(covidReportRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "CovidReportUpdateForm")}
    >
      <TextField
        label="Recovered"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={Recovered}
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
              Recovered: value,
              Infected,
              Died,
              Country,
              lastUpdatedAt,
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
      <TextField
        label="Infected"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={Infected}
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
              Recovered,
              Infected: value,
              Died,
              Country,
              lastUpdatedAt,
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
        label="Died"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={Died}
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
              Recovered,
              Infected,
              Died: value,
              Country,
              lastUpdatedAt,
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
        label="Country"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Recovered,
              Infected,
              Died,
              Country: value,
              lastUpdatedAt,
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
        label="Last updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        defaultValue={lastUpdatedAt && convertToLocal(new Date(lastUpdatedAt))}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Recovered,
              Infected,
              Died,
              Country,
              lastUpdatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.lastUpdatedAt ?? value;
          }
          if (errors.lastUpdatedAt?.hasError) {
            runValidationTasks("lastUpdatedAt", value);
          }
          setLastUpdatedAt(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("lastUpdatedAt", lastUpdatedAt)}
        errorMessage={errors.lastUpdatedAt?.errorMessage}
        hasError={errors.lastUpdatedAt?.hasError}
        {...getOverrideProps(overrides, "lastUpdatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
