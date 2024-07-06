import React from "react";
import styles from "./Dashboard.module.css";
const Dashboard=()=>{
       return (
         
          <div>
                   {/* stratts here */}                

    <div className={styles['main-container']}>
        
        <div className={styles.main}>

            <div className={styles['box-container']}>

                <div className={styles.box+' box1'}>
                    
                </div>

                <div className={styles.box+' box2'}>
                    <div className={styles.text}>
                        <div className={styles['topic-heading']}>Albert Einstien</div>
                        <div className={styles.topic}>Employee is: <span>GTY7000</span></div>
                    </div>

                    {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                         alt="likes"/> */}
                </div>

                <div className={styles.box+' box3'}>
                    <div className={styles.text}>
                        <h2 className={styles.topic}>Designation: Scientist</h2>
                        <h2 className={styles.topic}>Phone.No: 1234567890</h2>
                    </div>

                    {/* <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                        alt="comments"/> */}
                </div>
            </div>

            <div className={styles['report-container']}>
                <div className={styles['report-header']}>
                    <h1 className={styles['recent-Articles']}>Records</h1>
                     <button className={styles.noButton}><button className={styles.view}>Employees</button> <button className={styles.view}>Department</button></button>
                </div>

                <div className={styles['report-body']}>
                    <div className={styles['report-topic-heading']}>
                        <h3 className={styles['t-op']}>Name</h3>
                        <h3 className={styles['t-op']}>Department</h3>
                        <h3 className={styles['t-op']}>Phone Number</h3>
                        <h3 className={styles['t-op']}>Emp.ID</h3>
                    </div>

                    <div className={styles.items}>
                        <div className={styles.item1}>
                            <h3 className={styles['t-op-nextlvl']}>Article 73</h3>
                            <h3 className={styles['t-op-nextlvl']}>2.9k</h3>
                            <h3 className={styles['t-op-nextlvl']}>210</h3>
                            <h3 className={styles['t-op-nextlvl']}>Published</h3>
                        </div>

                        <div className={styles.item1}>
                            <h3 className={styles['t-op-nextlvl']}>Article 72</h3>
                            <h3 className={styles['t-op-nextlvl']}>1.5k</h3>
                            <h3 className={styles['t-op-nextlvl']}>360</h3>
                            <h3 className={styles['t-op-nextlvl']}>Published</h3>
                        </div>               
                        <div className={styles.item1}>
                            <h3 className={styles['t-op-nextlvl']}>Article 66</h3>
                            <h3 className={styles['t-op-nextlvl']}>3.6k</h3>
                            <h3 className={styles['t-op-nextlvl']}>160</h3>
                            <h3 className={styles['t-op-nextlvl']}>Published</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

          </div>



       );
}

export default Dashboard;