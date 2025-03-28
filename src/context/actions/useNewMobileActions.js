import useAppContext from "../context";

const useNewMobileActions = () => {
    
    const { state, dispatch } = useAppContext();

    

    const quickAddMobileLine = () => {
        dispatch({type: 'QUICK_ADD_LINE'})
    }

    const addMobileLine = () => {
        dispatch({type: 'ADD_LINE'})
    }
    const addTablet = () => {
        dispatch({type: 'ADD_TABLET'})
    }
    const addWatch = () => {
        dispatch({type: 'ADD_WATCH'})
    }
    const removeMobileLine = (id) => {
        dispatch({type: 'REMOVE_LINE', payload: id})
    }

    const setIsEdit = (id) => {
        dispatch({type: 'SET_NEW_EDIT', payload: id})
    }
    const updateNewMobileLine = (id, key, value) => {
        dispatch({type: 'UPDATE_LINE', payload: {id, key, value}})
    }

    const updatePricing = () => {
        dispatch({type: 'UPDATE_PRICING'})
    }
    return {addMobileLine, addTablet, addWatch, removeMobileLine, setIsEdit, updateNewMobileLine, updatePricing, quickAddMobileLine}
};

export default useNewMobileActions;