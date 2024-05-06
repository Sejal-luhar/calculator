import { useState } from 'react';
import styles from './App.module.css';
import ButtonsContainer from './components/buttonscontainer';
import Display from './components/display';
function App(){
  let [calVal,setcalVal]=useState("");
  const onButtonClick = (buttonText)  => {
    if (buttonText == 'c'){
       setcalVal("");
    }
    else if (buttonText == '='){
      const result= eval(calVal);
      setcalVal(result);
    }
    else{
      const newDisplay= calVal+ buttonText;
      setcalVal(newDisplay);
    }
  }
  
  return (<div className={styles.calculator}>
   <Display displayValue={calVal}></Display>
   <ButtonsContainer 
     onButtonClick={onButtonClick}
   ></ButtonsContainer>
  </div>);
}
export default App;