import React from 'react';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import styles from "../../styles/Post.module.css";
import styles from "../../styles/PostCreateEditForm.module.css";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import QuoteCreateForm from './QuoteCreateForm';

const Quote = (props) => {
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
    premiumPlan
  } = props;

  console.log(premiumPlan)
  const currentUser = useCurrentUser();
  // const is_owner = currentUser?.username === owner;

  

  // const quoter = () => {
  //       const quota = parseFloat((1/parseInt(premiumPlan)*1/parseInt(innocence)*(500/(1+parseInt(age))+500/(1+parseInt(numKids))+500/(1+parseInt(numMarried))+500*parseInt(tertiaryEducation)
  //                           +500*parseInt(cooker)+500*parseInt(neat)+500*parseInt(steadyIncome)+500*parseInt(personality)+500*parseInt(spirituality)))/12).toFixed(2)
  //       return quota
  //   }
  //   console.log(quoter)

  return( <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${styles.Container} d-flex flex-column justify-content-center`}
          >
                        <div>{premiumPlan}</div>

          </Container>
        </Col>
        
      </Row>
    </Form>
  )
}

export default Quote