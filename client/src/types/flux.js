// @flow
// FLUX - TYPES
// =============================================================================

export type FluxStandardAction = {
  type: string,
  error?: true,
  payload?: any,
  meta?: any,
};

export type StandardFSA<T: string | Symbol, P: any> = {|
  type: T,
  payload?: P,
  meta?: any,
|};

export type ErrorFSA<T: string | Symbol, P: Error> = {|
  type: T,
  payload?: P,
  error: true,
  meta?: any,
|};

export type FSA<T, P> = StandardFSA<T, P> | ErrorFSA<T, P>;
