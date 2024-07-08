import React from 'react';
import styles from './About.module.css'; // Import the CSS file

const About = () => {
    return (
        <div className={styles['about-container']}>
            <h1>About Us</h1>
            <p>
                Welcome to Campus Directories, your comprehensive source for telephone directories of various
                buildings within our campus. Our platform provides easy access to contact information for staff, 
                and departments, ensuring seamless communication across the campus community. 
                Whether you need to reach an office,locate a colleague, or find departmental contacts, our user-friendly directory simplifies the process, 
                fostering connectivity and efficiency. 
                
                Explore our organized and up-to-date listings to stay connected and informed within our vibrant campus environment.

</p>
            <p>
                Our mission is to deliver high-quality products that bring value to our customers.
                We believe in continuous improvement and always strive to exceed expectations.
            </p>
            <h2 >Team Members</h2>
                         
            <div className={styles['team-grid']}>
               <div className={styles['team-member']}>
                     <h3>Ramakant Sahoo</h3>
                     <p>Backend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Ashish Kumar Behera</h3>
                     <p>Backend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Sriman Swastik Das</h3>
                     <p>Backend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Suryadeep Barik</h3>
                     <p>Backend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Mahak Agrawal</h3>
                     <p>Frontend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Sanghamitra Sahoo</h3>
                     <p>Frontend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Shibani Panda</h3>
                     
                     <p>Frontend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Adya Mishra</h3>
                     
                     <p>Frontend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Bhababhanjan Panda</h3>
                     
                     <p>Frontend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Subham Mohanty</h3>
                     
                     <p>Database Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Umang Das</h3>
                     
                     <p>Database Team</p>
               </div>
                
               <div className={styles['team-member']}>
                     <h3>Jagannath Adhikari</h3>
                     
                     <p>Database Team</p>
               </div>
       
            </div>
        </div>
    );
};
                    
export default About;
