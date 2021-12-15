import Caver from 'caver-js'
import logo from './logo.svg';
import './App.css';

const caver = new Caver(window.klaytn)

function App() {

  async function testAction() {
    const accounts = await window.klaytn.enable()
    // const account = accounts[0]
    // const selectedAddress = window.klaytn.selectedAddress
    // console.log(account)
    // console.log(window.klaytn.networkVersion)
    // console.log(window.klaytn.selectedAddress)
    // console.log(caver.version)

    // const kip7Instance = new caver.klay.KIP7('0x6117FAfa0ef66eEEA30e33f8B810ABF65488A393')
    // kip7Instance.transfer('0xf165d894b980f3270677e5857fead95154925b2a',
    //     caver.utils.toPeb(1, 'KLAY'),
    //     { from: selectedAddress }).then(console.log)

    window.klaytn.on('accountsChanged', function(accounts) {
      console.log(window.klaytn.selectedAddress)
    })

    window.klaytn.on('networkChanged', function() {
      console.log(window.klaytn.networkVersion)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={
          testAction
        }>
          Button
        </button>
      </header>
    </div>
  );
}

export default App;
