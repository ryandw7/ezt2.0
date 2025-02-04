import useAppContext from "../context.js";


const useCurrentActions = () => {
    const { state, dispatch } = useAppContext();

    const updateCurrent = (obj) => {

        dispatch({type: 'UPDATE', payload: obj})

    }
    const updateCurrentInternet = (updatedInternet) => {

        dispatch({type: 'UPDATE_INTERNET', payload: updatedInternet});

    }

    const updateCurrentInternetCost = (updatedInternetCost) => {

        dispatch({type: 'UPDATE_INTERNET_COST', payload: updatedInternetCost});

    }

    const updateCurrentTv = (updatedTv) => {

        dispatch({type: 'UPDATE_TV', payload: updatedTv});

    }

    const updateCurrentTvCost = (updatedTvCost) => {

        dispatch({type: 'UPDATE_TV_COST', payload: updatedTvCost});

    }
    return { updateCurrent, updateCurrentInternet, updateCurrentInternetCost, updateCurrentTv, updateCurrentTvCost }
}

export default useCurrentActions;