
import './App.css';

function ToDo(props) {
  return (    
      <ul><li>{props.description} , {props.endDate}</li></ul> 
  );
}

export default ToDo;
