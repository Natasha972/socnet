import React from "react";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      status: this.props.status
    };
    this.activateEditMode= this.activateEditMode.bind(this);
    this.deactivateEditMode= this.deactivateEditMode.bind(this);
    this.changeInputValue= this.changeInputValue.bind(this);
  }
  componentDidUpdate(prevProps) {
    if(this.props.status!==prevProps.status){
      this.setState({status: this.props.status})
    }
  }
  activateEditMode() {
    this.setState({editMode: true})
  }
  deactivateEditMode() {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status);
  }
  changeInputValue(e) {
    this.setState({status: e.target.value})
  }
  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>{this.props.status||'status'}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input autoFocus={true} onChange={this.changeInputValue} onBlur={this.deactivateEditMode} value={this.state.status}/>
          </div>
        )}
      </>
    );
  }
}

export default Status;
