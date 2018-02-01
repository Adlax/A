//add thread
export const ADD_THREAD = '[Thread] Add';
export interface AddThreadAction extends Action {
  thread: thread;
}
export const addThread: ActionCreator<AddThreadAction> =
  (thread) => ({
    type: ADD_THREAD,
    thread: thread
  });

//add message dans un thread
export const ADD_MESSAGE = '[Thread] AddMessage';
export interface AddMessageAction extends Action {
  thread: Thread;
  message: Message;
}
export const AddMessage: ActionCreator<AddMessageAction> =
  (thread: Thread, messageArgs: Message): AddMessageAction => {
    const defaults = {
      id: uuid(),
      senAt: new Date(),
      isRead: false,
      thread: thread
    }
    const message: Message = Object.assign({}, defaults, messageArgs);
    return {
      type: ADD_MESSAGE,
      thread: thread,
      message: message,
    }
  }

//selection d un thread (courant)
export const SELECT_THREAD = '[Thread] Select';
export interface SelectThreadAction extends Action {
  thread: Thread;
}
export const selectThread = ActionCreator<SelectThreadAction> =
  (thread) => ({
    type: SELECT_THREAD,
    thread: thread
  })
