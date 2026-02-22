// interview list mt arry
let interviewList = [];
let rejectedList = [];
let currentCount = "all";
let counts = [];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

// total jobs
const totalJobs = document.getElementById("total-job");
const count = document.querySelector(".count");

// all filter btn
const allFileterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// all card sections
const allcardSections = document.getElementById("allCard");
// main container sections
const mainContianers = document.querySelector("main");
// filter card sections
const filterSection = document.getElementById("filterSeciton");

function calculateCount() {
  total.innerText = allcardSections.children.length;
  totalJobs.innerText = allcardSections.children.length;

  interview.innerText = interviewList.length;
  count.innerText = interviewList.length;

  rejected.innerText = rejectedList.length;
  count.innerText = rejectedList.length;
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
  currentCount = id;

  selected.classList.remove("btn", "text-black");
  selected.classList.add(
    "bg-blue-500",
    "text-white",
    "text-xl",
    "font-semibold",
  );
  if (id == "interview-filter-btn") {
    allcardSections.classList.add("hidden");
    filterSection.classList.remove("hidden");
  } else if (id == "all-filter-btn") {
    allcardSections.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id == "rejected-filter-btn") {
    allcardSections.classList.add("hidden");
    filterSection.classList.remove("hidden");
    randerRejected();
  }
}

//main container sections
mainContianers.addEventListener("click", function (evnet) {
  if (evnet.target.classList.contains("interview-btn")) {
    const parentNode = evnet.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".jobName").innerText;
    const jobTitle = parentNode.querySelector(".jobTitle").innerText;
    const remoteJob = parentNode.querySelector(".remoteJob").innerText;
    const notApplied = parentNode.querySelector(".notApplied").innerText;
    const peragraph = parentNode.querySelector(".peragraph").innerText;

    parentNode.querySelector(".notApplied").innerText = "INTERVIEW";

    const JobInfo = {
      jobName,
      jobTitle,
      remoteJob,
      notApplied: "INTERVIEW",
      peragraph,
    };

    console.log(JobInfo);

    // check list
    const planExistiong = interviewList.find(
      (item) => item.jobName == JobInfo.jobName,
    );

    if (!planExistiong) {
      interviewList.push(JobInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.jobName != JobInfo.jobName,
    );
    calculateCount();

    randerInterview();
  } else if (evnet.target.classList.contains("rejected-btn")) {
    const parentNode = evnet.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".jobName").innerText;
    const jobTitle = parentNode.querySelector(".jobTitle").innerText;
    const remoteJob = parentNode.querySelector(".remoteJob").innerText;
    const notApplied = parentNode.querySelector(".notApplied").innerText;
    const peragraph = parentNode.querySelector(".peragraph").innerText;

    parentNode.querySelector(".notApplied").innerText = "REJECTED";

    const JobInfo = {
      jobName,
      jobTitle,
      remoteJob,
      notApplied: "REJECTED",
      peragraph,
    };

    console.log(JobInfo);

    // check list
    const planExistiong = rejectedList.find(
      (item) => item.jobName == JobInfo.jobName,
    );

    if (!planExistiong) {
      rejectedList.push(JobInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.jobName != JobInfo.jobName,
    );

    if (currentCount == "interview-filter-btn") {
      randerInterview();
    }

    calculateCount();
  }
});

// randerInterview list
function randerInterview() {
  filterSection.innerHTML = "";

  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement("div");
    div.className =
      "cards bg-[#f0f0f0d9] border-2 border-gray-200 p-10 rounded-md mb-10 flex justify-between";
    div.innerHTML = `
        <!-- part 1 -->
          <div class="space-y-5">
            <div>
              <h2 class="jobName text-2xl font-bold text-[#002C5C]">
                ${interview.jobName}
              </h2>
              <p class="jobTitle text-xl text-[#64748B]">
                ${interview.jobTitle}
              </p>
            </div>

            <p class="remoteJob text-[#64748B] text-xl">
            ${interview.remoteJob}
            </p>

            <button
              class="notApplied btn btn-soft text-xl btn-2xl text-[#002C5C]"
            >
              ${interview.notApplied}
            </button>
            <p class="peragraph text-xl text-[#323B49]">
              ${interview.peragraph}
            </p>

            <!-- btn -->
            <div class="flex gap-5">
              <button
                class="interview-btn btn btn-lg border-2 border-green-700 text-xl text-green-500 px-6"
              >
                INTERVIEW
              </button>

              <button
                class="rejected-btn btn btn-lg border-2 border-red-700 text-xl text-red-500 px-6"
              >
                REJECTED
              </button>
            </div>
          </div>

          <!-- part 2 delet btn -->
          <div class="delet-btn text-2xl">
            <img src="./assets/delet-btn.png" alt="" class="w-12" />
          </div>
    `;
    filterSection.appendChild(div);
  }
}

// randerRejected list
function randerRejected() {
  filterSection.innerHTML = "";

  for (let rejected of rejectedList) {
    console.log(rejected);
    let div = document.createElement("div");
    div.className =
      "cards bg-[#f0f0f0d9] border-2 border-gray-200 p-10 rounded-md mb-10 flex justify-between";
    div.innerHTML = `
        <!-- part 1 -->
          <div class="space-y-5">
            <div>
              <h2 class="jobName text-2xl font-bold text-[#002C5C]">
                ${rejected.jobName}
              </h2>
              <p class="jobTitle text-xl text-[#64748B]">
                ${rejected.jobTitle}
              </p>
            </div>

            <p class="remoteJob text-[#64748B] text-xl">
            ${rejected.remoteJob}
            </p>

            <button
              class="notApplied btn btn-soft text-xl btn-2xl text-[#002C5C]"
            >
              ${rejected.notApplied}
            </button>
            <p class="peragraph text-xl text-[#323B49]">
              ${rejected.peragraph}
            </p>

            <!-- btn -->
            <div class="flex gap-5">
              <button
                class="interview-btn btn btn-lg border-2 border-green-700 text-xl text-green-500 px-6"
              >
                INTERVIEW
              </button>

              <button
                class="rejected-btn btn btn-lg border-2 border-red-700 text-xl text-red-500 px-6"
              >
                REJECTED
              </button>
            </div>
          </div>

          <!-- part 2 delet btn -->
          <div class="delet-btn text-2xl">
            <img src="./assets/delet-btn.png" alt="" class="w-12" />
          </div>
    `;
    filterSection.appendChild(div);
  }
}
