# OpenAI Chatbot Web Application

**Author:** [Weslen Lakins](https://github.com/WeslenLakins)

This is a simple web application that allows users to interact with OpenAI's GPT-4 model. Users can input a question, and the application will display the AI's response. It's built using Node.js, Express, and integrates with the OpenAI API.

## Features

1. User Interface: A clean and simple web interface for users to input their questions.
   OpenAI Integration: Connects with OpenAI's API to process user questions and retrieve AI-generated responses.
2. Responsive Design: The UI is responsive and adapts to various screen sizes.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the Repository**

```
git clone https://github.com/WeslenLakins/openai-web-app.git
```

2. **Navigate to the Project Directory**

```
cd openai-web-app
```

3. **Install the Dependencies**

```
npm install
```

4. **Set Up Environment Variables**

Create a .env file in the root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key
```

### Running the Application

1. **Start the Server**

```
npm run dev
```

2. **Access the Application**
   Open your web browser and navigate to http://localhost:3000.

## Usage

- Ask a Question: Type your question into the text area and click the "Ask AI" button.
- View the Response: The AI's response will be displayed below the question input area.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or create issues for bugs and feature requests.
