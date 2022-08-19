import './index.css'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


export default function Footer() {

    return (
        <div className="Footer">
            <p>Marco Guglielmino</p>
            <AiFillGithub className="git-icon" onClick={() => window.open("https://github.com/marco94gug") }/>
            <AiFillInstagram className="ig-icon" onClick={() => window.open("https://www.instagram.com/marco94gu") }/>
            <AiFillLinkedin className="li-icon" onClick={() => window.open("https://www.linkedin.com/in/marco-guglielmino/")} />
            <p>2022</p>
        </div>
    )
}