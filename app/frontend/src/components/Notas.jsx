import {useState, useEffect} from "react"
import noteService from "../services/notes";

const  Notas = ()=> {
    const [notas, setNotas] = useState([]);
    useEffect(()=> {
        noteService.getAll().then(notes => setNotas(notes));
    }, [])
    
    return(
        <>
            <h1>{notas.length }</h1>
            {notas.map(nota=> (
                <div key={nota.id}>
                    <p>{nota.name}</p>
                    <p>{nota.descripcion}</p>
                </div>
            ))}
        </>
    );
}

export default Notas