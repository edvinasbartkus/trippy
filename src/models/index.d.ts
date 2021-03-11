import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Trip {
  readonly id: string;
  readonly name: string;
  readonly places?: (Place | null)[];
  constructor(init: ModelInit<Trip>);
  static copyOf(source: Trip, mutator: (draft: MutableModel<Trip>) => MutableModel<Trip> | void): Trip;
}

export declare class Place {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly lat?: number;
  readonly lng?: number;
  readonly trip?: Trip;
  constructor(init: ModelInit<Place>);
  static copyOf(source: Place, mutator: (draft: MutableModel<Place>) => MutableModel<Place> | void): Place;
}