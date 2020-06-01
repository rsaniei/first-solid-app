import { space, schema } from 'rdf-namespaces';
import { createDocument } from 'tripledoc';
import { fetchProfile } from './fetchProfile';
import { fetchPublicTypeIndex } from './fetchPublicTypeIndex';
import { addToTypeIndex } from './addToTypeIndex';

export async function initialiseNotesList() {

  const [profile, publicTypeIndex] = await Promise.all([fetchProfile(), fetchPublicTypeIndex()]);
  if (profile === null || publicTypeIndex === null) {
    return null;
  }

  // find where the files on the local host or server should be stored
  //  for example storage is "/"
  const storage = profile.getRef(space.storage);
  if (typeof storage !== 'string') {
    return null;
  }
  // Note: There's an assumption here that `/public/` exists and is writable for this app.

  const notesListRef = storage + 'public/notes.ttl';
  const notesList = createDocument(notesListRef);
  await notesList.save();
  // add newly added document to the publicTypeIndex file
  await addToTypeIndex(publicTypeIndex, notesList, schema.TextDigitalDocument);
  return notesList;
}
