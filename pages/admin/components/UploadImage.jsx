// @flow

/* -----------------Globals--------------- */
import React, { useState, createRef } from 'react';

/* -----------------MaterialUI--------------- */
import { Button } from '@material-ui/core';
import { CloudUpload, Delete } from '@material-ui/icons';

/* -----------------Types--------------- */
type Props = {
  title: string,
}

const UploadImage = (props: Props) => {
  const { title } = props;

  const [image, setImage] = useState('');
  const inputFileRef = createRef();

  const remove = () => {
    URL.revokeObjectURL(image);
  };

  const uploadImage = (newImage) => {
    if (image) {
      remove();
    }
    setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];

    if (newImage) {
      uploadImage(URL.createObjectURL(newImage));
    }
  };

  const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      uploadImage();
    }
  };

  return (
    <>
      <input
        ref={inputFileRef}
        accept="image/*"
        hidden
        id="avatar-image-upload"
        type="file"
        onChange={handleOnChange}
      />

      <label htmlFor="avatar-image-upload">
        <Button
          variant="contained"
          component="span"
          mb={2}
          onClick={handleClick}
        >
          {image ? <Delete /> : <CloudUpload />}
          {image ? <img alt="uploaded graphic" width="50" height="60" src={image} /> : `Upload ${title}`}
        </Button>
      </label>

    </>
  );
};

export default UploadImage;
