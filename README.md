# My Portfolio

Welcome to my portfolio! 🚀

Visit my portfolio website to explore my work and learn more about me. I've gathered my projects, skills, and experiences in one place to share with you.

## Portfolio Link

👉 [Visit My Portfolio](https://itsarraj.me)

I invite you to click the link above and discover the projects and experiences that define my journey.

# Web Simulation of Ubuntu 20.04

Welcome to my personal portfolio website, designed to resemble the Ubuntu 20.04 theme. I created this site using Next.js and Tailwind CSS. If you'd like to make any changes to it, simply clone the project and edit the files located in the `/src/components` directory.

To run the website on your local machine, follow these steps:

1. Type `npm start` to start the development server.
2. When you've finished making your changes, use `npm run build` to build your app for production.

_Note: If you prefer using Yarn, you can replace the `npm` commands with `yarn start` and `yarn build`._

### Making the Contact Form Work

To enable the contact form to send emails, follow these steps:

1. Create an account on [EmailJS](https://www.emailjs.com/).
2. Create a new Outlook or Gmail account to send emails.
3. Create a new service on EmailJS, and log in to your newly created Outlook or Gmail account.
4. Once you've set up the service, go back to the EmailJS dashboard and copy the Service ID.

Next, create a `.env` file in your project's root folder and add the following variables:

```
NEXT_PUBLIC_USER_ID = 'YOUR_USER_ID'
NEXT_PUBLIC_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
NEXT_PUBLIC_SERVICE_ID = 'YOUR_SERVICE_ID'
```

Replace 'YOUR_USER_ID' , YOUR_TEMPLATE_ID and 'YOUR_SERVICE_ID' with the actual values from your EmailJS service.

## This project was created using Create Next App, and you can run the following scripts:

### `npm start`

This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload if you make any edits, and you'll also see any lint errors in the console.

### `npm run build`

Use this command to build the app for production. It will create a 'build' folder with the optimized production version of your app. The build is minified, and the filenames include unique hashes. Your app is now ready to be deployed.

For more information on deployment, check out the [deployment section](https://facebook.github.io/create-react-app/docs/deployment).

## Contributing

Contributions are highly appreciated, as they make the open-source community a vibrant and inspiring place. If you'd like to contribute to making this website even better, follow these steps:

1. Fork the project.
2. Create a feature branch (e.g., `git checkout -b feature/ImpressiveFeature`).
3. Commit your changes (e.g., `git commit -m 'Added some impressive feature'`).
4. Push your changes to the branch (e.g., `git push origin feature/ImpressiveFeature`).
5. Open a pull request to submit your contributions.

Your efforts will help enhance this project and benefit the community. Thank you for your support!
