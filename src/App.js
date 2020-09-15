import React, { useState } from 'react';
import DiceRoll from './pages/diceroll'
import Navlist from './pages/navlist'


function App() {
  const [currentPage, handlePageChange] = useState('DiceRoll')

  const renderPage = () => {
    switch(currentPage){
      case 'Roll':
        return <DiceRoll/>
    }
  }

  return(

  <div>
    <Navlist currentPage={currentPage} handlePageChange={handlePageChange}/>
    <div className="Body">
      {renderPage()}
    </div>
  </div>
  )
}

export default App;