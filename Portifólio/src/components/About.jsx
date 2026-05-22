import { Card } from 'react-bootstrap'
import { FaRegUser } from 'react-icons/fa'

function About() {
  return (
    <Card className="secao-card text-center p-4 delay-1">
      <h2 className="titulo-secao mb-3">
        <FaRegUser /> Sobre mim
      </h2>
      <p className="texto-sobre">
        Sou estudante de Análise e Desenvolvimento de Sistemas da Universidade de Fortaleza.
        Tenho conhecimento em Java, JavaScript, HTML, CSS e React, com experiência em desenvolvimento
        frontend utilizando React e Vite, e desenvolvimento backend com Node.js e Express.
        Além de ferramentas como Netlify para deploy de projetos, Git para versionamento,
        Supabase como banco de dados e Postman para testes e requisições de API.
      </p>
    </Card>
  )
}

export default About
