import '../src/scss/_footer.scss'

function Footer() {
    return (
        <div className="footer">
            {/* <h3> &copy; 2021 React App. Developed by Elue Wisdom</h3> */}
            <div className="container">
                <div className="box">
                    <div className="item">
                        <h1>Branch Location</h1>
                        <p>Lagos</p>
                        <p>Delta</p>
                        <p>Oyo</p>
                        <p>Kano</p>
                        <p>Plateau</p>
                    </div>

                    <div className="item">
                        <h1>Quick Links</h1>
                        <p>Home</p>
                        <p>Services</p>
                        <p>Featured</p>
                        <p>Contacts</p>
                        <p>Agents</p>
                    </div>

                    <div className="item">
                        <h1>Provisions</h1>
                        <p>Single Homes</p>
                        <p>Estates</p>
                        <p>Entire Areas</p>
                    </div>

                    <div className="item">
                        <h1>Follow Us</h1>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Linkedin</p>
                    </div>
                </div>

                <h3> &copy; 2021 React App. Developed by Elue Wisdom</h3>
            </div>
            
        </div>
    )
}

export default Footer
