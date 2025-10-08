import React, { useRef, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
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
    const history = useHistory();
    
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
        
        <form  onSubmit={handleSubmit}  className="ticket-form">
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
            {errors?.age?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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
            {errors?.numKids?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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
            {errors?.numMarried?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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
            {errors?.tertiaryEducation?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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
            {errors?.cooker?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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
            {errors?.neat?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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
            {errors?.steadyIncome?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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
            {errors?.personality?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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
            {errors?.spirituality?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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
            {errors?.innocence?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
            
            <div>{quoter()}</div>

       
        <Button
             className={`${btnStyles.Button} ${btnStyles.Brown}`}
             onClick={() => history.goBack()}
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