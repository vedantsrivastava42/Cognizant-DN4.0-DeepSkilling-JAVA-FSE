import React from 'react';

const Scorebelow70 = ({ players }) => {
  // Filter players with scores below 70
  const playersBelow70 = players.filter(player => player.score < 70);

  return (
    <div>
      <ul>
        {playersBelow70.map((item) => (
          <li key={item.name}>
            Mr. {item.name} {item.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scorebelow70;
