# Stock & Crypto Tracker Dashboard

## Overview
The Stock & Crypto Tracker Dashboard is a full-stack end-to-end web application that allows users to track real-time stock and cryptocurrency data and save their favorite investments by utilizing user authentication. This project was designed to help investors retrieve real time stock & crypto coins prices and specific data.

This app enables users to:
* Search for stock and cryptocurrency prices using API data.
* Save their favorite stocks and cryptocurrencies.
* Sign in and manage their account with Firebase Authentication.
* Get notifications when the API rate limits are about to be reached.

## Motivation for Building the Project
I have always been passionate about investing and the stock market, which is why I centered this project around stocks and cryptocurrency. More thatn just the financial theme, I wanted to expand my knowledge and work with technologies that are crucial for modern web development, including React, Redux, JavaScript, and Firebase. This project gave me an excellent opportunity to practice integrating API data, managing user authentication, and handling complex state using Redux, all while working on a topic I'm truly enthusiastic about.

By building this project, I aimed to challenge myself in learning new technologies and implementing them into a cohesive full-stack application that could offer both technical complexity and practical usage.

## Features
* **Real-time Stock and Crypto Currency Data:** Users can input stock tickers or crypto symbols to fetch real-time data from public APIs.
* **Favorites Management:** Logged-in users can save their favorite stocks and crypto items for quick access, using Firebase Firestore to store this information securely.
* **User Authentication:** Firebase Authentication allows users to sign up, sign in, and sign out.
* **API Rate Limiting Alerts:** Users are notified when API free-tier call limits are about to be reached.
* **Responsive UI:** Built with Bootstrap and CSS FlexBox for a clean and responsive layout, optimized for different screen sizes.
* **React/Redux State Management:** Redux helps handle the application's complex state with efficiency, from fetching API data to managing user favorites.

## Deployment on Netlify
Deployed this on Netlify, utilizing its continous integration and deployment capabilities. The deployment is configured to automatically trigger builds from the main branch of the GitHub repository, ensuring all code changes are reflected in the live environment. The build process is handled through Netlify's automated pipelines, with the React application built using **npm run build**. Environment variables, including API keys and Firebase credentials, are securly managed through Netlify's settings. Leveraging Netlify's global CDN for fast and reliable performance, along with automatic SSL management to provide secure HTTPS access.

## Tools and Technologies
* **React:** JavaScript library I used to build the front-end user interface.
* **Redux:** Centralized state management for handling asynchronous API calls, user authentication, and favorites.
* **Javascript:** Writing logic and interaction with APIs.
* **Firebase Authentication:** Secures user authentication, sign-in/sign-out functionalities.
* **Firebase Firestore:** Stores user-specific data such as favorite stocks and crypto assets.
* **REST APIs:** Fetched real-time stock and crypto data from publi APIs. (Financial Modeling Prep API)
* **Bootstrap:** Created responsive layout and components.
* **CSS FlexBox:** Structured the layout, particularly in segmenting the stock and crypto sections on the dashboard.
* **Netlify:** Deployed this web application in a CI/CD deployment environment.

## Challenges Overcome
1. **State Management with Redux:** Integrating Redux to manage asynchronous API data, authentication states, and user favorites was essential but tricky to implement and my first time working with it. After resolving several bugs related to state persistence, I created a smooth user experience where data flows naturally through the application.
2. **Firestore Permissions:** While building out the ablity for users to save their favorite stocks and crypto data, I ran into permission issues with Firestore rules. After some troubleshooting, I updated Firestore security rules to properly allowed users to access and write data to their own documents, preventing unauthorized access to other users data.
3. **API Rate Limiting:** Managing API rate limits was another hurdle. Since the free-tier API has daily request limits, I implemented an alert system to notify users when they were approaching the API call limit.
4. **Authentication Management:** One of the key challenges I ran into was securely implementing user authentication with Firebase. After setting up Firebase Authentication, I ensured only registered user could access saving to favorites, which required precise rule-based access control in Firestore.
5. **Responsive UI Design:** Designing a clean and user-friendly interface with Bootstrap and Flexbox involved some trial and error, especially in ensuring that the stock and crypto sections were well segmented and responsive on all devices.

## Future Features

* **Historical Data Visualization:** Considering implementation of charting libraries to visualize price history for selected stocks and cryptocurrencies.
* **Enhanced User Profile:** I'm aiming to build more features to the user profile, such as tracking portfolios and/or setting up price alerts for example.