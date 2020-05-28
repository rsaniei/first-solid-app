import React from 'react';
import { LogoutButton } from '@solid/react';
import { foaf } from 'rdf-namespaces';
import { useProfile } from '../hooks/useProfile';



export const Dashboard: React.FC = () => {

  // retrieve user profile
  const profile = useProfile();

  // if profile exists set foaf.name as name, if not set name = null
  const name = (profile) ? profile.getString(foaf.name) : null;
  // if name exists set greeting contains name , if not greeting is just Hello!
  const greeting = (name) ? `Hello${name}` : 'Hello!';
  return (
    <div>
      {/* Use greeting here */}
      <div>{greeting}</div>
      <footer className="footer has-text-left">
        <LogoutButton className="button" />
      </footer>
    </div >

  )
}
