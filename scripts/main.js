var React = require('react');
//need react dom to actually mount things onto the DOM
var ReactDOM = require('react-dom');
//React Router Stuff
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation =  ReactRouter.Navigation;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');
//Import Wes's helpers.js file
var h = require('./helpers');



/* App */
var App = React.createClass({

  render: function(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Marketzz" number="2222"/>
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
});


/* Header */
var Header = React.createClass({
  render: function(){

    console.log(this);

    return(
      <header className="top">
        <h1>Catch
          <span className="ofThe">
          <span className="of">
            of
          </span>
          <span className="the">
            the
          </span>
          </span>
        Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
});

/*
  Order
*/
var Order = React.createClass({
  render: function(){
    return(
      <p>Order</p>
    )
  }
});

var Inventory = React.createClass({
  render: function(){
    return(
      <p>Inventory</p>
    )
  }
});



/* StorePicker */

var StorePicker = React.createClass({

  mixins:[History],

  goToStore: function(event){
    //prevent form's default behavior-- submit data and refresh page
    event.preventDefault();

    //get the data from the input
    var storeID = this.refs.storeID.value;

    //change the screen from StorePicker to App
    this.history.pushState(null, '/store/' + storeID);

  },

  render: function(){
    return(
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input type="text" ref="storeID" defaultValue={h.getFunName()} required/>
        <input type="submit"/>
      </form>
    )
  }

});


/* Not Found */
var NotFound = React.createClass({
  render: function(){
    return <h1>Not Found</h1>
  }

});



/* Routes */
var routes = (

  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>

)

//we used to pass <App/> or a component here... now we are passing variable routes
ReactDOM.render(routes, document.querySelector('#main'));
