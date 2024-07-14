import { createContext, useEffect, useReducer, useState } from "react";

export const GlobalContext = createContext();


const initialState = {
    filtro: '',
    fotosDeGaleria: [],
    fotoSeleccionada: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTRO':
      return { ...state, filtro: action.payload };
    case 'SET_FOTOS_DE_GALERIA':
      return { ...state, fotosDeGaleria: action.payload };
    case 'SET_FOTO_SELECCIONADA':
      return { ...state, fotoSeleccionada: action.payload };
    case 'ALTERNAR_FAVORITO':
      return {
        ...state,
        fotosDeGaleria: state.fotosDeGaleria.map(foto =>
          foto.id === action.payload.id ? { ...foto, favorita: !foto.favorita } : foto
        ),
      };
    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  //const [consulta, setConsulta] = useState('');
  //const [fotosDeGaleria, setFotosDeGaleria] = useState([])
  //const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  useEffect(() => {
      const getData = async () => {
          const res = await fetch('http://localhost:3000/fotos');
          const data = await res.json();
          //setFotosDeGaleria([...data]);
          dispatch({ type: 'SET_FOTOS_DE_GALERIA', payload: data })
      }

      setTimeout(() => getData(), 5000);
  }, []);



  return (
      <GlobalContext.Provider value={{ state, dispatch }}>
          {children}
      </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;