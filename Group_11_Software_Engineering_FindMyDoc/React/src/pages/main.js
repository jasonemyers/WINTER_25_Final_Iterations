document.addEventListener('DOMContentLoaded', function() {
    // DOM ready
    // load popup content once on initial page load
    fetchPopupContent()
        .then(popupData => {
            createTooltipPopup(popupData);   // render popup immediately
            setupHelpButton(popupData);      // bind help button to reopen
        })
        .catch(error => {
            console.error('Error loading popup:', error);  // log fetch errors
        });

    // attach search form submit handler
    document.getElementById('searchForm').addEventListener('submit', function(e) {
        e.preventDefault();         // stop default form submission
        const name = encodeURIComponent(document.getElementById('searchName').value);             // get name param
        const specialty = encodeURIComponent(document.getElementById('searchSpecialty').value);   // get specialty param
        const location = encodeURIComponent(document.getElementById('searchLocation').value);     // get location param
        // redirect to doctors page with query params
        window.location.href = `/doctors?name=${name}&specialty=${specialty}&location=${location}`;
    });
});

async function fetchPopupContent() {
    // fetch popup JSON from server
    try {
        const response = await fetch('https://findmydocprojectpythonserver-production.up.railway.app/popup-content');
        if (!response.ok) throw new Error('Network response failed');  // HTTP error
        return await response.json();  // parse and return JSON
    } catch (error) {
        throw error;  // propagate fetch or parse errors
    }
}

function createTooltipPopup(popupData) {
    // prevent background scroll
    document.body.classList.add('popup-open');
    
    // remove any old popups before rendering new
    document.querySelectorAll('#userGuidePopup, .modal-overlay').forEach(el => el.remove());

    // build popup HTML structure
    const popupHTML = `
        <div class="cloneable-container-default" id="userGuidePopup">
            <div class="popup-content">
                <h2 class="popup-header">${popupData.title}</h2>
                <div class="tooltip-body">
                    <h3 class="tooltip-header">${popupData.content.header}</h3>
                    <div class="tooltip-sections"></div>
                </div>
            </div>
        </div>
        <div class="modal-overlay"></div>
    `;

    // append popup to document
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // fill in each section of the popup
    const sectionsContainer = document.querySelector('.tooltip-sections');
    popupData.content.sections.forEach(section => {
        sectionsContainer.innerHTML += `
            <div class="tooltip-section">
                <h4 class="section-title">${section.title}</h4>
                <p class="section-text">${section.text}</p>
            </div>
        `;
    });

    // clicking overlay closes popup
    document.querySelector('.modal-overlay').addEventListener('click', () => {
        document.body.classList.remove('popup-open');  // re-enable scroll
        document.querySelectorAll('#userGuidePopup, .modal-overlay').forEach(el => el.remove());  // remove DOM elements
    });
}

function setupHelpButton(popupData) {
    // find help button by class
    const helpButton = document.querySelector('.text-200.bold');
    if (helpButton) {
        // reopen popup on click
        helpButton.addEventListener('click', () => {
            document.body.classList.add('popup-open');
            createTooltipPopup(popupData);
        });
    }
}
