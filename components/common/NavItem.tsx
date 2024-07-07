import React from 'react';
import Image from "next/image";
function NavItem({title, selectedIcon, unSelectedIcon, isSelected} : {title: string, selectedIcon: string, unSelectedIcon: string, isSelected: boolean}) {
  if (isSelected) {
    return (
      <div className="frame-640">
        <Image src={selectedIcon} width={24} height={24} alt=""/>
        <p className="title">{title}</p>
        <style jsx>{`
          .frame-640 {
            display: flex; /* Flexbox 레이아웃을 활성화 */
            flex-direction: row; /* 자식 요소를 행으로 배치 */
            align-items: center; /* 자식 요소를 수직 중앙에 정렬 */
            padding: 12px 16px; /* 상하 12px, 좌우 16px의 패딩 추가 */
            gap: 16px; /* 자식 요소 사이에 16px 간격 추가 */
            width: 192px; /* 컨테이너의 너비 설정 */
            height: 48px; /* 컨테이너의 높이 설정 */
            background: #2B2C30; /* 배경색을 어두운 회색(#2B2C30)으로 설정 */
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* X와 Y 오프셋이 각각 4px, 블러 반경 4px, 검정색의 그림자 추가 */
            border-radius: 12px; /* 테두리 반경을 12px로 설정하여 둥근 모서리 적용 */
            flex: none; /* Flexbox의 기본 크기 조정 비활성화 */
            order: 0; /* 요소의 순서 설정 */
            align-self: stretch; /* 요소를 부모 컨테이너의 높이에 맞게 확장 */
            flex-grow: 0; /* 요소가 Flexbox 컨테이너 내에서 추가 공간을 차지하지 않도록 설정 */
          }

          .title {
            color: var(--Gray5, #E4E5E7);
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 140%; /* 22.4px */
            letter-spacing: 0.064px;
          }

          .icon {
            width: 24px; /* 아이콘의 너비 설정 */
            height: 24px; /* 아이콘의 높이 설정 */
          }
        `}</style>
      </div>
    );
  } else {
    return <div className="unselected">
      <Image src={unSelectedIcon} width={24} height={24} alt=""/>
      <p className="title">{title}</p>
      <style jsx>{`
        .unselected {
          display: flex;
          padding: 12px 16px;
          align-items: center;
          gap: 16px;
          align-self: stretch;
        }
        .title {
          color: var(--Gray4, #D3D3D4);
          font-family: Pretendard;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; /* 22.4px */
          letter-spacing: 0.064px;
        }
        .icon {
          width: 24px; /* 아이콘의 너비 설정 */
          height: 24px; /* 아이콘의 높이 설정 */
        }
      `}</style>
    </div>
  }
};

export default NavItem;