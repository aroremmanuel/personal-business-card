import twitterPic from '../components/twitter.svg'
import whatsappPic from '../components/whatsapp.svg'
import igPic from '../components/ig.svg'


function Footer() {
    return (
        <div className="footer--box">
            <img src={twitterPic} className="social--icons" />
            <img src={whatsappPic} className="social--icons" />
            <img src={igPic} className="social--icons" />
        </div>
    );
}

export default Footer;