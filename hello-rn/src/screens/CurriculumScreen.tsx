import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';

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
        <Text style={styles.title}>Desenvolvedor Full stack</Text>
      </View>
{/* NOVO BLOCO PARA OS LINKS */}
    <View style={styles.linkContainer}>
        {/* Link 1: GITHUB */}
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/matheus96-cr')}>
            <Text style={styles.linkText}>GitHub</Text>
        </TouchableOpacity>
        
        {/* Um separador visual (opcional) */}
        <Text style={styles.linkSeparator}>|</Text> 
        
        {/* Link 2: LINKEDIN */}
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/matheus-willian-828710324/')}>
            <Text style={styles.linkText}>LinkedIn</Text>
        </TouchableOpacity>
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
          <Text style={styles.jobDescription}>
        - Instrução e mentoria: Ministrei aulas de informática (do nível básico ao intermediário), capacitando alunos em ferramentas essenciais. 
    </Text>
    <Text style={styles.jobDescription}>
        - Suporte Técnico: Realizei diagnóstico e resolução de problemas de hardware e software , minimizando o tempo de inatividade do equipamento.
    </Text>
    <Text style={styles.jobDescription}>
        - Comunicação e Didática: Desenvolvi habilidades de comunicação clara e didática, adaptando a linguagem técnica para diferentes níveis de aprendizado.
    </Text>
    
          <View>
    
    <Text style={styles.jobTitle}>Estagiário de Robótica educacional</Text>
    <Text style={styles.company}>CENTRO DE EDUCAÇÃO, TECNOLOGIA E CIDADANIA (CETEC) - (Out/2025)</Text>
    <Text style={styles.jobDescription}>
        - Instrução Especializada: Responsável por ministrar aulas práticas sobre o robô humanoide NAO, capacitando alunos nos fundamentos da robótica, programação e interação humano-robô (HRI).
    </Text>
    <Text style={styles.jobDescription}>
        - Desenvolvimento de Projetos: Execução de projetos práticos, aplicando linguagens de programação como o Python para desenvolver novas funcionalidades e comportamentos customizados para o robô.
    </Text>
    <Text style={styles.jobDescription}>
        - Pesquisa Aplicada: Utilização de ferramentas e metodologias de pesquisa para otimizar a experiência de aprendizado e a eficácia dos projetos desenvolvidos.
    </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Chave</Text>
        <Text style={styles.skillText}> Linguagens:  JavaScript, TypeScript, HTML, CSS, Python</Text>
        <Text style={styles.skillText}> Frameworks:  React Native, Expo</Text>
        <Text style={styles.skillText}> Ferramentas: Git, GitHub, VS Code, Node.js</Text>
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
  // NOVOS ESTILOS PARA OS LINKS
  linkContainer: {
    flexDirection: 'row', // Alinha os links lado a lado
    marginTop: 10,
    justifyContent: 'center', // Centraliza o bloco de links
  },
  linkText: {
    color: '#000000ff', 
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline', // Sublinhado
    marginHorizontal: 10,
  },
  linkSeparator: {
    color: '#000000ff',
    fontSize: 14,
  },
  // FIM DOS ESTILOS DE LINK
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
  },
});

export default CurriculumScreen;