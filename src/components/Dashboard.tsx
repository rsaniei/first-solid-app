import React from 'react';
import { LogoutButton } from '@solid/react';
import { foaf, vcard } from 'rdf-namespaces';
import { useProfile } from '../hooks/useProfile';
import { useNotesList, getNotes } from '../hooks/useNotesList';



export const Dashboard: React.FC = () => {

  // retrieve user profile
  const profile = useProfile();
  const notesList = useNotesList();
  // notes list are something like this (have 9 triplets):
  // 15900907130323507781274099968
  // date Created	2020 - 05 - 21T19: 51: 53Z
  // text	hello
  // type Text Digital Document
  // 159101698109520088187332260987
  // date Created	2020 - 06 - 01T13: 09: 41Z
  // text	I'm rana
  // type Text Digital Document
  // 15910169875199641535156955323
  // date Created	2020 - 06 - 01T13: 09: 47Z
  // text	I'm here
  // type Text Digital Document

  // console.log('noteslists are =>', notesList?.getTriples());

  // if profile exists set foaf.name as name, if not set name = null
  const name = (profile) ? profile.getString(foaf.name) : null;
  // const role = (profile) ? profile.getString(vcard.role) : null;

  // if name exists set greeting contains name , if not greeting is just Hello!
  const greeting = (name) ? `Hello${name}` : 'Hello!';

  // getNotes counts the statements with type = TextDigitalDocument to find
  // exactly how many notes we have (result has 3 triplets in the example).
  const noteCount = notesList ? <p>You have {getNotes(notesList).length} notes</p> : null;
  return (
    <div>
      {/* Use greeting here */}
      <div>{greeting}</div>
      <div>{noteCount}</div>
      <footer className="footer has-text-left">
        <LogoutButton className="button" />
      </footer>
    </div >

  )
}
