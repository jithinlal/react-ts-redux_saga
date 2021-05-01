/* eslint-disable import/order */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { useFormikContext, useField } from 'formik';
import { uploadImg, ImageClose } from '../../../assets/images';
import './ImageDrop.scss';
import { toast } from 'react-toastify';

type Props = {
  name: string;
  label: string;
  showChoosedImage?: boolean;
  currentImg?: string;
  defaultImage?: boolean;
  customlabelstyle?: string;
  customerrorstyle?: string;
  onRemove?: () => void;
  // eslint-disable-next-line no-unused-vars
  onFileChange?: (arg: any) => void;
}
export const ImageDrop = (props: Props) => {
  const [field, meta] = useField(props);
  const [file, setfile] = useState('');
  const [fileName, setfileName] = useState('');

  const { handleChange } = useFormikContext();
  const { value } = field;
  useEffect(() => {
    setfile(value);
  }, [value]);
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles[0].type.startsWith('image/')) {
      // setfile(URL.createObjectURL(acceptedFiles[0]));
      if (props?.showChoosedImage) {
        setfile(URL.createObjectURL(acceptedFiles[0]));
        setfileName(acceptedFiles[0].name);
      }
      if (props.onFileChange) {
        props.onFileChange(acceptedFiles[0]);
        setfileName(acceptedFiles[0].name);
      }
    } else {
      toast.error('Only images can be uploaded');
    }
  }, []);
  const removeFile = () => {
    handleChange(field.name)('');
    setfile('');
    setfileName('');
    if (props.onRemove) {
      props.onRemove();
    }
  };
  let labelStyle = 'text-sm font-bold text-left w-full text-black';
  let bgStyle = 'rounded-4 bg-Back focus:outline-none relative mt-1 cursor-pointer border-dashed border rounded-4 flex relative px-3 py-2 w-full';
  if (meta.touched && meta.error) {
    labelStyle = 'text-red-imp text-sm font-bold';
    bgStyle = 'rounded-4 bg-Back focus:outline-none relative mt-1 cursor-pointer border-dashed border rounded-4 flex relative px-3 py-2 w-full border-red-400';
  }
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <>
          <span className={props.customlabelstyle || labelStyle}>{props.label}</span>
          <div {...getRootProps()} className={bgStyle}>
            <div className="flex items-center bg-gray-200 w-full py-2 px-5 justify-between">
              <div className="flex">
                <span className="text-gray-600 flex flex-row">
                  <img src={uploadImg} alt="photo" className="overflow-hidden pr-2" />
                  Upload Image
                </span>
                <input
                  id="file-up"
                  className="fileUp focus:outline-none"
                  type="file"
                  name="file"
                  {...getInputProps()}
                  style={{ display: 'none' }}
                />
                {meta.touched && meta.error && props.label && (
                <div className={props.customerrorstyle || 'text-red-imp input-error-message absolute bottom-0 text-sm -mb-6'}>{meta.error}</div>
                )}
              </div>
              {file !== '' ? (
                <div className="flex image-name right-0 px-2 justify-center items-center">
                  <div className="text-white text-sm font-body px-2">{fileName}</div>
                  <img
                    alt="image"
                    className="py-1 px-1 focus:outline-none rounded-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile();
                    }}
                    src={ImageClose}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <small className="text-gray-600">
            *Maximum upload file size is
            {' '}
            <span className="text-black">1MB</span>
            *Allowed formats:
            {' '}
            <span className="text-black">JPEG,PNG,SVG,GIF</span>
          </small>
        </>
      )}
    </Dropzone>
  );
};

export default ImageDrop;

// ImageDrop.propTypes = {
//   label: PropTypes.string,
//   onFileChange: PropTypes.func,
//   onRemove: PropTypes.func,
// };

ImageDrop.defaultProps = {
  showChoosedImage: true,
};
