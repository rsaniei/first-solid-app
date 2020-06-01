import { TripleDocument, Reference, LocalTripleDocumentWithRef } from 'tripledoc';
import { rdf, solid } from 'rdf-namespaces';

export async function addToTypeIndex(
  typeIndex: TripleDocument,
  document: LocalTripleDocumentWithRef,
  forClass: Reference,
) {
  // Tripledoc will automatically generate an identifier with which
  // this Subject can be identified within the Document,
  // and which is likely to be unique.
  const typeRegistration = typeIndex.addSubject();
  typeRegistration.addRef(rdf.type, solid.TypeRegistration)
  typeRegistration.addRef(solid.instance, document.asRef())
  typeRegistration.addRef(solid.forClass, forClass)
  return typeIndex.save([typeRegistration]);
}
