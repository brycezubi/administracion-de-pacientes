import Paciente from "./Paciente";

const ListaPacientes = ({ pacientes , setPaciente,eliminarPaciente }) => {


  return (
    <>
      {pacientes && pacientes.length === 0 ? (
        <section className="pb-10 lg:pt-8 lg:pb-0 ">
          <h2 className="text-3xl text-center lg:text-left lg:pl-8 py-8 text-cyan-800 uppercase font-medium">
            Empty register
            <span className="text-slate-800"> add patients</span>{" "}
          </h2>
        </section>
      ) : (
          <section className="pb-10 lg:pt-8 lg:pb-0 lg:overflow-y-scroll">
            <h2 className="text-3xl text-center lg:text-left lg:pl-8 py-8 text-cyan-800 uppercase font-medium">
              registered
              <span className="text-slate-800"> patients</span>{" "}
            </h2>

            <section className="flex flex-col gap-2 pb-2">
              {pacientes.map((paciente) => (
                <Paciente
                  key={`codigo-paciente-${paciente.id}`}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))}
            </section>
          </section>
      )}
    </>
  );
};

export default ListaPacientes;
