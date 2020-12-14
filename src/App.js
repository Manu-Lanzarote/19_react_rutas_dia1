//Importamos BrowserRouter y Route desde react-router-dom
//BrouserRouter es como un div que envuelve todos los componentes y dentro de él van las rutas y los componentes

//En este ejemplo creamos el componente saludo, lo importamos y lo renderizamos dentro de BrowserRoute

// import "./App.css";
// import Saludo from "./Saludo";

// import { BrowserRouter, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Saludo />
//     </BrowserRouter>
//   );
// }

// export default App;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//PERO CÓMO HAGO, si no quiero mostrar el componente hasta que lo llame y acceda  a una ruta en concreto? (Para simular una web que tiene distintos enlaces a distintas páginas)
//Entonces debería crear un componente con enlaces y aquí debería crear la ruta y usar Link.
//Link "simula" que la web está cargando un archivo html, cuando en realidad lo que está cargando es el JSX en la única página que usa React.

//Así, el flujo sería:
// 1 - Creo el componente Saludo y lo importo a App.js
// 2 - Creo el componente Enlaces y lo importo a App.js
// 3 - En App.js dentro del return meto el BrowserRoute con el componente Enlaces y las rutas dentro de Route

// import "./App.css";
// import Saludo from "./Saludo";
// import Enlaces from "./Enlaces";

// import { BrowserRouter, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Enlaces />
//       <Route exact path="/saludo">
//         <Saludo />
//       </Route>
//     </BrowserRouter>
//   );
// }

// export default App;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//¿CÓMO CAMBIAR EL ESTADO DEL COMPONENTE PADRE DESDE EL COMPONENTE HIJO?
//Tendremos que hacerlo pasando una función por props

//Imaginemos una función básica que cambie el estado de un número, por ejemplo que le sume 1 - useState

// import "./App.css";
// import { useState } from "react";

// function App() {
//   let [num, setNum] = useState(5);

//   const cambiarNum = () => {
//     setNum(num + 1);
//   };

//   return (
//     <>
//       <p>{num}</p>
//       <button onClick={cambiarNum}>Sumar</button>
//     </>
//   );
// }

// export default App;

//Ahora quiero hacer que este botón esté en un componente hijo.
//Creo el componente Sumar, lo importo y devuelvo <Sumar /> en el return en vez del botón de antes.

//El componente sumar solo contiene el botón que llamará a la función sumar a través de props
//La variabe de estado y la función sumar se encuentran aquí, en App.js

import "./App.css";
import { useState } from "react";
import Sumar from "./Sumar";

function App() {
  let [num, setNum] = useState(5);
  function sumar() {
    setNum(num + 1);
  }

  return (
    <>
      <p>{num}</p>
      <Sumar sumar={sumar} />
    </>
  );
}

export default App;
