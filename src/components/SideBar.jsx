import Avatar from '../img/profile.jpeg'

import '../styles/components/sidebar.sass'

function SideBar() {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Ana Brandão" />
      <p className="title">Desenvolvedora</p>
      <p>Redes sociais</p>
      <p>Informações de contato</p>
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default SideBar
