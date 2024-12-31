import { useState,useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Spinner } from "react-bootstrap";
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import img1 from './image/HomePage-slider-img1.jpg';
import img2 from './image/HomePage-slider-img2.jpg';
import img3 from './image/HomePage-slider-img3.jpg';

import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const cardData = [
  { id: 1, title: 'Card 1', text: 'This is card 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Card 2', text: 'This is card 2', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Card 3', text: 'This is card 3', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Card 4', text: 'This is card 4', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Card 5', text: 'This is card 5', image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Card 6', text: 'This is card 6', image: 'https://via.placeholder.com/150' },
  { id: 7, title: 'Card 7', text: 'This is card 7', image: 'https://via.placeholder.com/150' },
  { id: 8, title: 'Card 8', text: 'This is card 8', image: 'https://via.placeholder.com/150' },
];

const LoadingExample = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate loading for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      {loading ? (
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <h1>Content Loaded</h1>
      )}
      <Button variant="primary" className="mt-3" onClick={() => setLoading(true)}>
        Reload
      </Button>
    </div>
  );
};

const Home = () => {
    //return <h1>This Is Home Page</h1>
    return(
      <>
          <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={img1} alt='img' className='w-100' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt='img' className='w-100' />
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt='img' className='w-100' />
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    <br/>

        <Container className="mt-5">
      <Row>
        {cardData.map((card) => (
          <Col key={card.id} sm={6} md={3} lg={3} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={card.image} alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <LoadingExample/>
    </Container>
      
      </>
    )
}
export default Home;