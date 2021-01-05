import React from "react";
import '../login.scss'

class Login extends React.Component {
  state = {};

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };
  render() {
    return (
      <div className="wrapper">
        <div >{/* className="login" */}
          <form>
            <div className="form-group">
              {/* <label>Name</label>
              <input
                type="name"
                className="form-control"
                onChange={this.handleChange}
              />
              <small className="form-text text-muted">
                This is a memory game
              </small> */}
              <div className="memory-container">
                <div className="neon">Memory </div>
                <div className="flux">Game </div>
              </div>

              <div className="input" type="text" spellCheck="false">
                <input type="text" id="input-a" />
                <label htmlFor="input-a"> Name </label>
              </div>

            </div>

            <div className="box-1">
              <button onClick={this.handleClick} className="btn btn-one">
                <span onClick={this.handleClick}>PLAY</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
