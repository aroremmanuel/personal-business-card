import profilePic from '../components/pic.png'

function Info() {
    return (
        <div>
            <img src={profilePic} className="profile-pic"></img>
            <h1 className="name">Aror Emmanuel</h1>
            <h2 className="role">Frontend Developer</h2>
            <section className="contact-buttons">
                <button className="email--button">Email</button>
                <button className="linkedin--button">LinkedIn</button>
            </section>
        </div>
    );
}

export default Info;