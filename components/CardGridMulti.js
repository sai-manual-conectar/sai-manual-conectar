import React from "react";
import { useState } from "react";

import styles from "./CardGrid.module.sass";
import classNames from "classnames";

const Card = ({ imageSrc, onClick }) => {
    return (
        <div className={`card ${styles.card_act}`} onClick={onClick}>
            <img src={imageSrc} alt="Card" />
        </div>
    );
};

const CardGridMulti = (act) => {
    const images = act.images;
    const [selected, setSelected] = useState(0);

    const handleClick = (index) => {
        setSelected(index + 1);
        console.log(`Selected ${index + 1}`);
        // Aquí puedes manejar la lógica de lo que quieres hacer al hacer clic en una tarjeta
    };

    const closeStatus = () => {
        setSelected(0);
        console.log(`Close`);
        // Aquí puedes manejar la lógica de lo que quieres hacer al hacer clic en una tarjeta
    };

    return (
        <div >

            {act.correct && selected > 0 && selected === act.correct && (
                <div className="status-choice alert alert-success d-flex justify-content-between">
                    Correcto!  Sigue así
                    <button className="btn-transparent btn p-0" onClick={() => closeStatus()} >X</button>
                </div>
            )}
            {act.correct && selected > 0 && selected !== act.correct && (
                <div className="status-choice alert alert-danger d-flex justify-content-between">
                    Incorrecto! Vuelve a intentarlo
                    <button className="btn-transparent btn p-0" onClick={() => closeStatus()} >X</button>
                </div>
            )}
            <div className="row">
                <div className="col-md-3 m-auto">
                    <Card imageSrc={act.main_image} />
                </div>
                <div className="col-md-9">
                    {images.map((image_array) => (
                        <div className={styles.card_grid}>
                            {image_array.map((image, index) => (
                                <Card
                                    key={index}
                                    imageSrc={image}
                                    onClick={() => handleClick(index)}
                                />
                            ))}
                        </div>))}
                </div>
            </div>
        </div>
    );
};

export default CardGridMulti;
