import React, { useState, useEffect } from 'react';
import { FormContainer, Form, InnerContainer, GreyBlock, FormGroup } from './styles';
import { useHistory } from "react-router-dom";
import firebase from '../../../firebase';

const Form1 = ({ formOneDisplay, name}) => {
  let history = useHistory();
  const [attending, setAttending] = useState(undefined);
  const [mealSelection, setMealSelection] = useState('');
  const [plusOneMealSelection, setPlusOneMealSelection] = useState('');
  const [plusOne, setPlusOne] = useState('');
  const [guests, setGuests] = useState([]);
  
  const guestNames = guests.map(guest => guest.name);

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

  function onSubmit(e) {
    e.preventDefault();
    if (guestNames.includes(name)) {
      history.push('/error')
    } else {
      firebase
      .firestore()
      .collection('guests')
      .add({
        attending,
        name,
        plusOne,
        mealSelection,
        plusOneMealSelection
      })
      .then(() => {
        history.push('/thank-you')
      })
    }
  }

  return ( 
    <FormContainer id="form-1-container" display={formOneDisplay}>
      <GreyBlock display={formOneDisplay}>
        <h2>RSVP</h2>
        <p>kindly reply by august 1, 2021.</p>
      </GreyBlock>
      <InnerContainer id="inner-container" display={formOneDisplay}>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <input type="text" value={name} />
          </FormGroup>
          <FormGroup id="attending">
            <label>Will you be attending?</label>
            <select value={attending} onChange={e => setAttending(e.currentTarget.value)}>
            <option value="unselected">Please select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </FormGroup>
          <FormGroup id="menu-selection">
            <label>Meal Selection</label>
            <select value={mealSelection} onChange={e => setMealSelection(e.currentTarget.value)}>
              <option value="Unselected">Please select</option>
              <option value="Beef">Beef</option>
              <option value="Fish">Fish</option>
              <option value="Vegetarian">Vegetarian</option>
            </select>
          </FormGroup>
          <FormGroup id="plus-one">
            <input
              type="text"
              value={plusOne}
              onChange={e => setPlusOne(e.currentTarget.value)}
              placeholder="plus one (if attending)"
            />
          </FormGroup>
          <FormGroup id="menu-selection">
            <label>Plus One Meal Selection</label>
            <select value={plusOneMealSelection} onChange={e => setPlusOneMealSelection(e.currentTarget.value)}>
              <option value="Unselected">Please select</option>
              <option value="Beef">Beef</option>
              <option value="Fish">Fish</option>
              <option value="Vegetarian">Vegetarian</option>
            </select>
          </FormGroup>
          <button>RSVP!</button>
        </Form>
      </InnerContainer>
    </FormContainer>
   );
}
 
export default Form1;