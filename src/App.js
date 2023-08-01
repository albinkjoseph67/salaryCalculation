
// using class components

// import React, { Component } from 'react'

// export default class App extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             fname: "",
//             lname: "",
//             txt_gender: "",
//             txt_marital: "",
//             department: "",
//             basicsalary: "",

//             name: "",
//             gender: "",
//             marital: "",
//             department: "",
//             bs: "",
//             ta: "",
//             da: "",
//             hra: "",
//             lic: "",
//             pf: "",
//             deduction: "",
//             net: ""

//         }
//     }


//     inputChange = (e) => {
//         this.setState({ [e.target.name]: [e.target.value] })
//     }

//     buttonSubmit = (e) => {

//         var localName = "";
//         if (this.state.gender === "Female") {
//             if (this.state.marital === "Married") {
//                 localName = "Mrs." + this.state.fname + "" + this.state.lname;
//             }
//             else {
//                 localName = "Miss." + this.state.fname + "" + this.state.lname;

//             }
//         }
//         else {
//             localName = "Mr." + this.state.fname + "" + this.state.lname;

//         }

//         var TA = "", DA = "", HRA = "", LIC = "", PF = "", DEDUCTION = "", NET = "", BS = parseInt(this.state.basicsalary);
//         if (BS >= 10000) {
//             TA = BS * .4;
//             DA = BS * .35;
//             HRA = BS * .30;
//             LIC = BS * .25;
//             PF = BS * .20;
//         }
//         else if (BS >= 5000 && BS < 10000) {
//             TA = BS * .35;
//             DA = BS * .30;
//             HRA = BS * .25;
//             LIC = BS * .20;
//             PF = BS * .15;
//         }
//         else if (BS < 5000) {
//             TA = BS * .30;
//             DA = BS * .25;
//             HRA = BS * .20;
//             LIC = BS * .15;
//             PF = BS * .10;
//         }
//         DEDUCTION = LIC + PF;
//         NET = BS + TA + DA + HRA - (LIC + PF);



//         this.setState({ name: localName });
//         this.setState({ gender: this.state.txt_gender });
//         this.setState({ marital: this.state.txt_marital });
//         this.setState({ department: this.state.department });
//         this.setState({ bs: this.state.basicsalary });
//         this.setState({ ta: TA });
//         this.setState({ da: DA });
//         this.setState({ hra: HRA });
//         this.setState({ lic: LIC });
//         this.setState({ pf: PF });
//         this.setState({ deduction: DEDUCTION });
//         this.setState({ net: NET });
//     }

//     render() {
//         return (
//             <>


//                 <table align='center' border="1">
//                     <tr>
//                         <th>FirstName</th>
//                         <td
//                         ><input type='text' name="fname" onChange={this.inputChange} />
//                         </td>
//                     </tr>
//                     <tr>
//                         <th>LastName</th>
//                         <td
//                         ><input type='text' name="lname" onChange={this.inputChange} />
//                         </td>
//                     </tr>
//                     <tr>
//                         <th>Gender</th>

//                         <td>
//                             <input type='radio' name="txt_gender" value="Male" onChange={this.inputChange} />Male
//                             <input type='radio' name="txt_gender" value="Female" onChange={this.inputChange} />Female
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>Marital</th>
//                         <td>
//                             <input type='radio' name="txt_marital" value="Married" onChange={this.inputChange} />Married
//                             <input type='radio' name="txt_marital" value="Unmarried" onChange={this.inputChange} />Unmarried
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>Department</th>
//                         <td>
//                             <select name="department" onChange={this.inputChange}>
//                                 <option value="">------Select------</option>
//                                 <option name="Front End" value="" >Front End</option>
//                                 <option name="Back End" value="">Back End</option>

//                             </select>
//                         </td>
//                     </tr>
//                     <tr>
//                         <th>Basic Salary</th>
//                         <td>
//                             <input name="basicsalary" type='text' onChange={this.inputChange}></input>
//                         </td>

//                     </tr>
//                     <tr>
//                         <td colSpan="2" align='center'>
//                             <input type="submit" name="submit" value="submit" onClick={this.buttonSubmit} />

//                         </td>
//                     </tr>

//                     <tr>
//                         <th>Name</th>
//                         <td>
//                             {this.state.name}
//                         </td>
//                     </tr>
//                     <tr>
//                         <th>Gender</th>
//                         <td>
//                             {this.state.gender}
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>Martial</th>
//                         <td>
//                             {this.state.marital}
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>department</th>
//                         <td>
//                             {this.state.department}
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>Basic Salary</th>
//                         <td>
//                             {this.state.bs}
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>T.A</th>
//                         <td>
//                             {this.state.ta}
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>D.A</th>
//                         <td>
//                             {this.state.da}
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>HRA</th>
//                         <td>
//                             {this.state.hra}
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>LIC</th>
//                         <td>
//                             {this.state.lic}
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>P.F</th>
//                         <td>
//                             {this.state.pf}
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>DEDUCTION</th>
//                         <td>
//                             {this.state.deduction}
//                         </td>

//                     </tr>
//                     <tr>
//                         <th>NET</th>
//                         <td>
//                             {this.state.net}
//                         </td>

