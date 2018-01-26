interface Action {
  type: string;
  payload?: any;
}

let incrementAction: Action = { type: 'INCREMENT' };
let decrementAction: Action = { type: 'DECREMENT' };
let unknownAction: Action = { type: 'UNKNOWN' };

interface Reducer<T> {
  (state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//Affichage et commandes;
console.log(reducer(0,incrementAction));
console.log(reducer(2,incrementAction));
console.log(reducer(100,decrementAction));
console.log(reducer(100,unknownAction));
