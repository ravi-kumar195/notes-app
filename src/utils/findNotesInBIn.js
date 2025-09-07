export const findNotesInBin = (id, deleted) => {
  return deleted.some((note) => note.id === id);
};
