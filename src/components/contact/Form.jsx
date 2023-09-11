import "./FormStyles.scss";


const Form = ()=>{
    return (
        <form className="form">
            <h3>SEND MESSAGE</h3>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="text" placeholder="Website"/>
        <input className="message" type="text" placeholder="Message"/>
        <button className="form-btn">SEND MESSAGE</button>
        </form>
    )
}

export {Form}