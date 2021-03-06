import React, { useState, useEffect } from 'react';
import { GuestListContainer, TableContainer } from './styles'
import firebase from '../../firebase';
import Header from '../Header';

const GuestList = ({ open, setOpen }) => {
  const [guests, setGuests] = useState(undefined);
  const [plusOne, setPlusOne] = useState(undefined);
  const [noPlusOne, setNoPlusOne] = useState(undefined);
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
  
  useEffect(() => {
    firebase
    .firestore()
    .collection('plusOne')
    .onSnapshot((snapshot => {
      const tempPlusOne = snapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
      }))
      setPlusOne(tempPlusOne)
    }))
  }, [])

  useEffect(() => {
    firebase
    .firestore()
    .collection('noPlusOne')
    .onSnapshot((snapshot => {
      const tempNoPlusOne = snapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
      }))
      setNoPlusOne(tempNoPlusOne)
    }))
  }, [])

  let count = 0;
  const mapGuests = (guests) => {
    return guests.map(guest => {
      if (guest.attending === "yes") {
        count = count + 1
      }
      if (guest.plusOne) {
        count = count + 1
      }
      return (
        <tr key={guest.id}>
          <td>{guest.name}</td>
          <td>{guest.attending}</td>
          <td>{guest.mealSelection}</td>
          <td>{guest.plusOne || ''}</td>
          <td>{guest.plusOneMealSelection || ''}</td>
        </tr>
      )
    })
  }

  const buildGuestsStr = (guests) => {
    let results = ''
    guests.forEach((guest) => {
      if (guest.attending === "yes" && guest.mealSelection) {
        results += `${guest.name}, `
      }
      if (guest.plusOne) {
        results += `${guest.plusOne}, `
      }
    })
    return results
  }

  return ( 
    <>
      <Header height={height} open={open} setOpen={setOpen}/>
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
            {guests && mapGuests(guests)}
          </tbody>
        </TableContainer>
        <div>
          <p>Count: {count}</p>
        </div>
        <div>
          <p>{guests && buildGuestsStr(guests)}</p>
        </div>

        {/* <div>
          <p>Plus One List</p>
          <ul>
            {plusOne && plusOne.map(guest => (
              <li>{guest.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>No Plus One List</p>
          <ul>
            {noPlusOne && noPlusOne.map(guest => (
              <li>{guest.name}</li>
            ))}
          </ul>
        </div> */}
      </GuestListContainer>
    </>
   );
}
 
export default GuestList;