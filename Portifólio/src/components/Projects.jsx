import { Card } from 'react-bootstrap'
import { FaDiagramProject } from 'react-icons/fa6'

const projetos = [
  {
    nome: 'Convite Bloquinho',
    descricao: 'Convite para bloquinho de carnaval com HTML, CSS e JavaScript',
    ano: 2026,
  },
  {
    nome: 'Landing Page para Dentista',
    descricao: 'Landing page com HTML, CSS e JavaScript',
    ano: 2026,
  },
  {
    nome: 'Convite Daniel e Brenda',
    descricao: 'Convite digital de casamento com HTML, CSS e JavaScript',
    ano: 2026,
  },
  {
    nome: 'Joab Kids Market',
    descricao: 'E-commerce de roupas e calçados infantis com React, Vite e Bootstrap — em andamento',
    ano: 2026,
  },
  {
    nome: 'UniSas',
    descricao: 'Sistema full-stack com React e Vite no frontend e Node.js, Express e Supabase no backend — em andamento',
    ano: 2026,
  },
]

function Projects() {
  return (
    <Card className="secao-card text-center p-4 delay-2">
      <h2 className="titulo-secao mb-3">
        <FaDiagramProject /> Projetos
      </h2>
      <table className="tabela-projetos">
        <thead>
          <tr>
            <th>Projeto</th>
            <th>Descrição</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          {projetos.map((projeto) => (
            <tr key={projeto.nome}>
              <td>{projeto.nome}</td>
              <td>{projeto.descricao}</td>
              <td>{projeto.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export default Projects
