/* eslint-disable no-unused-expressions */
import { useState } from 'react';

const useCopyBoard = () => {
  const [copy, setCopy] = useState('');
  navigator.permissions.query({ name: 'clipboard-read' }).then(() => {
    window.addEventListener('focus', () => {
      navigator.clipboard && navigator.clipboard.readText()
        .then((text) => {
          setCopy(text);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Failed to read clipboard contents: ', err);
        });
    });
  });
  return copy;
};

export default useCopyBoard;
