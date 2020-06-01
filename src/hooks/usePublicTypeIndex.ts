import React from 'react';
import { fetchPublicTypeIndex } from '../services/fetchPublicTypeIndex';
import { TripleDocument } from 'tripledoc';


export function usePublicTypeIndex() {
  // using react state and react hook to dynamically set the pulicTypeIndex
  const [publicTypeIndex, setPublicTypeIndex] = React.useState<TripleDocument>();

  React.useEffect(() => {
    fetchPublicTypeIndex().then(fetchedPublicTypeIndex => {
      if (fetchedPublicTypeIndex === null) {
        return;
      }
      setPublicTypeIndex(fetchedPublicTypeIndex);
    });
  }, []);

  return publicTypeIndex;
}
