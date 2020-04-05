import React from 'react';
import './AcceptRequest.scss';

export default function AcceptRequest({ onClose, }) {
    const from='David_Chohen';
    const title='I need help with groceries';
    return (
        <section className="accept-request-modal">
            <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
            <div className=" fade-in-modal u-modal-container">
                <h2 className="u-text-header-modal">Someone wants to help!</h2>
                <p>{from} wants to take your task</p>
               <div className="accept-request-img-container">
                    <img src="https://res.cloudinary.com/thelegend27/image/upload/v1586023663/svg/task_complete_image_podlzx.svg"alt="celebration" />
                   </div>
                <p className="thanks-caption">{title}</p>
                <p>Do you accept the help?</p>
                <button className="btn bg-primary complete-button" onClick={() => onClose(true)}>Accept</button>
            </div>
        </section >
    )
}