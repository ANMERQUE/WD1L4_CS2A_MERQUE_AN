
    function showGradeEquivalent() { 		//Declaration of Function

      // Student names
      //Declare here the 5 Students

      // Array container for the student names
     let students = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];
      

      // Student grades
      //Declare here the 5 Student-Grades

     // Array container for the student grades (same order as the names)
     let grades = [92, 85, 78, 97, 74];

    
      let output = "<h2>Grade Equivalents</h2>";
      output = output + "<table>";
      output = output + "<tr>";
      output = output + "<th>Student Name</th>"; 
      output += "<th>Grade</th>"; 		 //Next header is GRADE
      output += "<th>Equivalent</th>";	 //Next header is EQUIVALENT
      output += "<th>Remark</th>";		 //Next header is REMARK
      output += "<th>Academic Leader</th>"; 	//Next header is ACADEMIC LEADER
      output = output + "</tr>";

    // Loop through every student in the arrays
      for (let i = 0; i < students.length; i++) {

      let equivalent = getEquivalent(grades[i]);      // pass the grade to getEquivalent()
      let remark = getRemark(grades[i]);              // pass the grade to getRemark()
      let leader = getAcademicLeader(equivalent);     // pass the equivalent to getAcademicLeader()
  

      output = output + "<tr>";
      output = output + "<td>" + students[i] + "</td>";
      output += "<td>" + grades[i] + "</td>";		 // this as new data grade
      output += "<td>" + equivalent + "</td>";	//equivalent value
      output += "<td>" + remark + "</td>";		//remark value
      output += "<td>" + leader + "</td>";		//academic class
      output = output + "</tr>";

    }
      output += "</table>";

      //show the output result inside the html
      document .getElementById("result").innerHTML = output; 
    }

    function getRemark(grade) {

      // Ternary operator
      // If the grade is 75 or higher, return "Passed".
      // Otherwise, return "Failed".

   	let remark = grade >= 75 ? "Passed" : "Failed";

      return remark;
    }

    function getEquivalent(grade) {

      /*
        The getEquivalent() function converts a student's numerical grade
        into its grade equivalent.

        It uses if...else if conditional statements to check the grade range
        and assign the corresponding equivalent.

        A grade of 75 is equivalent to 3.0, while grades below 75
        are marked as Failed.
      */
      let equivalent = "";

      if (grade >= 97 && grade <= 100) {
        equivalent = "1.0";
      } else if (grade >= 94 && grade <= 96) {
        equivalent = "1.25";
      } else if (grade >= 91 && grade <= 93) {
        equivalent = "1.5";
      } else if (grade >= 88 && grade <= 90) {
        equivalent = "1.75";
      } else if (grade >= 85 && grade <= 87) {
        equivalent = "2.0";
      } else if (grade >= 82 && grade <= 84) {
        equivalent = "2.25";
      } else if (grade >= 79 && grade <= 81) {
        equivalent = "2.5";
      } else if (grade >= 76 && grade <= 78) {
        equivalent = "2.75";
      } else if (grade == 75) {
        equivalent = "3.0";
      } else {
        equivalent = "Failed";
      }

      return equivalent;
    }

    function getAcademicLeader(equivalent) {

      /*
        The getAcademicLeader() function determines the Academic Leader
        classification based on the student's grade equivalent.

        It uses a switch statement to check the equivalent value.

        Equivalents of 1.0 and 1.25 are classified as 1st Class Academic Leader,
        1.5 as 2nd Class Academic Leader, and 1.75 as 3rd Class Academic Leader.

        All other equivalents are marked with "-" because they do not qualify
        for an Academic Leader classification.
      */

      let leader = "";

      switch (equivalent) {

      case "1.0":
      case "1.25":
        leader = "1st Class Academic Leader";
        break;
      case "1.5":
        leader = "2nd Class Academic Leader";
        break;
      case "1.75":
        leader = "3rd Class Academic Leader";
        break;
      default:
        leader = "-";
      }

      return leader;
    }