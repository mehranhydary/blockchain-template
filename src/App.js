import React, { Component } from 'react';
import getWeb3 from "./utils/getWeb3";
import contract from 'truffle-contract'
/* Import your contracts here: */

// import <contract> = from '..build/contracts/<contract>.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: '',
      account: '',
      /*
        contractAddresses
        
      */
    }
  }
  componentDidMount() {
    /* Get web3 (this should be where you have deployed your smart contract)
     and initiate your smart contracts */
    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3,
        account: results.web3.eth.accounts[0]
      })
      console.log(this.state.account)
    })
  }
  /* Initiate any smart contracts I've deployed into this application */
  instantiateContract() {
    /* Import each contract */
    // const <> = contract(<contract>)
    // <>.setProvider(this.state.web3.currentProvider)
    // <>.deployed()
    // .then(deployed_contract => {
          /* Get the addrss from the json object that is returned */
    //    console.log(deployed_contract.address);
    // })
    
  }
  /* Might have to listen for events 
   Any other fucntions specific to your blockchain */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to your first blockchain platform</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          You are logged in as: <code>{this.state.account}</code>.
        </p>
      </div>
    );
  }
}

export default App;
