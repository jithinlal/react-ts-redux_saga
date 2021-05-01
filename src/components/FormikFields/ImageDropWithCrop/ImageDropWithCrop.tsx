/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import Cropper from 'react-cropper';
import ImageDrop from '../ImageDrop/ImageDrop';
import 'cropperjs/dist/cropper.css';

const ImageDropWithCrop = (props : any) => {
  const [filePath, setFilePath] = useState('');
  const onFileChange = async (file: any) => {
    const image = URL.createObjectURL(file);
    setFilePath(image);
  };

  const [base64Image, setbase64Image] = useState('');

  const cropperRef = useRef(null);
  const onSubmit = async () => {
    const imageElement: any = cropperRef?.current;
    const cropper = imageElement?.cropper;
    const base64 = cropper.getCroppedCanvas().toDataURL();
    const res = await fetch(base64);
    const blob = await res.blob();
    const file: any = new File([blob], `image_url-${new Date().getTime()}.${blob?.type?.split('/')[1]}`);
    props.onFileChange(file);
    setFilePath('');
  };

  const onCancel = () => {
    setFilePath('');
  };

  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    setbase64Image(cropper.getCroppedCanvas().toDataURL());
  };

  const cropbtnClass = 'bg-blue-710 hover:bg-white text-blue-710hover border-blue-710 border w-20 text-white py-2 rounded-lg font-black mb-4 focus:outline-none';

  const cancelbtnClass = 'hover:bg-white text-blue-710hover border-blue-710 border w-20 text-blue-710 py-2 rounded-lg font-black mb-4 focus:outline-none';
  return (
    <>
      <Popup open={!!filePath} modal closeOnDocumentClick={false}>
        <div className="flex-col items-center justify-center flex width-popup">
          {
            filePath
              ? (
                <Cropper
                  aspectRatio={1}
                  src={filePath}
                  style={{ height: 400, width: '100%' }}
                  initialAspectRatio={1}
                  guides={false}
                  ref={cropperRef}
                  crop={onCrop}
                />
              )
              : null
          }
          <div className="flex flex-row m-2">
            <button type="button" onClick={onSubmit} className={`${cropbtnClass} pl-2 pr-2 ml-2 mr-2`}>Crop</button>
            <button type="button" onClick={onCancel} className={`${cancelbtnClass} pl-2 pr-2 ml-2 mr-2`}>Cancel</button>
          </div>
          <div className="flex flex-row items-start mb-2">
            <div className="flex flex-col items-center mx-2 ">
              <img src={base64Image} className="w-20 h-20 border" />
              <p className="bg-white mt-1">Square view</p>
            </div>
            <div className="flex flex-col justify-center items-center mx-2 ">
              <img src={base64Image} className="w-20 h-20 rounded-full border" />
              <p className="bg-white mt-1">Circle view</p>
            </div>
          </div>
        </div>
      </Popup>
      <ImageDrop showChoosedImage={false} {...props} onFileChange={onFileChange} />
    </>
  );
};

export default ImageDropWithCrop;
