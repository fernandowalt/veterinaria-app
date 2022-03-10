import Paciente from "./Paciente";

export const ListadoPacientes = ({ pacientes, setPaciente,eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto ">
      {pacientes.length !== 0 ? (
        <>
          <h3 className="font-black text-2xl text-center">listado pacientes</h3>
          <p className="text-xl mt-5 text-center">
            Administra Tus{" "}
            <span className="text-indigo-600 font-bold ">
              Pacientes Y Citas
            </span>
          </p>

          <div>
            {pacientes.map((item) => (
              <Paciente data={item} key={item.id} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h3 className="font-black text-2xl text-center">No hay pacientes</h3>
          <p className="text-xl mt-5 text-center">
            Ingresa Los Registros{" "}
            <span className="text-indigo-600 font-bold ">
              y Se listaran a continuacion
            </span>
          </p>
        </>
      )}
    </div>
  );
};
