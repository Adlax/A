import { Action, Reducer, Store } from './lib/miniRedux.ts';

interface AppState {
  messages: string[];
}

interface AddMessageAction extends Action {
  message: string;
}

interface DeleteMessageAction extends Action {
  index: number;
}

let reducer: Reducer<AppState> = (state: AppState, action: Action): AppState => {
  switch(action.type){
    case 'ADD-MESSAGE':
      return { messages: state.messages.concat((<AddMessageAction>action).message) };
    case 'DELETE-MESSAGE':
      let idx = (<DeleteMessageAction>action).index;
      return { messages: [...state.messages.slice(0,idx), ...state.messages.slice(idx+1,state.messages.length)] };
    default:
      return state;
  }
}

//Commandes
let store: Store<AppState> = new Store(reducer, { messages: [] });
console.log(store.getState());

store.dispatch({type: 'ADD-MESSAGE', message: 'Kes ki est petit et marron?'} as AddMessageAction);
store.dispatch({type: 'ADD-MESSAGE', message: 'Un marron!'} as AddMessageAction);
store.dispatch({type: 'ADD-MESSAGE', message: 'Putain il est fort ce con!'} as AddMessageAction);
console.log(store.getState());

store.dispatch({type: 'DELETE-MESSAGE', INDEX: 2} as DeleteMessageAction);
console.log(store.getState());
