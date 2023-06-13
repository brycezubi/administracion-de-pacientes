
const Paciente = ({paciente , setPaciente , eliminarPaciente}) => {
  const { name, fecha, email, fam ,id} = paciente;

  const handleEliminar =()=>{

    const resp = confirm('Deseas eliminar este registro ?');

    if(resp){
      eliminarPaciente(id)
    }
  }
 
  return (
    <article className="bg-white w-full flex flex-col gap-2 px-5 py-6 rounded shadow lg:w-11/12 lg:mx-auto">
      <p className="text-slate-700 font-medium uppercase">
        name:
        <span className="text-gray-500"> {name}</span>
      </p>
      <p className="text-slate-700 font-medium uppercase">
        familiar:
        <span className="text-gray-500"> {fam}</span>
      </p>
      <p className="text-slate-700 font-medium uppercase">
        email:
        <span className="text-gray-500"> {email}</span>
      </p>
      <p className="text-slate-700 font-medium uppercase">
        date:
        <span className="text-gray-500"> {fecha}</span>
      </p>
      <div className="flex gap-2">
        <button 
          onClick={
            // ()=>eliminarPaciente(id)
            handleEliminar
            }
          className="bg-red-500 hover:bg-red-700 py-1 px-4 rounded text-white font-semibold">
          Eliminar
        </button>
        <button 
          onClick={ ()=>setPaciente(paciente) }
          className="bg-cyan-700 hover:bg-cyan-900 text-white py-1 px-4 rounded font-semibold capitalize">
          editar
        </button>
      </div>
    </article>
  );
};

export default Paciente;
