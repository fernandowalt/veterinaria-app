import { useState, useEffect } from "react";
import ErrorFormulario from "./ErrorFormulario";

const Formulario = ({ pacientes, setPacientes, paciente,setPaciente}) => {
  const [mascota, setMascota] = useState({
    nombre: "",
    propietario: "",
    email: "",
    alta: "",
    sintomas: "",
  });

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setMascota({ ...paciente });
    }
  }, [paciente]);

  const [error, seterror] = useState(false);
  const { nombre, propietario, email, alta, sintomas } = mascota;

  const handleChange = (e) => {
    setMascota({ ...mascota, [e.target.name]: e.target.value });
  };

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      seterror(true);
    } else {
      seterror(false);
    }

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    };

    if (paciente.id) {
      //actualizando registros
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({})
    } else {
      //agregando nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setMascota({
      nombre: "",
      propietario: "",
      email: "",
      alta: "",
      sintomas: "",
    });
  };

  return (
    <div className=" md:w-1/2 lg:w-2/5 ">
      <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administar</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded py-10 px-5 mb-10 mt-5"
      >
        {error && <ErrorFormulario />}
        <div className="mb-3">
          <label htmlFor="mascota" className="block text-gray-700 uppercase">
            Nombre De la Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-1 mt-1  rounded-md "
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase"
          >
            Nombre Del Propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-1 mt-1  rounded-md "
            type="text"
            name="propietario"
            placeholder="Nombre Del Propietario"
            value={propietario}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            Correo
          </label>
          <input
            id="email"
            className="border-2 w-full p-1 mt-1  rounded-md "
            type="email"
            name="email"
            placeholder="Correo Electronico"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            Alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-1 mt-1 placeholder-green-500 rounded-md "
            type="date"
            name="alta"
            value={alta}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-700 uppercase mb-3">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="w-full border-2"
            placeholder="Descripcion Sintomatica"
            name="sintomas"
            value={sintomas}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? "editar paciente" : "agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
