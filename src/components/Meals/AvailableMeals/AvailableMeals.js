import { DUMMY_MEALS } from "../../../services/meals";
import Card from "../../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
