import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCovidReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CovidReport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Country: string;
  readonly Died?: number | null;
  readonly Infected?: number | null;
  readonly Recovered?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCovidReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CovidReport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Country: string;
  readonly Died?: number | null;
  readonly Infected?: number | null;
  readonly Recovered?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CovidReport = LazyLoading extends LazyLoadingDisabled ? EagerCovidReport : LazyCovidReport

export declare const CovidReport: (new (init: ModelInit<CovidReport>) => CovidReport) & {
  copyOf(source: CovidReport, mutator: (draft: MutableModel<CovidReport>) => MutableModel<CovidReport> | void): CovidReport;
}