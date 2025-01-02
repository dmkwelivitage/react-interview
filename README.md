# Book Search Application

This project consists of two main parts: a **backend API** and a **frontend web app**. The backend handles requests to the Google Books API, while the frontend allows users to search for books and display the results.

## Project Setup

### **Backend Setup**

1. Clone the repository:
    ```bash
    git clone <repo-url>
    ```

2. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the `backend` directory and add the following:
    ```plaintext
    GOOGLE_BOOKS_API_KEY=<your-google-books-api-key>
    ```

5. Start the backend server:
    ```bash
    npm start
    ```

   The backend will now be running at `http://localhost:5000` by default.

#### Backend Dependencies:
- **express**: A minimal and flexible Node.js web application framework.
- **cors**: Middleware for handling Cross-Origin Resource Sharing (CORS).
- **axios**: Promise-based HTTP client for the browser and Node.js.

---

### **Frontend Setup**

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `frontend` directory and add the following:
    ```plaintext
    VITE_BACKEND_URL=http://localhost:5000
    ```

4. Start the frontend application:
    ```bash
    npm run dev
    ```

   The frontend app will be available at `http://localhost:3000`.

#### Frontend Dependencies:
- **Vite**: A next-generation, fast build tool for web development.
- **React**: A JavaScript library for building user interfaces.
- **JSX**: JavaScript XML syntax extension used in React components.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Lucide-React**: A collection of icons for React.

---

### **API Documentation**

#### **GET `/api/books`**

- **Description**: Fetches books based on a search query.
- **Query Parameters**:
  - `query`: The search term for books.
- **Example**: `http://localhost:5000/api/books?query=javascript`
- **Response**:
    ```json
    [
      {
        "id": "9U5I_tskq9MC",
        "title": "Eloquent JavaScript",
        "authors": ["Marijn Haverbeke"],
        "publishedDate": "2011",
        "description": "Provides information and examples on writing JavaScript code.",
        "imageUrl": "http://books.google.com/books/content?id=9U5I_tskq9MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
    ]
    ```

---

### **Environment Configuration**

#### Backend:
- **GOOGLE_BOOKS_API_KEY**: You can get an API key from [Google Books API](https://developers.google.com/books).

#### Frontend:
- **VITE_BACKEND_URL**: The URL of your backend API (default: `http://localhost:5000`).

---

### **Troubleshooting**

- If the frontend can't connect to the backend, make sure the `VITE_BACKEND_URL` in your frontend `.env` file is correctly set to the backend's URL.
- Ensure that both frontend and backend servers are running.
