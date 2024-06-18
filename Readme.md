# FreeScribe

FreeScribe is a React app for transcribing audio in the browser using Xenova Transphormers. You can either upload an audio file or use your microphone to transcribe speech. The app downloads the necessary models and performs inference locally in your browser.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Try It Live](#live)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Features

- Transcribe audio files.
- Real-time speech transcription using the microphone
- Support for audio file upload or mic record
- Translate transcribed text to a new language
- Download transcribe or translated text in a text file
- Automatic model download and inference in the browser
- React-based UI for a smooth user experience

## Installation

To get started with FreeScribe, follow these steps:

### Prerequisites

Before proceeding, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

### Steps

1. Clone the repository

```bash
git clone https://github.com/OmarShemy/FreeScribe.git
cd FreeScribe
```

2. Install the project dependencies using npm:

```bash
npm install
```

3. Start the development server with:

```bash
npm run dev
```

This will start the app in development mode and open it in your default browser.

## Usage

FreeScribe provides two main ways to transcribe speech:

1. Transcribe Audio Files:

   - Click on the upload button and select the desired audio file from your local system
   - The app will process the file and display the transcribed text

2. Real-time Speech Transcription:

   - Click on the record button to start recording
   - Start speaking into your microphone
   - Click on the stop button to end the transcription
   - The app will transcribe your speech in real-time
   - You can downlaod the transcribed text

3. Translate Transcribed Text:

   - After transcribing audio, the text will appear on the screen.
   - You can then select a new language from the dropdown menu to translate the text.
   - The app will translate the text to the selected language and display the translated text.
   - You can download the translated text

## Contributing

Contributions are welcome! If you'd like to contribute to FreeScribe, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a new Pull Request

## Live

[For demonstration](https://the-tran-scriber.vercel.app)

## Example

![Demonstration](https://i.imgur.com/sKefEon.png)

## License

This project is licensed under the MIT License.
