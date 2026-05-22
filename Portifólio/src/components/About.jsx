import { Card } from 'react-bootstrap'
import { FaRegUser } from 'react-icons/fa'

function About() {
  return (
    <Card className="secao-card text-center p-4 delay-1">
      <h2 className="titulo-secao mb-3">
        <FaRegUser /> Sobre mim
      </h2>
      <p className="texto-sobre">
        Sou estudante de Análise e Desenvolvimento de Sistemas da Universidade de Fortaleza e estou
        no terceiro semestre do curso. Atualmente tenho conhecimento em Java, JavaScript, HTML e CSS.
        Além de ferramentas como Netlify para deploy de projetos, versionamento de código com o Git
        e o Postman para testes e requisições.
      </p>
    </Card>
  )
}

export default About
