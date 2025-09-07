export const findNotesInArchive = (id, archive) => {
  return archive.some((note) => note.id === id);
};
