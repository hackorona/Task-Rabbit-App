import React from 'react';
import './TaskCompleted.scss';

export default function TaskComplete({ onClose }) {
    return (
        <section className="task-complete-modal">
            <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
            <div className=" fade-in-modal u-modal-container">
                <h2 className="u-text-header-modal">Task complete</h2>
                <img src="https://res.cloudinary.com/thelegend27/image/upload/v1586023663/svg/task_complete_image_podlzx.svg"
                    alt="celebration" />
                <p className="thanks-caption">Great job! Have some deeds!</p>
                <div className="coin-math">
                    <div className="math-row">
                        <span>Task</span>
                        <span>13</span>
                    </div>
                    <div className="math-row">
                      
                        <span>+</span>
                    </div>
                    <div className="math-row">
                        <span>Super quick</span>
                        <span>2</span>
                    </div>
                    <hr />
                    <div className="math-result">
                        <img className="coin" src="https://res.cloudinary.com/thelegend27/image/upload/v1586024091/svg/deed-coin_mjplvs.svg"
                            alt="deed-coin" />
                            15
                    </div>
                </div>
                <button className="btn bg-primary complete-button" onClick={() => onClose(false)}>Close</button>
            </div>
        </section>
    )
}