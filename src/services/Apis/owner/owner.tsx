/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { APP_ENTRYPOINT } from '../../../config/config';
import { request } from '../../request/Request';

function* createOwnerService(value: any) {
  return yield request.post(
    `${APP_ENTRYPOINT}/builder/owner-create`,
    value,
  );
}

function getOwnersListService(params:any) {
  console.log(params);
  const data = {
    docs: [
      {
        verified: false,
        models: [],
        _id: 'd1ba66c5-bc54-486d-8bb4-e6b930c0fc29',
        email: 'zidazemes@mailinator.com',
        firstName: 'Germaine',
        lastName: 'Sears',
        name: 'Germaine Sears',
        city: 'Ea ipsum aut tempore',
        phoneNumber: '+1 (702) 448-9213',
        lotNumber: '877',
        type: 'OWNER',
        model: {
          _id: '607879f3955aa5001a459ab6',
          name: 'model1',
          imageUrl: 'https://nextport-homeowner.s3.amazonaws.com/public/Models/model-1618508263402.jpeg',
          owner: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
          createdAt: '2021-04-15T17:37:55.175Z',
          updatedAt: '2021-04-15T17:37:55.175Z',
          __v: 0,
        },
        builder: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
        projectId: '38216',
        createdAt: '2021-04-15T17:57:13.838Z',
        updatedAt: '2021-04-15T17:57:13.838Z',
        __v: 0,
      },
      {
        verified: false,
        models: [],
        _id: '68a9f88a-e086-448b-b536-5cb14993a812',
        email: 'neloqahu@mailinator.com',
        firstName: 'Sacha',
        lastName: 'Stark',
        name: 'Sacha Stark',
        city: 'Fuga Ipsum veniam ',
        phoneNumber: '+1 (418) 347-9772',
        lotNumber: '586',
        type: 'OWNER',
        model: {
          _id: '607879f3955aa5001a459ab6',
          name: 'model1',
          imageUrl: 'https://nextport-homeowner.s3.amazonaws.com/public/Models/model-1618508263402.jpeg',
          owner: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
          createdAt: '2021-04-15T17:37:55.175Z',
          updatedAt: '2021-04-15T17:37:55.175Z',
          __v: 0,
        },
        builder: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
        projectId: '38216',
        createdAt: '2021-04-15T17:57:39.571Z',
        updatedAt: '2021-04-15T17:57:39.571Z',
        __v: 0,
      },
      {
        verified: false,
        models: [],
        _id: 'd1a82d37-635c-4094-83f8-ce045c9fa3eb',
        email: 'mozara@mailinator.com',
        firstName: 'Blake',
        lastName: 'Mcbride',
        name: 'Blake Mcbride',
        city: 'Quis voluptatem fugi',
        phoneNumber: '+1 (396) 554-9608',
        lotNumber: '77',
        type: 'OWNER',
        model: {
          _id: '60787a0f955aa5001a459ab8',
          name: 'model2',
          imageUrl: 'https://nextport-homeowner.s3.amazonaws.com/public/Models/model-1618508286749.jpeg',
          owner: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
          createdAt: '2021-04-15T17:38:23.890Z',
          updatedAt: '2021-04-15T17:38:23.890Z',
          __v: 0,
        },
        builder: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
        projectId: '38216',
        createdAt: '2021-04-15T17:57:53.881Z',
        updatedAt: '2021-04-15T17:57:53.881Z',
        __v: 0,
      },
      {
        verified: false,
        models: [],
        _id: '08f44a08-6548-4259-95f9-36a2efbb6ef1',
        email: 'kyha@mailinator.com',
        firstName: 'Tarik',
        lastName: 'Ferguson',
        name: 'Tarik Ferguson',
        city: 'Reprehenderit velit ',
        phoneNumber: '+1 (413) 708-3336',
        lotNumber: '652',
        type: 'OWNER',
        model: {
          _id: '607879f3955aa5001a459ab6',
          name: 'model1',
          imageUrl: 'https://nextport-homeowner.s3.amazonaws.com/public/Models/model-1618508263402.jpeg',
          owner: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
          createdAt: '2021-04-15T17:37:55.175Z',
          updatedAt: '2021-04-15T17:37:55.175Z',
          __v: 0,
        },
        builder: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
        projectId: '38216',
        createdAt: '2021-04-16T10:25:09.319Z',
        updatedAt: '2021-04-16T10:25:09.319Z',
        __v: 0,
      },
      {
        verified: false,
        models: [],
        _id: 'cf85d736-69c2-44de-8076-bede2f63ebf3',
        email: 'lominyt@mailinator.com',
        firstName: 'Dane',
        lastName: 'Byrd',
        name: 'Dane Byrd',
        city: 'In quas dicta consec',
        phoneNumber: '+1 (609) 847-3049',
        lotNumber: '995',
        type: 'OWNER',
        model: {
          _id: '60787a0f955aa5001a459ab8',
          name: 'model2',
          imageUrl: 'https://nextport-homeowner.s3.amazonaws.com/public/Models/model-1618508286749.jpeg',
          owner: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
          createdAt: '2021-04-15T17:38:23.890Z',
          updatedAt: '2021-04-15T17:38:23.890Z',
          __v: 0,
        },
        builder: '19cf31e9-eb43-46e8-bed4-60dd7b736e35',
        projectId: '38216',
        createdAt: '2021-04-16T10:25:25.211Z',
        updatedAt: '2021-04-16T10:25:25.211Z',
        __v: 0,
      },
    ],
    totalDocs: 5,
    limit: 5,
    totalPages: 1,
    page: 1,
    pagingCounter: 1,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  };
  return data;
}

function* getCustomerService(params: any) {
  return yield request.get(
    `${APP_ENTRYPOINT}/builder/get-owner/${params.id}`,
  );
}

const owner = {
  getCustomerService,
  createOwnerService,
  getOwnersListService,
};

export default owner;
