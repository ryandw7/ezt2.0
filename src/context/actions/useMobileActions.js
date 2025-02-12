import useAppContext from "../context";

const useMobileActions = () => {
    
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

    const updateMobileLine = (id, updatedLineObj) => {
        dispatch({})
    }

};

export default useMobileActions;