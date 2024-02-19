import { KanbasNavigation } from "./Navigation";

function Kanbas() {
  return (
    <div className="d-flex">
      <div>
        <KanbasNavigation />
      </div>
      <div style={{ flexGrow: 1 }}></div>
    </div>
  );
}
export default Kanbas;
