
# Akan Name Generator

## Overview
A web application that generates traditional Akan names based on the user's birthdate and gender. The Akan people of Ghana assign names according to the day of the week a person is born.

## Features
- **Date Input**: Enter birth day, month, and year
- **Gender Selection**: Choose male or female
- **Akan Name Generator**: Calculates the day of the week and assigns the corresponding traditional Akan name
- **Input Validation**: Ensures valid dates and complete form submission
- **Responsive Design**: Clean, user-friendly interface

## How It Works
1. Enter your birthdate (day, month, year)
2. Select your gender
3. Click "Find Akan Name"
4. View your corresponding Akan name and birth day

## File Structure
```
├── index.html    # Main HTML form and structure
├── script.js     # Name generation logic
├── styles.css    # Styling and layout
└── ReadMe.md     # This file
```

## Technical Details
- Uses Zeller's congruence algorithm to calculate the day of the week
- Name mapping based on day of week and gender
- Client-side validation for date ranges and required fields

## Browser Compatibility
Works on all modern browsers supporting ES6 JavaScript and HTML5.

## Usage Example
```
Input: Birth date 15/03/1990, Gender: Male
Output: Your Akan name is [corresponding name based on day of week]
```

## Installation
1. Clone or download the repository
2. Open `index.html` in your web browser
3. No dependencies or server setup required

## Contributing
Contributions are welcome. Please ensure code follows the existing style and includes appropriate comments.

## License
Copyright 2026 Alex Tsalwa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Technologies Used
- **HTML5**: Markup and form structure
- **CSS3**: Styling and responsive design
- **JavaScript (ES6)**: Name generation logic and DOM manipulation
- **Git**: Version control
- **GitHub Pages**: Hosting and deployment

## Deployment
This project is deployed using GitHub Pages. Visit the live site to generate your Akan name instantly.


