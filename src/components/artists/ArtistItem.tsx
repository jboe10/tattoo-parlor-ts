import React from 'react'

interface ArtistItemProps {
  orientedLeft: boolean;
  name: string;
  email: string;
  ig: string;
}


export const ArtistItem: React.FC<ArtistItemProps> = (props) => {
  return (
    <>
      { props.orientedLeft && 
        <div className="artist-item">
          <img/>
          <div className="artist-info">

          </div>
        </div>
      }
      {
        !props.orientedLeft && 
        <div className="artist-item">
          <div className="artist-info">
            
          </div>
          <img/>
        </div>
      }
    </>
  );
}