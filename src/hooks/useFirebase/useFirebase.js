import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../../pages/Firebase/firebase.init";
import swal from "sweetalert";

// initialize firebase
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const [success, setSuccess] = useState(false);

  // Manual Authentication
  const registerUser = (data) => {
    setIsLoading(true);
    fetch("https://blooming-scrubland-74816.herokuapp.com/userRegister", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
        if (data.acknowledged) {
          setSuccess(true);
        }
        console.log(data);
      });
  };

  const loginUser = (data, location, history) => {
    setIsLoading(true);
    fetch("https://blooming-scrubland-74816.herokuapp.com/userLogin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
        if (data.user?.email) {
          setSuccess(true);
          localStorage.setItem("login", JSON.stringify(data.user));
          const getLoginDetails = localStorage.getItem("login");
          setUser(JSON.parse(getLoginDetails));
          swal("login successfully", "welcome to florist shop", "success").then(
            (proceed) => {
              if (proceed) {
                history.replace("/");
              }
            }
          );
        }
        console.log(data);
      });
  };

  // const registerUser = (email, password, name, history) => {
  //     setIsLoading(true);
  //     createUserWithEmailAndPassword(auth, email, password)
  //         .then(() => {
  //             const newUser = { email, displayName: name };
  //             setUser(newUser);
  //             savedUser(email, name, "POST");
  //             // send name to firebase after creation
  //             updateProfile(auth.currentUser, {
  //                 displayName: name,
  //             })
  //                 .then(() => {})
  //                 .catch((error) => {});
  //             history.replace("/");
  //             setAuthError("");
  //         })
  //         .catch((error) => {
  //             setAuthError(error.message);
  //         })
  //         .finally(() => setIsLoading(false));
  // };

  // const loginUser = (email, password, location, history) => {
  //     setIsLoading(true);
  //     signInWithEmailAndPassword(auth, email, password)
  //         .then(() => {
  //             const destination = location?.state?.from || "/";
  //             history.replace(destination);
  //             setAuthError("");
  //         })
  //         .catch((error) => {
  //             setAuthError(error.message);
  //         })
  //         .finally(() => setIsLoading(false));
  // };

  const signInWithGoogle = (location, history) => {
    const googleProvider = new GoogleAuthProvider();
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        savedUser(user.email, user.displayName, "PUT");
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    fetch(`https://blooming-scrubland-74816.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logOut = (history) => {
    setIsLoading(true);
    localStorage.removeItem("login");
    signOut(auth)
      .then(() => {
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error);
      })
      .finally(() => setIsLoading(false));
  };

  const savedUser = (email, displayName, method) => {
    const users = { email, displayName };
    fetch("https://blooming-scrubland-74816.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    }).then();
  };

  return {
    user,
    registerUser,
    loginUser,
    success,
    signInWithGoogle,
    logOut,
    isLoading,
    authError,
    admin,
  };
};

export default useFirebase;
