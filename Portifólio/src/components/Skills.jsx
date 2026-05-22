import { Row, Col, Card } from 'react-bootstrap'
import { FaBook } from 'react-icons/fa'

const linguagens = ['Java', 'JavaScript', 'HTML', 'CSS']
const ferramentas = ['Netlify', 'Git', 'Supabase', 'Postman']

function Skills() {
  return (
    <div className="skills-wrapper">
      <Row className="g-3">
        <Col md={6}>
          <Card className="conhecimento-card text-center p-4">
            <h2 className="titulo-secao mb-3">
              <FaBook /> Conhecimentos
            </h2>
            <ul className="lista-conhecimentos">
              {linguagens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="conhecimento-card text-center p-4">
            <h2 className="titulo-secao mb-3">
              <FaBook /> Ferramentas e Plataformas
            </h2>
            <ul className="lista-conhecimentos">
              {ferramentas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Skills
