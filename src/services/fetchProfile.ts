import solidAuth from 'solid-auth-client';
import { fetchDocument } from 'tripledoc';

// this is the function that does the main job!
// fetch the users profile by checking if the user is loggedIn
export async function fetchProfile() {
  const currentSession = await solidAuth.currentSession();
  // if user is not loggedIn it return null
  if (!currentSession) {
    return null;
  }

  // otherwise it returns the profile

  // fetch the document (containing information about user) with user's webID in hand
  const webIdDoc = await fetchDocument(currentSession.webId);

  // Now get all the information in the doc which has webId as Subject
  const profile = webIdDoc.getSubject(currentSession.webId);
  return profile;

}
