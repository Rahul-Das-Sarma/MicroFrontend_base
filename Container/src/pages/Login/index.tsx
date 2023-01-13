import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import TextInput from "../../components/Input";
import "./login.scss";
type Props = {};
const Login = (props: Props) => {
  return (
    <div className="login-container">
      <Card variant="outline" width="50%" padding="2rem">
        <h1>Sign in</h1>
        <div className="row">
          <div className="column">
            <div className="label">Username</div>
            <TextInput type="text" className="input-login" />
          </div>
          <div className="column">
            <div className="label">password</div>
            <TextInput type="text" className="input-login" />
          </div>
        </div>
        <Button title="Login" />
      </Card>
    </div>
  );
};

export default Login;
