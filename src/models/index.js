// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Trip, Place } = initSchema(schema);

export {
  Trip,
  Place
};