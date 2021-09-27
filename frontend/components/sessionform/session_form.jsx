import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
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
                    <img src={window.logoURL} className="logo" />
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