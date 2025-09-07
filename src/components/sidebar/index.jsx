import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const styles =
      "flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full";
    return isActive
      ? `text-slate-50 bg-indigo-800 ${styles}`
      : `hover:bg-indigo-800 hover:text-slate-50 ${styles}`;
  };
  return (
    <aside className="flex flex-col gap-3 border-r-2 border-gray-200 p-3 w-32 h-screen">
      <NavLink className={getStyles} to="/">
        <HomeOutlinedIcon />
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyles} to="/archive">
        <ArchiveOutlinedIcon />
        <span>Archive</span>
      </NavLink>
      <NavLink className={getStyles} to="/important">
        <LabelImportantOutlinedIcon />
        <span>Important</span>
      </NavLink>
      <NavLink className={getStyles} to="/bin">
        <DeleteOutlineIcon />
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
