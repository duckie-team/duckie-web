"use client";
import RoundImage from "./RoundImage";

const DuckieTopBar = () => {
  return (
    <>
      <div className="topBar">
        <RoundImage src="https://duckie-resource.s3.ap-northeast-2.amazonaws.com/problem/question-image/1720342907357" size={36} alt=""/>
      </div>
      <style jsx>{`
        .topBar {
          display: flex;
          width: 100%;
          padding: 12px 40px;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
        }
      `}</style>


    </>

  )
}

export default DuckieTopBar