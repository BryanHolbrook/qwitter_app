import React from 'react';
import { Link } from 'react-router';


class App extends React.Component{
 constructor(props){
   super(props);
 }

 componentDidMount(){
   window.jQuery('.button-collapse').sideNav();

 }

 links() {

   let navs = [
     {path: '/songs', text: 'Home'},
     {path: '/about', text: 'About' },

   ]
   let active = this.props.location.pathname === navs.path ? "active" : "";
   return navs.map( (nav, i) => {
     return (<li className={active} key={i}><Link to={nav.path}>{nav.text}</Link></li>);
   });
 }

 render(){
   return(
     <div>
       <nav className="blue">
         <div className="nav-wrapper">
           <a href="#" className="brand-logo">Qwitter</a>
           <a href="#" data-activates="mobile" className="button-collapse">
             <i className="material-icons">menu</i>
           </a>
           <ul className="right hide-on-med-and-down">
             {this.links()}
           </ul>
           <ul className="side-nav" id="mobile">
             {this.links()}
           </ul>
         </div>
       </nav>

         {this.props.children}

         <footer class="page-footer" className="blue">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Qwitter</h5>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2016 Copyright

            </div>
          </div>
        </footer>

     </div>
   )
 }
}

export default App;
