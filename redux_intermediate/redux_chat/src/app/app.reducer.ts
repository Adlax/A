export interface AppState {
  users: UsersState;
  threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducer<AppState>({
  users: UsersReducer;
  threads: ThreadsReducer;
})

export default rootReducer;
