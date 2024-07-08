import React from 'react';
import styles from './About.module.css'; // Import the CSS file

const About = () => {
    return (
        <div className={styles['about-container']}>
            <h1>About Us</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum quam fugiat in vitae ratione? Doloribus
                 vel quia quaerat, sed, rem fuga eum doloremque adipisci aut reiciendis earum quo temporibus?
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel vero ea, labore optio reprehenderit doloremque error? Nam adipisci 
                 ut porro nisi asperiores molestiae laboriosam, labore ad odio quod, pariatur tenetur.

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
