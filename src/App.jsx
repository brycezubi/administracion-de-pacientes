import { useState , useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";

function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem('pacientes')
  ) ?? []);
  const [paciente, setPaciente] = useState({});

  // Local Storage
  useEffect(()=>{
      // console.log('cambio en pacientes')
      // Creamos el item a guardar 
      localStorage.setItem('pacientes', JSON.stringify( pacientes ));

  },[pacientes])


  const eliminarPaciente = id =>{
    console.log('Eliminado paciente' , id)
    const newPacientes = pacientes.filter( p => p.id !== id  );
    setPacientes(newPacientes)
  }


  return (
    <main className="w-5/6 lg:max-w-7xl mx-auto py-4 h-screen ">

      <Header />

      <section className="grid lg:grid-cols-2 my-10 h-4/5">
        
        <section className="lg:pt-8 ">
          
          <h1 className="text-3xl text-center lg:text-left lg:pl-8 py-8 text-cyan-800 uppercase font-medium">
            patient
            <span className="text-slate-800"> register</span>{" "}
          </h1>
         
          <Formulario  paciente={paciente} setPaciente={setPaciente} pacientes={pacientes} setPacientes={setPacientes} />

        </section>

        
       <ListaPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>

      </section>
    </main>
  );
}

export default App;
