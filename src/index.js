import React, {useState} from "react";
import ReactDOM from "react-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import "./index.css"
import ProfilePageFunc from "./components/Function";
import ProfilePageClass from "./components/DefaultClass";
import ProfilePageRender from "./components/ClassOnlyRender";
import { FormControl, Card, CardContent } from "@material-ui/core";


const App = () => {

  const [user, setUser] = useState('Dio');

    return (
      <Card style={{ width: "500px", margin: "0 auto" }}>
        <CardContent>
          <FormControl>
            <h1 style={{ fontSize: '30px'}}>Choose profile to view:</h1>
            <Select
              labelId="select-label"
              value={user}
              onChange={e => setUser(e.target.value)}
              style={{ width: "450px" }}
            >
              <MenuItem value="Dio">Dio</MenuItem>
              <MenuItem value="Jotaro">Jotaro</MenuItem>
              <MenuItem value="Demogorgon">Demogorgon</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
        <CardContent>
          <h1>Welcome to {user}’s profile!</h1>
          <p>
            <ProfilePageFunc user={user} />
            <span>With function component</span>
          </p>
          <p>
            <ProfilePageClass user={user} />
            <span>With class component</span>
          </p>
          <p>
            <ProfilePageRender user={user} />
            <span>With special class component</span>
          </p>
          <p>Can you spot the difference in the behavior?</p>
        </CardContent>
      </Card>
    );
  }


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
