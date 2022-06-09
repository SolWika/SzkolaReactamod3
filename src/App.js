import "App.css";
import { Button, Input, Textarea, WrapperForm } from "components/Form";
import { Card } from "components/Card";
import { WrapperMenu, Menu, MenuLink } from "components/Menu";
import { Employees } from "components/Employees";

function App() {
  return (
    <div className="App">
      <WrapperForm>
        <Input borderRadius="10px" />
        <Textarea />
        <Button
          bgColor="orange"
          color="blueNights"
          label="Click me"
          icon="user"
        />
      </WrapperForm>
      <WrapperMenu>
        <Menu>
          <MenuLink to="/" isActive>
            Home
          </MenuLink>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
          <MenuLink to="/posts">Posts</MenuLink>
        </Menu>
        <Card
          icon="user"
          title="Shrim and Chorizo Paella"
          intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
          content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
        />
      </WrapperMenu>
      <Employees />
    </div>
  );
}

export default App;
