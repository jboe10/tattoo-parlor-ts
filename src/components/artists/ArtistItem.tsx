import React, { useRef } from 'react';

interface ArtistItemProps {
  orientedLeft: boolean;
  name: string;
  email: string;
  ig: string;
  image: string;
}


export const ArtistItem: React.FC<ArtistItemProps> = (props) => {

  const artistInfo = 
  <>
    <h3>{props.name}</h3>
    <p>
      Nulla pulvinar, libero vel pharetra suscipit, quam nisi condimentum nunc, 
      vitae tristique enim lacus nec orci. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <h4>{props.email}</h4>
    <h4>IG: {props.ig}</h4>
  </>;

  return (
    <>
      { props.orientedLeft && 
        <div className="artist-item">
          <img className="img-left" src={props.image} alt="artist"/>
          <div className="artist-info info-left">
            {artistInfo}
          </div>
        </div>
      }
      {
        !props.orientedLeft && 
        <div className="artist-item">
          <div className="artist-info info-right">
            {artistInfo}
          </div>
          <img className="img-right" src={props.image} alt="artist"/>
        </div>
      }
    </>
  );
}