import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import styles from "../components/CardGrid.module.sass";

const Card = ({ imageSrc, onClick, activity }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <div className={`card ${styles.card_act}`} onClick={onClick}>
      <audio ref={audioRef} src={`audio/activity/icons_description/${activity}.mp3`} />
      <div className="btn" onClick={togglePlay}>
        <img src={imageSrc} alt="Card" />
        <p><strong className="text-center"> {activity.toUpperCase().replace("_", " ")}</strong></p>
      </div>
    </div>
  );
};

const ActivitiesDescription = () => {
  const router = useRouter();


  const activities_list = ["marcar", "ordenar", "escuchar", "pintar", "hablar", "jugar", "repetir", "recortar", "observar", "competencia_intercultural", "relacionar"]

  const handleComenzar = (event) => {
    event.preventDefault();

    // puedes redirigir al usuario a otra página
    router.push('/actividad'); // Reemplaza  con la ruta a la que quieres redirigir

  };

  return (
    <Layout>
      <header className="row">
        <div className="col-md-8 offset-md-2 d-flex align-items-center">
          <div className="card card-body d-flex align-items-center main-banner">
            <div className="row">
              <h1 className="text-white">¡Bienvenido!</h1>
              <h3 className="text-white">En este portal encontrarás los siguientes tipos de activdades:</h3>

              <div className={`card ${styles.card_grid} ${styles.card_home}`} >
                {activities_list.map((activity, index) => (

                  <Card
                    key={index}
                    imageSrc={`images/icons_description/${activity}.png`}
                    activity={activity}
                  />

                ))}
              </div>

              <div className='row mb-5 mt-3' >
                <div className='col-md-12 text-center'>
                  <button className="w-50 btn btn-success" onClick={handleComenzar}>Comenzar</button>


                </div>

              </div>


            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default ActivitiesDescription;
