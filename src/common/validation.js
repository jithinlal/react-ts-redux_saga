import * as Yup from 'yup';
import { EN } from './utility';

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const verifyFormSchema = Yup.object().shape({
  otp: Yup.string().required('Required'),
});

export const changetemperorayFormSchema = Yup.object().shape({
  current_password: Yup.string().required('Required'),
  new_password: Yup.string()
    .min(8)
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});

export const forgotFormSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
});

export const forgoSubmittFormSchema = Yup.object().shape({
  code: Yup.string().required('Required'),
  password: Yup.string()
    .min(8)
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  new_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required(EN.PASSWORD_REQUIRED),
});

export const CreateUserSchema = Yup.object().shape({
  // image_url: Yup.string().required('Upload your photo'),
  email: Yup.string().required('Required').email('Valid email required'),
  password: Yup.string()
    .min(8)
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters including Alphabet, Number and Special Character',
    ),
});

export const verifyEmailFormSchema = Yup.object({
  code: Yup.string().required('Required').min(6).max(6),
});
export const EditUserSchema = Yup.object().shape({
  image_url: Yup.string().required('Upload your photo'),
  name: Yup.string().min(3).required('Required'),
  telephone: Yup.string()
    .required('Required')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/,
      'Enter valid phone number',
    ),
});
export const AddMerchantSchema = Yup.object().shape({
  image_url: Yup.string(),
  business_name: Yup.string()
    .min(3, 'Business name must be at least 3 characters')
    .required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
  business_type: Yup.string().required('Select category'),
  // sub_cate: Yup.array(Yup.string()).required('Required'),
  longitude: Yup.string().required('Required'),
  latitude: Yup.string().required('Required'),
});

export const CreateOwnerSchema = Yup.object().shape({
  model: Yup.string().required('Required'),
});

export const ConfirmProcoreSchema = Yup.object().shape({
  clientId: Yup.string().required('Required'),
  clientSecret: Yup.string().required('Required'),
});

export const EditnostorechangeMerchantSchema = Yup.object().shape({
  image_url: Yup.string(),
  business_name: Yup.string()
    .min(3, 'Business name must be at least 3 characters')
    .required('Required'),
});
export const resetpassFormSchema = Yup.object({
  code: Yup.string().required('Required'),
  password: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Password confirm is required'),
});

export const EditMerchantSchema = Yup.object().shape({
  image_url: Yup.string(),
  business_name: Yup.string()
    .min(3, 'Business name must be at least 3 characters')
    .required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
  longitude: Yup.string().required('Required'),
  latitude: Yup.string().required('Required'),
});

export const AddModelSchema = Yup.object().shape({
  imageUrl: Yup.string().required('Upload model image'),
  name: Yup.string()
    .required('Required'),
});

export const Editcategory = Yup.object().shape({
  image_url: Yup.string().required('Upload category image'),
  name: Yup.string()
    .required('Required')
    .min(1, 'Required')
    .max(21, 'Maximum 21 characters allowed'),
});

export const addProjectSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  // customerName: { label: '', value: '' },
  // homeModel: Yup.string().required('Required'),
  // lot: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  startDate: Yup.date().required('Required'),
  // projectManager: { label: '', value: '' }
});

export const addTaskSchema = Yup.object().shape({
  text: Yup.string().required('Required'),
  start: Yup.date().required('Required'),
  end: Yup.date().required('Required'),
  complete: Yup.string().required('Required'),
});
