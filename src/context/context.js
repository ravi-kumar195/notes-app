import { useContext, useReducer, createContext } from "react";
import { notesReducer } from "../reducers/notesreducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    archive: [],
    deleted: [],
    imp: [],
  };
  const [state, notesDispatch] = useReducer(notesReducer, initialState);

  const { title, text, notes, archive, deleted, imp } = state;

  return (
    <NotesContext.Provider
      value={{ title, text, notes, archive, deleted, imp, notesDispatch }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);
export { NotesProvider, useNotes };
