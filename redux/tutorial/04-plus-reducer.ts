interface Action {
  type: string;
  payload?: any;
}

let incrementAction: Action = { type: 'INCREMENT' };
let decrementAction: Action = { type: 'DECREMENT' };
let unknownAction: Action = { type: 'UNKNOWN' };
let plusSevenAction: Action = { type: 'PLUS', payload: 7 };

interface Reducer<T> {
  (state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'PLUS':
      return state + action.payload;
    default:
      return state;
  }
}

//Affichage et commandes;
console.log(reducer(100,plusSevenAction));
console.log(reducer(100,{ type: 'PLUS', payload: 50 }));
console.log(reducer(100,{ type: 'PLUS', payload: -50 }));
