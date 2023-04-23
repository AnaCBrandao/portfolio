import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Estruturação e organização de páginas web" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Layout responsivo, posicionamento, fontes, animações e opções visuais."},
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Domínio de funções, orientação a objeto, promises, módulos, APIs, bibliotecas e testes." },
  { id: "node", name: "NodeJs", icon: <DiNodejsSmall />, text: "Modules, npm, Express, API RESTful, testes, erros, integração com BD e threads." },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, text: "Modelagem e CRUD em banco de dados, stored procedures, functions, transações e segurança." },
  { id: "react", name: "React", icon: <DiReact />, text: "Componentização, React Router, Redux, renderização do servidor, Webpack." },
];

function TechnologiesContainer() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer