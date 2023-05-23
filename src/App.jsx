import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BasrengAsinBalado from "./products/BasrengAsinBalado";
import BasrengJagungBakar from "./products/BasrengJagungBakar";
import BasrengAsinJeruk from "./products/BasrengAsinJeruk";
import BasrengAsinPedas from "./products/BasrengAsinPedas";
import BasrengBaladoJeruk from "./products/BasrengBaladoJeruk";
import BasrengKejuBalado from "./products/BasrengKejuBalado";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/basreng-asin-balado" Component={BasrengAsinBalado} />
        <Route path="/basreng-jagung-bakar" Component={BasrengJagungBakar} />
        <Route path="/basreng-asin-jeruk" Component={BasrengAsinJeruk} />
        <Route path="/basreng-asin-pedas" Component={BasrengAsinPedas} />
        <Route path="/basreng-balado-jeruk" Component={BasrengBaladoJeruk} />
        <Route path="/basreng-keju-balado" Component={BasrengKejuBalado} />
      </Routes>
    </div>
  );
}

export default App;
