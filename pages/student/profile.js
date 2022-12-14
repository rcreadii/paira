

import styles from "../../styles/Profile.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import Footer from "../../components/Footer.js";
import Image from "next/image";
import EditIcon from '@mui/icons-material/Edit';
import MentorCardNarrow from "../../components/MentorCardNarrow.js";
import Link from 'next/link';
import QuizIcon from '@mui/icons-material/Quiz';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { LensTwoTone } from "@mui/icons-material";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function StudentProfile({student}) {
    const [editOn, setEditOn] = useState(false);

    let studentHardCoded = {
            age: "",
            education: 'Frost High School',
            email: 'paulsanjeet@frosths.edu',
            location: 'Boston, Massachusetts',
            name: "Paul Sanjeet"
        };
    
    let mentor = {
        name: 'Gina Wee',
        mentorSpecialty: 'Personal'
    };

    const id = 3;
    const endpoint = `/api/student/profile/${id}`;
    const { data, error } = useSWR(endpoint, fetcher);
    console.log({data, error});

    // if error return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

    const [education, setEducation] = useState('Frost High School');
    const [email, setEmail] = useState('paulsanjeet@frosths.edu');
    const [location, setLocation] = useState('Boston, Massachusetts');

    return (
        <>
            <_Head />
            <HeaderStudent />
            <div className={commonStyles.container} id={styles.profileStudent}>
                <main className={commonStyles.main} style={{ paddingTop: "50px" }}>

                    {/* Div so that mainBox and sideBox are side by side */}
                    <div style={{ width: "100%" }}>
                        {/* The box on the left part of the screen */}
                        <div id={styles.mainBox}>
                            <Image alt="Background Image"
                                src="/background.jpeg"
                                width="822px"
                                height="100px"
                                id={styles.background}></Image>

                            {/* <Image alt="Profile Image"
                            src="/profile_pic.png"
                            width="100px"
                            height="100px"
                            id={styles.profileImg}></Image> */}

                            <div id={styles.profile}>
                                <div style={{ width: "100%" }}>
                                    <h4 id={styles.title} style={{ float: "left" }}>Paul Sanjeet</h4>

                                    <div id={styles.icon}>
                                        <EditIcon alt="Edit Icon"
                                            src="/edit-icon.png"
                                            width="20px"
                                            height="20px"
                                            onClick={() => setEditOn(!editOn)}
                                        > </EditIcon>
                                    </div>
                                </div>
                                <br></br>
                                <h4 style={{ margin: "0px" }}>---</h4>
                                {editOn ? <input type="text" className={styles.fontSmall} style={{ margin: "0px", color: "#9c9c9c" }} value={location} onChange={(event) => setLocation(event.target.value)} />
                                    : <p className={styles.fontSmall} style={{ margin: "0px", color: "#9c9c9c" }}>{location}</p>}

                                <p id={styles.education} className={styles.fontLarge}>Education</p>

                                {editOn ? <input className={styles.fontSmall} style={{ margin: "0px", color: "#212121", lineHeight: "1.6", width: "50%" }} type="text" value={education} onChange={(event) => setEducation(event.target.value)} /> :
                                    <div className={styles.textBox} style={{ width: "50%" }}>
                                        <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121", lineHeight: "1.6" }}>
                                            {education}
                                        </p>
                                    </div>}


                                <p id={styles.email} className={styles.fontLarge}>Email</p>
                                {editOn ? <input className={styles.fontSmall} style={{ margin: "0px", color: "#212121", lineHeight: "1.6", width: "50%" }} type="text" value={email} onChange={(event) => setEmail(event.target.value)} /> : <div className={styles.textBox} style={{ width: "50%" }}>
                                    <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121", lineHeight: "1.6" }}>
                                        {email}
                                    </p>
                                </div>}
                            </div>
                        </div>

                        {/* The box on the right part of the screen */}
                        <div id={styles.sideBox}>
                            <p className={styles.subtitle}>Assigned Resources</p>

                            <div id={styles.assignedBox} style={{ marginLeft: "15px", height: "33%" }}>
                                <Link href="/assessment/time-management">
                                    <div className={`${styles.studentAssignment} ${styles.pointer}`} style={{ display: "flex", flexDirection: "column" }}>
                                        Self-Awareness Quiz
                                        <QuizIcon fontSize="large" style={{ margin: "auto" }} />
                                    </div>
                                </Link>
                                <Link href="/assessment/time-management">
                                    <div className={styles.studentAssignment} style={{ display: "flex", flexDirection: "column" }}>
                                        Grit Quiz
                                        <QuizIcon fontSize="large" style={{ margin: "auto" }} />
                                    </div>
                                </Link>
                                <Link href="/assessment/time-management">
                                    <div className={styles.studentAssignment} style={{ display: "flex", flexDirection: "column" }}>
                                        Personality Quiz
                                        <QuizIcon fontSize="large" style={{ margin: "auto" }} />
                                    </div>
                                </Link>
                            </div>


                            <p className={styles.subtitle} style={{ marginTop: "50px" }}>Current Mentors</p>

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <MentorCardSchedule name={"Gina Wee"} description={"Personal Mentor"}></MentorCardSchedule>

                                <MentorCardSchedule name={"Tina Richards"} description={"Time Management Mentor"}></MentorCardSchedule>

                                <MentorCardSchedule name={"John Lake"} description={"Sleep Mentor"}></MentorCardSchedule>
                            </div>


                        </div>


                    </div>

                </main>

            </div >
            <Footer />
        </>
    );
}

// export async function getStaticPaths({id}) {
//   const endpoint = `/api/student/profile/${id}`;
//   console.log(endpoint)
// //   const res = await fetch(endpoint);

// //   const student = await res.json();

//   return {
//     paths: [{
//             params: {
//                 id: "0" // id.toString()
//             },
//         }],
//     fallback: false
//     }
// };

// export async function getStaticProps(context) {
//     const endpoint = `/api/student/profile/${id}`;
//     const res = await fetch(endpoint);
  
//     const student = await res.json();
  
//     return {
//       props: {
//         studentData: data
//       }
//   };
// }
