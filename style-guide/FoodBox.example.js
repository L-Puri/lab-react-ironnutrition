// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';

// Iteration 2 Create a new component named FoodBox that takes the prop food, which is an object. It should display the card with food information coming from the food prop. To render the content, use the structure provided in the file style-guide/FoodBox.example.js.

function FoodBox(props) {
  return (
    <Col>
      <Card
        title={'FOOD_NAME_HERE'}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={'FOOD_IMAGE_HERE'} height={60} alt="food" />
        <p>Calories: FOOD_CALORIES_HERE</p>
        <p>Servings: FOOD_SERVINGS_HERE</p>
        <p>
          <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
