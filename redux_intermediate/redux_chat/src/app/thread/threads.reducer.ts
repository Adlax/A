export interface ThreadsEntities {
  [id: string]: Thread;
}

export interface ThreadsState {
  ids: string[];
  entities: ThreadsEntities;
  currentThreadId?: string;
}

const initialState: ThreadsState = {
  ids: [],
  currentThreadId: null,
  entities: {}
}

export const ThreadsReducer =
  (state: ThreadsState = initialState, action: Action): ThreadsState {
    switch(action.type) {
      case ThreadActions.ADD_THREAD:
        const thread = (<ThreadActions.AddThreadAction>action).thread;
        if(state.ids.includes(thread.id)) { return state; }
        return {
          ids: [...state.ids,thread.id],
          currentThreadId: state.currentThreadId,
          entities: Object.assygn({}, state.entities, { [thread.id]: thread })
        };
      case ThreadActions.ADD_MESSAGE:
        const thread = (<ThreadsActions.AddMessageAction>.action).thread;
        const message = (<ThreadsActions.AddMessageAction>.action).message;
        const isRead = message.thread.id===state.currentThreadId ? true: message.isRead;
        const newMessage = Object.assign({}, message, { isRead: isRead });
        const oldThread = state.entities[thread.id];
        const newThread = Object.assign({}, oldThread, { messages: [...oldThread.messages, newMessage] });
        return {
          ids: state.ids,
          currentThreadId: state.currentThreadId,
          entities: Object.assign({}, state.entities, { [thread.id]: newThread })
        };
      case ThreadActions.SELECT_THREAD:
        const thread = (<ThreadsActions.SelectThreadAction>.action).thread;
        const oldThread = state.entities[thread.id];
        const newMessages = oldThread.messages.map(
          (message) => Object.assign({}, message, { isRead: true })
        );
        const newThread = Object.assign({}, oldThread, { messages: newMessages });
        return {
          ids: state.ids,
          currentThreadId: thread.id,
          entities: Object.assign({}, state.entities, { [thread.id]: newThread });
        };
      case default:
        return state;
    }
  }

//selectors pour la chat-nav-bar
export const getThreadsState = (state): ThreadsState => state.threads;

const getCurrenThread = (state: AppState): Thread => {
  let currentThreadId = state.threads.currentThreadId;
  return state.threads.entities[currentThreadId];
}

export const getThreadsEntities = createSelector(
  getThreadsState,
  ( state: ThreadsState ) => state.entities;
);

export const getCurrentThread = createSelector(
  getThreadsEntities,
  getThreadsState,
  ( entities: ThreadsEntities, state: ThreadsState ) => entities[state.currentThreadId]
);

export const getAllThreads = createSelector(
  getThreadsEntities,
  ( entities: ThreadsEntities ) => Object.keys(entities).map( (threadId) => entities[threadId] )
);

export const getUnreadMessagesCOunt = createSelector(
  getAllThreads,
  ( threads: Thread[] ) => threads.reduce(
    (unreadCount: number, thread: Thread) => {
      thread.messages.forEach( (message) => {
        if(!message.isRead) {++unreadCount;}
      });
      return unreadCount;
    },
    0
  )
);
