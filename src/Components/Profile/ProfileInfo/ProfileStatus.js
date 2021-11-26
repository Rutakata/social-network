import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode.bind(this)}> {this.props.status} </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} /><br/>
                        <button onClick={this.deactivateEditMode.bind(this)}>Змінити</button>
                    </div>
                }

            </div>
        )
    }
}


export default ProfileStatus