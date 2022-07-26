import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import initializeAuthentication from '../components/Firebase/firebase.init';

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [success, setSuccess] = useState(false);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (name, email, password, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                //save user to the database
                // saveUser(email, name, 'POST')

                // send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                authError && Swal.fire(
                    'Something went wrong!',
                    `Please try again.`,
                    'error'
                );
            })
            .finally(() => {
                setIsLoading(false);
                setSuccess(true);
                success && Swal.fire(
                    'Registration Successfully!',
                    `Welcome, <b>${user?.displayName ? user?.displayName : 'User' }</b>`,
                    'success'
                );
            });
    }

    const loginUser = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                authError && Swal.fire(
                    'Something went wrong!',
                    `Please try again.`,
                    'error'
                );
            })
            .finally(() => {
                setIsLoading(false);
                setSuccess(true);
                success && Swal.fire(
                    'Login Successfully!',
                    `Welcome, <b>${user?.displayName ? user?.displayName : 'User' }</b>`,
                    'success'
                );
            });
    }

    // google sign in
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // saveUser(user.email, user.displayName, user.photoURL, 'PUT');
                console.log(user);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
                authError && Swal.fire(
                    'Something went wrong!',
                    `Please try again.`,
                    'error'
                );
            })
            .finally(() => {
                setIsLoading(false);
                setSuccess(true);
                success && Swal.fire(
                    'Logged In Successfully!',
                    '',
                    'success'
                );
                const destination = location.state.from ? location.state.form || '/' : '';
                navigate(destination);
            });
    }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe
    }, [auth]);

    // for checking admin
    // useEffect(() => {
    //     fetch(`https://smart-it-firm-server.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin));
    // }, [user.email]);

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => { })
            .finally(() => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You have to login again!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Log Out!'
                }).then((result) => {
                    if (result.isConfirmed === false) {
                        window.location.reload();
                    }
                    else if (result.isConfirmed === true) {
                        Swal.fire(
                            'Logged Out!',
                            `See you again, <b>${user?.displayName }</b>`,
                            'success'
                        );
                        setIsLoading(false);
                        setSuccess(true);
                    }
                });
            });

            
    }

    // const saveUser = (email, displayName, userImg, method) => {
    //     const user = { email, displayName, userImg };

    //     fetch('https://smart-it-firm-server.herokuapp.com/users', {
    //         method: "PUT",
    //         mode: 'opaque',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()
    // }

    return {
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
        user,
        isLoading,
        authError,
        admin
    }
}

export default useFirebase;