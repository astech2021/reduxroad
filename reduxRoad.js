// set initial state
const initialWagonState = {

  supplies: 100,

  distance: 0,

  days: 0,

};

// defining the reducer
const reducer = (state = initialWagonState, action) => {

  switch (action.type) {

    case "gather": {

      return {

        ...state,

        supplies: state.supplies + 15,

        days: state.days + 1,
      };
    }
    case "travel": {
      if(state.supplies >= 0 ){
        return state;
      } else {
      return {
        ...state,
        supplies: state.supplies - 20,
        distance: state.distance + 10,
        days: state.days + action.payload,
      };
   }
  }
    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      };
    }
    default: {
      return state;
    }
  }
};

// defining actions
let actionTravel = {
  type: 'travel',
  payload: 1,
}

let actionGather = {
  type: 'gather',
}

let actionTippedWagon = {
  type: 'tippedWagon',
}

let actionTravelThreeDays = {
  type: 'travel',
  payload: 3,
}

let sellAction = {
  type: 'sell',
}

let buyAction = {
  type: 'buy',
}

let theftAction = {
  type: 'theft',
}

let wagon = reducer(undefined, {});
wagon = reducer(wagon, {type: 'travel', payload: 1})

wagon = reducer(wagon, {type: 'gather'})

wagon = reducer(wagon, {type: 'tippedWagon'})

wagon = reducer(wagon, {type: 'travel', payload: 3})

console.log(wagon)