import React from 'react';
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


function GetAQuote() {
    const history = useHistory();

    const handleClick = () => {
        history.push("https://formdump.codeinstitute.net/");
    };

    return (
        <Card style={{ width: '45rem' }} className='text-center'>
            <ListGroup variant="flush" >
                <ListGroup.Item>
                    <h2><i class="fa-solid fa-shield"></i>Lobolo Insurance Coverage Plan</h2>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th><i class="fa-regular fa-file-lines"></i>Policy Overview</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Lobola Insurance offers financial protection and emotional support during one of life's most important traditional commitments. Our plan ensures that if the unexpected happens, you're not financially vulnerable.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th colspan="3"><i class="fa-solid fa-calendar-days"></i>Coverage Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td># Starts: From the signed lobola agreement date</td>
                                <td># Ends: On the wedding day or if the agreement is formally terminated</td>
                            </tr>
                        </tbody>  
                    </Table>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th colSpan={3}><i class="fa-regular fa-money-bill-1"></i>Premium Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Basic Plan Type:</strong> R150/month = R20,000 Maximum Coverage
                                    <div>'Coming Soon'</div>
                                </td>
                                <td>
                                    <strong>Standard Plan Type:</strong> R250/month = R40,000 Maximum Coverage 
                                    <Button 
                                    className={`${btnStyles.Button} ${btnStyles.Brown}`}
                                    type="submit"
                                    onClick={handleClick}>Select Cover Plan</Button>
                                </td>
                                <td>
                                    <strong>Premium Plan Type:</strong> R400/month = R70,000 Maximum Coverage 
                                    <Button 
                                    className={`${btnStyles.Button} ${btnStyles.Brown}`}
                                    type="submit"
                                    onClick={handleClick}>Select Cover Plan</Button>
                                </td>
                            </tr>
                        </tbody>  
                    </Table>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th><i class="fa-solid fa-thumbtack"></i>Exclusions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td># Informal or undocumented lobola agreements</td>
                                <td># Breakeups due to fraud or criminal behavior</td>
                                <td># Non-payment of premiums</td>
                                <td># Events beyond coverage dates</td>
                            </tr>
                        </tbody>  
                    </Table>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th><i class="fa-solid fa-file-lines"></i>Documents Required to apply</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td># Lobola agreement letter (signed by both families)</td>
                                <td># Proof of payment or livestock handover</td>
                                <td># ID copies of both parties</td>
                                <td># Cultural witnesses' contact details (optional but recommended)</td>
                            </tr>
                        </tbody>  
                    </Table>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th><i class="fa-solid fa-phone"></i>Contact Us</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Email:</strong> info@lobolasure.co.za</td>
                                <td><strong>Call:</strong> 0800-LOBOLA(562562)</td>
                                <td><strong>WhatsApp:</strong> +27 73 000 0000</td>
                                <td><strong>Website:</strong> www.lobolasure.co.za</td>
                            </tr>
                        </tbody>  
                    </Table>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default GetAQuote