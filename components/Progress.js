import { useState } from "react";
import styles from "./Progress.module.sass";
import classNames from "classnames";

const Progress = ({counter}) => {
 
  // a random int to choose classname
  const classRandomInt =  1;
  const widthBar =  100/4*counter;
  return (
    <div className="pb-2">
  
        <div className="text-left" style={{ width: "fit-content" }}>
          <h5
            className={classNames({
              [`${styles.anim1}`]: classRandomInt === 1,
              [`${styles.anim2}`]: classRandomInt === 2,
              [`${styles.anim3}`]: classRandomInt === 3,
            })}
          >
          </h5>
        </div>
        <div className={styles.progress_container}>
          <div className={`progress ${styles.progress}`}>
          <div
              className={`progress-bar ${styles.progress_bar}`}
              role="progressbar"
              style={{ width: `${widthBar}%` }}
            >
              <div className={`${styles.color}`}></div>
            </div>
          
          </div>
          <div></div>
        </div>
      
  
    </div>
  );
};

export default Progress
;
