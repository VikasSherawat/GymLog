import initialState from './initialState';

export default function addWorkoutPlan(state = initialState.workoutPlan, action){
    switch (action.type){
        case ADD_WORKOUT_PLAN:
            return [...state,action.payload];
        default:
            return state;
    } 
}