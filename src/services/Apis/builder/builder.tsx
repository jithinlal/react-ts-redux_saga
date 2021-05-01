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
      _id: 'c7e0782d-12bf-4bfb-970c-b8dbf844e993',
      email: 'kiran.r@neoito.com',
      type: 'BUILDER',
      companyName: 'Neoito',
      companyLogo: 'neoito.svg',
      firstName: 'Kiran',
      lastName: 'Raj',
      name: 'Kiran Raj',
      userName: 'Kiran',
      address: 'Trivandrum',
      city: 'Palayam',
      state: 'Kerala',
      zipCode: '695020',
      phoneNumber: '7293024464',
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
