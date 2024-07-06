import React from "react";
import "./Dashboard.css";
const Dashboard=()=>{
       return (
         
          <div>
                   {/* stratts here */}                

    <div class="main-container">
        
        <div class="main">

            <div class="box-container">

                <div class="box box1">
                    
                </div>

                <div class="box box2">
                    <div class="text">
                        <div class="topic-heading">Albert Einstien</div>
                        <div class="topic">Employee is: <span>GTY7000</span></div>
                    </div>

                    {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                         alt="likes"/> */}
                </div>

                <div class="box box3">
                    <div class="text">
                        <h2 class="topic">Designation: Scientist</h2>
                        <h2 class="topic">Phone.No: 1234567890</h2>
                    </div>

                    {/* <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                        alt="comments"/> */}
                </div>
            </div>

            <div class="report-container">
                <div class="report-header">
                    <h1 class="recent-Articles">Records</h1>
                     <button class="noButton"><button class="view">Employees</button> <button class="view">Department</button></button>
                </div>

                <div class="report-body">
                    <div class="report-topic-heading">
                        <h3 class="t-op">Name</h3>
                        <h3 class="t-op">Department</h3>
                        <h3 class="t-op">Phone Number</h3>
                        <h3 class="t-op">Emp.ID</h3>
                    </div>

                    <div class="items">
                        <div class="item1">
                            <h3 class="t-op-nextlvl">Article 73</h3>
                            <h3 class="t-op-nextlvl">2.9k</h3>
                            <h3 class="t-op-nextlvl">210</h3>
                            <h3 class="t-op-nextlvl">Published</h3>
                        </div>

                        <div class="item1">
                            <h3 class="t-op-nextlvl">Article 72</h3>
                            <h3 class="t-op-nextlvl">1.5k</h3>
                            <h3 class="t-op-nextlvl">360</h3>
                            <h3 class="t-op-nextlvl label-tag">Published</h3>
                        </div>

                        <div class="item1">
                            <h3 class="t-op-nextlvl">Article 71</h3>
                            <h3 class="t-op-nextlvl">1.1k</h3>
                            <h3 class="t-op-nextlvl">150</h3>
                            <h3 class="t-op-nextlvl label-tag">Published</h3>
                        </div>

                        <div class="item1">
                            <h3 class="t-op-nextlvl">Article 70</h3>
                            <h3 class="t-op-nextlvl">1.2k</h3>
                            <h3 class="t-op-nextlvl">420</h3>
                            <h3 class="t-op-nextlvl label-tag">Published</h3>
                        </div>

                        <div class="item1">
                            <h3 class="t-op-nextlvl">Article 69</h3>
                            <h3 class="t-op-nextlvl">2.6k</h3>
                            <h3 class="t-op-nextlvl">190</h3>
                            <h3 class="t-op-nextlvl label-tag">Published</h3>
                        </div>

                        <div class="item1">
                            <h3 class="t-op-nextlvl">Article 68</h3>
                            <h3 class="t-op-nextlvl">1.9k</h3>
                            <h3 class="t-op-nextlvl">390</h3>
                            <h3 class="t-op-nextlvl label-tag">Published</h3>
                        </div>

                        <div class="item1">
                            <h3 class="t-op-nextlvl">Article 67</h3>
                            <h3 class="t-op-nextlvl">1.2k</h3>
                            <h3 class="t-op-nextlvl">580</h3>
                            <h3 class="t-op-nextlvl label-tag">Published</h3>
                        </div>

                        <div class="item1">
                            <h3 class="t-op-nextlvl">Article 66</h3>
                            <h3 class="t-op-nextlvl">3.6k</h3>
                            <h3 class="t-op-nextlvl">160</h3>
                            <h3 class="t-op-nextlvl label-tag">Published</h3>
                        </div>

                        <div class="item1">
                            <h3 class="t-op-nextlvl">Article 65</h3>
                            <h3 class="t-op-nextlvl">1.3k</h3>
                            <h3 class="t-op-nextlvl">220</h3>
                            <h3 class="t-op-nextlvl label-tag">Published</h3>
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