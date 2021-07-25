import '../src/scss/_form.scss'

function Form() {
    return (
        <div className="pad">
            <div className="form">
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

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.779183876754!2d3.287104714266647!3d6.549540624678333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8fc8904e6291%3A0x623be0bfe7979af5!2sOlele%20St%2C%20Ejigbo%2C%20Lagos!5e0!3m2!1sen!2sng!4v1627076326653!5m2!1sen!2sng" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Form
