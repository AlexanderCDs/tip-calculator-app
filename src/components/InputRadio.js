/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 
import Error from './Error';
import {setErrorClass} from '../containers/ErrorClass';

const InputRadio = (props) => {
    const { register, name, className = '', value, text, id } = props;
    return (
        <div className="btn-radio">  
            <input
                id={id}
                className={`radio ${className}`} 
                type="radio" 
                value={value}
                {...register(name)}
            />   
            <label htmlFor={id} className={`button-radio ${className}`}>
                {text}
            </label>
        </div>
    );
}
  
export default InputRadio;