import './App.css';

function App() {
  // Create an object of office to display the details like Name, Rent and Address
  const office = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // Create a list of Office objects and loop through the office space items to display more data
  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
        {
      Name: "Cognizant Space",
      Rent: 80000,
      Address: "Pune"
    },
    {
      Name: "Tech Campus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "CN Hub",
      Rent: 45000,
      Address: "Hyderabad"
    },
    {
      Name: "Alphabet Center",
      Rent: 80000,
      Address: "Mumbai"
    }
  ];

  // Function to determine rent color based on the condition
  const getRentColor = (rent) => {
    if (rent <= 60000) {
      return 'textRed';
    } else {
      return 'textGreen';
    }
  };

  return (
    <div className="App">
      <h1>Office Space, at Affordable Range</h1>
      
      <img src="/office-space.png" width="25%" height="25%" alt="Office Space" className="office-image" />
      
      <div className="office-details">
        <h1>Name: {office.Name}</h1>
        <h3 className={getRentColor(office.Rent)}>Rent: Rs. {office.Rent}</h3>
        <h3>Address: {office.Address}</h3>
      </div>

      {/* Loop through the office space items to display more data */}
      <div className="office-list">
        <h2>Available Office Spaces</h2>
        {officeSpaces.map((item, index) => (
          <div key={index} className="office-item">
            <h3>Name: {item.Name}</h3>
            <h3 className={getRentColor(item.Rent)}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
