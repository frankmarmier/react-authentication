import React, { Component } from "react";
import { AuthContext } from "./AuthContext";

class AuthProvider extends Component {
  render() {
    return (
      <AuthContext.Provider value={"Foo"}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
