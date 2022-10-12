<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">100 Days of Coding</h2>

  <p align="center">
    Explore the document by the links below:
    <br />
    <a href="https://github.com/natenaranjo/codingblog"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://intense-sierra-67829.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/natenaranjo/codingblog/issues">Report Bug</a>
    ·
    <a href="https://github.com/natenaranjo/codingblog/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Project Screenshot][project-screenshot]](https://github.com/natenaranjo/codingblog)

 Creating a tech blog so a developer can publish allow about their learnings as they are learning a technology. Needing a breaking from stuggling moments to vent and give a peace of mind maybe.

### Features

- Display post just like blog post when the user.
- Keeps whitespaces and new lines.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Installation

- Clone repository to your folder.
- You an use npm install or yarn install to add the dependencies.
- Once you installed all the dependencies needed... 
- In the terminal need to run mysql
    - SOURCE db/schema.sql ( to setup the databases)
    - Exit the terminal
- Make sure to seed the database
    - Run node seeds/seed.js (to seed the databases)
- Back in the terminal after seeding the databases.
    - Run node server.js or if you have nodemon install nodemon start
 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- USAGE EXAMPLES -->
## Usage

To start go to localhost:3001, which will take you to the starting page..  


[![Project Screenshot][project-screenshot-1]](https://github.com/natenaranjo/codingblog)

Clicking on "Read more -> " will take you to the article.

[![Project Screenshot][project-screenshot-2]](https://github.com/natenaranjo/codingblog)

Clicking on Dashboard will take the user to their dashboard to view post they publish, can create a new post, or delete and existing post.

[![Project Screenshot][project-screenshot-3]](https://github.com/natenaranjo/codingblog)

Clicking on create a post will allow the user to enter a title and text.

[![Project Screenshot][project-screenshot-4]](https://github.com/natenaranjo/codingblog)

User can login or signup through the login page.

[![Project Screenshot][project-screenshot-5]](https://github.com/natenaranjo/codingblog)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- ROADMAP -->
## Roadmap

Develop a CMS-style blog site.

- [x] First Visit to the site
    - [x] Present with a homepage displaying post published to the site.
    - [x] Navigation with dashboard and login links
- [x] Click the home page link taken back to the homepage
- [x] Click any other link take to their destination
- [x] Login page
    - [x] Option to Sign up if not already
    - [x] Optin to Sign in if not already
    - [x] Once login will be taken back to homepage
- [x] Dashboard
    - [x] Can create a new post
    - [x] Can edit an existing post
    - [x] Can delete an existing post
- [x] View a publish Post
    - [x] Can add a comment if logged in
    - [x] Can edit a comment if belongs to user logged in
    - [x] Can delete a comment if belongs to user logged in.
- [x] When signed out take back to homepage

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- LICENSE -->
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This was accomplished by those listed below:

- Main Developer (Nate)
- TA's (Jenny)
- Instructor (Bob)
- Tutor (Megan)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/natenaranjo/codingblog.svg?style=for-the-badge
[contributors-url]: https://github.com/natenaranjo/codingblog/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/undefined/codingblog.svg?style=for-the-badge
[forks-url]: https://github.com/natenaranjo/codingblog/network/members
[stars-shield]: https://img.shields.io/github/stars/natenaranjo/codingblog.svg?style=for-the-badge
[stars-url]: https://github.com/natenaranjo/codingblog/stargazers
[issues-shield]: https://img.shields.io/github/issues/natenaranjo/codingblog.svg?style=for-the-badge
[issues-url]: https://github.com/natenaranjo/codingblog/issues
[license-shield]: https://img.shields.io/github/license/natenaranjo/codingblog.svg?style=for-the-badge
[license-url]: https://github.com/natenaranjo/codingblog/blob/master/LICENSE.txt
[project-screenshot]: ./public/img/screenshot.png
[project-screenshot-2]: ./public/img/screenshot-2.png
[project-screenshot-3]: ./public/img/screenshot-3.png
[project-screenshot-4]: ./public/img/screenshot-4.png
[project-screenshot-5]: ./public/img/screenshot-5.png
