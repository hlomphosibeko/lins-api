import React from 'react';
import styles from "../../styles/Quote.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Quote = (props) => {
    const {
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
    } = props;

    // const currentUser = useCurrentUser();
    // const is_owner = currentUser?.username === owner;
    const history = useHistory();


    return (
        <div>Quote</div>
    )







};

export default Quote;