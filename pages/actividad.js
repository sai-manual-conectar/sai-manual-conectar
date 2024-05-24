import { useState } from "react";
import MultiDropdown from "../components/MultiDropDown";
import Layout from "../components/Layout";
import Activity from "../components/Activity";
import Progress from "../components/Progress";

import { activities } from "../profile";

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

              </div>

         
                <div className=" col-md-3">
                  <div className="text-center">
                  <img
                    src="images/cear_home.png"
                    alt="CEAR IDIOMAS"
                    className="w-50 img-fluid img-profile mb-1"
                  />

                  </div>
                

                  <MultiDropdown />
                  <Progress counter={counter} type="learning" />
                  <div className="btn-group d-flex justify-content-between mt-3">
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
           
            </div>
          </div>
        </div>
      </header>
      {/**Second section */}
    </Layout>
  );
};

export default Index;
