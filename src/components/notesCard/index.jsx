import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import PushPinOutlined from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import { useNotes } from "../../context/context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";

export const NotesCard = ({ title, text, id, isPinned }) => {
  const { notesDispatch, archive } = useNotes();

  const isNotesInArchive = findNotesInArchive(id, archive);

  const onPinClick = (id) => {
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };
  const onArchiveClick = (id) => {
    !isNotesInArchive
      ? notesDispatch({
          type: "ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "UNARCHIVE",
          payload: { id },
        });
  };

  return (
    <div
      className="border border-neutral-800 p-2 rounded-md w-[300px]"
      key={id}
    >
      <div className="flex justify-between">
        <p>{title}</p>
        {!isNotesInArchive ? (
          <button onClick={() => onPinClick(id)}>
            {isPinned ? <PushPinIcon /> : <PushPinOutlined />}
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          <button onClick={() => onArchiveClick(id)}>
            {isNotesInArchive ? <ArchiveIcon /> : <ArchiveOutlinedIcon />}
          </button>
          <button>
            <DeleteOutlineIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
