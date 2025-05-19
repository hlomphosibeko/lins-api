import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import btnStyles from "../styles/Button.module.css";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
    return (
        <Card className="bg-dark text-white">
            <Card.Img
             src="https://res.cloudinary.com/dibjhrwcc/image/upload/v1747603650/hero-image_sf8q4b.png" 
             alt="Hero image" />
            <Card.ImgOverlay className='text-center'>
                <Card.Title className={styles.Title}>Insuring Tradition. Empowering Responsibility.</Card.Title>
                <Card.Text>
                    Your commitment deserves financial planning. 
                    Our lobola insurance protects you and your family from unexpected costs while honoring cultural values.
                </Card.Text>
                <Button className={`${btnStyles.Button} ${btnStyles.Brown}`}>
                    Get a Quote
                </Button>
                <Button
                 className={`${btnStyles.Button} ${btnStyles.Secondary}`}
                 >
                    Learn More
                </Button>
            </Card.ImgOverlay>
        </Card>


        
        
    )
}

export default HomePage