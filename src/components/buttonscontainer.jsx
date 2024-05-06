import styles from "./buttonscontainer.module.css";
const ButtonsContainer= ({onButtonClick}) => {
const buttonNames=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','.','0'];
 
  return (
  <div className={styles.buttonContainer}>
    {buttonNames.map((buttonname) =>(
        <button className={styles.button} onClick={() => onButtonClick(buttonname)} >{buttonname}</button>
    ))}
 </div>
 
  );
}
export default ButtonsContainer;