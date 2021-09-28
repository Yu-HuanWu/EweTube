import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin= this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(
            () => this.props.history.push("/")
        ).fail(() => this.setState({ errors: this.props.errors }))
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    demoLogin(e) {
        e.preventDefault();
        const demo= { username: "Demo McDemoface", password: "DemoUserPassword"};

        const usernameAnimate = setInterval(()=> {
            if (this.state.username !== demo.username) {
            const temp = demo.username.slice(0, this.state.username.length +1);
            this.setState({ username: temp });
        } else {
            clearInterval(usernameAnimate);
            passwordAnimate();
        }}, 100);

        const passwordAnimate = () =>{
            setInterval(() => {
            if (this.state.password !== demo.password ) {
                const temp = demo.password.slice(0, this.state.password.length + 1);
                this.setState({ password: temp });
            } else {
                clearInterval(passwordAnimate);
            }
        }, 100);
    }
    }

    renderDemo(){
        return(
            <input type="submit" onClick={this.demoLogin} value="Demo Login" />
        )
    }

    render() {
        let otherLink;
        if (this.props.formType === "Login") {
            otherLink = <Link to="/signup"><p className="otherLinklinks">Create account</p></Link>
        } else {
            otherLink = <Link to="/login"><p className="otherLinklinks">Already have an account?</p></Link>
        };

        return (
            <div className="session-form">
                <div className="form-box">
                    <Link to="/"><img src={window.logoblackURL} className="logo" /></Link>
                    <br />
                    <h1>{this.props.formType}</h1>
                    <p>to continue to EweTube</p>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input
                                type="text"
                                value={this.state.username}
                                placeholder= "Username"
                                onChange={this.update("username")}>
                            </input>
                        </label>
                        <br />
                        <label>
                            <input
                                type="password"
                                value={this.state.password}
                                placeholder= "Password"
                                onChange={this.update("password")}>
                            </input>
                        </label>
                        <br />
                        <br />
                            {this.renderDemo()}
                        <div className="form-box-bottom">
                            <div className="otherLink">{otherLink}</div>
                            <button type="submit">{this.props.formType}</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default SessionForm;