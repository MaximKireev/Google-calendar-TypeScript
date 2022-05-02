import {ActionType} from '../ActionTypesConstants'



  const toggleMenu = () => {
    return {
      type: ActionType.SHOW_HIDE_SIDEBAR
    };
  };


  const openEventCreatorWindow = () => {
    return {
      type: ActionType.OPEN_EVENT_CREATOR_WINDOW,
    };
  }
  const closeEventCreatorWindow = () => {
    return {
      type: ActionType.CLOSE_EVENT_CREATOR_WINDOW
    };
  }
  const openEventModalPopup = (val: boolean) => {
    return {
      type: ActionType.OPEN_EVENT_MODAL_POPUP,
      payload: val
    };
  }
  const closeEventModalPopup = () => {
    return {
      type: ActionType.CLOSE_EVENT_MODAL_POPUP
    };
  }


  const setMouseCoordinates = (coordinates: object) =>{
    return { type: ActionType.SET_MOUSE_COORDINATES,
             payload: coordinates 
            }
  }

  export {
    toggleMenu,
    openEventCreatorWindow,
    closeEventCreatorWindow,
    openEventModalPopup,
    closeEventModalPopup,
    setMouseCoordinates,
  };