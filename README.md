# Ebisa Indalu — Portfolio Website

A responsive dark portfolio built with plain HTML, CSS, and JavaScript. No build tools or package installation are required.

## Included
- Responsive layout for phones, tablets, and desktops
- Sticky navigation with mobile menu
- About, skills, project cards, and contact sections
- Project category filters and a downloadable, print-ready HTML résumé
- GitHub and email links
- Contact form validation that opens the visitor's email app using `mailto:`
- Reduced-motion support and basic accessibility features

## Run locally
1. Unzip the project.
2. Open `index.html` in a browser.

For a local development server, use VS Code's **Live Server** extension, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Personalize before publishing
- The hero profile photo is stored at `images/profile.jpg`; it shows initials until the image is available.
- Confirm that the project descriptions match your actual work.
- Add each real project's GitHub repository or live demo link when ready.
- Update the résumé in `resume.html` with any additional dates, experience, or verified achievements before sharing it.
- Replace the illustrative project panels with screenshots of your actual projects if available.
- Edit the email and GitHub URL in `index.html` and `script.js` if they change.

## Contact form behavior
The current form is functional without a backend: it validates the fields and prepares an email to `ebisaindalu41@gmail.com` in the visitor's default email app. It does **not** send messages silently or store submissions. Visitors need an email app configured and must press Send themselves.

For direct form submissions without opening an email app, connect a service such as Formspree:
1. Create a form in your Formspree account and copy its endpoint.
2. Change the form to submit to that endpoint, following Formspree's current setup instructions.
3. Test the endpoint and configure spam protection before publishing.

## Résumé download
The Resume link downloads `resume.html`. Open the file in a browser and use Print to save a PDF copy.

## Publish free
You can deploy the folder using GitHub Pages, Netlify, or Vercel. For GitHub Pages, push the files to a repository, then open the repository's **Settings → Pages** and select the branch/folder to publish.

## Accuracy note
The project titles are included as portfolio topics provided by the site owner. Their descriptions are intentionally framed as concepts/explorations; no live demos, repositories, completed functionality, or achievements are claimed.
