/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// import { APP_ENTRYPOINT } from '../../../config/config';
// import { request } from '../../request/Request';

function getBuilderService() {
  // return yield request.get(
  //   `${APP_ENTRYPOINT}/builder/view-profile`,
  // );
  const data = {
    data: {
      verified: true,
      models: [],
      _id: '123',
      email: 'me@gmail.com',
      type: '----',
      companyName: 'XXX',
      companyLogo: 'me.svg',
      firstName: 'K',
      lastName: 'R',
      name: 'K R',
      userName: 'KR',
      address: 'TVM',
      city: 'MAN',
      state: 'K',
      zipCode: '122',
      phoneNumber: '1234567890',
      createdAt: '2021-04-17T04:31:28.514Z',
      updatedAt: '2021-04-17T04:31:28.514Z',
      __v: 0,
    },
  };
  return data;
}

const builder = {
  getBuilderService,
};

export default builder;
