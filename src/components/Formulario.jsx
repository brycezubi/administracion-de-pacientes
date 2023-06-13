import { useState , useEffect } from 'react'

const Error = ({children}) => {
  return (
    <>
    <small className='text-red-500 italic font-semibold'>{children}</small>
    </>
  )
}

const Formulario = ({pacientes,setPacientes , paciente , setPaciente}) => {

  const [name, setName] = useState("");
  const [fam, setFam] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(()=>{

    if(Object.keys(paciente).length > 0){
      // console.log('Si hay algo')
      setName(paciente.name)
      setFam(paciente.fam)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }

  },[paciente])


  // Genrador de id unico
  const generarId =()=>{
    const id = Math.random().toString(36).substring(2)
    return id
  }

  // Envio del formulario
  const handleSubmit =(e)=>{
    e.preventDefault();

    // Validacion del formulario simple
    if([name,fam,email,fecha,sintomas].includes('')){
      setError(!error)
      return
    }
      setError(false)

      // Creamos el objeto Paciente
      const objPaciente = {
        name,
        fam,
        email,
        fecha,
        sintomas
      }

     
      if(paciente.id){
        objPaciente.id = paciente.id
        // Editando Registro
        const udpPaciente = pacientes.map( p => p.id === paciente.id ? objPaciente : p)
        setPacientes(udpPaciente)
        setPaciente({})
      }else{
        //Nuevo Registro
        objPaciente.id = generarId()
        // Enviamos el valor del objeto  a pacientes
        setPacientes([...pacientes,objPaciente])
        
      }

      //Reiniciar el formulario
      reset()
    
  }

  // Reseteo o default de los estados
  const reset =()=>[
    setEmail(''),
    setFam(''),
    setFecha(''),
    setName(''),
    setSintomas('')
  ]

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full lg:max-w-xl mx-auto py-5 px-4 border bg-white rounded shadow"
      action="#">
      <div className="flex flex-col gap-2">
        <label
          className="uppercase text-slate-700 font-semibold"
          htmlFor="name">
          name patients
        </label>
        <input
          className="placeholder:capitalize py-2 pl-4 border rounded"
          type="text"
          placeholder="exm. edgar tello"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        { error && <Error>Campo Obligatorio</Error>}
      </div>
      <div className="flex flex-col gap-2">
        <label className="uppercase text-slate-700 font-semibold" htmlFor="fam">
          name Familiar
        </label>
        <input
          className="placeholder:capitalize py-2 pl-4 border rounded"
          type="text"
          placeholder="exm. edgar tello"
          id="fam"
          value={fam}
          onChange={(e) => setFam(e.target.value)}
        />
        { error && <Error>Campo Obligatorio</Error>}
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="uppercase text-slate-700 font-semibold"
          htmlFor="email">
          email
        </label>
        <input
          className="placeholder: py-2 pl-4 border rounded"
          type="email"
          placeholder="brycezs.92@gmail.com"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        { error && <Error>Campo Obligatorio</Error>}
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="uppercase text-slate-700 font-semibold"
          htmlFor="date">
          discharge date
        </label>
        <input
          className="placeholder:capitalize py-2 px-4 border rounded"
          type="date"
          placeholder="exm. edgar tello"
          id="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        { error && <Error>Campo Obligatorio</Error>}
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="uppercase text-slate-700 font-semibold "
          htmlFor="name">
          symptoms
        </label>
        <textarea
          className="placeholder:capitalize py-2 pl-4 border rounded resize-none"
          type="text"
          rows={4}
          placeholder="dolores en el cuerpo"
          id="name"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />
        { error && <Error>Campo Obligatorio</Error>}
      </div>
      <input
        className="inline-block mt-4 py-2 px-4 text-white
      bg-slate-700 rounded-lg uppercase font-bold w-4/6 mx-auto cursor-pointer hover:bg-slate-900"
        type="submit"
        value={ paciente.id ? 'edit patient' : 'add patient'}>
      </input>
    </form>
  );
  
}

export default Formulario