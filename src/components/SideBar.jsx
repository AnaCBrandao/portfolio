import Avatar from '../img/profile.jpeg'

import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

function SideBar() {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Ana Brandão" />
      <p className="title">Desenvolvedora</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
} 

export default SideBar
