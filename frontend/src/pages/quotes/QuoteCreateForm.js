import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Button.module.css";
import { useRedirect } from "../../hooks/useRedirect";

function QuoteCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  
  const [quoteData, setQuoteData] = useState({
    age: 0,
    numKids: 0,
    numMarried: 0,
    tertiaryEducation: 0,
    cooker: 0,
    neat: 0,
    steadyIncome: 0,
    personality: 0,
    spirituality: 0,
    innocence: 0, 
    premiumPlan: 0,
  });

  const {
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
    premiumPlan,
  } = quoteData;

  
  useEffect(() => {
    const q =
      (1 / (parseInt(1+ innocence) || 1)) *
      (500 / (1 + parseInt(age)) +
        500 / (1 + parseInt(numKids)) +
        500 / (1 + parseInt(numMarried)) +
        500 * parseInt(tertiaryEducation) +
        500 * parseInt(cooker) +
        500 * parseInt(neat) +
        500 * parseInt(steadyIncome) +
        500 * parseInt(personality) +
        500 * parseInt(spirituality));
    const calculated = parseFloat(q / 12).toFixed(2);
    setQuoteData((prev) => ({ ...prev, premiumPlan: calculated }));
  }, [
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
  ]);

  const handleChange = (field) => (event) => {
    setQuoteData({
      ...quoteData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (const key in quoteData) {
      formData.append(key, quoteData[key]);
    }

    try {
      const { data } = await axiosReq.post("/quotes/", formData);
      console.log("Quote created:", data);
      history.push(`/quotes/${data.id}`);
    } catch (err) {
      console.error(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data || {});
      }
    }
  };

  
  const renderRange = (label, field, min, max, description, unit = "") => (
    <div className="container mt-4">
      <h5>{label}</h5>
      <p>{description}</p>
      <input
        type="range"
        className="form-range"
        min={min}
        max={max}
        value={quoteData[field]}
        onChange={handleChange(field)}
      />
      <div className="mt-2">
        <strong>{quoteData[field]}</strong> {unit}
      </div>
      {errors?.[field]?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    </div>
  );

  return (
    <Form onSubmit={handleSubmit} className="ticket-form">
      <Container className="mt-4">
        {renderRange(
          "How old would you prefer your bride to be?",
          "age",
          0,
          100,
          "0 = Too young | 100 = Age is just a number",
          "Years"
        )}
        {renderRange(
          "How many kids do you prefer the bride to have?",
          "numKids",
          0,
          10,
          "0 = No kids | 10 = Lover of kids",
          "Kids"
        )}
        {renderRange(
          "How many times do you prefer the Bride to have been married?",
          "numMarried",
          0,
          10,
          "0 = Never | 10 = Most Marriaged",
          "Times"
        )}
        {renderRange(
          "Does the Bride have any afterschool qualifications?",
          "tertiaryEducation",
          0,
          100,
          "0 = No College Education | 100 = Most Educated",
          "% Educated"
        )}
        {renderRange(
          "Is the Bride able to cook?",
          "cooker",
          0,
          100,
          "0 = Cannot cook | 100 = Chef level",
          "% Cook"
        )}
        {renderRange(
          "How neat do you expect your Bride to be?",
          "neat",
          0,
          100,
          "0 = Not neat | 100 = Very neat",
          "% Neat"
        )}
        {renderRange(
          "How steady the Bride's income must be?",
          "steadyIncome",
          0,
          100,
          "0 = No income | 100 = Wealthy",
          "% Steady"
        )}
        {renderRange(
          "How strong must the Bride's personality be?",
          "personality",
          0,
          100,
          "0 = No Personality | 100 = Strong",
          "% Strong"
        )}
        {renderRange(
          "How strong must the Bride's spirituality be?",
          "spirituality",
          0,
          100,
          "0 = Not spiritual | 100 = Very spiritual",
          "% Spiritual"
        )}
        {renderRange(
          "How much sexual experience should the Bride have?",
          "innocence",
          0,
          100,
          "0 = No experience | 100 = Very experienced",
          "% Experience"
        )}

        <hr />
        <div className="mt-3">
          <h5>Estimated Premium Plan</h5>
          <strong>{premiumPlan}</strong>
        </div>

        <hr />
        <Button
          className={`${btnStyles.Button} ${btnStyles.Brown}`}
          onClick={() => history.goBack()}
        >
          cancel
        </Button>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Brown}`}
          type="submit"
        >
          create
        </Button>
      </Container>
    </Form>
  );
}

export default QuoteCreateForm;

