import React, { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Alert from "react-bootstrap/Alert";
import { useRedirect } from "../../hooks/useRedirect";


function QuoteCreateForm() {
    // useRedirect("loggedOut");
    const [errors, setErrors] = useState({});

    // //const [quoteData, setQuoteData] = useState({
    //     age: "",
    //     numKids: "",
    //     numMarried: "",
    //     tertiaryEducation: "",
    //     cooker: "",
    //     neat: "",
    //     steadyIncome: "",
    //     personality: "",
    //     spirituality: "",
    //     innocence: "",
    //     premiumPlan: "",
    // });
        const [age,setAge] = useState('');
        const [numKids,setNumkids] = useState('');
        const [numMarried,setNumMarried] = useState('');
        const [tertiaryEducation,setTertiaryEducation] = useState('');
        const [cooker,setCooker]=useState('');
        const [neat,setNeat]=useState('');
        const [steadyIncome,setSteadyIncome]=useState('');
        const [personality,setPersonality]=useState('');
        const [spirituality,setSpirituality]=useState('');
        const [innocence,setInnocence]=useState('');
        const [premiumPlan,setPremiumPlan]=useState('1');

    const quoteData = {
        age,
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

        console.log(quoteData)

     const history = useHistory();    

    // // const handleChange = (event) => {
    // //     setQuoteData({
    // //     ...quoteData,
    // //     [event.target.name]: event.target.value,
    // //     });
    // // };
    const quoter = () => {
        const quota = parseFloat((1/parseInt(premiumPlan)*1/parseInt(innocence)*(500/(1+parseInt(age))+500/(1+parseInt(numKids))+500/(1+parseInt(numMarried))+500*parseInt(tertiaryEducation)
                            +500*parseInt(cooker)+500*parseInt(neat)+500*parseInt(steadyIncome)+500*parseInt(personality)+500*parseInt(spirituality)))/12).toFixed(2)
        return quota
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
         const formData = new FormData();
    
        formData.append("age", age);
        formData.append("numKids", numKids);
        formData.append("numMarried", numMarried);
        formData.append("tertiaryEducation", tertiaryEducation);
        formData.append("cooker", cooker);
        formData.append("neat", neat);
        formData.append("steadyIncome", steadyIncome);
        formData.append("personality", personality);
        formData.append("spirituality", spirituality);
        formData.append("innocence", innocence);
        formData.append("premiumPlan", premiumPlan);
         console.log(formData)
        try {
          const { data } = await axiosReq.post("/quotes/", formData);
          console.log("Quote created:", data);
          history.push(`/quotes/${data.id}`);
        } catch (err) {
          console.log(err);
          if (err.response?.status !== 401) {
            setErrors(err.response?.data);
          }
        }
       // clearForm()
    };

    

    // const clearForm = ()=> {
  
    //             setAge('');
    //             SetNumkids('');
    //             SetNummarried('');
    //             SetTetiaryeducation('');
    //             SetCooker('');
    //             SetNeat('');
    //             SetStadyincome('');
    //             SetPersonality('');
    //             SetSpirituality('');
    //             SetInnocence('');
    //             SetPlan('1');


    // }

    // const handleCancel = () => {
    //     //dispatch({type: "CLEAR_EDITING_QUOTE"})
    //     clearForm();
    // };



    // const textFields = (
    //     <div className="text-center">
    //         <Form>
    //         <Form.Group contolId="formBasicRange">
    //             <Form.Label >What age would your potential bride be?</Form.Label>
    //             <Form.Control type="range" custom min={0} max={100}  value={age}  onChange={handleChange}>
    //                 {/* <option value="" disabled selected>Select your option</option> */}
    //                 {/* <option > 20</option>
    //                 <option > 30</option>
    //                 <option >40</option>
    //                 <option >50</option>
    //                 <option >60</option> */}
    //             </Form.Control>
    //         </Form.Group>

{/*             
            <Form.Group>
                <Form.Label>May she have kids?</Form.Label>
                <Form.Control as="select" custom onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Yes</option>
                    <option>It does not matter</option>
                    <option>No</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>May your bride be previously married?</Form.Label>
                <Form.Control as="select" custom onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Not married before</option>
                    <option>Only once</option>
                    <option>It does not matter, I am in love!</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>How educated would you want your bride?</Form.Label>
                <Form.Control as="select" custom onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Very educated with Tertiary qualifications.</option>
                    <option>She must be moderately educated</option>
                    <option>Basic education</option>
                    <option>Not educated</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Should your bride be able to cook?</Form.Label>
                <Form.Control as="select" custom onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Chef kind of cook</option>
                    <option>Must be able to cook basic meals</option>
                    <option>It does not matter</option>
                    <option>A wife that can't cook. I will cook for her.</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>How immaculate should your bride be?</Form.Label>
                <Form.Control as="select" custom min="1" max="100" onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Very immaculate</option>
                    <option>moderately immaculate</option>
                    <option>40</option>
                    <option>50</option>
                    <option>60</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Should your bride be employed?</Form.Label>
                <Form.Control as="select" custom onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Chef kind of cook</option>
                    <option>Must be able to cook basic meals</option>
                    <option>It does not matter</option>
                    <option>A wife that can't cook. I will cook for her.</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>How strong should her personality be?</Form.Label>
                <Form.Control as="select" custom onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Chef kind of cook</option>
                    <option>Must be able to cook basic meals</option>
                    <option>It does not matter</option>
                    <option>A wife that can't cook. I will cook for her.</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>What about her spirituality, what is your preferrence?</Form.Label>
                <Form.Control as="select" custom onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Chef kind of cook</option>
                    <option>Must be able to cook basic meals</option>
                    <option>It does not matter</option>
                    <option>A wife that can't cook. I will cook for her.</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>How pure do you prefer your bride to be?</Form.Label>
                <Form.Control as="select" custom onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>She must be a virgin</option>
                    <option>Must be able to cook basic meals</option>
                    <option>It does not matter</option>
                    <option>A wife that can't cook. I will cook for her.</option>
                </Form.Control>
            </Form.Group>
            
             */}



    //         <Button
    //          className={`${btnStyles.Button} ${btnStyles.Brown}`}
    //          onClick={() => {}}>
    //             cancel
    //         </Button>
    //         <Button
    //          className={`${btnStyles.Button} ${btnStyles.Brown}`}
    //          onClick={() => {}}
    //          type="submit">
    //             create
    //         </Button>
    //         </Form>
    //     </div>

    // );

      
    return(
        
        // <Form onSubmit={handleSubmit}>
        //     {/* <Row>
        //         <Col md={2} lg={8} className="d-none d-md-block p-0 p-md-2">
        //         <Container className={appStyles.Content}>{textFields}</Container>
        //         </Col>
        //         <Col className="py-2 p-0 p-md-2" md={4} lg={4}>
        //         <Container
        //             className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
        //         >
        //             <div className="d-md-none">{textFields}</div>
        //             <Form.Group className="text-center">
                    
        //                 <Form.Label
        //                 className="d-flex justify-content-center"
        //                 htmlFor="image-upload"
        //                 >
        //                 <div>{age}</div>
        //                 </Form.Label>

        //             </Form.Group>
                    
        //         </Container>
        //         </Col>
                
        //     </Row> */}
        // </Form>
        
        // const quoter()=>{

        //     return 
        // }
        <form  onSubmit={handleSubmit}  className="ticket-form">
            {/* <div><label for="customRange2" class="form-label">Potential Bride's Age</label>
            <input type="range" value={age} class="form-range" min="0" max="100" id="customRange2" onChange={e => setAge(e.target.value)}></input></div>
                {/* <div>
                <label>Potential Bride's Age</label>
                <input type="text" value={age} className="form-input" onChange={e => setAge(e.target.value)}></input>
            </div> */} 
            <div className="container mt-4">
                <h5>How old would you prefer your bride to be?</h5>
                <p>
                    <strong>0</strong> = Too young &nbsp; | &nbsp;
                    <strong>100</strong> = Age is just a number
                </p>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <div className="mt-6">
                    <strong>{age}</strong> Years
                </div>
            </div>
            <div className="container mt-4">
                <h5>How many kids do you prefer the bride to have?</h5>
                <p>
                    <strong>0</strong> = No kids &nbsp; | &nbsp;
                    <strong>10</strong> = Lover of kids
                </p>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="10"
                    value={numKids}
                    onChange={(e) => setNumkids(e.target.value)}
                />
                <div className="mt-6">
                    <strong>{numKids}</strong> Kids
                </div>
            </div>
            <div className="container mt-4">
                <h5>How many times do you prefer the Bride to have been married?</h5>
                <p>
                    <strong>0</strong> = Never &nbsp; | &nbsp;
                    <strong>10</strong> = Most Marriaged
                </p>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="10"
                    value={numMarried}
                    onChange={(e) => setNumMarried(e.target.value)}
                />
                <div className="mt-6">
                    <strong>{numMarried}</strong> Times
                </div>
            </div>
            <div className="container mt-4">
                <h5>Does The Bride have any afterschool qualifications?</h5>
                <p>
                    <strong>0</strong> = No College Education &nbsp; | &nbsp;
                    <strong>100</strong> = Most Educated
                </p>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={tertiaryEducation}
                    onChange={(e) => setTertiaryEducation(e.target.value)}
                />
                <div className="mt-6">
                    <strong>{tertiaryEducation}</strong> % Educated
                </div>
            </div>
            <div className="container mt-4">
                <h5>Is the Bride able to cook?</h5>
                <p>
                    <strong>0</strong> = Cannot cook &nbsp; | &nbsp;
                    <strong>100</strong> = At Chef level
                </p>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={cooker}
                    onChange={(e) => setCooker(e.target.value)}
                />
                <div className="mt-6">
                    <strong>{cooker}</strong> % Cook
                </div>
            </div>
            <div className="container mt-4">
                <h5>How neat do you expect your Bride to be?</h5>
                <p>
                    <strong>0</strong> = Not neat &nbsp; | &nbsp;
                    <strong>100</strong> = Most Educated
                </p>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={neat}
                    onChange={(e) => setNeat(e.target.value)}
                />
                <div className="mt-6">
                    <strong>{neat}</strong> % Educated
                </div>
            </div>
            <div className="container mt-4">
                <h5>How steady the Bride's income must be?</h5>
                <p>
                    <strong>0</strong> = No Income &nbsp; | &nbsp;
                    <strong>100</strong> = Wealthy
                </p>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={steadyIncome}
                    onChange={(e) => setSteadyIncome(e.target.value)}
                />
                <div className="mt-6">
                    <strong>{steadyIncome}</strong> % Steady
                </div>
            </div>
            <div className="container mt-4">
                <h5>How strong must the Bride's personality be?</h5>
                <p>
                    <strong>0</strong> = No Personality &nbsp; | &nbsp;
                    <strong>100</strong> = Strong
                </p>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={personality}
                    onChange={(e) => setPersonality(e.target.value)}
                />
                <div className="mt-6">
                    <strong>{personality}</strong> % Strong
                </div>
            </div>
            <div className="container mt-4">
                <h5>How strong must the Bride's spirituality be?</h5>
                <p>
                    <strong>0</strong> = No Spiritual &nbsp; | &nbsp;
                    <strong>100</strong> = Very Spiritual
                </p>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={spirituality}
                    onChange={(e) => setSpirituality(e.target.value)}
                />
                <div className="mt-6">
                    <strong>{spirituality}</strong> % Strong
                </div>
            </div>
            <div className="container mt-4">
                <h5>How much sexual experience should the bride have?</h5>
                <p>
                    <strong>0</strong> = No Experience &nbsp; | &nbsp;
                    <strong>100</strong> = Very Experinced
                </p>
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={innocence}
                    onChange={(e) => setInnocence(e.target.value)}
                />
                <div className="mt-6">
                    <strong>{innocence}</strong> % Experience
                </div>
            </div>




            {/* <div>
                <label>Bride's number of kids</label>
                <input type="text" value={numKids} className="form-input" onChange={e => setNumkids(e.target.value)}></input>

            </div>
            <div>
                <label>How many times has the Bride been married?</label>
                <input type="text" value={numMarried} className="form-input" onChange={e => setNumMarried(e.target.value)}></input>

            </div> 
            <div>
                <label>Does The Bride have any afterschool qualification?</label>
                <input type="text" value={tertiaryEducation} className="form-input" onChange={e => setTertiaryEducation(e.target.value)}></input>
            </div>
            <div>
              <label>Is the Bride able to cook</label>
                <input type="text" value={cooker} className="form-input" onChange={e => setCooker(e.target.value)}></input>
            </div> */}
            {/* <div>
              <label>How neat do you expect your Bride to be?</label>
                <input type="text" value={neat} className="form-input" onChange={e => setNeat(e.target.value)}></input>
            </div>
            <div>
              <label>How stady the Bride's income must be?</label>
                <input type="text" value={steadyIncome} className="form-input" onChange={e => setSteadyIncome(e.target.value)}></input>
            </div>
            <div>
              <label>How strong must the Bride's personality be?</label>
                <input type="text" value={personality} className="form-input" onChange={e => setPersonality(e.target.value)}></input>
            </div>
            <div>
              <label>How strong must the Bride's spirituality be?</label>
                <input type="text" value={spirituality} className="form-input" onChange={e => setSpirituality(e.target.value)}></input>
            </div>
            <div>
              <label>How much sexual experience should the bride be?</label>
                <input type="text" value={innocence} className="form-input" onChange={e => setInnocence(e.target.value)}></input>
            </div> */}
            <div>{quoter()}</div>

        {/* <button type="submit" className="button">Submit</button>
        {editingQuote && (
            <button className="button" onClick={handleCancel}>Cancel Edit</button>  */}
            {/* <button type="submit" className="button">Submit</button> */}
        <Button
             className={`${btnStyles.Button} ${btnStyles.Brown}`}
             //onClick={() => {handleCancel}}
             >
                cancel
            </Button>
            <Button
             className={`${btnStyles.Button} ${btnStyles.Brown}`}
             onClick={() => {}}
             type="submit">
                create
            </Button>
        
    </form>
    )

};

export default QuoteCreateForm;