'use client';
import React, { useState } from 'react'
import Modal , { Styles } from 'react-modal'
import styles from '../page.module.css'
import Image from "next/image";

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const customStyles : Styles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        content: {
            display: 'flex',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            flexDirection: 'column',
            alignItems: 'baseline',
        }
    };

    return (
        <div>
            <img className={styles.searchIcon} src="/search.svg" alt="My Happy SVG" onClick={() => setIsOpen(true)} />
            <div className={styles.searchButtonIconContainer}>
            <div className={styles.closeButton}>
                <button onClick={() => setIsOpen(false)}>X</button>
            </div>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>

                    <form className={styles.form}>
                        <input className={styles.searchInput} type="text" placeholder="Search here..." />
                        <button className={styles.searchButtonIcon} type="submit">
                            <Image src="./searchbutton.svg" alt="yes" width={60} height={60} />
                        </button>
                    </form>
            </Modal>
            </div>
        </div>
    );
}
export default PopUp;