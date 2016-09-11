var React = require('react');
//need react dom to actually mount things onto the DOM
var ReactDOM = require('react-dom');

//React Router Stuff
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation =  ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');


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
Inventory
/*
  INventory
*/
var Inventory = React.createClass({
  render: function(){
    return(
      <p>Inventory</p>
    )
  }
});



/*
  StorePicker
*/

var StorePicker = React.createClass({
  render: function(){
    return(
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" ref="storeID" required/>
        <input type="submit"/>
      </form>
    )
  }

});


/* Routes */
var routes = (

  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
  </Router>

)

//we used to pass <App/> or a component here... now we are passing variable routes
ReactDOM.render(routes, document.querySelector('#main'));
