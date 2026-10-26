import { useEffect, useState } from "react";
import PersonajeCard from "./components/PersonajeCard";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");

        if (!response.ok) {
          throw new Error("Error HTTP: " + response.status);
        }

        const datos = await response.json();

        setPersonajes(datos.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerPersonajes();
  }, []);

  return (
    <div className="contenedor">
      <h1>Personajes de Rick and Morty</h1>

      {cargando && <p className="mensaje">Cargando personajes...</p>}
      {error && <p className="mensaje error">No se pudo cargar: {error}</p>}

      <div className="grid">
        {personajes.map((personaje) => {
          return <PersonajeCard key={personaje.id} personaje={personaje} />;
        })}
      </div>
    </div>
  );
}

export default App;