let studentData = [
  {
    name: "arun",
    gender: "Male",
    physics: 88,
    maths: 87,
    english: 78,
  },
  {
    name: "rajesh",
    gender: "Male",
    physics: 96,
    maths: 100,
    english: 95,
  },
  {
    name: "moorthy",
    gender: "Male",
    physics: 89,
    maths: 90,
    english: 70,
  },
  {
    name: "RamPravesh",
    gender: "Male",
    physics: 39,
    maths: 70,
    english: 41,
  },
];

function studentDataFun() {
  let headers = Object.keys(studentData[0]);
//   console.log(headers)

  let headerRowHTML = "<tr>";
  for (let i = 0; i < headers.length; i++) {
    headerRowHTML += "<th>" + headers[i] + "</th>";
  }
  headerRowHTML += "</tr>";

  let allRecordsHTML = "";
  for (let i = 0; i < studentData.length; i++) {
  
    allRecordsHTML += "<tr>";
    for (let j = 0; j < headers.length; j++) {
      let header = headers[j];
      allRecordsHTML += "<td>" + studentData[i][header] + "</td>";
    }
    allRecordsHTML += "</tr>";
  }

  let table = document.getElementById("table");
  table.innerHTML = headerRowHTML + allRecordsHTML;
}

studentDataFun();
