import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Quote from "./Quote";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function QuotePage() {
  const { id } = useParams();
  const [quote, setQuote] = useState({ results: []});

  useEffect(() => {
    const handleMount = async () => {
        try{
            const [{data: quote}] = await Promise.all([
                axiosReq.get(`/quotes/${id}`)
            ])
            setQuote({results: [quote]})
            console.log(quote)
        } catch(err){
            console.log(err)
        }
    }
    handleMount()
  }, [id]);


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <Quote {...quote.results[0]} setQuotes={setQuote} />
        <Container className={appStyles.Content}>
          Comments
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default QuotePage;