import '../src/scss/_contact.scss'

function Contacts() {
    return (
        <div className="contacts">
            <h1><span>Contact</span> Us</h1>
            <div className="container">
                <div className="box">
                    <h2>Phone Number</h2>
                    <p>+234-812-525-8449</p>
                    <p>+234-810-733-9039</p>
                </div>

                <div className="box">
                    <h2>Email Address</h2>
                    <p>eluewisdom@gmail.com</p>
                    <p>eluewisdom@gmail.com</p>
                </div>

                <div className="box address">
                    <h2>Office Address</h2>
                    <p>www.wisdomsworld.netlify.app</p>
                </div>
            </div>


            {/* <div className="form">
                <form action="">
                    <div className="input-box">
                        <input type="text" placeholder="Name"/>
                        <input type="number" placeholder="Number"/>
                    </div>

                    <div className="input-box">
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Subject"/>
                    </div>
                    <textarea name="" id="" placeholder="Message" cols="30" rows="10"></textarea>
                    <input type="submit" value="Send Message" className="button" />
                </form>

                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1626697480414!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
            </div> */}
        </div>
    )
}

export default Contacts
