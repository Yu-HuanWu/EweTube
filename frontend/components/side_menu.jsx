import React from 'react';
import { Link } from 'react-router-dom';

class SideMenu extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            toggled: false,
        }
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
        if (this.state.toggled){
            sidemenu= (
                <div>
                    <h1>test 1</h1>
                </div>
            )
        } else {
            sidemenu= (
                <div>
                    <h1>test 2</h1>
                </div>
            )
        }
        return(
            <div className="sidemenu">
                {sidemenu}
            </div>
        )
    }
}

export default SideMenu