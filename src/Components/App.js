import styled from "styled-components";
import React from "react";
import { Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom"
import Reviews from "./Reviews";
import NotFound from "./NotFound";
import WeekList from './WeekList';

function App() {
  const history = useHistory();
    const hover = (e) => {
    e.target.style.cursor = "pointer";
    }
  return (
    <div className="App">
      <Container>
        <Title onMouseOver={hover} onClick={()=> {history.push("/");}}>내 일주일 평점 남기기</Title>
        <Line />
        <Switch>
          <Route path="/" exact>
            <WeekList />
          </Route>
          <Route path="/review/:week_day" exact>
            <Reviews />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div `
max-width: 350px;
min-height: 60vh;
background-color: #181E34;
padding: 16px;
margin: 90px auto;
border-radius: 5px;
border: 2px solid slateblue;
`;

const Title = styled.h1 `
color: #8294C7;
text-align: center;
`;

const Line = styled.hr `
margin: 16px 0px;
border: 2px dotted slateblue;
`;

export default App;
