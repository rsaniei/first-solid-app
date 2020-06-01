import { fetchProfile } from './fetchProfile';
import { fetchDocument } from 'tripledoc';
import { solid } from 'rdf-namespaces';



// this is the function that does the main job!
// fetch the users profile by checking if the user is loggedIn
export async function fetchPublicTypeIndex() {
  const profile = await fetchProfile();
  if (profile === null) {
    return null;
  }

  // to find the URL here:
  // | #me | solid:publicTypeIndex | /settings/publicTypeIndex.ttl |
  const publicTypeIndexUrl = profile.getRef(solid.publicTypeIndex);

  if (!publicTypeIndexUrl || typeof publicTypeIndexUrl !== 'string') {
    return null;
  }

  // fetch and return the public Type Index documents which is itself
  // a public document in user's pod and contains links to other documents
  const document = await fetchDocument(publicTypeIndexUrl);
  return document;

}
