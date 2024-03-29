import {
    Routes,
    Route,
    Navigate
} from "react-router-dom"

import Notas from "./Notas";

//EJEMPLO
const  RoutesComp = ()=> {
    const bool = false;
    return(
        <>
            <Routes>
                <Route path="/" element={<h1> Hola </h1>} />
                <Route path="/a" element={<h1> AAAAA </h1>} />
                <Route path="/b" element={bool ? <h1> adios </h1> : <Navigate replace to="/" />} />
                <Route path="/notes" element={<Notas/>} />
            </Routes>
        </>
    );
}

export default RoutesComp