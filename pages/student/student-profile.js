

import styles from "../../styles/Profile.module.css";
import _Head from "../../components/_Head.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Image from "next/image";

export default function StudentProfile() {
    return (
        <><Header />
            <div className={styles.container}>
                <_Head />
                <main className={styles.main}>


                    {/* Div so that mainBox and sideBox are side by side */}
                    <div style={{ width: "100%" }}>
                        {/* The box on the left part of the screen */}
                        <div id={styles.mainBox}>
                            <Image alt="Background Image"
                                src="/background.jpeg"
                                width="813px"
                                height="100px"
                                id={styles.background}></Image>

                            {/* <Image alt="Profile Image"
                            src="/profile_pic.png"
                            width="100px"
                            height="100px"
                            id={styles.profileImg}></Image> */}

                            <div id={styles.profile}>
                                <div>
                                    <h4 id={styles.title} style={{ float: "left" }}>Paul Sanjeet, 14</h4>
                                    <Image alt="Edit Icon"
                                        src="/edit-icon.png"
                                        width="20px"
                                        height="20px"
                                        float="right"></Image>
                                </div>
                                <h4 style={{ margin: "0px" }}>---</h4>
                                <p className={styles.fontSmall} style={{ margin: "0px", color: "#9c9c9c" }}>Boston, Massachusetts</p>

                                <p id={styles.education} className={styles.fontLarge}>Education</p>
                                <div className={styles.textBox} style={{ width: "50%" }}>
                                    <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121" }}>
                                        Frost High School
                                    </p>
                                </div>

                                <p id={styles.email} className={styles.fontLarge}>Email</p>
                                <div className={styles.textBox} style={{ width: "50%" }}>
                                    <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121" }}>
                                        paulsanjeet@frosths.edu
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* The box on the right part of the screen */}
                        <div id={styles.sideBox}>
                            <p className={styles.subtitle}>Assigned Resources</p>

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div className={styles.smallBox} style={{ marginLeft: "20px" }}></div>
                                <div className={styles.smallBox}></div>
                                <div className={styles.smallBox}></div>
                                <div className={styles.smallBox}></div>
                            </div>



                            <p className={styles.subtitle} style={{ marginTop: "50px" }}>Current Mentors</p>

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div className={styles.mentorBox} style={{ marginLeft: "20px" }}></div>
                                <div className={styles.mentorBox}></div>
                                <div className={styles.mentorBox}></div>
                            </div>


                        </div>


                    </div>

                </main>

                <Footer />
            </div ></>
    );
}