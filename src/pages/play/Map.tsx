import { IonContent, IonButton, IonItem } from '@ionic/react';
import React from 'react';
import { InstructionPageProps } from '../../components/InstructionFlow';

import MarkdownComponent from '../../components/MarkdownComponent';
import { useSelector } from 'react-redux';

import './Map.scss';
import SquareCard from 'components/Cards/SquareCard';
import { CellContentIcon } from 'components/Game/Pieces';
import { CellContentTypes, StarTypes } from 'model/Level';
import SizedInCSS from 'components/SizedInCSS';

const MapSetup: React.FC<InstructionPageProps> = ({
    nextUrl, className,
    extraProps: {
      header,
      story
    }
  }) => {
  const {
    shipData,
    shipCode
  } = useSelector((state: any) => state);

  return (
    <IonContent className={className}>
      <div className="page-container ion-text-center">
        <MarkdownComponent source={header} transformations={{shipCode, ...shipData}} />
        <IonItem color="notebook" className="handwritten">
          <MarkdownComponent source={story} transformations={{shipCode, ...shipData}} />
        </IonItem>
        <SquareCard className="map">
          <SizedInCSS>
            <CellContentIcon className="fuelStar map-object"
              content={{type: CellContentTypes.Star, subtype: StarTypes.BlueGiant}} />
            <CellContentIcon className="upgradeStar map-object"
              content={{type: CellContentTypes.Star, subtype: StarTypes.RedDwarf}} />
            <CellContentIcon className="survivorStar map-object"
              content={{type: CellContentTypes.Star, subtype: StarTypes.Yellow}} />
            <CellContentIcon className="ship map-object"
              content={{type: CellContentTypes.Player}} />
            <CellContentIcon className="survivor map-object"
              content={{type: CellContentTypes.Crew}} />
            <svg className="lines" viewBox="0 0 100 100" >
              <path className="full-line" d="M -10 34 Q 50 -31 120 58" />
              <path className="progress-line" d="M -10 34 Q 50 -31 120 58" />
            </svg>
          </SizedInCSS>
        </SquareCard>
        <IonButton routerLink={nextUrl}>
          Let's Set This Space Up
        </IonButton>
      </div>
    </IonContent>
  );
};

export default MapSetup;