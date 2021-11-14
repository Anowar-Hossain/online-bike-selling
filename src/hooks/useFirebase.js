import { getAuth,createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [Autherror, setAuthError] = useState('');

    const auth = getAuth();

    //LogOut-User
    
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
          })
          .catch((error) => {
          })
          .finally(()=>setIsLoading(false))
    }


    //Register-User

    const registerUser =(email, password, name, history)=> {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
       setAuthError('');
       history.replace('/');
       const newUser = {email, displayName: name}
       setUser(newUser);
    //    saveUser(email, name);
       saveUser(email, name);
       updateProfile(auth.currentUser, {
           displayName: name 
         }).then(() => {   
         }).catch((error) => {
         });
    //    history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message); 
        })
        .finally(()=>setIsLoading(false));
        }

    //Login-User
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
        })
        .catch((error) => {
        setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }

    //observer user state
    useEffect(()=> {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
             if (user) {
             setUser(user)  
             } else {
             setUser({})
             }
             setIsLoading(false);
           });
           return ()=> unsubscribe;
     },[])

     //SaveUser
     const saveUser = (email, displyName) => {
        const user = {email, displyName};
        fetch('http://localhost:5000/users' , {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
                  
        };

        //Admin 
        useEffect( ()=> {
            fetch(`http://localhost:5000/users/${user.email}`)
            .then(res=>res.json())
            .then(data=>setAdmin(data.admin));
             },[user.email])

    return{
        loginUser,
        isLoading,
        logOut,
        user,
        admin,
        registerUser,
        Autherror
        
    }

}

export default useFirebase;