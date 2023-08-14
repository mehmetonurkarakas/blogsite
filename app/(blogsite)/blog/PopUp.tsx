'use client';
import React, { useState } from 'react'
import Modal from 'react-modal'
import styles from '../page.module.css'
const PopUp = () => {

    const [isOpen, setIsOpen] = useState(false)
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    }
    return (
        <div>
            <img className={styles.searchIcon} src="/search.svg" alt="My Happy SVG" onClick={() => setIsOpen(true)} />

            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
                <h1>Search Bar</h1>
                <button onClick={() => setIsOpen(false)}>Close Modal</button>
            </Modal>
        </div>
    )
}
export default PopUp;