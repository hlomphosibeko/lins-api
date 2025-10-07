import React, { useRef, useState } from "react";

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

    // const [quoteData, setQuoteData] = useState({
    //     age: "0",
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

    // const {
    //     age,
    //     numKids,
    //     numMarried,
    //     tertiaryEducation,
    //     cooker,
    //     neat,
    //     steadyIncome,
    //     personality,
    //     spirituality,
    //     innocence,
    //     premiumPlan} = quoteData;

    // const history = useHistory();    

    // const handleChange = (event) => {
    //     setQuoteData({
    //     ...quoteData,
    //     [event.target.name]: event.target.value,
    //     });
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData();
    
    //     formData.append("age", age);
    //     formData.append("numKids", numKids);
    //     formData.append("numMarried", numMarried);
    //     formData.append("tertiaryEducation", tertiaryEducation);
    //     formData.append("cooker", cooker);
    //     formData.append("neat", neat);
    //     formData.append("steadyIncome", steadyIncome);
    //     formData.append("personality", personality);
    //     formData.append("spirituality", spirituality);
    //     formData.append("innocence", innocence);
    //     formData.append("premiumPlan", premiumPlan);
    
    //     try {
    //       const { data } = await axiosReq.post("/quotes/", formData);
    //       history.push(`/quotes/${data.id}`);
    //     } catch (err) {
    //       console.log(err);
    //       if (err.response?.status !== 401) {
    //         setErrors(err.response?.data);
    //       }
    //     }
    // };

    const inputFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>What age would your potential bride be?</Form.Label>
                <Form.Control as="select" custom>
                    <option value="" disabled selected>Select your option</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                    <option>60</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>May she have kids?</Form.Label>
                <Form.Control as="select" custom>
                    <option value="" disabled selected>Select your option</option>
                    <option>Yes</option>
                    <option>It does not matter</option>
                    <option>No</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>May your bride be previously married?</Form.Label>
                <Form.Control as="select" custom>
                    <option value="" disabled selected>Select your option</option>
                    <option>Not married before</option>
                    <option>Only once</option>
                    <option>It does not matter, I am in love!</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>How educated would you want your bride?</Form.Label>
                <Form.Control as="select" custom>
                    <option value="" disabled selected>Select your option</option>
                    <option>Very educated with Tertiary qualifications.</option>
                    <option>She must be moderately educated</option>
                    <option>Basic education</option>
                    <option>Not educated</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Should your bride be able to cook?</Form.Label>
                <Form.Control as="select" custom>
                    <option value="" disabled selected>Select your option</option>
                    <option>Chef kind of cook</option>
                    <option>Must be able to cook basic meals</option>
                    <option>It does not matter</option>
                    <option>A wife that can't cook. I will cook for her.</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>How immaculate should your bride be?</Form.Label>
                <Form.Control type="range" custom min="1" max="100">
                    {/* <option value="" disabled selected>Select your option</option>
                    <option>Very immaculate</option>
                    <option>moderately immaculate</option>
                    <option>40</option>
                    <option>50</option>
                    <option>60</option> */}
                </Form.Control>
            </Form.Group>

            {/* 
            
            
            
            
            <Form.Group controlId="ControlSelect">
                <Form.Label>How immaculate?</Form.Label>
                <Form.Control as="select" value={neat} onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Very immaculate/Neat</option>
                    <option>Moderate</option>
                    <option>It does not matter</option>
                    <option>Not immaculate/Neat</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="ControlSelect">
                <Form.Label>Employed?</Form.Label>
                <Form.Control as="select" value={steadyIncome} onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Yes</option>
                    <option>On and Off</option>
                    <option>Temporarily</option>
                    <option>No</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="ControlSelect">
                <Form.Label>Personality?</Form.Label>
                <Form.Control as="select" value={personality} onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Humble and Obedient</option>
                    <option>Outspoken</option>
                    <option>Introverted</option>
                    <option>Extroverted</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="ControlSelect">
                <Form.Label>Spirituality?</Form.Label>
                <Form.Control as="select" value={spirituality} onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>Strongly spiritual</option>
                    <option>Christian</option>
                    <option>Catholic</option>
                    <option>Not spiritual</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="ControlSelect">
                <Form.Label>Body count?</Form.Label>
                <Form.Control as="select" value={innocence} onChange={handleChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option>0</option>
                    <option>1-2</option>
                    <option>3-4</option>
                    <option>5-10</option>
                </Form.Control>
            </Form.Group> */}

            <Button
             className={`${btnStyles.Button} ${btnStyles.Brown}`}
             onClick={() => {}}>
                cancel
            </Button>
            <Button
             className={`${btnStyles.Button} ${btnStyles.Brown}`}
             onClick={() => {}}
             type="submit">
                create
            </Button>
        </div>

    );

    return(
        
        <Form>
            <Row>
                <Col md={2} lg={8} className="d-none d-md-block p-0 p-md-2">
                <Container className={appStyles.Content}>{inputFields}</Container>
                </Col>
                <Col className="py-2 p-0 p-md-2" md={4} lg={4}>
                <Container
                    className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                >
                    <div className="d-md-none">{inputFields}</div>
                    <Form.Group className="text-center">
                    
                        <Form.Label
                        className="d-flex justify-content-center"
                        htmlFor="image-upload"
                        >
                        ASSET
                        </Form.Label>

                    </Form.Group>
                    
                </Container>
                </Col>
                
            </Row>
        </Form>
    )

}

export default QuoteCreateForm;