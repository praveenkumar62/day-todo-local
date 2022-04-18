import React, {Component} from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import AddTodo from './Component/AddTodo';
import Footer from './Component/Footer';
import { motion } from "framer-motion"

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to right, #FFC171, rgb(252, 108, 120));
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    margin: 0;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  p {
    margin: 0 0 10px;
  }
  /* Handlebar */
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f0f0f0;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(255, 173, 105);
  }
`;

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    width: 970px;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    width: 750px;
  }
`;
const MainHeader = styled.h1`
  color: #FFF;
  font-size: 45px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  margin: .67em 0;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
const MainContainer = styled.div`
  margin-top: 30px;
  padding: 25px 30px;
  border-radius: 4px;
  background-color: #fff;
  @media (max-width: 600px) {
    padding: 20px 15px;
    margin-top: 20px;
  }
`;
const ListLayout = styled.div`
  max-height: 46vh;
  overflow-x: auto;
`;
const ListMainBox = styled.div`
  position: relative;
  border-left: 3px solid orange;
  margin-bottom: 20px;
  padding-left: 8px;
  > .fa {
    position: absolute;
    font-size: 25px;
    color: coral;
    cursor: pointer;
  }
  > .fa-square-o {
    top: 12px;
    right: 44px;
  }
  > .fa-check-square-o {
    top: 12px;
    right: 40px;
  }
  > .fa-trash-o {
    top: 10px;
    right: 4px;
  }
  @media (max-width: 600px) {
    > .fa {
      font-size: 22px;
    }
    > .fa-square-o {
      top: 12px;
      right: 32px;
    }
    > .fa-check-square-o {
      top: 12px;
      right: 28px;
    }
    > .fa-trash-o {
      top: 10px;
      right: 0px;
    }
  }
`;
const ListItem = styled.div`
  width: 84%;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 75%;
    margin: 0;
  }
  @media (min-width: 601px) and (max-width: 998px) {
    width: 78%;
  }
`;
const DescContent = styled.p`
  font-size: 18px;
  margin-bottom: 0px;
  text-align: center;
  > span {
    padding: 0 5px;
  }
  > span.text-strike {
    position: relative;
    text-decoration: none;
    background-image: -webkit-linear-gradient(transparent 12px,rgb(252, 108, 120) 0px,rgb(252, 108, 120) 0px,transparent 15px);
    background-image: -moz-linear-gradient(transparent 12px,rgb(252, 108, 120) 0px,rgb(252, 108, 120) 0px,transparent 15px);
    background-image: -ms-linear-gradient(transparent 12px,rgb(252, 108, 120) 0px,rgb(252, 108, 120) 0px,transparent 15px);
    background-image: -o-linear-gradient(transparent 12px,rgb(252, 108, 120) 0px,rgb(252, 108, 120) 0px,transparent 15px);
    background-image: linear-gradient(transparent 12px,rgb(252, 108, 120) 0px,rgb(252, 108, 120) 0px,transparent 15px);
  }
`;
const AssignerContent = styled.p`
  text-align: center;
  font-size: 11px;
  color: grey;
  margin: 0;
  > .sub-assigner {
    font-weight: bold;
  }
`;
const Divider = styled.hr`
  margin-top: 15px;
  margin-bottom: 25px;
  @media (max-width: 600px) {
    margin-top: 0px;
    margin-bottom: 20px;
  }
`;

class App extends Component {
  state = {
    list: [],
    todocount: null
  }

  componentDidMount() {
    let getList = JSON.parse(localStorage.getItem('day-todo')) || [];
    this.setState({
      list: [...this.state.list, ...getList]
    })
    localStorage.setItem('day-todo', JSON.stringify([...this.state.list, ...getList]));
  }

  addTodo = (items) => {
    items.id = Math.random()*100;
    items.textStrike = false;
    const lists = [...this.state.list,items];
    this.setState({
      list: lists
    })
    localStorage.setItem('day-todo', JSON.stringify(lists));
  }

  callDelete = (data) => {
    let delData = this.state.list.filter(item => {
      return item.id !== data
    }) 
    this.setState({
      list: delData
    })
    localStorage.setItem('day-todo', JSON.stringify(delData));
  }

  callStrike = (data) => {
    let strikeData = this.state.list.map(item => {
      if(item.id === data) {
        item.textStrike = !item.textStrike;
      }
      return item;
    }) 
    this.setState({
      list: strikeData
    })
    localStorage.setItem('day-todo', JSON.stringify(strikeData));
  }

  render() {
    const stateData = this.state.list;

    let data = 0;
    const datalist = stateData.map(item => {

      item.id= data++;
      return(
        <ListMainBox key={item.id}>
          <i className={item.textStrike ? "fa fa-check-square-o" : "fa fa-square-o"} onClick={() => {this.callStrike(item.id)}}></i>
          <i className="fa fa-trash-o" onClick={() => {this.callDelete(item.id)}}></i>
          <ListItem>
            <DescContent>
              <span className={item.textStrike ? "text-strike" : ""}>
                {item.desc}
              </span>
            </DescContent>
            <AssignerContent>
              Given by <span className="sub-assigner">{item.author}</span>
            </AssignerContent>
          </ListItem>
        </ListMainBox>
      )
    });

    
    return (
      <>
        <GlobalStyle />
        <Container>
          <MainHeader><i className="fa fa-bolt"></i> Day to do</MainHeader>
          <input type="checkbox" />

          <MainContainer>
            <ListLayout>
              {datalist}
            </ListLayout>

            <div className="add-new">
              <Divider />
              <AddTodo receiveData={this.addTodo} />
            </div>

            <p>{this.state.todocount}</p>

            <div>
              <motion.h1 animate={{fontSize: '50px'}}>Motion</motion.h1>
            </div>
          </MainContainer>

          <Footer />
        </Container>
      </>
    );
  }
}

export default App;
