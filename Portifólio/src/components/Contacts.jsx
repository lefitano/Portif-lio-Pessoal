import { Card } from 'react-bootstrap'
import { FaRegAddressBook, FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Contacts() {
  return (
    <Card className="secao-card text-center p-4 delay-3">
      <h2 className="titulo-secao mb-3">
        <FaRegAddressBook /> Contatos
      </h2>
      <div className="contatos-wrapper">
        <a
          className="contato-link github"
          href="https://github.com/lefitano"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          className="contato-link whatsapp"
          href="https://wa.me/5585999342947"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp /> WhatsApp
        </a>
        <a
          className="contato-link linkedin"
          href="https://www.linkedin.com/in/leonardo-monteiro-192943351/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          className="contato-link email"
          href="https://mail.google.com/mail/?view=cm&to=leonardomonteirods17@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope /> Email
        </a>
      </div>
    </Card>
  )
}

export default Contacts
