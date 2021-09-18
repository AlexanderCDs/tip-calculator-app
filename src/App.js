/**
 * @author: alexandercd
 * @description: 
 * @date: 16/septiembre/2021 
**/
import React, { useState } from 'react';  
import { useForm } from 'react-hook-form';
import logo from './assets/svgs/logo.svg';
import './assets/sass/App.scss';
import Form from './components/Form';
import InputNumber from './components/InputNumber';
import InputButton from './components/InputButton';
import InputRadio from './components/InputRadio';
import { ReactComponent as  IconDollar} from './assets/svgs/icon-dollar.svg';
import { ReactComponent as  IconPerson} from './assets/svgs/icon-person.svg';

const App = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [amount, setAmount] = useState(0.0000);
    const [total, setTotal] = useState(0.0000); 
    const onSubmit = (data, event) => {  
        const { bill, numberPeople, custom, porcentage } = data;
        const value = (bill * (custom > 0 ? (custom/100) : porcentage));  
        const amnt = value / numberPeople;
        setAmount( amnt );
        setTotal( (bill / numberPeople) + amnt );
    }   
    const handleReset = (event) => {
        setAmount(0.00);
        setTotal(0.00);
        reset(
            {
                bill: '',
                numberPeople: '',
                custom: ''
            }, 
            {
                keepErrors: true, 
                keepDirty: true,
                keepIsSubmitted: false,
                keepTouched: false,
                keepIsValid: false,
                keepSubmitCount: false,
            }
          );
    }
    return (
        <section className="container">
            <div> 
                <img src={logo} ></img>
            </div>
            <div className="card">
                <div className="col actions">
                    <Form 
                        register={register}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                    >
                        <div className="input-group"> 
                            <label> Bill </label>
                            <InputNumber 
                                placeholder="0"
                                name="bill"
                                errors={errors} 
                                required={true}
                                register={register} 
                                icon={<IconDollar className="icon" />}
                            />
                        </div>
                        <div className="input-group"> 
                            <label> Select Tip % </label>
                            <div className="button-group"> 
                                <InputRadio 
                                    id="five"
                                    text="5%"
                                    name="porcentage"
                                    errors={errors} 
                                    required={true}
                                    value={0.05}
                                    register={register} />
                                <InputRadio 
                                    id="ten"
                                    text="10%"
                                    name="porcentage"
                                    errors={errors} 
                                    required={true}
                                    value={0.10}
                                    register={register} />
                                <InputRadio 
                                    id="fifteen"
                                    text="15%"
                                    name="porcentage"
                                    errors={errors} 
                                    required={true}
                                    value={0.15}
                                    register={register} />
                                <InputRadio 
                                    id="twenty-five"
                                    text="25%"
                                    name="porcentage"
                                    errors={errors} 
                                    required={true}
                                    value={0.25}
                                    register={register} />   
                                <InputRadio 
                                    id="fiftyn"
                                    text="50%"
                                    name="porcentage"
                                    errors={errors} 
                                    required={true}
                                    value={0.50}
                                    register={register} />  
                                <InputNumber 
                                    className='custom'
                                    handleChange={onSubmit}
                                    placeholder="Custom"
                                    name="custom"
                                    errors={errors}  
                                    register={register} 
                                />
                            </div>
                        </div>
                        <div className="input-group" style={{marginBottom: '10px'}}> 
                            <label> Number of People </label>
                            <InputNumber 
                                placeholder="0"
                                name="numberPeople"
                                errors={errors} 
                                required={true}
                                register={register}  
                                icon={<IconPerson className="icon" />}
                            />
                        </div> 
                        <InputButton 
                            className="reset"  
                            value="Enter" 
                        />
                    </Form>
                </div>
                <div className="col result">
                    <div className="text"> 
                        <div className="row"> 
                            <div className="col paragraph"> 
                                <p>Tip Amount</p>
                                <p className="person">/ person</p>
                            </div>
                            <div className="col value"> 
                                $ {amount.toFixed(2)}
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="col paragraph"> 
                                <p>Total</p>
                                <p className="person">/ person</p>
                            </div>
                            <div className="col value"> 
                                $ {total.toFixed(2)}
                            </div>
                        </div>
                    </div>
                    <InputButton 
                        handleClick={handleReset}
                        className="reset" 
                        value="Reset" 
                    />
                </div>
            </div>
        </section>
    );
}

export default App;
