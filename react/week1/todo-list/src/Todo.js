
import './App.css';

function ToDo(props) {
  return (    
      <ul><li key={props.id}>{props.description} , {props.endDate}</li></ul> 
  );
}

export default ToDo;
