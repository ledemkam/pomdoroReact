import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   session: {
       value: 1500,
       runningValue: 1500,
   },
   pause: {
       value: 300,
       runningValue: 300,
   },
   isPlaying: false,
   intervalID: undefined,
   cycled:0,
   displayedvalue: {
       value : 1500,
       heading: "work"
   }
}




export const chrono = createSlice({
       name: 'chrono',
       initialState,
       reducers: {
         updateChronoValue: (state,action) => {
            // pour eviter d ecrire a chauq fois action.payload.type,on le met dans une variable
             const choosenState = state[action.payload.type]
            //on block en dessous de 1
            if(choosenState.value + action.payload.value === 0) return
            if(action.payload.type === "session"){
                if(!state.isPlaying){
                    choosenState.value = choosenState.value + action.payload.value
                    choosenState.runningValue = choosenState.value + action.payload.value
                    state.displayedvalue.value = choosenState.runningValue
                }
                else {
                    choosenState.value = choosenState.value + action.payload.value
                }
            }
            else if(action.payload.type === "pause"){
                choosenState.value = choosenState.value + action.payload.value
            }
         },
         tick: (state,action) => {

         },
         setUpChrono: (state, action) => {
            state.isPlaying = true
            state.intervalID = action.payload
         }
       }
})

export function startChrono(action){
    return function(dispatch,getState) {
        const intervalID = setInterval(()=> {
            dispatch(tick())
        },1000)
        dispatch(setUpChrono(intervalID))
        dispatch(tick())
        
    }
}

export  const {updateChronoValue, tick,setUpChrono,} = chrono.actions;
export default chrono.reducer;