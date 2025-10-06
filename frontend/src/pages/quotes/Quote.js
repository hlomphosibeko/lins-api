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










    
};

export default Quote();