//                     </tr>

//                 </table>

//             </>




//         )
//     }
// }


// using functional components


import React from 'react'
import { useState } from 'react'

function App() {


    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [gender, setGender] = useState("")
    const [marital, setMarital] = useState("")
    const [department, setDepartment] = useState("")
    const [salary, setSalary] = useState("")


    const [fullName, setFullName] = useState("")
    const [selectedgender, setSelectedGender] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [totalSalary, setTotalSalary] = useState("")
    const [ta, setTA] = useState("")
    const [da, setDA] = useState("")
    const [hra, setHRA] = useState("")
    const [lic, setLIC] = useState("")
    const [pf, setPF] = useState("")
    const [deduction, setDeduction] = useState("")
    const [net, setNet] = useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("")


    const handleDropDownChange = (e) => {
        setDepartment(e.target.value)
    }


    const buttonSubmit = (e) => {

        e.preventDefault()




        if (selectedgender === "Female") {
            if (maritalStatus === "Married") {
                setFullName("Mrs." + fName + "" + lName)
            }
            else {
                setFullName("Miss." + fName + "" + lName)

            }

        }
        else {
            setFullName("Mr." + fName + "" + lName)

        }


        if (salary >= 10000) {
            setTA(salary * .4)
            setDA(salary * .35)
            setHRA(salary * .30)
            setLIC(salary * .25)
            setPF(salary * .20)
        }
        else if (salary >= 5000 && salary < 10000) {
            setTA(salary * .35)
            setDA(salary * .30)
            setHRA(salary * .25)
            setLIC(salary * .20)
            setPF(salary * .15)
        }
        else if (salary < 5000) {
            setTA(salary * .30)
            setDA(salary * .25)
            setHRA(salary * .20)
            setLIC(salary * .15)
            setPF(salary * .10)
        }

        setDeduction(lic + pf)
        setNet(salary + ta + da + hra - (lic + pf))

        setSelectedGender(gender)
        setMaritalStatus(marital)
        setTotalSalary(salary)
        setSelectedDepartment(department)
    }


    return (
        <div>

          <div style={{ display: 'flex', justifyContent: "center", padding:"10px"}}><h1>SALARY CALCULATION </h1></div>
            <table align='center' border="1" >
                <tr>
                    <th>FirstName</th>
                    <td>
                        <input type='text' name="fname" onChange={(e) => setfName(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <th>LastName</th>
                    <td
                    ><input type='text' name="lname" onChange={(e) => setlName(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <th>Gender</th>

                    <td>
                        <input type='radio' name="txt_gender" value="Male" onChange={(e) => setGender(e.target.value)} />Male
                        <input type='radio' name="txt_gender" value="Female" onChange={(e) => setGender(e.target.value)} />Female
                    </td>

                </tr>
                <tr>
                    <th>Marital</th>
                    <td>
                        <input type='radio' name="txt_marital" value="Married" onChange={(e) => setMarital(e.target.value)} />Married
                        <input type='radio' name="txt_marital" value="Unmarried" onChange={(e) => setMarital(e.target.value)} />Unmarried
                    </td>

                </tr>
                <tr>
                    <th>Department</th>
                    <td>
                        <select name="department" value={department} onChange={handleDropDownChange}>
                            <option value="">------Select------</option>
                            <option name="Front End" value="Front End" >Front End</option>
                            <option name="Back End" value="Back End">Back End</option>

                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Basic Salary</th>
                    <td>
                        <input name="basicsalary" type='text' onChange={(e) => setSalary(e.target.value)} ></input>
                    </td>

                </tr>
                <tr>
                    <td colSpan="2" align='center'>
                        <input type="submit" name="submit" value="submit" onClick={(e) => buttonSubmit(e)} />

                    </td>
                </tr>

                <tr>
                    <th>Name</th>
                    <td>
                        {fullName}
                    </td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>
                        {selectedgender}
                    </td>

                </tr>
                <tr>
                    <th>Martial</th>
                    <td>
                        {maritalStatus}
                    </td>

                </tr>
                <tr>
                    <th>department</th>
                    <td>
                        {selectedDepartment}
                    </td>

                </tr>
                <tr>
                    <th>Basic Salary</th>
                    <td>
                        {totalSalary}
                    </td>

                </tr>
                <tr>
                    <th>T.A</th>
                    <td>
                        {ta}
                    </td>

                </tr>
                <tr>
                    <th>D.A</th>
                    <td>
                        {da}
                    </td>

                </tr>
                <tr>
                    <th>HRA</th>
                    <td>
                        {hra}
                    </td>

                </tr>
                <tr>
                    <th>LIC</th>
                    <td>
                        {lic}
                    </td>

                </tr>
                <tr>
                    <th>P.F</th>
                    <td>
                        {pf}
                    </td>

                </tr>
                <tr>
                    <th>DEDUCTION</th>
                    <td>
                        {deduction}
                    </td>

                </tr>
                <tr>
                    <th>NET</th>
                    <td>
                        {net}
                    </td>

                </tr>

            </table>


        </div>
    )
}

export default App