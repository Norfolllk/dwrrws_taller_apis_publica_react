function PersonajeCard(props) {
  const { personaje } = props;

  return (
    <div className="card">
      <img src={personaje.image} alt={personaje.name} />
      <div className="card-info">
        <h3>{personaje.name}</h3>
        <p>
          <strong>Estado:</strong> {personaje.status}
        </p>
        <p>
          <strong>Especie:</strong> {personaje.species}
        </p>
        <p>
          <strong>Género:</strong> {personaje.gender}
        </p>
      </div>
    </div>
  );
}

export default PersonajeCard;