export const addNote = ({dispatch}) => {dispatch('ADD_NOTE');};
export const editNote = ({dispatch}, event) => {dispatch('EDIT_NOTE', event.target.value);};
export const deleteNote = ({dispatch}) => {dispatch('DELETE_NOTE');};
export const updateNote = ({dispatch}, note) => {dispatch('SET_ACTIVE_NOTE',note);};
export const toggleFavorite = ({dispatch}) => {dispatch('TOGGLE_FAVORITE');};