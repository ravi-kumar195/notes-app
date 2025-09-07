import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import PushPinOutlined from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { useNotes } from "../../context/context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInBin } from "../../utils/findNotesInBIn";
import LabelImportantOutlineIcon from "@mui/icons-material/LabelImportantOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { findNotesInImp } from "../../utils/findNotesInImp";
export const NotesCard = ({ title, text, id, isPinned }) => {
  const { notesDispatch, archive, deleted, imp } = useNotes();

  const isNotesInArchive = findNotesInArchive(id, archive);
  const IsNotesInBin = findNotesInBin(id, deleted);
  const IsNotesInImp = findNotesInImp(id, imp);

  const onImpClick = (id) => {
    !IsNotesInImp
      ? notesDispatch({
          type: "IMP",
          payload: { id },
        })
      : notesDispatch({
          type: "UN-IMP",
          payload: { id },
        });
  };
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
  const onDeleteClick = (id) => {
    !IsNotesInBin
      ? notesDispatch({
          type: "ADD_TO_BIN",
          payload: { id },
        })
      : notesDispatch({
          type: "DELETE_PERMANENT",
          payload: { id },
        });
  };
  const onRestoreClick = (id) => {
    notesDispatch({
      type: "RESTORE",
      payload: { id },
    });
  };

  return (
    <div
      className="border border-neutral-800 p-2 rounded-md w-45 shadow-lg overflow-hidden hover:shadow-xl"
      key={id}
    >
      <div className="flex justify-between mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="ml-auto">
          <button onClick={() => onImpClick(id)}>
            {!IsNotesInBin && !isNotesInArchive ? (
              IsNotesInImp ? (
                <LabelImportantIcon />
              ) : (
                <LabelImportantOutlineIcon />
              )
            ) : (
              <></>
            )}
          </button>
          {!isNotesInArchive && !IsNotesInBin && !IsNotesInImp ? (
            <button onClick={() => onPinClick(id)}>
              {isPinned ? <PushPinIcon /> : <PushPinOutlined />}
            </button>
          ) : (
            <></>
          )}
          {IsNotesInBin ? (
            <button onClick={() => onRestoreClick(id)}>
              <RestoreFromTrashIcon />
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <hr className="border-t border-slate-400" />
      <div className="flex flex-col mt-2">
        <p>{text}</p>

        {IsNotesInImp && (
          <div className="flex justify-between mt-4 mb-[-20px]">
            <p className=" b-1 text-white bg-slate-600 px-4 rounded-xl">Imp</p>
          </div>
        )}
        <div className="ml-auto">
          <button onClick={() => onArchiveClick(id)}>
            {!IsNotesInBin && !IsNotesInImp ? (
              isNotesInArchive ? (
                <ArchiveIcon />
              ) : (
                <ArchiveOutlinedIcon />
              )
            ) : (
              <></>
            )}
          </button>
          <button onClick={() => onDeleteClick(id)}>
            {IsNotesInBin ? <DeleteIcon /> : <DeleteOutlineIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};
