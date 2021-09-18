/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 
import Error from './Error';
import {setErrorClass} from '../containers/ErrorClass';

const InputRadio = (props) => {
    const { register, name, className, value, text } = props;
    return (
        <div className="button"> 
            {text}  
            <input  
                className={`radio ${className}`} 
                type="radio" 
                value={value}
                {...register(name)}
            />  
        </div>
    );
}
  
export default InputRadio;