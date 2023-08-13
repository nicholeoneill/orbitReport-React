import satData from "./satData";
import styles from "./styling.css";

const Buttons = (filterByType, setSat, displaySats) => {
  // console.log(filterByType);
  // console.log(setSat);
  console.log(displaySats);
  // console.log(satData);
  return (
    <div className={styles.flexContainer}>
      {displaySats
        ? displaySats.map((sat, id) => {
            return (
              <button onClick={() => filterByType(sat)} key={id}>
                {sat} Orbit
              </button>
            );
          })
        : null}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
