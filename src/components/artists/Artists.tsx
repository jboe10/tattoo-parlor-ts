import React from 'react';
import { ArtistItem } from './ArtistItem';
import chuttersTat from '../../images/chuttersTat.jpg';
import taraTat from '../../images/taraTat.jpg';

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
        image={taraTat}
        />
      <ArtistItem
        orientedLeft={true}
        name="chutters"
        email="Chutters@always-closed.com"
        ig="@chutters_freestyle_ink"
        image={chuttersTat}
      />
    </section>
  );
}