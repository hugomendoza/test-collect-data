import { Routes, Route, Navigate } from "react-router-dom";
import { Adress, Commons, Floor, Mail, Name, Resume } from "../views";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/nombres" element={ <Name />} />
      <Route path="/correo" element={ <Mail />} />
      <Route path="/direccion" element={ <Adress />} />
      <Route path="/numero-piso" element={ <Floor />} />
      <Route path="/zonas-comunes" element={ <Commons />} />
      <Route path="/resumen" element={ <Resume />} />

      <Route path="/" element={ <Navigate to="/nombres" />} />
    </Routes>
  )
}
