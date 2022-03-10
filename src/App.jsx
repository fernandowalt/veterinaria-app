import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLs = () => {
      const pacientesLs = JSON.parse(localStorage.getItem("pacientes")) ?? [];

      setPacientes(pacientesLs);
    };

    obtenerLs();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="mx-auto bg-gray-100 p-1 h-screen ">
      <Header />
      <div className=" mt-3 md:flex h-full">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
};

export default App;
