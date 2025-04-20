import useAppContext from "../context.js";


const useNewCoreActions = () => {
    const { dispatch } = useAppContext();

    const addNewCoreItem = () => {
        dispatch({type:"ADD_NEW_CORE_ITEM"})
    }

    const deleteNewCoreItem = (id) => {
        dispatch({type:"DELETE_NEW_CORE_ITEM", payload: id})
    }

    const updateNewCoreItem = (id, key, value) => {
        
       
            dispatch({type:"UPDATE_NEW_CORE_ITEM", payload:{id, key, value}})
    }
    
    const updateNewCore = (key, value) => {
        dispatch({type: 'UPDATE_NEW_CORE', payload: {key, value}})
    }
    const updateNewInternet = (updatedInternet) => {

        dispatch({type: 'UPDATE_NEW_INTERNET', payload: updatedInternet});

    }

    const updateNewInternetCost = (updatedInternetCost) => {

        dispatch({type: 'UPDATE_NEW_INTERNET_COST', payload: Number(updatedInternetCost)});

    }

    const updateNewTv = (updatedTv) => {

        dispatch({type: 'UPDATE_NEW_TV', payload: updatedTv});

    }

    const updateNewTvCost = (updatedTvCost) => {

        dispatch({type: 'UPDATE_NEW_TV_COST', payload: Number(updatedTvCost)});

    }

    const updateNewCoreNotes = (updatedNotes) => {
        dispatch({type: 'UPDATE_NEW_CORE_NOTES', payload: updatedNotes})
    }
    return { addNewCoreItem, updateNewCoreItem, deleteNewCoreItem, updateNewCore, updateNewInternet, updateNewInternetCost, updateNewTv, updateNewTvCost, updateNewCoreNotes }
}

export default useNewCoreActions;