interface Action {
  type: string;
  payload?: any;
}

let incrementAction: Action = { type: 'INCREMENT' };
let decrementAction: Action = { type: 'DECREMENT' };

interface Reducer<T> {
  (state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
  if(action.type==='INCREMENT') { return state + 1; }
  if(action.type==='DECREMENT') { return state - 1; }
  return state;
}

//Affichage;
console.log(reducer(0,incrementAction));
console.log(reducer(2,incrementAction));
console.log(reducer(100,decrementAction));
