import useAppContext from "../context.js";


const useNewCoreActions = () => {
    const { state, dispatch } = useAppContext();

    const updateNewInternet = (updatedInternet) => {

        dispatch({type: 'UPDATE_NEW_INTERNET', payload: updatedInternet});

    }

    const updateNewInternetCost = (updatedInternetCost) => {

        dispatch({type: 'UPDATE_NEW_INTERNET_COST', payload: updatedInternetCost});

    }

    const updateNewTv = (updatedTv) => {

        dispatch({type: 'UPDATE_NEW_TV', payload: updatedTv});

    }

    const updateNewTvCost = (updatedTvCost) => {

        dispatch({type: 'UPDATE_NEW_TV_COST', payload: updatedTvCost});

    }

    const updateNewCoreNotes = (updatedNotes) => {
        dispatch({type: 'UPDATE_NEW_CORE_NOTES', payload: updatedNotes})
    }
    return { updateNewInternet, updateNewInternetCost, updateNewTv, updateNewTvCost, updateNewCoreNotes }
}

export default useNewCoreActions;