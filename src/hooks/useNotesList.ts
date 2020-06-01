import { usePublicTypeIndex } from './usePublicTypeIndex';
import { solid, schema } from 'rdf-namespaces';
import React from 'react';
import { TripleDocument, TripleSubject } from 'tripledoc';
import { fetchDocument } from 'tripledoc';


export function useNotesList() {

  const publicTypeIndex = usePublicTypeIndex();
  const [notesList, setNotesList] = React.useState<TripleDocument>();


  React.useEffect(() => {
    if (!publicTypeIndex) {
      return;
    }
    (async () => {
      const notesListIndex = publicTypeIndex.findSubject(solid.forClass, schema.TextDigitalDocument);
      // if there is no notes
      if (!notesListIndex) {

      }
      // If the public type index lists a notes document we fetch it:
      else {
        const notesListUrl = notesListIndex.getRef(solid.instance);
        if (typeof notesListUrl !== 'string') {
          return;
        }
        const document = await fetchDocument(notesListUrl);
        setNotesList(document);
      }
    })();
  }, [publicTypeIndex]);
  return notesList;
}

export function getNotes(notesList: TripleDocument): TripleSubject[] {
  return notesList.getSubjectsOfType(schema.TextDigitalDocument);
}
