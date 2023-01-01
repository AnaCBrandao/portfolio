import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anacbrandao/"},
    { name: "github", icon: <FaGithub />, link: "https://github.com/AnaCBrandao"},
    { name: "isntagram", icon: <FaInstagram />, link: "https://www.instagram.com/ana.pnx/"},
]

function SocialNetworks() {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
} 

export default SocialNetworks