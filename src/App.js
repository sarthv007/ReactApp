import React from "react";
//import "./App.css";
import ConditionalRendingDemo from "./Components/ConditionalRendingDemo";
import Counter from "./Components/Counter";
import CounterDemo from "./Components/CounterDemo";
import DemoComponent from "./Components/DemoComponent";
import EventBindingDemo from "./Components/EventBindingDemo";
import FormComp from "./Components/FormComp";
import Hello from "./Components/Hello";
import LifeCycleDemo from "./Components/LifeCycleDemo";
import ListRenderingComp from "./Components/ListRenderingComp";
import ListwithKey from "./Components/ListwithKey";
import SendDataFromParentToChildAsMethod from "./Components/SendDataFromParentToChildAsMethod";
import TextBoxDemo from "./Components/TextBoxDemo";
import UpdatingPhaseDemo from "./Components/UpdatingPhaseDemo";
import Welcome from "./Components/Welcome";
import UnMountingPhaseDemo from "./Components/UnMountingPhaseDemo";
import HeroComponent from "./Components/HeroComponent";
import ErrorBoundery from "./Components/ErrorBoundery";
import ParentComponent from "./Components/ParentComponent";
import RefDemo from "./Components/RefDemo";
import ParentRef from "./Components/ParentRef";
import FRInput from "./Components/FRInput";
import FormComponent1 from "./Components/FormComponent1";
import UnControlledComponent from "./Components/UnControlledComponent";
//import PortalDemo from "./PortalDemo";
//import MessageComponent from "./Components/MessageComponent";
// import CounterApp1 from "./Components/CounterApp1";
// import CounterApp2 from "./Components/CounterApp2";
// import ClickCounter from "./Components/RenderProps/ClickCounter";
// import HoverCounter from "./Components/RenderProps/HoverCouter";
// import UserComponent from "./Components/RenderProps/UserComponent";
// import WithCounter from "./Components/RenderProps/WithCounter";
import AComponent from "./Components/Context/AComponent";
import context from "./Components/Context/Context";
import RouteComponent from "./Components/SPA/RouteComponent";
import HttpRequest from "./Components/HttpRequest";
import FormComponent from "./Components/Http/FormComponent";
import ClassCounter from "./Components/functionalComponnent/ClassCounter";
import HookCounter from "./Components/functionalComponnent/HookCounter";
import HookDemo1 from "./Components/functionalComponnent/HookDemo1";
import ClassComponentDemo from "./Components/functionalComponnent/ClassComponentDemo";
import EffectHookDemo from "./Components/functionalComponnent/EffectHookDemo";
import Hook1 from "./Components/functionalComponnent/Hook1";
import MouseContainer from "./Components/functionalComponnent/MouseContainer";
import ClassTitleDemo from "./Components/functionalComponnent/ClassTitleDemo";
import HookDemo2 from "./Components/functionalComponnent/HookDemo2";
import MouseDemo from "./Components/functionalComponnent/MouseDemo";
import SelfClasCounter from "./Components/functionalComponnent/SelfClasCounter";
import HookDemo4 from "./Components/functionalComponnent/HookDemo4";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to react js!",
      userName: "John Doe",
      users: [
        {
          firstName: "sarthak",
          lastName: "vaidya",
        },
        {
          firstName: "sarthak1",
          lastName: "vaidya1",
        },
        {
          firstName: "sarthak2",
          lastName: "vaidya2",
        },
        {
          firstName: "sarthak3",
          lastName: "vaidya3",
        },
      ],
    };
  }

  changeMessage = () => {
    this.setState({
      message: "Welcome to js world!",
    });
    //alert("I am from changeMessage called from parent component ");
  };

  // componentDidMount() {
  //   let i = 1;
  //   setInterval(() => {
  //     i++;
  //     this.setState({ message: `${this.state.message} ${i}` });
  //   }, 1000);
  // }

  render() {
    const person = {
      firstName: "Json",
    };
    //console.log(this.props);
    return (
      <div className={"App"}>
        {/* <Welcome></Welcome> */}
        {/* <Welcome
          text={"Hello React World!!"}
          name={"sarthak vaidya"}
          courseName={"Javascript"}
          counter={1000}
          nameArr={["sarthak", "dinesh", "ganesh", "mahesh", "suresh"]}
          person={person}
        /> */}

        {/* <Welcome
          text={"Hello React World!!"}
          name={"sarthak vaidya"}
          courseName={"Javascript"}
          counter={1000}
          nameArr={["sarthak", "dinesh", "ganesh", "mahesh", "suresh"]}
          person={person}
        >
           component composition 
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available
          </p>
        </Welcome> */}

        {/* <Hello /> */}
        {/* <DemoComponent /> */}
        {/* <CounterDemo
          message={"Welcome to counter application"}
          courseName={"javascript"}
        /> */}

        {/* <TextBoxDemo /> */}
        {/* <EventBindingDemo /> */}
        {/* <SendDataFromParentToChildAsMethod
          message={this.state.message}
          personArr={["sarthak", "ganesh", "amita"]}
          personObject={{ firstName: "sarthak", lastName: "vaidya" }}
          data={null}
          age={undefined}
          changeMessage={this.changeMessage}
        /> */}
        {/* <ConditionalRendingDemo /> */}
        {/* <LifeCycleDemo text={this.state.message} /> */}
        {/* <UpdatingPhaseDemo /> */}
        {/* <UnMountingPhaseDemo /> */}
        {/* <ErrorBoundery>
          <HeroComponent heroName={"Mike Tisan"} />
        </ErrorBoundery>
        <ErrorBoundery>
          <HeroComponent heroName={"Json Holder"} />
        </ErrorBoundery>
        <ErrorBoundery>
          <HeroComponent heroName={"Jocker"} />
        </ErrorBoundery> */}
        {/* <ParentComponent /> */}
        {/* <RefDemo /> */}
        {/* <ParentRef /> */}
        {/* <FRInput /> */}
        {/* <FormComponent1 /> */}
        {/* <UnControlledComponent /> */}
        {/* <PortalDemo /> */}
        {/* <MessageComponent /> */}
        {/* <CounterApp1 courseName={"Javascript"} />
        <CounterApp2 courseName={"React"} /> */}
        {/* <ClickCounter />
        <HoverCounter /> */}
        {/* <WithCounter
          render={(counter, handleIncrement) => (
            <ClickCounter counter={counter} handleIncrement={handleIncrement} />
          )}
        ></WithCounter>

        <WithCounter
          render={(counter, handleIncrement) => (
            <HoverCounter counter={counter} handleIncrement={handleIncrement} />
          )}
        ></WithCounter> */}

        {/* <UserComponent
          render={(flag) => (flag ? "React" : "Java")}
        ></UserComponent> */}
        {/* <context.Provider value={this.state}>
          <AComponent />
        </context.Provider> */}
        {/* <RouteComponent /> */}
        {/* <HttpRequest /> */}
        {/* <FormComponent /> */}
        {/* <ClassCounter />
         */}
        {/* <HookCounter /> */}
        {/* <HookDemo1 /> */}
        {/* <ClassComponentDemo /> */}
        {/* <EffectHookDemo /> */}
        {/* <ClassTitleDemo /> */}
        {/* <HookDemo2 /> */}
        {/* <MouseDemo /> */}
        {/* <SelfClasCounter /> */}
        <HookDemo4 />
      </div>
    );
  }
}

export default App;
