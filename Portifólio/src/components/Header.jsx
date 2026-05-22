import { Card } from 'react-bootstrap'
import { FaCode } from 'react-icons/fa'

function Header() {
  return (
    <Card className="header-card text-center p-3 mb-3">
      <h1 className="titulo-header">Portfólio Pessoal</h1>
      <hr className="header-divider" />
      <h2 className="nome">Leonardo Monteiro dos Santos</h2>
      <h3 className="titulo-profissional">
        <FaCode /> Estudante de ADS
      </h3>
    </Card>
  )
}

export default Header
