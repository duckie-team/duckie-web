import InputBox from "../../../components/common/InputBox";
import React, { Dispatch, SetStateAction } from "react";

interface IntroductionInputBoxProps {
  introduction: string,
  setIntroduction:Dispatch<SetStateAction<string>>,
  handleIntroductionChange: (e: string) => void
}

export const IntroductionInputBox = ({introduction, setIntroduction, handleIntroductionChange} : IntroductionInputBoxProps
) =>
{
  return (
    <InputBox
      id="id-input-box"
      width="w-[100%]"
      height="h-[4.5rem] md:h-[5rem]"
      placeholder="무슨 덕질하세요?"
      value={introduction}
      setValue={setIntroduction}
      handleChange={handleIntroductionChange}
    />
  )
}