import { Fragment } from "react";
import { Navbar } from "../../components/navbar";
import { Sidebar } from "../../components/sidebar";
import { useNotes } from "../../context/context";
import { NotesCard } from "../../components/notesCard";

export const Important = () => {
  const { imp } = useNotes();
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col flex-wrap gap-6 w-screen mt-7">
          {imp?.length > 0 &&
            imp.map(({ id, title, text, isPinned }) => (
              <NotesCard
                key={id}
                id={id}
                title={title}
                text={text}
                isPinned={isPinned}
              />
            ))}
        </div>
      </main>
    </Fragment>
  );
};
