import useAppContext from "../context";

const useNewMobileActions = () => {
    
    const { state, dispatch } = useAppContext();

    const lineObj = {
        name: '',
        data: '',
        number: '',
        isBYOD: false
    }

    const addMobileLine = () => {
        dispatch({type: 'ADD_LINE'})
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

    return {addMobileLine, removeMobileLine, setIsEdit, updateNewMobileLine}
};

export default useNewMobileActions;