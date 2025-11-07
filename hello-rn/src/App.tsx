import React from 'react';
// Importa a tela do currículo que criamos na pasta screens
import CurriculumScreen from './screens/CurriculumScreen'; 

export default function App() {
  return (
    // Renderiza a tela do currículo
    <CurriculumScreen /> 
  );
}

// Removendo imports desnecessários como StyleSheet, Text, View e StatusBar, 
// pois eles agora estão dentro da CurriculumScreen.