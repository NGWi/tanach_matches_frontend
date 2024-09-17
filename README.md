# Tanach Matches Frontend

## Overview

Tanach Matches is a web application that allows users to find matches for words in the Tanach (Hebrew Bible), where the word appears at least as part of the "matched word." This frontend of the application is built using React and consumes the APIs provided by the Tanach Matches Backend I built, located at [https://github.com/NGWi/tanach_matches_backend](https://github.com/NGWi/tanach_matches_backend).

## Features

List all verses in order with their book, chapter, and verse number
Zoom in on a specific verse to see all its words with their associated data
Fetch a word and all its connected data
Retrieve matches for words
Fetch matched words and their associated verses
Go directly to verses by chapter and verse number (in development)

## Installation

To get started with the Tanach Matches frontend, follow these steps:

Clone the repository: git clone https://github.com/NGWi/tanach_matches_frontend.git
Install dependencies: npm install or yarn install
Start the development server: npm start or yarn start

## Usage

The frontend provides a user-friendly interface for interacting with the data provided by the Tanach Matches Backend. You can use the application to:

**Browse through the list of verses:** "/verses", or "/" (for now)

**View the details of a specific verse:** Click on Zoom In on the above page. Or, if you know the number of the verse, "/verses/:id", or "/verses/:chapter/:verse" (in development)

**See the matches of a word with the verses they appear in:** In a verse page, click on the word, or the Show button below the word. Or if you know the number of the word in your uploaded bible file, "/words/:id".

**See the details for any word:** Click on the word, whether in the verse page, in the matched words popup, or in another word's Matched list.

## Contributing

Contributions are welcome! If you find any bugs or have ideas for new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.