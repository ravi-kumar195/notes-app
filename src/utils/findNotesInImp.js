export const findNotesInImp = (id, imp) => {
  return imp.some((note) => note.id === id);
};
