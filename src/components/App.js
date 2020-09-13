import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "../fBase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter userObj={userObj} isLoggedIn={Boolean(userObj)} />
      ) : (
        "초기화 중"
      )}
      <footer>copy twitter {new Date().getFullYear()} </footer>
    </>
  );
}

export default App;
