/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import './ImageDrop.scss';
import { Delete, uploadImg } from '../../assets/images';

export const MultiImageDrop = (props) => {
  const [field, meta] = useField(props);
  const [file, setFile] = useState([]);
  const { value } = field;
  useEffect(() => {
    setFile(value);
  }, [value]);
  const onDrop = useCallback(async (acceptedFiles) => {
    acceptedFiles.map((data) => Object.assign(data, {
      preview: URL.createObjectURL(data),
    }));
    setFile([...file, acceptedFiles[0]]);
    if (props.onFileChange) {
      props.onFileChange(acceptedFiles[0]);
    }
  }, [file]);
  const removeFile = (event, index) => {
    event.stopPropagation();
    const list = [...file];
    list.splice(index, 1);
    setFile(list);
    // handleChange(list, index);
    if (props.onRemove) {
      props.onRemove(list);
    }
  };
  // const removeFile = (index) => {
  //   // handleChange(field.name)('');
  //   // setFile([]);
  //   // if (props.onRemove) {
  //   //   props.onRemove();
  //   // }
  // };
  const bgStyle = 'rounded-4 bg-Back focus:outline-none relative mt-3 cursor-pointer border-dashed border rounded-4 w-32 h-32 mb-1 flex flex-col items-center justify-center relative mr-2';
  let bgBlck = '';
  if (file.length > 0) {
    bgBlck = 'hovered-back rounded-4 focus:outline-none absolute w-32 h-32 bg-black opacity-50 hidden';
  }
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <>
          <span className="text-sm font-medium">
            {props.label}
          </span>
          {file.length > 0
            ? file.map((imgfile, i) => (
              <div key={imgfile} {...getRootProps()} className={bgStyle}>
                <div className={bgBlck} />
                {imgfile.preview ? (
                  <img src={imgfile.preview || uploadImg} alt="photo" className="overflow-hidden" />
                ) : (
                  <img src={`https://cwikpayuploads165353-dev.s3.amazonaws.com/public/${imgfile}`} alt="photo" className="overflow-hidden" />
                )}
                <div className="absolute justify-center items-center flex h-full w-full">
                  <img
                    id={`userInput${i}`}
                    alt="image"
                    className="bg-red-600 py-1 px-1 focus:outline-none rounded-4 hidden delImg"
                    onClick={(e) => {
                      removeFile(e, i);
                    }}
                    src={Delete}
                  />
                </div>

              </div>
            )) : null}
          <div {...getRootProps()} className={bgStyle}>
            <img src={uploadImg} alt="photo" className="overflow-hidden" />
            <span className="text-gray-600 mt-2">Drop</span>
            <span className="text-gray-600">your files here</span>
            <input
              id="file-up"
              className="fileUp focus:outline-none"
              type="file"
              name="file"
              {...getInputProps()}
              style={{ display: 'none' }}
            />
          </div>
          {meta.touched && meta.error && props.label && (
            <div className="text-red-500 input-error-message">{meta.error}</div>
          )}
        </>
      )}
    </Dropzone>
  );
};

export default MultiImageDrop;

MultiImageDrop.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onFileChange: PropTypes.func,
  onRemove: PropTypes.func,
};

MultiImageDrop.defaultProps = {
  name: '',
  label: '',
  onFileChange: '',
  onRemove: '',
};
