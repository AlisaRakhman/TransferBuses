import React from 'react';
import styles from './FooterComponent.module.css';
import {Link} from 'react-router-dom';
import {buttonDataTravelTips} from "./footerButtonsData";


const Button = ({text, to}) => {
    return (
        <div className={styles.buttonsDiv}>
            <Link to={to} className={styles.actionBtn}>
                {text}
            </Link>
        </div>
    );
};

const FooterComponent = () => {

    return (
        <div className={styles.containerFooter}>
            <div className={styles.customDivider}></div>
            <div className={styles.buttons}>
                {buttonDataTravelTips.map((button) => (
                    <Button key={button.to} text={button.text} to={button.to}/>
                ))}
            </div>
        </div>
    );
};

export default FooterComponent;