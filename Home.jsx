import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>

      <Input placeholder="Search here..." width="250px" />
      <br /><br />

      <Button text="Login" color="white" bg="blue" />

      <Card
        title="Welcome"
        content="This is the home page card"
        bg="#f0f0f0"
      />
    </div>
  );
};

export default Home;