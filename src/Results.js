import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found!</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            id={pet.id}
            images={pet.images}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
