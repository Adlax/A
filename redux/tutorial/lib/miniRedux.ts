export interface Action {
  type: string;
  payload?: number;
}

export interface Reducer<T> {
  (state: T,action: Action): T;
}

export ListenerCallback {
  (): void;
}

export UnsubscribeCallback {
  (): void;
}

export class Store<T> {
  private: _state;
  private _listeners: ListenerCallback[] = [];

  constructor(private reducer: Reducer<T>,initialState: T){
    this._state = initialState;
  }

  getState(): T {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state,action);
    this._listeners.forEach( (listener: ListenerCallback) => listener() );
  }

  subscribe(listener: ListenerCallback): UnsubscribeListener {
    this._listeners.push(listener);
    return () => { this._listener = this._listeners.filter(l => l !==listener); };
  }
}
