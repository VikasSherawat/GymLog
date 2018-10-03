export default state = {
    id: 0, // auto generated, sequence
    accessToken: "",
    email: "",
    defaultToken:"myRandomToken",
    userDetails: {
        firstName: "",
        lastName: "",
        picture: "",
    },
    workoutPlan: [
        { // workout Object
            workoutId: "0", 
            workoutName: "",// Name Given by User
            exercises: [
                {       //exercise Object
                    exerciseId: "",
                    workoutLog: [
                        {   //workoutLog object
                            workOutDate: "", // Date Here
                            workoutPlan: [
                                {   // workoutSet Object
                                    setNumber: 0,
                                    count: 0, // weight or time count
                                    unit: kg,
                                }
                            ]
                        }
                    ],
                }
            ]
        },
    ],
}