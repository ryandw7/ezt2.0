import useAppContext from "../context";



const useAdditionalActions = () => {

    const { dispatch } = useAppContext();
    
    const updateRep = (rep) => {

        dispatch({ type: 'UPDATE_REP', payload: rep });

    };

    const updateContact = (contact) => {

        dispatch({ type: 'UPDATE_CONTACT', payload: contact });

    };

    const updateAdditionalNotes = (notes) => {
        dispatch({ type: 'UPDATE_ADDITIONAL_NOTES', payload: notes })
    };

    return { updateRep, updateContact, updateAdditionalNotes };

}

export default useAdditionalActions;;