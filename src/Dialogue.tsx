import { useEffect, useState } from "react";
import { dialogues } from "./dialogues";
import "./Dialogue.css";

function Dialogue() {
  document.title = "Bain's Dialogues";
  const [search, setSearch] = useState("");
  const [filteredDialogues, setFilteredDialogues] = useState(() => dialogues);

  useEffect(() => {
    setFilteredDialogues(
      dialogues.filter((d) => d.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <div>
      <h1>Dialogue Lists</h1>
      <input
        type="text"
        placeholder="Enter Bain's Dialogue Here"
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="table">
        {filteredDialogues.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </span>
    </div>
  );
}

export default Dialogue;
