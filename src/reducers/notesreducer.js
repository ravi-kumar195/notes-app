import { v4 as uuid } from "uuid";
export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD":
      return {
        ...state,
        notes: [
          ...state.notes,
          { text: state.text, title: state.title, id: uuid(), isPinned: false },
        ],
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "IMP":
      return {
        ...state,
        imp: [...state.imp, state.notes.find(({ id }) => id === payload.id)],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "UN-IMP":
      return {
        ...state,
        notes: [...state.notes, state.imp.find(({ id }) => id === payload.id)],
        imp: state.imp.filter(({ id }) => id !== payload.id),
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };
    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };
    case "ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          state.notes.find(({ id }) => id === payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "UNARCHIVE":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.archive.find(({ id }) => id === payload.id),
        ],
        archive: state.archive.filter((note) => note.id !== payload.id),
      };
    case "ADD_TO_BIN":
      const noteFromNotes = state.notes.find(({ id }) => id === payload.id);
      const noteFromArchive = state.archive.find(({ id }) => id === payload.id);
      const noteFromImp = state.imp.find(({ id }) => id === payload.id);
      const noteToDelete = noteFromNotes || noteFromArchive || noteFromImp;
      return {
        ...state,
        deleted: noteToDelete
          ? [...state.deleted, noteToDelete]
          : state.deleted,
        notes: state.notes.filter(({ id }) => id !== payload.id),
        archive: state.archive.filter(({ id }) => id !== payload.id),
        imp: state.imp.filter(({ id }) => id !== payload.id),
      };
    case "DELETE_PERMANENT":
      return {
        ...state,
        deleted: state.deleted.filter(({ id }) => id !== payload.id),
      };
    case "RESTORE":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.deleted.find(({ id }) => id === payload.id),
        ],
        deleted: state.deleted.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
