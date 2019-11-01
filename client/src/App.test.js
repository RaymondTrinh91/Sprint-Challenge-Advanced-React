import React from 'react';
import {render, cleanup, waitForElement} from '@testing-library/react'
import App from './App';
import PlayerCard from './Components/PlayerCard'

test('renders without crashing', () => {
  render(<App />);
});

test('it renders person name', ()=> {  
    const {getByTestId} = render(<PlayerCard/>)
    getByTestId(/nameprint/i)
})

test('it renders person country', ()=> {  
  const {getByTestId} = render(<PlayerCard/>)
  getByTestId(/countryprint/i)
})

test('it renders person searches', ()=> {  
  const {getByTestId} = render(<PlayerCard/>)
  getByTestId(/searchesprint/i)
})
