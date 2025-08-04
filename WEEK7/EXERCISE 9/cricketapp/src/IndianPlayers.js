import React from 'react';
import { OddPlayers, EvenPlayers } from './PlayerUtils';

// T20 and Ranji Trophy players arrays
const T20Players = ['Sachin', 'Dhoni', 'Virat'];
const RanjiTrophyPlayers = ['Yuvraj', 'Rohit', 'Raina'];

// Merge arrays using spread operator (ES6 feature)
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

const IndianTeam = () => {
  // Destructuring to get individual players for odd/even display
  const [first, second, third, fourth, fifth, sixth] = IndianPlayers;

  return (
    <div>
      <div>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        <ul>
          {OddPlayers(first, third, fifth)}
        </ul>
        
        <h1>Even Players</h1>
        <ul>
          {EvenPlayers(second, fourth, sixth)}
        </ul>
      </div>
      
      <div>
        <h1>List of Indian Players Merged:</h1>
        <ul>
          {IndianPlayers.map((player, index) => (
            <li key={index}>Mr. {player}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndianTeam;
