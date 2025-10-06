import React, {useEffect, useState} from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import btnStyles from '../styles/Button.module.css';


function QuoteForm({dispatch, editingQuote}) {

    const [age, setAge] = useState('1');
    const [numKids, setNumKids] = useState('1');
    const [numMarried, setNumMarried] = useState('1');
    const [tertiaryEducation, setTertiaryEducation] = useState('1');
    const [cooker, setCooker] = useState('1');
    const [neat, setNeat] = useState('1');
    const [steadyIncome, setSteadyIncome] = useState('1');
    const [personality, setPersonality] = useState('1');
    const [spirituality, setSpirituality] = useState('1');
    const [innocence, setInnocence] = useState('1');
    const [premiumPlan, setPremiumPlan] = useState('1');


    useEffect(() => {
        if (editingQuote) {
            setAge(editingQuote.age);
            setNumKids(editingQuote.numKids);
            setNumMarried(editingQuote.numMarried);
            setTertiaryEducation(editingQuote.tertiaryEducation);
            setCooker(editingQuote.cooker);
            setNeat(editingQuote.neat);
            setSteadyIncome(editingQuote.steadyIncome);
            setPersonality(editingQuote.personality);
            setSpirituality(editingQuote.spirituality);
            setInnocence(editingQuote.innocence);
            setPremiumPlan(editingQuote.premiumPlan);
        } else {
            clearForm()
        }
    }, [editingQuote])

    const planLabels = {
        1: 'High',
        2: 'Medium',
        3: 'Low'
    }

    const clearForm = () => {
        setAge('');
        setNumKids('');
        setNumMarried('');
        setTertiaryEducation('');
        setCooker('');
        setNeat('');
        setSteadyIncome('');
        setPersonality('');
        setSpirituality('');
        setInnocence('');
        setPremiumPlan('1');
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        const quoteData = {
            id: editingQuote? editingQuote.id : new Date().toISOString(),
            numKids,
            numMarried,
            tertiaryEducation,
            cooker,
            neat,
            steadyIncome,
            personality,
            spirituality,
            innocence,
            premiumPlan
        }
        dispatch(
            {
                type:editingQuote? "UPDATE_QUOTE": "ADD_QUOTE",
                payload:quoteData,
            }
        );
        
        
        clearForm();
    };

    const handleCancel = () => {
        dispatch({type: "CLEAR_EDITING_QUOTE"})
        clearForm();
    };


    return(
        <Form onSubmit={handleSubmit} className='ticket-form'>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Number of Kids?</Form.Label>
                <Form.Control min='0' max='10' value={numKids} className="form-input" onChange={e => setNumKids(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Bride's Age?</Form.Label>
                <Form.Control value={age} className="form-input" onChange={e => setAge(e.target.value)} >
                    <option>Never married</option>
                    <option>0</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Total number of marriages?</Form.Label>
                <Form.Control as="select" value={numMarried} className="form-input" onChange={e => setNumMarried(e.target.value)}>
                    <option>Never married</option>
                    <option>0</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Education?</Form.Label>
                <Form.Control as="select" value={tertiaryEducation} className="form-input" onChange={e => setTertiaryEducation(e.target.value)}>
                    <option>Tertiary Level</option>
                    <option>High School Level</option>
                    <option>Very educated</option>
                    <option>Not educated</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Able to cook?</Form.Label>
                <Form.Control as="select" value={cooker} className="form-input" onChange={e => setCooker(e.target.value)}>
                    <option>Yes</option>
                    <option>Not really</option>
                    <option>Know the basics</option>
                    <option>No</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>How immaculate?</Form.Label>
                <Form.Control as="select" value={neat} className="form-input" onChange={e => setNeat(e.target.value)}>
                    <option>Very immaculate/Neat</option>
                    <option>Moderate</option>
                    <option>It does not matter</option>
                    <option>Not immaculate/Neat</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Employed?</Form.Label>
                <Form.Control as="select" value={steadyIncome} className="form-input" onChange={e => setSteadyIncome(e.target.value)}>
                    <option>Yes</option>
                    <option>On and Off</option>
                    <option>Temporarily</option>
                    <option>No</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Personality?</Form.Label>
                <Form.Control as="select" value={personality} className="form-input" onChange={e => setPersonality(e.target.value)}>
                    <option>Humble and Obedient</option>
                    <option>Outspoken</option>
                    <option>Introverted</option>
                    <option>Extroverted</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Spirituality?</Form.Label>
                <Form.Control as="select" value={spirituality} className="form-input" onChange={e => setSpirituality(e.target.value)}>
                    <option>Strongly spiritual</option>
                    <option>Christian</option>
                    <option>Catholic</option>
                    <option>Not spiritual</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Body count?</Form.Label>
                <Form.Control as="select" value={innocence} className="form-input" onChange={e => setInnocence(e.target.value)}>
                    <option>0</option>
                    <option>1-2</option>
                    <option>3-4</option>
                    <option>5-10</option>
                </Form.Control>
            </Form.Group>
            <fieldset className='plan-fieldset'>
                <legend>Premium Plan</legend>

                {
                    Object.entries(planLabels).map(([value, label]) => (
                        <label key={value} className='plan-label'>
                            <input
                            type='radio' 
                            value={value} 
                            checked={premiumPlan === value} 
                            className='plan-input'
                            onChange={(e) => setPremiumPlan(e.target.value)}
                            ></input>
                            {label}
                        </label>
                    ))
                }
            </fieldset>

            <Button className={`${btnStyles.Button}`}
              type="submit">Submit</Button>       
        </Form>
    )

}

export default QuoteForm;