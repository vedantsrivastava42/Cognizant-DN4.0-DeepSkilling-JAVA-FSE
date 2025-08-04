import React from 'react';

const ListofPlayers = ({ players }) => {
  // Filter players with scores below 70 using arrow functions
  const playersBelow70 = players.filter(player => player.score < 70);

  return (
    <div>
      <ul>
        {players.map((item) => (
          <li key={item.name}>
            Mr. {item.name} {item.score}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default ListofPlayers;
