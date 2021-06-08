import React from 'react';
import { ArtistItem } from './ArtistItem';
import cTat from '../../images/chuttersTat.jpg';
import tTat from '../../images/taraTat.jpg';
import xTat from '../../images/xTat.jpg';

interface ArtistItemProps {

}

export const Artists: React.FC<ArtistItemProps> = () => {
  return (
    <section className="artist-section">
      <ArtistItem
        orientedLeft={false}
        name="Tara"
        email="Tara@always-closed.com"
        ig="@tara_Ink"
        image={xTat}
        />
      <ArtistItem
        orientedLeft={true}
        name="chutters"
        email="Chutters@always-closed.com"
        ig="@chutters_freestyle_ink"
        image={cTat}
      />
    </section>
  );
}