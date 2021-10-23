import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  // Another way of writing the above statement is
  // const locationTuple = useState("Seatle, WA");
  // const location = locationTuple[0];
  // const setLocation = locationTuple[1];

  const updateLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            onChange={updateLocation}
            // onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
