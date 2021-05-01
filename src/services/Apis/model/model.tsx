/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { APP_ENTRYPOINT } from '../../../config/config';
import { request } from '../../request/Request';

function getModelService() {
  const data = {
    docs: [
      {
        _id: '607879f3955aa5001a459ab6',
        name: 'model1',
        imageUrl: 'https://nextport-homeowner.s3.amazonaws.com/public/Models/model-1618508263402.jpeg',
        owner: {
          _id: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
          name: 'Lucas Orr',
          address: 'newyork',
          city: 'ny',
          state: 'Sit dolores esse dol',
          zipCode: '53382',
        },
        createdAt: '2021-04-15T17:37:55.175Z',
        updatedAt: '2021-04-15T17:37:55.175Z',
        __v: 0,
      },
      {
        _id: '60787a0f955aa5001a459ab8',
        name: 'model2',
        imageUrl: 'https://nextport-homeowner.s3.amazonaws.com/public/Models/model-1618508286749.jpeg',
        owner: {
          _id: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
          name: 'Lucas Orr',
          address: 'newyork',
          city: 'ny',
          state: 'Sit dolores esse dol',
          zipCode: '53382',
        },
        createdAt: '2021-04-15T17:38:23.890Z',
        updatedAt: '2021-04-15T17:38:23.890Z',
        __v: 0,
      },
    ],
    totalDocs: 2,
    limit: 100,
    totalPages: 1,
    page: 1,
    pagingCounter: 1,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  };
  return data;
  // return yield request.get(
  //   `${APP_ENTRYPOINT}/models?limit=100`,
  // );
}

function* createModelService(value: any) {
  return yield request.post(
    `${APP_ENTRYPOINT}/models`,
    value,
  );
}

const builderModel = {
  getModelService,
  createModelService,
};

export default builderModel;
