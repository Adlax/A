//Action////////////////////////////////////////////////////////////////////////
interface Action {
  type: string;
  payload?: any;
}

let incrementAction: Action = { type: 'INCREMENT' };
let decrementAction: Action = { type: 'DECREMENT' };
let unknownAction: Action = { type: 'UNKNOWN' };
let plusSevenAction: Action = { type: 'PLUS', payload: 7 };


//Reducer///////////////////////////////////////////////////////////////////////
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

//Store/////////////////////////////////////////////////////////////////////////
class Store<T> {
  private _state: T;
  constructor(private reducer: Reducer<T>, initialState: T) {
    this._state = initialState;
  }
  getState(){
    return this._state;
  }
  dispatch(action: Action){
    this._state = this.reducer(this._state, action);
  }
}

//Affichage et commandes;
let store = new Store<number>(reducer,0);
console.log(store.getState()); //doit donner 0

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); //doit donner 1

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); //doit donner 2

store.dispatch({ type: 'PLUS', payload: 50 });
console.log(store.getState()); //doit donner 52

store.dispatch({ type: 'PLUS', payload: -50 });
console.log(store.getState()); //doit donner 2
