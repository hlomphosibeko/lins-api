import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomePage = () => {
    return (
        <Card className="bg-dark text-white">
            <Card.Img
             src="https://res.cloudinary.com/dibjhrwcc/image/upload/v1747603650/hero-image_sf8q4b.png" 
             alt="Hero image" />
            <Card.ImgOverlay>
                <Card.Title>Insuring Tradition. Empowering Responsibility.</Card.Title>
                <Card.Text>
                    Your commitment deserves financial planning. 
                    Our lobola insurance protects you and your family from unexpected costs while honoring cultural values.
                </Card.Text>
                <Button>
                    Get a Quote
                </Button>
                <Button>
                    Learn More
                </Button>
            </Card.ImgOverlay>
        </Card>
        
        
    )
}

export default HomePage