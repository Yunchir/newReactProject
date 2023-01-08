import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <div style={{ display: "flex"}}>

    <Card style={{ width: '450px'}}>
      <Card.Img variant="top" src= {props.image} alt=""/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        <Button style={{ color: "#D05270"}} variant="light">READ MORE</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;
