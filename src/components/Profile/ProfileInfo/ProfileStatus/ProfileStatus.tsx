import React, { ChangeEvent } from "react";

type PropsType = {
    status: string
    updateUserStatus: (statusText: string) => void
};

type StateType = {
    editMode: boolean
    status: string
};


class ProfileStatus extends React.Component<PropsType, StateType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div id="status-div" onDoubleClick={this.activateEditMode}>
            {this.props.status || "_-_-_-_"}
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              id="status-input"
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
