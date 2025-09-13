import AddIcon from "@mui/icons-material/Add";
import { Navbar } from "../../components/navbar";
import { Fragment } from "react/jsx-runtime";
import { Sidebar } from "../../components/sidebar";

import { useNotes } from "../../context/context";

import { NotesCard } from "../../components/notesCard";

export const Home = () => {
  const { title, text, notes, notesDispatch } = useNotes();
  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };
  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };
  const onAddClick = () => {
    notesDispatch({
      type: "ADD",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };
  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col  w-screen mt-7">
          <div className="flex flex-col w-30 md:w-80 relative self-center">
            <input
              value={title}
              onChange={onTitleChange}
              placeholder="Enter title"
              className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              placeholder="Enter Text"
              className="border h-[100px] border-neutral-800 rounded-b-md focus:outline-none border-t-0 p-1"
            />
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="absolute bottom-1 right-1 bg-indigo-800 rounded-full text-white"
            >
              <AddIcon />
            </button>
          </div>
          <div className="mt-14 ml-10 flex flex-col gap-5">
            {pinnedNotes?.length > 0 && (
              <div>
                <h3>Pinned Notes</h3>
                <div className="flex flex-wrap gap-6">
                  {pinnedNotes?.length > 0 &&
                    pinnedNotes.map(({ title, text, id, isPinned }) => (
                      <NotesCard
                        isPinned={isPinned}
                        key={id}
                        id={id}
                        title={title}
                        text={text}
                      />
                    ))}
                </div>
              </div>
            )}
            <div>
              {pinnedNotes?.length > 0 && <h3 className="mt-4">Other Notes</h3>}
              <div className="flex flex-wrap gap-4 ">
                {otherNotes?.length > 0 &&
                  otherNotes.map(({ title, text, id, isPinned }) => (
                    <NotesCard
                      isPinned={isPinned}
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
