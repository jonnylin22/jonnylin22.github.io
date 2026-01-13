// Create and inject the navbar
document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
        <div id="resume-bar">
            <a href="index.html" id="Home-btn">Home</a>
            <a href="https://www.linkedin.com/in/linjonathan001/" id="LinkedIn-btn">LinkedIn</a>
            <a href="portfolio.html" id="Portfolio-btn">Portfolio</a>
            <a href="https://github.com/jonnylin22" id="GitHub-btn">Github</a>
            <a href="projects.html" id="Projects">Projects</a>
        </div>
    `;
            // <a href="resume.pdf" id="resume-btn">Resume</a>
        // #resume-btn { display:inline-block; width:var(--button-width); padding:10px 0; font-size:1.8em; color:#333; text-decoration:none; background-color:#fff; border:2px solid #333; border-radius:4px; font-weight:500; transition:all 0.2s; text-align:center; }

    const navbarStyles = `
        :root { --button-width: 200px; }
        #Home-btn { display:inline-block; width:var(--button-width); padding:10px 0; font-size:1.8em; color:#333; text-decoration:none; background-color:#fff; border:2px solid #333; border-radius:4px; font-weight:500; transition:all 0.2s; text-align:center; }
        #resume-bar { width:100%; background-color:#f0f0f0; padding:12px 0; display:flex; justify-content:space-around; align-items:center; box-shadow:0 2px 4px rgba(0,0,0,0.1); }
        #LinkedIn-btn { display:inline-block; width:var(--button-width); padding:10px 0; font-size:1.8em; color:#333; text-decoration:none; background-color:#fff; border:2px solid #333; border-radius:4px; font-weight:500; transition:all 0.2s; text-align:center; }
        #GitHub-btn { display:inline-block; width:var(--button-width); padding:10px 0; font-size:1.8em; color:#333; text-decoration:none; background-color:#fff; border:2px solid #333; border-radius:4px; font-weight:500; transition:all 0.2s; text-align:center; }
        #Portfolio-btn { display:inline-block; width:var(--button-width); padding:10px 0; font-size:1.8em; color:#333; text-decoration:none; background-color:#fff; border:2px solid #333; border-radius:4px; font-weight:500; transition:all 0.2s; text-align:center; }
        #Projects { display:inline-block; width:var(--button-width); padding:10px 0; font-size:1.8em; color:#333; text-decoration:none; background-color:#fff; border:2px solid #333; border-radius:4px; font-weight:500; transition:all 0.2s; text-align:center; }
        #LinkedIn-btn:hover { background-color:#333; color:#fff; }
        #resume-btn:hover { background-color:#333; color:#fff; }
        #GitHub-btn:hover { background-color:#333; color:#fff; }
        #Portfolio-btn:hover { background-color:#333; color:#fff; }
        #Projects:hover { background-color:#333; color:#fff; }
    `;

    // Inject navbar HTML at the start of body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Inject styles into head
    const styleTag = document.createElement('style');
    styleTag.textContent = navbarStyles;
    document.head.appendChild(styleTag);
});
