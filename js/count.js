// interview list mt arry
let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

// total jobs
const totalJobs = document.getElementById("total-job");
console.log(totalJobs);

// all filter btn
const allFileterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// all card sections
const allcardSections = document.getElementById("allCard");

// main container sections
const mainContianers = document.querySelector("main");

function calculateCount() {
  total.innerText = allcardSections.children.length;
  totalJobs.innerText = allcardSections.children.length;

  interview.innerText = interviewList.length;

  rejected.innerText = rejectedList.length;
}

calculateCount();

// all btn
function toggle(id) {
  //   add color
  allFileterBtn.classList.add("btn", "text-black");
  interviewFilterBtn.classList.add("btn", "text-black");
  rejectedFilterBtn.classList.add("btn", "text-black");

  // remove color
  allFileterBtn.classList.remove("bg-blue-500", "text-white");
  interviewFilterBtn.classList.remove("bg-blue-500", "text-white");
  rejectedFilterBtn.classList.remove("bg-blue-500", "text-white");

  let selected = document.getElementById(id);

  selected.classList.remove("btn", "text-black");
  selected.classList.add(
    "bg-blue-500",
    "text-white",
    "text-xl",
    "font-semibold",
  );
}

//main container sections
mainContianers.addEventListener("click", function (evnet) {
  const parentNode = evnet.target.parentNode.parentNode;
  const jobName = parentNode.querySelector(".jobName").innerText;
  const jobTitle = parentNode.querySelector(".jobTitle").innerText;
  const remoteJob = parentNode.querySelector(".remoteJob").innerText;
  const notApplied = parentNode.querySelector(".notApplied").innerText;
  const peragraph = parentNode.querySelector(".peragraph").innerText;

  const JobInfo = {
    jobName,
    jobTitle,
    remoteJob,
    notApplied,
    peragraph,
  };

  console.log(JobInfo);

  const planExistiong = interviewList.find(
    (item) => item.jobName == JobInfo.jobName,
  );
  if (!planExistiong) {
    interviewList.push(JobInfo);
  }
});
