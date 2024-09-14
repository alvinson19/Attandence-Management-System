// Define an array of student data
var students = [
    { usn: "1MJ23CS001", name: "A LAVANYA" },
    { usn: "1MJ23CS002", name: "A S BINUSHA" },
    { usn: "1MJ23CS003", name: "AAKANKSHA ANIL KUMAR" },
    { usn: "1MJ23CS004", name: "ABDUL TOUHEED" },
    { usn: "1MJ23CS005", name: "ABHISHEK A" },
    { usn: "1MJ23CS006", name: "ABHISHEK K" },
    { usn: "1MJ23CS007", name: "ABHISHEK S S" },
    { usn: "1MJ23CS008", name: "ADITYA SURESH APPAGUNDI" },
    { usn: "1MJ23CS009", name: "AKASH SURENDRA AINAPUR" },
    { usn: "1MJ23CS010", name: "AKSHATA SURESH VITTAPPANAVAR" },
    { usn: "1MJ23CS011", name: "AKSHAY H" },
    { usn: "1MJ23CS012", name: "ALVIN SONNY" },
    { usn: "1MJ23CS013", name: "AMULYA G GOUDA" },
    { usn: "1MJ23CS014", name: "ANAGHASHREE G K" },
    { usn: "1MJ23CS015", name: "ANANYA SANJIV" },
    { usn: "1MJ23CS016", name: "ANIKETHA H N" },
    { usn: "1MJ23CS017", name: "ANKITA CHARAN PAHADI" },
    { usn: "1MJ23CS018", name: "ANUSHREE D S" },
    { usn: "1MJ23CS019", name: "ARALUR DARSHANKUMAR" },
    { usn: "1MJ23CS020", name: "ARFA KULSUM" },
    { usn: "1MJ23CS021", name: "ARJUN SHARMA" },
    { usn: "1MJ23CS023", name: "ARUN ESHWAROOP SONAR" },
    { usn: "1MJ23CS024", name: "AVIRAJ BHAWRHA" },
    { usn: "1MJ23CS025", name: "AYUSH KUMAR SHARMA" },
    { usn: "1MJ23CS026", name: "BALAJI R" },
    { usn: "1MJ23CS027", name: "BAPUGOUDA JALIKATTI" },
    { usn: "1MJ23CS028", name: "BASAVARAJ" },
    { usn: "1MJ23CS029", name: "BASAVARAJ B" },
    { usn: "1MJ23CS030", name: "BHARATH C" },
    { usn: "1MJ23CS031", name: "BHARGAVI VR" },
    { usn: "1MJ23CS032", name: "BHAVANA D S" },
    { usn: "1MJ23CS033", name: "C H CHANDANA SHREE" },
    { usn: "1MJ23CS034", name: "CHANDAN D P" },
    { usn: "1MJ23CS035", name: "CHANNABASAVA" },
    { usn: "1MJ23CS036", name: "CHETHANKUMAR B S" },
    { usn: "1MJ23CS037", name: "CHETHANASHREE P" },
    { usn: "1MJ23CS038", name: "CHIRANTH L" },
    { usn: "1MJ23CS039", name: "CHRISTY SHEPHARD" },
    { usn: "1MJ23CS040", name: "D MANOHAR" },
    { usn: "1MJ23CS041", name: "D NEHA" },
    { usn: "1MJ23CS042", name: "DANISH KHAJURIA" },
    { usn: "1MJ23CS043", name: "DARSHAN" },
    { usn: "1MJ23CS044", name: "DEBADITYA DAS" },
    { usn: "1MJ23CS045", name: "DEEKSHITA A U" },
    { usn: "1MJ23CS046", name: "DEEPTHI K M" },
    { usn: "1MJ23CS047", name: "DEERAJ ASHOK SHIRAHATTI" },
    { usn: "1MJ23CS048", name: "DHANUSH D" },
    { usn: "1MJ23CS049", name: "DHANUSH JAIN A" },
    { usn: "1MJ23CS050", name: "DHARSHAN V" },
    { usn: "1MJ23CS051", name: "DINESH MANGE S M" },
    { usn: "1MJ23CS052", name: "DISHA V O" },
    { usn: "1MJ23CS053", name: "E VANDANA" },
    { usn: "1MJ23CS054", name: "G M VISHWANATH" },
    { usn: "LATERAL ENTRY", name: "ABDULAZIZ MOHAMMAD YASEEN BEPARI" },
    { usn: "LATERAL ENTRY", name: "ABHISHEK POLICE PATIL" },
    { usn: "LATERAL ENTRY", name: "AKBAR SHANOOR NADAF" },
    { usn: "LATERAL ENTRY", name: "ARPITA SURESH KALLIHAL" },
    { usn: "LATERAL ENTRY", name: "ARYHA K S" },
    { usn: "LATERAL ENTRY", name: "ASHISH GUPTA" },
    { usn: "LATERAL ENTRY", name: "AYESHA SIDDIQA" },
    { usn: "LATERAL ENTRY", name: "BHATI MOHAMMED IMAAN" },
    { usn: "LATERAL ENTRY", name: "BHAVANA A V" },
    { usn: "LATERAL ENTRY", name: "CHANDANKUMAR V" },
    { usn: "LATERAL ENTRY", name: "D S VISHESH DHYAN" },
    { usn: "LATERAL ENTRY", name: "DARSHAN B" },
    { usn: "LATERAL ENTRY", name: "DARSHAN C" },
    { usn: "LATERAL ENTRY", name: "DARSHAN CHIKANNA" }
];

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
        var serialNumber = index + 1;
        listItem.innerHTML = `
            <span class="serial-number">${serialNumber}.</span>
            <span class="student-info">${usn} - ${name}</span>
            <input type="checkbox" id="rollno${index + 1}" data-rollno="${index + 1}" checked>
            <label class="checkbox-label" for="rollno${index + 1}"></label>
        `;
        studentList.appendChild(listItem);
    });
}

// Call functions
updateTime();
createStudentList();
