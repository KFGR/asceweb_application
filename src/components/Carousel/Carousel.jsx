import Carousel from 'react-bootstrap/Carousel';
// import { Image } from 'react-bootstrap';
import { Image } from 'react-bootstrap';




function IndividualIntervalsExample(props) {
  return (
    <Carousel interval={null}>
      <Carousel.Item slide={false} >
        <Image src={props.image1} fluid/>
      </Carousel.Item>
      <Carousel.Item slide={false}>
        <Image src={props.image2} fluid/>
      </Carousel.Item>
      <Carousel.Item slide={false}>
        <Image src={props.image3} fluid/>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;