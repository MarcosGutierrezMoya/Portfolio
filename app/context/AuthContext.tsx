"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../_firebase/firebase';
 // Importa el objeto 'auth' que creaste

const AuthContext = createContext({ user: null, loading: true });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged es la función clave de Firebase Auth
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser); // Guarda el objeto de usuario de Firebase
      setLoading(false);
    });

    // Limpia la suscripción al desmontar el componente
    return () => unsubscribe();
  }, []);

  const value = { user, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Solo renderiza la app cuando el estado de auth ya cargó */}
    </AuthContext.Provider>
  );
};