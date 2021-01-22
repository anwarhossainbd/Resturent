import React, {Component,Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import FoodLogo from "../../Assets/Images/navlogo.svg"
import '../../Assets/Css/mystyle.css' ;
import '../../Assets/Css/responsive.css'

import FoodLogoScroll from "../../Assets/Images/navlogoScroll.svg";
import {NavLink} from "react-router-dom";


class TopNavigation extends Component {


    constructor() {
        super();
        this.state={
            FirstImage:[FoodLogo],
            Background:"navColor",
            FontColor:"navSubTitle",
            topnavTitle:"topnavTitle",
            navVarient:"dark"

        }
    }

    onScroll=()=>{

        if (window.scrollY>400){
            this.setState({navVarient:"light",FirstImage:[FoodLogoScroll],Background:"navColorScroll",FontColor:"navSubTitleScroll",topnavTitle:"topnavTitleScroll"})
        }
        else if (window.scrollY<400){
            this.setState({navVarient:"dark",FirstImage:[FoodLogo],Background:"navColor",FontColor:"navSubTitle",topnavTitle:"topnavTitle"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)

    }

    render() {
        return (
            <Fragment>

                <title>{this.props.title}</title>



                <Navbar collapseOnSelect expand="lg" className={this.state.Background} fixed={"top"}  variant={this.state.navVarient}>
                          <Navbar.Brand href="#home">
                            <Nav.Link> <NavLink exact to="/" className="textDecoration">   <b className={this.state.topnavTitle}> <img src={this.state.FirstImage} height="40" />   Fast Food House </b> </NavLink></Nav.Link>
                          </Navbar.Brand>
                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">


                            </Nav>
                             <Nav>
                                  <Nav.Link className="responsive"> <NavLink exact to="/" activeStyle={{color:"rgb(25,64,255)"}} className={this.state.FontColor}>Home</NavLink></Nav.Link>
                                  <Nav.Link className="responsive"><NavLink exact to="/Foods" activeStyle={{color:"rgb(25,64,255)"}} className={this.state.FontColor} >Foods</NavLink></Nav.Link>


                                 <Nav.Link className="responsive"><NavLink exact to="/TeaCoffee" activeStyle={{color:"rgb(25,64,255)"}} className={this.state.FontColor} >Tea and Coffee</NavLink></Nav.Link>
                                 <Nav.Link className="responsive"><NavLink exact to="/jush" activeStyle={{color:"rgb(25,64,255)"}} className={this.state.FontColor} >Jush</NavLink></Nav.Link>
                                 <Nav.Link className="responsive"><NavLink exact to="/Contact" activeStyle={{color:"rgb(25,64,255)"}} className={this.state.FontColor} >Contact</NavLink></Nav.Link>


                                  <Nav.Link className="responsive"> <NavLink exact to="/Order" activeStyle={{color:"rgb(25,64,255)"}} className={this.state.FontColor} >Order</NavLink></Nav.Link>
                                  <Nav.Link className="responsive">  <NavLink exact to="/about" activeStyle={{color:"rgb(25,64,255)"}} className={this.state.FontColor} >About</NavLink></Nav.Link>
                             </Nav>
                          </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigation;



/*
 <Nav>
                            <Nav.Link href="#deets" className={this.state.FontColor}>Home</Nav.Link>
                            <Nav.Link href="#memes" className={this.state.FontColor} >Menu</Nav.Link>
                            <Nav.Link href="#memes" className={this.state.FontColor} >Contact</Nav.Link>
                            <Nav.Link href="#memes" className={this.state.FontColor} >Shop</Nav.Link>
                            <Nav.Link href="#memes" className={this.state.FontColor} >About</Nav.Link>
                        </Nav>*/
