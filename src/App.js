import './App.css';

function App() {
  return (
    <div style={{padding:"5px"}}>
    <center>
      <img src="bbit_logo.png" width="100px"/>
      <p>
        <b>
          BUDGE BUDGE INSTITUTE OF TECHNOLOGY<br/>
          Affiliated to MAKUT (formerly WBUT) & Approved by AICTE, NAAC Accredited<br/>
          Kolkata - 700 137, West Bengal, India<br/>
          Phone : 033 2482 0676 / 0670<br/>
          <a href="https://www.bbit.edu.in/">https://www.bbit.edu.in</a><br/>
          Department of Computer Science & Engineering<br/>
          NBA (National Board of Accreditation) valid from Academic year 2020-2021 to 2023-2024 i.e upto 30/06/2024
        </b>
      </p>
      </center>
      <center>
        <div className="Question" style={{border:"2px solid black",padding:"20px", width:"90%"}}>
        <div style={{display:"grid",gridTemplateColumns: "1fr 1fr", width: "100%"}}>
          <div style={{textAlign:"left",fontWeight:"bold"}}>
            Stream : Computer Science & Engineering<br/>
            Semester : 6<sup>th</sup><br/>
            Paper Name : Computer Networks<br/>
            Full Marks : 60
          </div>
          <div style={{textAlign:"right",fontWeight:"bold"}}>
            <br/>Year : 3<sup>rd</sup><br/>
            Paper Code : PCC-CS692<br/>
            Duration : 3 hours
          </div>
        </div>
        <p style={{display:"inline"}}>Click here to download Question Paper 👉 </p>
        <a href="/QS.pdf" target="blank">Download Question Paper</a><br/><br/>
        
      </div>
      <iframe src="/QS.pdf" width="93%" height="800px"></iframe>
      </center>
    </div>
  );
}

export default App;
