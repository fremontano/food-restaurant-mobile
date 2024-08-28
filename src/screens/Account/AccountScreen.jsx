import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { UserGuestScreen } from "./UserGuestScreen";
import { LoadingModal } from "../../components/LoadingModal/LoadingModal";
import UserLoggedScreen from "./UserLoggedScreen";

export function AccountScreen() {


  const [hasLogged, setHasLogged] = useState(null);


  //para comprobar si el usuario esta loggeado
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });

  }, [])


  if (hasLogged === null) {
    return <LoadingModal showLoading text='Cargando..' />
  }

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />

}
