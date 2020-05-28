import React from 'react';
import { fetchProfile } from '../services/fetchProfile';
import { TripleSubject } from 'tripledoc';


export function useProfile() {
  // using react state and react hook to dynamically set the profile whenever the user is loggedIn
  const [profile, setProfile] = React.useState<TripleSubject>();

  React.useEffect(() => {
    fetchProfile().then((fetchProfile) => {

      if (fetchProfile === null) {
        return;

      }
      // if we have already a profile set fetchProfile as profile
      setProfile(fetchProfile);

    });
  }, [])
  return profile;
}
