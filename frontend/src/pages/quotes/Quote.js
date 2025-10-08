import React from 'react';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

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

  const currentUser = useCurrentUser();
  // const is_owner = currentUser?.username === owner;

  const quoter = () => {
        const quota = parseFloat((1/parseInt(premiumPlan)*1/parseInt(innocence)*(500/(1+parseInt(age))+500/(1+parseInt(numKids))+500/(1+parseInt(numMarried))+500*parseInt(tertiaryEducation)
                            +500*parseInt(cooker)+500*parseInt(neat)+500*parseInt(steadyIncome)+500*parseInt(personality)+500*parseInt(spirituality)))/12).toFixed(2)
        return quota
    }

  return <Card className={styles.Post}>
    <Card.Body>
      <Media className="align-items-center justify-content-between">
        <Link to={`/quotes/${premiumPlan}`}>
        </Link>
        {premiumPlan}
      </Media>
    </Card.Body>
  </Card>
}

export default Quote