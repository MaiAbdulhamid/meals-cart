import React from 'react'
import AvailableMeals from './AvailableMeals/AvailableMeals'
import MealsSummary from './MealsSummary/MealsSummary'

export default function Meals() {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  )
}
