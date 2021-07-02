import React, { useState, useEffect } from 'react';
import { GuestListContainer, TableContainer } from './styles'
import firebase from '../../firebase';
import Header from '../Header';

const GuestList = () => {
  const [guests, setGuests] = useState(undefined);
  const height = window.innerHeight;

  useEffect(() => {
    firebase
    .firestore()
    .collection('guests')
    .onSnapshot((snapshot => {
      const newGuests = snapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
      }))
      setGuests(newGuests)
    }))
  }, [])
  return ( 
    <>
      <Header height={height}/>
      <GuestListContainer>
        <TableContainer>
          <thead>
            <tr>
              <th>Name</th>
              <th>Attending</th>
              <th>Meal Selection</th>
              <th>Plus One</th>
              <th>Plus One Meal Selection</th>
            </tr>
          </thead>
          <tbody>
            {guests && guests.map(guest => (
              <tr key={guest.id}>
                <td>{guest.name}</td>
                <td>{guest.attending}</td>
                <td>{guest.mealSelection}</td>
                <td>{guest.plusOne || ''}</td>
                <td>{guest.plusOneMealSelection || ''}</td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </GuestListContainer>
    </>
   );
}
 
export default GuestList;