import { useState } from "react";
import Layout from "../components/Layout";

import { activities } from "../profile";
import Activity from "../components/Activity";

import Progress from "../components/Progress";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";

const Index = () => {
  const [counter, setCounter] = useState(0);

  const handleNextClick = () => {
    setCounter(counter + 1);
  };

  const handlePrevClick = () => {
    setCounter(counter - 1);
  };
  return (
    <Layout>
      {/**Header Card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body main-banner">
            <div className="row">
              <div className="col-md-9">
                {activities.map((act, i) => (
                  <Activity
                    key={i}
                    item={i}
                    act={act}
                    showId={counter}
                  ></Activity>
                ))}
                <Progress type="learning" />
              </div>

              <Zoom right>
                <div className=" col-md-3">
                  <img
                    src="images/cear_home.png"
                    alt="CEAR IDIOMAS"
                    className="img-fluid img-profile"
                  />
                  <div className="btn-group d-flex justify-content-between mt-5">
                    <div>
                      {/**S<h2>Valor: {counter}</h2>*/}
                      {counter > 0 ? (
                        <button onClick={handlePrevClick}>Anterior</button>
                      ) : null}
                    </div>
                    <div>
                      {counter < activities.length - 1 ? (
                        <button onClick={handleNextClick}>Siguiente</button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </header>
      {/**Second section */}
    </Layout>
  );
};

export default Index;
