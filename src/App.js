import './App.css';
import Header from './Header/Header';
import MainSummary from './Main/MainSummary';
import CartProvider from './Store/CartProvider';
import Card from './Card/Card';
import { useState } from 'react';
function App() {
  const [card, setCard]= useState(false)
  const clik = ()=>{
    setCard(true)
  }
  const Close=()=>{
   setCard(false)
  }
  return (
    <CartProvider>
    <div className="App">
     {card && <Card Close={Close} Klikni={Close}/>}
      <Header/>
      <MainSummary Klikni={clik}/>
    </div>
     
    </CartProvider>
  );
}

export default App;
