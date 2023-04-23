import '../styles/components/projectscontainer.sass'

const projects = [
  { id: "1", name: "DigiUnion", text: "O objetivo deste site é divulgar projetos e pesquisas, bem como permitir que seus criadores conheçam pessoas que desejam apoiá-los. " },
  { id: "2", name: "YourLife", text: "Seu objetivo é gerenciar tarefas, que ajudem o usuário a estabelecer hábitos melhores e mais saudáveis ​​em sua vida. O Panda alerta o usuário caso ele não esteja realizando suas tarefas conforme o planejado. O panda mudará de humor e a barrinha que indica que está progredindo, diminuirá, até que possa morrer, caso as tarefas não sejam cumpridas. "},
  { id: "3", name: "Movies Library", text: "Projeto com React, consumindo a API TMDB (filmes), utilizando hooks e React Router, criado com Vite. " },
  { id: "4", name: "Readflix", text: "Recriação da interface do Netflix, com tema de livro e novo design." },
];

function ProjectsContainer() {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      {projects.map((project) => (
          <div className="project-card" id={project.id} key={project.id}>
            {project.icon}
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.text}</p>
            </div>
          </div>
        ))}
      <a href="https://github.com/AnaCBrandao" className="btn">Ver projetos</a>
    </section>
  )
}

export default ProjectsContainer