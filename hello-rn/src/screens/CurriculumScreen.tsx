import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const PROFILE_IMAGE = require('../../assets/suafoto.jpg'); 

const CurriculumScreen: React.FC = () => {
  return (
    // ScrollView é essencial para permitir que o conteúdo role se for maior que a tela
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Image 
          source={PROFILE_IMAGE} 
          style={styles.profileImage}
        />
      
        <Text style={styles.name}>Matheus Willian</Text> 
        <Text style={styles.title}>Desenvolvedor Full stack| Em Transição de Carreira</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo Profissional</Text>
        <Text style={styles.bodyText}>
          Sou estudante de Análise e Desenvolvimento de Sistemas (ADS), com foco em transformar conceitos em aplicações práticas. Busco aplicar meus conhecimentos em desenvolvimento de interfaces de usuário e lógica de programação para construir aplicativos eficientes e com ótima experiência para o usuário.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência</Text>
        
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Estagiário de informatica</Text>
          <Text style={styles.company}>enjoy - (2022/2024)</Text>
          <Text style={styles.jobTitle}>Estagiário de Robótica educacional</Text>
          <Text style={styles.company}>CENTRO DE EDUCAÇÃO, TECNOLOGIA E CIDADANIA(CETEC) - (Out/2025)</Text>
          <Text style={styles.jobDescription}>
            Desenvolvimento completo de um aplicativo de currículo usando React Native e Expo, focando em componentes reutilizáveis, estilização moderna e layout responsivo para diferentes dispositivos móveis.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Chave</Text>
        <Text style={styles.skillText}>**Linguagens:** JavaScript, TypeScript, HTML, CSS</Text>
        <Text style={styles.skillText}>**Frameworks:** React Native, Expo</Text>
        <Text style={styles.skillText}>**Ferramentas:** Git, GitHub, VS Code, Node.js</Text>
      </View>
      
    </ScrollView>
  );
};

// Estilos (Você pode ajustar cores e tamanhos aqui)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  header: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#3498db', // Cor azul de fundo
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70, 
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#fff', // Borda branca
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Texto branco
  },
  title: {
    fontSize: 14,
    color: '#ecf0f1', // Texto cinza claro
    marginTop: 4,
  },
  section: {
    padding: 20,
    marginTop: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50', // Cor escura para título
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    paddingBottom: 5,
    alignSelf: 'flex-start',
  },
  experienceItem: {
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495e',
  },
  company: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 14,
    color: '#444',
  },
  bodyText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  skillText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  }
});

export default CurriculumScreen;