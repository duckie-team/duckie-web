import Image from 'next/legacy/image';

const RoundImage = ({src, alt, size} : {src: string, alt: string, size: number}) => {
  return (
    <>
      <div className="roundImageContainer" style={{width: size, height: size}}>
        <Image src={src} alt={alt} width={size} height={size} layout="fill" className="roundImage"/>
      </div>

      <style jsx>{`
        .roundImageContainer {
          position: relative;
          border-radius: 50%;
          overflow: hidden;
        }

        .roundImage {
          object-fit: cover;
        }
      `}</style>
    </>
  );
};


export default RoundImage;