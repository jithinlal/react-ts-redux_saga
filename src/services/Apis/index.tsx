/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import withoutAuth from './withoutAuth/withoutAuth';
import owner from './owner/owner';
import builder from './builder/builder';
import builderModel from './model/model';

const Api = {
  owner,
  builder,
  withoutAuth,
  builderModel,
};

export default Api;
