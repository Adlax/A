//ListenerCallback////////////////////////////////////////////////////////////////////////
interface ListenerCallback {
  (): void;
}

//UnsubscribeCallback////////////////////////////////////////////////////////////////////////
interface UnsubscribeCallback {
  (): void;
}

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
  private _listeners: ListenerCallback[] = [];
  constructor(private reducer: Reducer<T>, initialState: T) {
    this._state = initialState;
  }
  getState(){
    return this._state;
  }
  dispatch(action: Action){
    this._state = this.reducer(this._state, action);
    this._listeners.forEach((listener: ListenerCallback) => listener());
  }
  subscribe(listener: ListenerCallback): UnsubscribeCallback {
    this._listeners.push(listener);
    return () => { this._listeners = this._listeners.filter(l => l !== listener); };
  }
}

//Affichage et commandes;
let store = new Store<number>(reducer,0);
console.log(store.getState()); //doit donner 0

let unsubscribe = store.subscribe( () => {console.log('Subcribe: current state ; ', getState());} );

store.dispatch({ type: 'INCREMENT' });
//doit donner 1 sans faire de console.log avec getState()

store.dispatch({ type: 'INCREMENT' });
//doit donner 2 sans faire de console.log avec getState()

store.dispatch({ type: 'PLUS', payload: 50 });
//doit donner 52 sans faire de console.log avec getState()

store.dispatch({ type: 'PLUS', payload: -50 });
//doit donner 2 sans faire de console.log avec getState()

unsubscribe();
store.dispatch({ type: 'DECREMENT' });
console.log('state is ; ', getState());
//doit donner 1 avec console.log avec getState() puisqu'on a enlever le subscribe
