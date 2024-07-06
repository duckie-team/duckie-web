"use client";
import InputBox from "../../../components/common/InputBox";
import React, { Dispatch, SetStateAction, useState } from "react";

interface NickNameInputBoxProps {
  nickName: string,
}

export const NickNameInputBox = ({nickName} : NickNameInputBoxProps
) =>
{
  const [_, setNickName] = useState('');
  const handleNickNameChange = (e: any) => {
    setNickName(e.target.value)
  }
  return (
    <InputBox
      id="id-input-box"
      width="w-[100%]"
      height="h-[4.5rem] md:h-[5rem]"
      placeholder="닉네임"
      value={nickName}
      setValue={setNickName}
      handleChange={handleNickNameChange}
    />
  )
}