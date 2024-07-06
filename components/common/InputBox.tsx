'use client';

import { Dispatch, SetStateAction } from 'react';

interface inputBoxProps {
  width: string;
  height: string;
  placeholder?: string;
  id?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleChange: (e: any) => void;
  handleKeyDown?: (e: any) => void;
}
const InputBox = ({ width, height, placeholder, handleChange, handleKeyDown, value, setValue, id }: inputBoxProps) => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        id={id || ''}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button
        className={`absolute right-[2rem]  ${value ? 'visible' : 'invisible'}`}
        type="button"
        onClick={() => {
          setValue('');
        }}
      >
      </button>
    </div>
  );
};
export default InputBox;