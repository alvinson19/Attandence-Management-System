// Define an array of student data
var students = [
  { usn: "MVJCS23461", name: "A LAVANYA" },
  { usn: "MVJCS23180", name: "A S BINUSHA" },
  { usn: "MVJCS23175", name: "AAKANKSHA ANIL KUMAR" },
  { usn: "MVJCS23505", name: "ABDUL TOUHEED" },
  { usn: "MVJCS23091", name: "ABHISHEK A" },
  { usn: "MVJ24CS046", name: "ABHISHEK GOUDA" },
  { usn: "MVJCS23437", name: "ABHISHEK K" },
  { usn: "MVJ24CS024", name: "ABHISHEK POLICE PATIL" },
  { usn: "MVJCS23462", name: "ABHISHEK S S" },
  { usn: "MVJCS23077", name: "ADITYA SURESH APPAGUNDI" },
  { usn: "MVJCS23485", name: "AKASH SURENDRA AINAPUR" },
  { usn: "MVJ24CS030", name: "AKBAR SHANOOR NADAF" },
  { usn: "MVJCS23480", name: "AKSHATA SURESH VITTAPPANAVAR" },
  { usn: "MVJCS23433", name: "AKSHAY H" },
  { usn: "MVJCS23070", name: "ALVIN SONNY" },
  { usn: "MVJCS23506", name: "AMULYA G GOUDA" },
  { usn: "MVJCS23073", name: "ANAGHA SHREE G K" },
  { usn: "MVJCS23099", name: "ANANYA SANJIV" },
  { usn: "MVJCS23496", name: "ANIKETHA H N" },
  { usn: "MVJCS23090", name: "ANKITA CHARAN PAHADI" },
  { usn: "MVJCS23404", name: "ANUSHREE D S" },
  { usn: "MVJCS23434", name: "ARALUR DARSHANKUMAR" },
  { usn: "MVJCS23460", name: "ARFA KULSUM" },
  { usn: "MVJCS23176", name: "ARJUN SHARMA" },
  { usn: "MVJ24CS042", name: "ARPITA SURESH KALLIHAL" },
  { usn: "MVJCS23481", name: "ARUN ESHWAROOP SONAR" },
  { usn: "MVJ24CS012", name: "ARYHA K S" },
  { usn: "MVJCS23148", name: "ASEEMA SULTHANA S" },
  { usn: "MVJ24CS086", name: "ASHISH GUPTA" },
  { usn: "MVJCS23904", name: "AVIRAJ BHAWRHA" },
  { usn: "MVJ24CS018", name: "AYESHA SIDDIQA" },
  { usn: "MVJCS23064", name: "AYUSH KUMAR SHARMA" },
  { usn: "MVJCS23036", name: "BALAJI R" },
  { usn: "MVJCS23490", name: "BAPUGOUDA JALIKATTI" },
  { usn: "MVJCS23412", name: "BASAVARAJ" },
  { usn: "MVJCS23471", name: "BASAVARAJ B" },
  { usn: "MVJCS23133", name: "BHARATH C" },
  { usn: "MVJCS23446", name: "BHARGAVI VR" },
  { usn: "MVJ24CS085", name: "BHATI MOHAMMED INAAM" },
  { usn: "MVJ24CS014", name: "BHAVANA AV" },
  { usn: "MVJCS23491", name: "BHAVANA D S" },
  { usn: "MVJCS23441", name: "C H CHANDANA SHREE" },
  { usn: "MVJCS23406", name: "CHANDAN D P" },
  { usn: "MVJ24CS010", name: "CHANDANKUMAR V" },
  { usn: "MVJCS23513", name: "CHANNABASAVA" },
  { usn: "MVJCS23484", name: "CHETHAN KUMAR B S" },
  { usn: "MVJCS23516", name: "CHETHANASHREE P" },
  { usn: "MVJCS23475", name: "CHIRANTH L" },
  { usn: "MVJCS23170", name: "CHRISTY SHEPHARD" },
  { usn: "MVJCS23487", name: "D MANOHAR" },
  { usn: "MVJCS23483", name: "D NEHA" },
  { usn: "MVJ24CS022", name: "D S VISHESH DHYAN" },
  { usn: "MVJCS23907", name: "DANISH KHAJURIA" },
  { usn: "MVJCS23153", name: "DARSHAN" },
  { usn: "MVJ24CS048", name: "DARSHAN B DARSHAN B" },
  { usn: "MVJ24CS050", name: "DARSHAN C" },
  { usn: "MVJ24CS052", name: "DARSHAN C" },
  { usn: "MVJCS23029", name: "DEBADITYA DAS" },
  { usn: "MVJCS23137", name: "DEEKSHITA A U" },
  { usn: "MVJCS23138", name: "DEEPTHI K M" },
  { usn: "MVJCS23468", name: "DEERAJ ASHOK SHIRAHATTI" },
  { usn: "MVJCS23162", name: "DHANUSH D" },
  { usn: "MVJCS23187", name: "DHANUSH JAIN A" },
  { usn: "MVJCS23052", name: "DHARSHAN V" },
  { usn: "MVJCS23151", name: "DINESH MANGE S M" },
  { usn: "MVJCS23517", name: "DISHA V O" },
  { usn: "MVJCSD23195", name: "E VANDANA" },
  { usn: "MVJCS23040", name: "G M VISHWANATH" },
  { usn: "MVJCS23136", name: "SACHIN KUMAR PATEL" },
  { usn: "MVJ24CS089", name: "VARSHA SALLY A" }
];
/*
[
  { usn: "MVJCS23461", name: "A LAVANYA" },
  { usn: "MVJCS23180", name: "A S BINUSHA" },
  { usn: "MVJCS23175", name: "AAKANKSHA ANIL KUMAR" },
  { usn: "MVJCS23505", name: "ABDUL TOUHEED" },
  { usn: "MVJCS23091", name: "ABHISHEK A" },
  { usn: "MVJCS23437", name: "ABHISHEK K" },
  { usn: "MVJCS23462", name: "ABHISHEK S S" },
  { usn: "MVJCS23077", name: "ADITYA SURESH APPAGUNDI" },
  { usn: "MVJCS23485", name: "AKASH SURENDRA AINAPUR" },
  { usn: "MVJCS23480", name: "AKSHATA SURESH VITTAPPANAVAR" },
  { usn: "MVJCS23433", name: "AKSHAY H" },
  { usn: "MVJCS23070", name: "ALVIN SONNY" },
  { usn: "MVJCS23506", name: "AMULYA G GOUDA" },
  { usn: "MVJCS23073", name: "ANAGHA SHREE G K" },
  { usn: "MVJCS23099", name: "ANANYA SANJIV" },
  { usn: "MVJCS23496", name: "ANIKETHA H N" },
  { usn: "MVJCS23090", name: "ANKITA CHARAN PAHADI" },
  { usn: "MVJCS23404", name: "ANUSHREE D S" },
  { usn: "MVJCS23434", name: "ARALUR DARSHANKUMAR" },
  { usn: "MVJCS23460", name: "ARFA KULSUM" },
  { usn: "MVJCS23176", name: "ARJUN SHARMA" },
  { usn: "MVJCS23481", name: "ARUN ESHWAROOP SONAR" },
  { usn: "MVJCS23148", name: "ASEEMA SULTHANA S" },
  { usn: "MVJCS23904", name: "AVIRAJ BHAWRHA" },
  { usn: "MVJCS23064", name: "AYUSH KUMAR SHARMA" },
  { usn: "MVJCS23036", name: "BALAJI R" },
  { usn: "MVJCS23490", name: "BAPUGOUDA JALIKATTI" },
  { usn: "MVJCS23412", name: "BASAVARAJ" },
  { usn: "MVJCS23471", name: "BASAVARAJ B" },
  { usn: "MVJCS23133", name: "BHARATH C" },
  { usn: "MVJCS23446", name: "BHARGAVI VR" },
  { usn: "MVJCS23491", name: "BHAVANA D S" },
  { usn: "MVJCS23441", name: "C H CHANDANA SHREE" },
  { usn: "MVJCS23406", name: "CHANDAN D P" },
  { usn: "MVJCS23513", name: "CHANNABASAVA" },
  { usn: "MVJCS23484", name: "CHETHAN KUMAR B S" },
  { usn: "MVJCS23516", name: "CHETHANASHREE P" },
  { usn: "MVJCS23475", name: "CHIRANTH L" },
  { usn: "MVJCS23170", name: "CHRISTY SHEPHARD" },
  { usn: "MVJCS23487", name: "D MANOHAR" },
  { usn: "MVJCS23483", name: "D NEHA" },
  { usn: "MVJCS23907", name: "DANISH KHAJURIA" },
  { usn: "MVJCS23153", name: "DARSHAN" },
  { usn: "MVJCS23029", name: "DEBADITYA DAS" },
  { usn: "MVJCS23137", name: "DEEKSHITA A U" },
  { usn: "MVJCS23138", name: "DEEPTHI K M" },
  { usn: "MVJCS23468", name: "DEERAJ ASHOK SHIRAHATTI" },
  { usn: "MVJCS23162", name: "DHANUSH D" },
  { usn: "MVJCS23187", name: "DHANUSH JAIN A" },
  { usn: "MVJCS23052", name: "DHARSHAN V" },
  { usn: "MVJCS23151", name: "DINESH MANGE S M" },
  { usn: "MVJCS23517", name: "DISHA V O" },
  { usn: "MVJCSD23195", name: "E VANDANA" },
  { usn: "MVJCS23040", name: "G M VISHWANATH" },
  { usn: "MVJCS23136", name: "SACHIN KUMAR PATEL" },
  { usn: "MVJ24CS046", name: "ABHISHEK GOUDA" },
  { usn: "MVJ24CS024", name: "ABHISHEK POLICE PATIL" },
  { usn: "MVJ24CS030", name: "AKBAR SHANOOR NADAF" },
  { usn: "MVJ24CS042", name: "ARPITA SURESH KALLIHAL" },
  { usn: "MVJ24CS012", name: "ARYHA K S" },
  { usn: "MVJ24CS086", name: "ASHISH GUPTA" },
  { usn: "MVJ24CS018", name: "AYESHA SIDDIQA" },
  { usn: "MVJ24CS085", name: "BHATI MOHAMMED INAAM" },
  { usn: "MVJ24CS014", name: "BHAVANA AV" },
  { usn: "MVJ24CS010", name: "CHANDANKUMAR V" },
  { usn: "MVJ24CS022", name: "D S VISHESH DHYAN" },
  { usn: "MVJ24CS048", name: "DARSHAN B DARSHAN B" },
  { usn: "MVJ24CS050", name: "DARSHAN C" },
  { usn: "MVJ24CS052", name: "DARSHAN C" },
  { usn: "MVJ24CS089", name: "VARSHA SALLY A" }
]
*/
function unlock() {
    var passcode = document.getElementById("passcodeInput").value;
    if (passcode === "1528") { // Replace "1234" with your desired 4-digit code
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("attendanceSystem").style.display = "block";
        document.getElementById("errorMessage").style.display = "none"; // Hide error message if it was displayed previously
    } else {
        document.getElementById("errorMessage").style.display = "block"; // Display error message
    }
}

function updateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById("datetime");
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero
    var time = hours + ':' + minutes + ' ' + ampm;
    datetimeElement.textContent = now.toLocaleDateString() + ' ' + time;
    setTimeout(updateTime, 1000); // Update time every second
}

function generateReport() {
    var subject = document.getElementById("subject").value;
    var date = new Date().toLocaleDateString();
    var uncheckedStudents = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
    var report = "📍 Absentees List for " + subject + " class on " + date + ":\n\n";
    report += "USN No\t\tName\n";
    uncheckedStudents.forEach(function(student) {
        var usn = students[parseInt(student.getAttribute("data-rollno")) - 1].usn;
        var name = students[parseInt(student.getAttribute("data-rollno")) - 1].name;
        report += usn + "\t - " + name + "\n";
    });
    var reportText = document.getElementById("reportText");
    reportText.innerHTML = report; // Use innerHTML to render HTML content
    document.getElementById("reportContainer").style.display = "block";
}

function copyReport() {
    var reportText = document.getElementById("reportText");
    reportText.select();
    document.execCommand("copy");
    alert("Report copied to clipboard!");
}

function saveReportAsImage() {
    var reportText = document.getElementById("reportText").value;

    // Split the report text into lines
    var lines = reportText.split('\n');

    // Calculate the required dimensions based on the content
    var lineHeight = 20; // Adjust as needed
    var width = 400; // Adjust as needed
    var height = lines.length * lineHeight;

    // Create a new canvas element
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // Draw the report content onto the canvas
    ctx.fillStyle = '#fff'; // Set background color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill canvas with background color
    ctx.font = '14px Arial'; // Set font size and style
    ctx.fillStyle = '#000'; // Set text color
    for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], 10, (i + 1) * lineHeight);
    }

    // Convert canvas content to data URL
    var dataURL = canvas.toDataURL();

    // Create a link element and trigger download
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = 'attendance_report.png';
    link.click();
}

function createStudentList() {
    var studentList = document.getElementById("studentList");
    students.forEach(function(student, index) {
        var listItem = document.createElement("li");
        listItem.classList.add("student-item");
        var usn = student.usn;
        var name = student.name;
        listItem.innerHTML = `
            <input type="checkbox" data-rollno="${index + 1}" checked> <!-- Set checked attribute -->
            <label for="rollno${index + 1}">${usn} - ${name}</label>
        `;
        studentList.appendChild(listItem);
    });
}

// Call functions
updateTime();
createStudentList();
