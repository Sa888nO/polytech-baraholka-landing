import React from "react";
// import {Landing} from "./Pages/Landing/Landing";
import {Landing} from "./Landing/Landing";
import styles from "./App.module.scss";

function App() {
    return (
        <div className={styles.wrapper}>
            <Landing />
        </div>
    );
}

export default App;
