import {
  Action,
  Reducer,
  Store,
  createStore
} from 'redux';

interface AppState {
  messages: string[];
}

interface AddMessageAction extends Action {
  message: string;
}

interface DeleteMessageAction extends Action {
  index: number;
}

class MessageActions {
  static addMessage(message: string): AddMessageAction {
    return {
      type: 'ADD_MESSAGE',
      message: message
    };
  }
  static deleteMessage(index: number): DeleteMessageAction {
    return {
      type: 'DELETE_MESSAGE',
      index: index
    };
  }
}

let reducer: Reducer<AppState> =
  (state: AppState = initialState, action: Action) => {
  switch (action.type) {
  case 'ADD_MESSAGE':
    return {
      messages: state.messages.concat((<AddMessageAction>action).message),
    };
  case 'DELETE_MESSAGE':
    let idx = (<DeleteMessageAction>action).index;
    return {
      messages: [
        ...state.messages.slice(0, idx),
        ...state.messages.slice(idx + 1, state.messages.length)
      ]
    };
  default:
    return state;
  }
};

let initialState: AppState = { messages: [] };

//Commandes
let store: Store<AppState> = createStore<AppState>(reducer);
console.log(store.getState()); // -> { messages: [] } pas d initilisation

store.dispatch(MessageActions.addMessage('Kes ki est petit et marron?'));
store.dispatch(MessageActions.addMessage('Un marron!'));
store.dispatch(MessageActions.addMessage('Il est fort ce con!'));
console.log(store.getState());

store.dispatch(MessageActions.deleteMessage(2));
console.log(store.getState());
