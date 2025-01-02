// import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
// import { ProgressBar } from "react-bootstrap";
//import { useLocation } from "react-router-dom";
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

/*const LoadingExample = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    setProgress(0);

    // Simulate progress increase
    interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10; // Adjust speed here
      });
    }, 100); // Adjust speed here

    // Clear progress when route change completes
    const timeout = setTimeout(() => {
      setProgress(100);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      setProgress(0);
    };
  }, [location]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1030 }}>
      <ProgressBar now={progress} striped animated style={{ height: '4px' }} />
    </div>
  );
};*/

/*const TopProgressBar = ({ onReset }) => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    setProgress(0);

    // Simulate progress increase
    interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10; // Adjust speed here
      });
    }, 100); // Adjust speed here

    // Clear interval when unmounting or location changes
    return () => {
      clearInterval(interval);
    };
  }, [location]);

  const resetProgress = () => {
    setProgress(0);
    onReset();
  };

  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1030 }}>
        <ProgressBar now={progress} striped animated style={{ height: '4px' }} />
      </div>
      {progress === 100 && (
        <div className="text-center mt-3">
          <Button variant="primary" onClick={resetProgress}>
            Reset Progress Bar
          </Button>
        </div>
      )}
    </div>
  );
};*/

/*const TopLoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  function handleButtonClick() 
  {
    setLoading(true); // Show progress bar
    setProgress(0);   // Reset progress
    let value = 0;

    const interval = setInterval(() => {
      value += 10; // Increment progress
      setProgress(value);
      if (value >= 100) {
        clearInterval(interval); // Stop progress update
        setTimeout(() => setLoading(false), 500); // Hide progress bar after completion
      }
    }, 300); // Adjust speed of loading here
  };

  return (
    <div>
      {/* Top fixed progress bar */
      /*{loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 9999,
          }}
        >
          <ProgressBar now={progress} style={{ height: "5px" }} />
        </div>
      )}
      <div className="container mt-5">
        <h3>Top Loading Bar Example</h3>
        <Button onClick={handleButtonClick}>Start Loading</Button>
      </div>
    </div>
  );
};*/

const Home = () => {
    //return <h1>This Is Home Page</h1>
  //   const [progress, setProgress] = useState(0);
  // const [loading, setLoading] = useState(false);

  // function handleButtonClick() 
  // {
  //   setLoading(true); // Show progress bar
  //   setProgress(0);   // Reset progress
  //   let value = 0;

  //   const interval = setInterval(() => {
  //     value += 10; // Increment progress
  //     setProgress(value);
  //     if (value >= 100) {
  //       clearInterval(interval); // Stop progress update
  //       setTimeout(() => setLoading(false), 1000); // Hide progress bar after completion
  //     }
  //   }, 500); // Adjust speed of loading here
  // };
    return(
      <>
      {/* <div>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 9999,
          }}
        >
          <ProgressBar now={progress} style={{ height: "5px" }} />
        </div>
      )}
      </div> */}
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
      {/* <LoadingExample/> */}
      {/* <TopProgressBar onReset={() => console.log('Progress Bar Reset')} /> */}
      {/* <TopLoadingBar/> */}
      {/* <Container>
      <Button onClick={handleButtonClick}>Start Loading</Button>
        <Button onClick={handleButtonClick}>Click Hera</Button>
      </Container> */}
    </Container>
      
      </>
    )
}
export default Home;