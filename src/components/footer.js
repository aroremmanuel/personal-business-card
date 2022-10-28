import twitterPic from '../components/twitter.svg'
import whatsappPic from '../components/whatsapp.svg'
import igPic from '../components/ig.svg'


function Footer() {
    return (
        <div className="footer--box">
            <a href="https://twitter.com/lactoseutd"><img src={twitterPic} className="social--icons" /></a>
            <a href="https://instagram.com/aj3b0_"><img src={igPic} className="social--icons" /></a>
            <a href="https://wa.me/2349077471383"><img src={whatsappPic} className="social--icons" /></a>
        </div>
    );
}

export default Footer;