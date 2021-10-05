import React from 'react';
import { Link } from 'react-router-dom';

class SideMenu extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            toggled: false,
        }
        this.toggleButton=this.toggleButton.bind(this);
    }

    toggleButton(e){
        e.preventDefault();
        if (this.state.toggled) {

            this.setState({toggled: false})
        } else {

            this.setState({toggled: true})
        }
    }

    render(){
        let sidemenu;
        console.log(this.state.toggled)
        if (this.state.toggled){
            sidemenu= (
                <div className="sidemenu-toggled" >
                    <div className="toggle-back" onClick={this.toggleButton}></div>
                    <div className="sidemenu-toggled-side">
                        <Link to="/">
                            <img src={barnURL} alt="Home but with barn" />
                            <h1>Home</h1>
                        </Link>
                        <a href="https://github.com/Yu-HuanWu" target="_blank">
                            <img src={githubURL} alt="github logo but with sheep" />
                            <h1>GitHub</h1>
                        </a>
                        <a href="https://www.linkedin.com/in/yu-huan-wu/" target="_blank">
                            <img src={linkedinURL} alt="LinkedIn logo but with sheep" />
                            <h1>LinkedIn</h1>
                        </a>
                        <a href="https://donate.worldvision.org/give/sheep" target="_blank">
                            <img src={charityURL} alt="Give a sheep" />
                            <h1>Donate a sheep</h1>
                        </a>
                    </div>
                </div>
            )
        } else {
            sidemenu= (
                <div className="sidemenu-not-toggled">
                    <div className="sidemenu-not-toggled-icons">
                        <Link to="/" title="Home">
                            <img src={barnURL} alt="Home but with barn"/>
                        </Link>
                        <a href="https://github.com/Yu-HuanWu" target="_blank" title="GitHub">
                            <img src={githubURL} alt="github logo but with sheep"/>
                        </a>
                        <a href="https://www.linkedin.com/in/yu-huan-wu/" target="_blank" title="LinkedIn">
                            <img src={linkedinURL} alt="LinkedIn logo but with sheep"/>
                        </a>
                        <a href="https://donate.worldvision.org/give/sheep" target="_blank" title="Donate a sheep">
                            <img src={charityURL} alt="Give a sheep" />
                        </a>
                    </div>

                </div>
            )
        }
        return(
            <div className="sidemenu">
                <div id="hamburger" onClick={this.toggleButton}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {sidemenu}
            </div>
        )
    }
}

export default SideMenu