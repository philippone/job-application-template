# Job Application Template

Job application template build with [11ty](https://www.11ty.dev/)

[Example PDF](./example.pdf)

# Getting Started

To build your own job application, you need a running [NodeJS Environment](https://nodejs.dev/) on your system. Then install all requiered dependencies with:

```
npm install
```


# Usage

## Serve
To serve the page, use the followig npm script:

```
npm run serve
```

Open your browser at [localhost:1337/](http://localhost:1337/).

## Data Manipulation

The job application is assembled by json data that are located at 

```
src/_data
```

Populate the files with your personal data.

- Metadata (Header)
- Job (Cover Poster)
- Letter (Cover letter)
- Vita
- Samples

## Assets

You can place your assets (images) at `src/assets`

## Styling

Files responsible for styles are at `src/styles`.
There are some custom css properties (variables) defined at `styles.scss`

# Export as PDF

I'm using Chrome on Mac (Version 90.0.4430.85).

- Open Printing Dialog of your browser.
- Do not use Chrome's Printing Dialog (Page paddings are not correct):
    - Select 'Print using system dialog'
- Save as PDF or Open in Preview