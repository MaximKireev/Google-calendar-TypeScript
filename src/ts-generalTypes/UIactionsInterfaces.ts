import {ActionType} from '../redux/ActionTypesConstants'

export interface toggleMenuAction {
    type: ActionType.SHOW_HIDE_SIDEBAR
    payload?: Boolean    
}

export interface openEventCreatorWindowAction {
      type: ActionType.OPEN_EVENT_CREATOR_WINDOW,
    
  }
  export interface closeEventCreatorWindowAction {
        type: ActionType.CLOSE_EVENT_CREATOR_WINDOW
  }
  export interface openEventModalPopupAction {
      type: ActionType.OPEN_EVENT_MODAL_POPUP,
      payload: boolean
    
  }
  export interface closeEventModalPopupAction {
   
      type: ActionType.CLOSE_EVENT_MODAL_POPUP
  }


  export interface setMouseCoordinatesAction{
     type: ActionType.SET_MOUSE_COORDINATES,
             payload: {x: number, y: number} 
  }

  export type UIAction = 
  toggleMenuAction | openEventCreatorWindowAction | closeEventCreatorWindowAction |
  openEventModalPopupAction | closeEventModalPopupAction | setMouseCoordinatesAction
