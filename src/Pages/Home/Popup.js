import React, { useState } from 'react';

const PopupVideo = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (

        <>
            <div className="btn-grup">
                <button className='btn btn-primary' >One</button>
                <button className='btn btn-primary' onClick={openModal} >Two</button>
            </div>
            <div className={`modal ${modalOpen ? 'show' : ''}`}>
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <iframe
                    title='popup'
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/ALyO4vA7sKU"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default PopupVideo;
