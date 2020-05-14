# Contributing to IoGT-PWA

Interested in contributing to IoGT-PWA? Thanks! There are plenty of ways you can help.

Thank you for helping us make this project great and being a part of the IoGT-PWA community. Here are a few guidelines that will help you along the way.

## Code of Conduct

IOGT-PWA has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## What you need to know

In order to contribute as a developer you will need to have a basic understanding of [Python](https://docs.python.org/3/), [Django](https://docs.djangoproject.com/en/3.0/), [Molo](https://molo.readthedocs.io/getting-started.html), [JavaScript](https://www.javascript.com/resources) and [Github](https://help.github.com/en/github). Molo scaffolds a Django application for you with sensible defaults, packages, basic feature phone template set and configuration to help you get going as soon as possible. This quickly sets up the content management system(Wagtail) and web services API provider; while JavaScript provides UX enhancements and PWA functionality using a [service worker.](https://developers.google.com/web/fundamentals/primers/service-workers)



## Issue tracking

IoGT-PWA uses GitHub’s tracker called [Issues](https://github.com/unicef/iogt-pwa/issues) for easy collaboration among developers to keep track of tasks, enhancements, and bugs during software sprints. A typical issue looks like this:
* A **title** and **description** describe what the issue is all about.
* Color-coded labels help you categorize and filter your issues (just like labels in email).
* A **milestone** acts like a container for issues. This is useful for associating a group of issues with specific features or time period (e.g. Weekly Sprint 9/7-7/20 or PWA 1.0). 
* One **assignee** is responsible for working on the issue at any given time.
* **Comments** allow anyone with access to the repository to provide feedback.

## Setting up your development environment
You will need Python 3 Runtime Environment(https://www.python.org/downloads/), Node.js version 10+(https://nodejs.org/en/download/releases/) and npm.

1. Clone the repo with `git clone https://github.com/unicef/iogt-pwa.git`

2. Run `npm install` in the root `iogt-pwa` folder.

Once it is done, you can modify any file locally and run `npm start`, `npm test` or `npm run build`.

### Coding style

Please follow the coding style of the project. IOGT-PWA uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

- `npm prettier` reformats the code.
- `npm lint` runs manually the linting rules.

Finally, when you submit a Pull Request, they are run again by our continuous integration tools, but hopefully, your code is already clean!

## Submitting a Pull Request(Guidelines)

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

In summary, if you want to contribute to IOGT-PWA, the simplest way is to:
1. Claim an [issue](https://github.com/unicef/iogt-pwa/issues) from the issue tracker.
2. Fork the [IoGT-PWA](https://github.com/unicef/iogt-pwa) project.
3. Clone it to your local system.
4. Make a new branch.
5. Make your changes.
6. Try as much as you can to include unit tests for your changes. 
7. Push it back to your repo.
8. Click the Compare & pull request button.
9. Click Create pull request to open a new pull request.



## CI/CD
We use [CircleCI](https://circleci.com/) for continuous integration to automatically run unit tests while [Docker](https://www.docker.com/) does the continous delivery of releases for IoGT-PWA.

## Project Wiki
Our [wiki](https://github.com/unicef/iogt-pwa/wiki) has several pages of information for developers, and people contributing to IOGT-PWA. Check it out for your authoritative source of information about the IOGT-PWA community.

## License

By contributing your code to the unicef/iogt-pwa GitHub repository, you agree to license your contribution under the GNU Affero General Public License.



