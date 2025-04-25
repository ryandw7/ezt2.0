import useAppContext from '../context';

const getRep = (state) => state.additional?.rep || '';
const getContact = (state) => state.additional?.contact || '';
const getAdditionalNotes = (state) => state.additional?.additionalNotes || '';

const useAdditionalSelectors = () => {
  const { state } = useAppContext();

  const rep = getRep(state) || '';
  const contact = getContact(state);
  const additionalNotes = getAdditionalNotes(state);

  return { rep, contact, additionalNotes };
};

export default useAdditionalSelectors;
