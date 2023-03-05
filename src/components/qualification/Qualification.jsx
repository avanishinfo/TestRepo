import React, {useState} from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section">
                   
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex":
                     "qualification__button button--flex"}
                     onClick= {() => toggleTab(1)}
                     >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex":
                     "qualification__button button--flex"}
                     onClick= {() => toggleTab(2)}
                     >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" 
                    : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Back-end</h3>

                                <span className="qualification__subtitle">
                                    Oracle - Certification
                                </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Master in Compture Science</h3>

                                <span className="qualification__subtitle">
                                    India - UPTU
                                </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2014
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor in Compture Science</h3>

                                <span className="qualification__subtitle">
                                    India - MCRPV
                                </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2011
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                      
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" 
                    : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Project Design</h3>

                                <span className="qualification__subtitle">
                                    IAMAI - India
                                </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Java Backend | Mobile App</h3>

                                <span className="qualification__subtitle">
                                    NIC - India
                                </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - Present
                                </div>
                            </div>

                        </div>

                    <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Mobile Developer</h3>

                                <span className="qualification__subtitle">
                                    Indian Company
                                </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2014 - 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification