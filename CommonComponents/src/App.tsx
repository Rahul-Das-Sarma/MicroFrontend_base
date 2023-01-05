import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";

const App = () => {
  return (
    <>
      <Input type="text" />
      <Button title="Lund" />
      <Card variant="primary" width="10rem" height="10rem">
        <h4>Primary Card</h4>
      </Card>
      <Card variant="outline" width="10rem" height="10rem">
        <h4>Outline Card</h4>
      </Card>
    </>
  );
};

export default App;
