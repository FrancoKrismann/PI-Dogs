import React, { useEffect, useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {pageSelect} from "../../redux/actions/actions"
import previusImage from "../../img/chevron-left-regular-24.png";
import previusTotalImage from "../../img/all-left-regular-24.png";
import nextImage from "../../img/chevron-right-regular-24.png";
import nextTotalImage from "../../img/all-right-regular-24.png";
import styles from "../../Styles/Paginado/Paginado.module.css";



const Paginado = () => {
const {amountPages, Page} = useSelector((state) => state)
const dispatch = useDispatch()
const [visibleButtons, setVisibleButtons] = useState([])
const [activePage, setActivePage] = useState(1);



const handlePaginado = (e) => {
    const number = e.target.value;
    dispatch(pageSelect(number));
    setActivePage(parseInt(number));
};

const handlePrev = () => {
    if (parseInt(Page) > 1) {
    const previusPage = parseInt(Page) - 1;
    dispatch(pageSelect(previusPage));
    setActivePage(previusPage);
    }
};

const handleNext = () => {
    if (parseInt(Page) < parseInt(amountPages)) {
    const nextPage = parseInt(Page) + 1;
    dispatch(pageSelect(nextPage));
    setActivePage(nextPage);
    }
};

const handleInitial = () => {
    dispatch(pageSelect(1));
    setActivePage(1);
};

const handleEnd = () => {
    dispatch(pageSelect(amountPages));
    setActivePage(amountPages);
};

const updateVisibleButtons = () => {
    const buttons = [];

    //Primer botón
    let start = Page - 2;
    if (start < 1) {
    start = 1;
    }

    //Botón final
    let end = start + 4;
    if (end > amountPages) {
    end = amountPages;
    start = end - 4;

    if (start < 1) {
        start = 1;
    }
    }

    for (let i = start; i <= end; i++) {
    buttons.push(i);
    }
    setVisibleButtons(buttons);
};

useEffect(() => {
    updateVisibleButtons();
}, [Page, amountPages]);


return (
    <div className={styles.container}>
    <button
        onClick={handleInitial}
        className={`${styles.buttonsInitial} ${
            Page === activePage ? styles.active : ""
        }`}
    >
        <img src={previusTotalImage} alt="Initial" />
    </button>
    <button
        onClick={handlePrev}
        className={`${styles.buttonPrevius} ${
            Page === activePage ? styles.active : ""
        }`}
    >
        <img src={previusImage} alt="Previus" />
    </button>
    {visibleButtons.map((page) => (
        <button
            key={page}
            value={page}
            onClick={handlePaginado}
            className={`${styles.buttonsNumber}  
            ${
            page === 1 && activePage === 1
                ? styles.activePage
                : styles.buttonsNumber
            } 
            ${page === activePage ? styles.activePage : ""}`}
        >
            {page}
        </button>
    ))}
        <button
        onClick={handleNext}
        className={`${styles.buttonNext} ${
            Page === activePage ? styles.active : ""
        }`}
        >
        <img src={nextImage} alt="Next" />
        </button>
        <button
        onClick={handleEnd}
        className={`${styles.buttonsEnd} ${
            Page === activePage ? styles.active : ""
        }`}
        >
        <img src={nextTotalImage} alt="End" />
    </button>
    </div>
);
};











export default Paginado