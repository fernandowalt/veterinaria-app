const Paciente = ({ data, setPaciente, eliminarPaciente }) => {
  return (
    <div className="mt-5 ml-3 bg-white shadow-md px-5 py-3 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{data.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{data.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo: <span className="font-normal normal-case">{data.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: <span className="font-normal normal-case">{data.alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">{data.sintomas}</span>
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase rounded-lg"
          onClick={() => {
            setPaciente(data);
          }}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-500 text-white font-bold uppercase rounded-lg"
          onClick={()=>eliminarPaciente(data.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
