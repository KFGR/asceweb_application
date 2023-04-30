import Carousel from 'react-bootstrap/Carousel';
// import { Image } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


function IndividualIntervalsExample(props) {
  return (
    <Carousel prevLabel={""} indicators={null} nextLabel={""}  pause={"hover"} style={{width:'100%', maxWidth:'652', height:'auto', overflow:'hidden'}}>
      <Carousel.Item id='myitemcarousel'>
        <Image src={props.image1} fluid style={{objectFit:'contain', width:'752px'}}/>
      </Carousel.Item>
      <Carousel.Item id='myitemcarousel'>
        <Image src={props.image2} fluid style={{objectFit:'contain', width:'752px'}}/>
      </Carousel.Item>
      <Carousel.Item id='myitemcarousel'>
        <Image src={props.image3} fluid style={{objectFit:'contain', width:'752px'}}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;