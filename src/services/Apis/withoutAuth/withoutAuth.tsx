/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Axios from 'axios';
import { APP_ENTRYPOINT } from '../../../config/config';

export interface ownerDetailBody {
  cognitoId: string,
  companyName: string,
  companyLogo: string,
  firstName: string,
  lastName:string,
  userName:string,
  phoneNumber:string,
  state:string,
  city:string,
  zipCode:string,
  email:string,
  address:string,
}

function builderSignupService(value:ownerDetailBody) {
  return Axios.post(`${APP_ENTRYPOINT}/builder`,
    value);
}

const withoutAuth = {
  builderSignupService,
};

export default withoutAuth;
