import { IonContent, IonButton, IonInput, IonLoading } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InstructionPageProps } from '../../components/InstructionFlow';
import { ShipData, DefaultShipData, setShipData } from '../../redux/actions';
import Content from 'content/New/Ship.md';
import MarkdownComponent from '../../components/MarkdownComponent';
import { GetRandomShipCode, checkIfShipExists, saveShipData } from 'firebaseConfig';
import { clone } from 'lodash';
import { useHistory } from 'react-router-dom';
import { storeShipCode } from 'storage';

const NewShip: React.FC<InstructionPageProps> = ({nextUrl}) => {
  const shipData = useSelector((state: any) => state.shipData) as ShipData;
  const [shipCode, setShipCode] = useState<string>();
  const [nameInput, setNameInput] = useState<string>('');
  const [busy, setBusy] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    async function findRandomCode() : Promise<string> {
      const testShipCode = GetRandomShipCode();
      const exists = await checkIfShipExists(testShipCode);
      if (exists) {
        return findRandomCode();
      }
      return testShipCode;
    }

    findRandomCode().then((code: string) => {
      setShipCode(code);
    });
  }, []);

  async function setName(name : string) {
    if (!shipCode) return;
    setBusy(true);
    const shipData : ShipData = clone(DefaultShipData);
    shipData.shipName = name;
    await saveShipData(shipCode, shipData);

    dispatch(setShipData(shipCode, shipData as ShipData));
    storeShipCode(shipCode);
    setBusy(false);
    history.push(nextUrl);
  }

  return (
    <IonContent>
      <div className="page-container">
        <MarkdownComponent source={Content} transformations={{...shipData}} />
        <img alt="the state of this ship left by the last player " src="/assets/last_ship.jpg" />
        <div>
          <p>
            This ship's official designation will be
            <span>{shipCode}</span>
            - you and those who come after you can enter that to see its progress.
          </p>
          <p>
            But before we start, you need to give it a name.
          </p>
        </div>
        <form className="centre"
          onSubmit={(e) => {setName(nameInput); e.preventDefault();}}>
          <IonLoading isOpen={busy} message="Creating Ship Record" />
          <IonInput
            value={nameInput} placeholder="Your Ship Name Here"
            onIonChange={e => setNameInput(e.detail.value!)} />
          <IonButton disabled={shipCode === undefined || nameInput.length === 0} onClick={() => setName(nameInput)}>Enter</IonButton>
        </form>
      </div>
    </IonContent>
  );
};

export default NewShip;