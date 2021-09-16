/** 
 * @author: alexandercds
 * @description: 
 * @date: 10/septiembre/2021
**/ 
import Error from './Error';
import {setErrorClass} from '../containers/ErrorClass';

const InputNumber = (props) => {
    const { placeholder, register, name, required, errors, icon, handleChange = null} = props;
    return (
        <div className="input-text">  
            <div className="error-content">
                {required && (
                    <Error  
                    errors={errors}
                    validate="required"
                    name={name} />
                )}  
                <Error  
                errors={errors}
                validate="pattern"
                name={name} />
            </div>
            {icon !== null && (
                 icon
            )}
            <input 
            step="any"
            onChange={handleChange}
            placeholder={placeholder} 
            className={
                `input 
                ${setErrorClass({name, errors, validated: 'required'})} 
                ${setErrorClass({name, errors, validated: 'pattern'})}`
            } 
            type="number" 
            {...register(name, { 
                required: {
                    value: required, 
                    message: `Can't be zero`
                }, 
                pattern: {
                    value: /^[+-]?([0-9]*[.])?[0-9]+$/i, 
                    message: `Looks like this is not an number`
                }
            })}/> 
            
        </div>
    );
}
  
export default InputNumber;