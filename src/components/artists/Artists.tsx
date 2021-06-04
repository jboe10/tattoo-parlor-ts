import React from 'react'
import { ArtistItem } from './ArtistItem'

export const Artists: React.FC<null> = () => {
  return (
    <section className="artist-section">
      <ArtistItem
        orientedLeft={false}
        name="Tara"
        email="Tara@always-closed.com"
        ig="@tara_Ink"
      />
      <ArtistItem
        orientedLeft={true}
        name="chutters"
        email="Chutters@always-closed.com"
        ig="@chutters_freestyle_ink"
      />
    </section>
  );
}