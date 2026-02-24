let interviewList = []
let rejectedList = []
let currentStatus = 'all'


let total = document.getElementById('total')
let interviewCount = document.getElementById('interview')
let rejectedCount = document.getElementById('rejected')
let jobCount = document.getElementById('job-count')


const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')


const allCardSection = document.getElementById('allCards')
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')
const filterAllCardSection = document.getElementById("filtered-all-card-container")


function calculateCount() {
    total.innerText = allCardSection.children.length
    jobCount.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}

calculateCount()

function toggleStyle(id) {

    allFilterBtn.classList.add('bg-slate-100', 'text-black')
    interviewFilterBtn.classList.add('bg-slate-100', 'text-black')
    rejectedFilterBtn.classList.add('bg-slate-100', 'text-black')

    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')

    const selected = document.getElementById(id)
    currentStatus = id

    selected.classList.remove('bg-slate-100', 'text-black')
    selected.classList.add('bg-blue-500', 'text-white')

    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden')
        if (interviewList.length == 0) {
            filterSection.classList.remove('hidden')
        } else {
            filterSection.classList.add('hidden')
            renderInterview();
        }

    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden')
        filterSection.classList.add('hidden')

    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden')
        if (rejectedList.length == 0) {
            filterSection.classList.remove('hidden')
        } else {
            filterSection.classList.add('hidden')
            renderRejected()
        }
    }
}

mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode;
        const jobName = parenNode.querySelector('.jobName').innerText
        const jobSubject = parenNode.querySelector('.jobSubject').innerText
        const time = parenNode.querySelector('.time').innerText
        const selary = parenNode.querySelector('.selary').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'Interview'

        const cardInfo = {
            jobName,
            jobSubject,
            time,
            selary,
            status: 'Interview',
            notes
        }
        const jobExist = interviewList.find(item => item.jobName == cardInfo.jobName)

        if (!jobExist) {
            interviewList.push(cardInfo)
        }
        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName);

        if (currentStatus == "rejected-filter-btn") {
            renderRejected();
        }
        calculateCount()


    } else if (event.target.classList.contains('rejected-btn')) {
        const parenNode = event.target.parentNode.parentNode;
        const jobName = parenNode.querySelector('.jobName').innerText
        const jobSubject = parenNode.querySelector('.jobSubject').innerText
        const time = parenNode.querySelector('.time').innerText
        const selary = parenNode.querySelector('.selary').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'Rejected'

        const cardInfo = {
            jobName,
            jobSubject,
            time,
            selary,
            status: 'Rejected',
            notes
        }

        const jobExist = rejectedList.find(item => item.jobName == cardInfo.jobName)


        if (!jobExist) {
            rejectedList.push(cardInfo)
        }

        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName)

        calculateCount()

        if (currentStatus == "interview-filter-btn") {
            renderInterview();
        }

    }

})


function renderInterview() {
    filterAllCardSection.innerHTML = ''
    for (let Interview of interviewList) {
        let div = document.createElement('div')
        div.className = 'card flex justify-between border border-gray-300 rounded-2xl p-[24px] mb-10'
        div.innerHTML = `
          <div class="space-y-6">
                 <!-- part-01 -->
                  <div>
                     <p class="jobName text-2xl font-bold">${Interview.jobName}</p>
                     <p class= "jobSubject text-gray-500">${Interview.jobSubject}</p>
                  </div>

                  <!-- part-02 -->
                   <div class="flex gap-2">
                     <p class="time text-gray-500">${Interview.time}</p>
                     <p class="selary text-gray-500">${Interview.selary}</p>
                  
                   </div>

                   <!-- part -03 -->
                    <button class="status bg-gray-200 px-5 py-2 font-semibold text-xl rounded-xl">${Interview.status}</button>
                    <p class=" notes text-gray-500">${Interview.notes}</p>

                    <div class="flex gap-5">
                        <button class="interview-btn text-green-500 px-4 py-2 border border-green-500 rounded-xl">INTERVIEW</button>
                        <button class="rejected-btn text-red-500 px-4 py-2 border border-red-500 rounded-xl">REJECTED</button>
                    </div>
              </div>


             <!-- main part 02 -->
              <div class="space-y-6">
                <button class="btn-delete  px-4 py-3.5 border border-gray-300 rounded-full"><i class="fa-solid fa-trash-can text-gray-500"></i></button>
              </div>
        `
        filterAllCardSection.appendChild(div)
    }
}

function renderRejected() {
    filterAllCardSection.innerHTML = ''

    for (let Rejected of rejectedList) {

        let div = document.createElement('div')
        div.className = 'card flex justify-between border border-gray-300 rounded-2xl p-[24px] mb-10'
        div.innerHTML = `
          <div class="space-y-6">
                 <!-- part-01 -->
                  <div>
                     <p class="jobName text-2xl font-bold">${Rejected.jobName}</p>
                     <p class= "jobSubject text-gray-500">${Rejected.jobSubject}</p>
                  </div>

                  <!-- part-02 -->
                   <div class="flex gap-2">
                     <p class="time text-gray-500">${Rejected.time} </p>
                     <p class="selary text-gray-500">${Rejected.selary}</p>
                  
                   </div>

                   <!-- part -03 -->
                    <button class="status bg-gray-200 px-5 py-2 font-semibold text-xl rounded-xl">${Rejected.status}</button>
                    <p class=" notes text-gray-500">${Rejected.notes}</p>

                    <div class="flex gap-5">
                        <button class="interview-btn text-green-500 px-4 py-2 border border-green-500 rounded-xl">INTERVIEW</button>
                        <button class="rejected-btn text-red-500 px-4 py-2 border border-red-500 rounded-xl">REJECTED</button>
                    </div>
              </div>

             <!-- main part 02 -->
              <div class="space-y-6">
                <button class="btn-delete  px-4 py-3.5 border border-gray-300 rounded-full"><i class="fa-solid fa-trash-can text-gray-500"></i></button>
              </div>
        `
        filterAllCardSection.appendChild(div)
    }
}



function deleteJobCard(event) {
    const card = event.target.closest('.card');
    if (card) {
        card.remove();
        updateCounters();
    }
}


function updateCounters() {

    const remainingJobs = document.querySelectorAll('.card').length;

    const totalCountElement = document.getElementById('total');
    const jobCountText = document.getElementById('job-count');

    if (totalCountElement) {
        totalCountElement.innerText = remainingJobs;
    }

    if (jobCountText) {
        jobCountText.innerText = ` ${remainingJobs} `;
    }
}

document.addEventListener('click', function (e) {
    if (e.target.closest('.btn-delete')) {
        deleteJobCard(e);
    }
});