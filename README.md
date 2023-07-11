# Turbox Documentation

Turbox is an operating environment coded entirely using TurboWarp. It behaves like an operating system and takes care of the tasks an OS would.

## Important Note:

While Turbox is an operating *environment*, **Turbox is not an operating system itself**. Instead, it functions as an environment that runs on top of a base system like Linux. A project is underway to create a bootable/installable version of Turbox however.

## Installation

To install Turbox, follow these steps:

1. Go to the [Releases](https://github.com/pandap17/turbox/releases) tab on the Turbox GitHub repository.
2. Download the release package that suits your system. (e.g., `turbox-linux-electron-x64.zip` for Linux)
3. Extract the contents of the downloaded package to a desired location on your computer.

## Accessing Turbox Source Code

The source code of Turbox is available for you to explore and modify. To access Turbox's source code, follow these steps:

1. Download the "turbox.sb3" file from the main directory of the repo. This contains all source code for Turbox.
2. To edit the source code, go to [https://turbowarp.org]. Go to File > Load from your computer, and load the SB3.
3. Once the project has loaded, click "See Inside" to edit the source code.

## Building Turbox

Turbox can be easily built to various environments, including HTML, Electron, NW.js, WKWebView, and others, thanks to the TurboWarp packager. Official builds of each major environment will be included with each Turbox release on GitHub. However, if you want to build it yourself, follow these steps:

1. Download the "turbox.sb3" file from the main directory of the repo.
2. Open the sb3 file in TurboWarp's editor.
3. Customize Turbox as desired.
4. Build Turbox by going to `File > Package Project` in TurboWarp's editor.

## Package Management

Turbox has a package system to install third-party programs, tools, or applications. Similar to Linux, it is referred to in the terminal and by the handler as "Apt". To install packages, use the `apt-install` command followed by the package name. Package installation begins automatically.

## Contributing

Turbox was created by PandaP17 and is maintained by PandaP17, but anyone can contribute to the source code. To contribute, follow these steps:

1. Clone the Turbox repository: `git clone https://github.com/pandap17/turbox`
2. Make modifications or improvements to the source code using TurboWarp.
3. Submit a pull request on GitHub with the modified SB3 file, detailing your exact improvements/changes.

Please note that new applications may not be accepted unless they are extremely helpful to the system as a default. Consider creating a package that users can install instead.

## Handler

Turbox operates with a "handler". The handler, listed as the "handler" sprite in the essentials folder in the source code, handles all filesystem changes and major operations. It processes operations in the form of "jobs", and any application can send a job to the handler by adding it to the `handlerJOBS` list. Jobs are formatted as commands, for example:

`set [filename or variable] [data]`
`del [filename or variable]`


Files are represented as variables. Currently, all files are stored in one root directory, and a proper filesystem will be introduced in a later version of Turbox.
