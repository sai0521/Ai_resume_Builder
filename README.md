# AI Resume Builder

## Description
AI Resume Builder is a full-stack web application that allows users to create, manage, and store resumes with an intuitive interface. Users can register, log in, and generate resumes, which are securely stored in MongoDB. The backend is built with Node.js, Express.js, and MongoDB, while the frontend is developed using React.js.

## Features
- User authentication (Register/Login/Logout)
- Create and edit resumes
- Save resumes to MongoDB
- Retrieve saved resumes based on user ID
- Secure authentication using JWT
- Responsive UI built with Tailwind CSS

## Tech Stack
### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- JSON Web Tokens (JWT)

## Installation & Setup
### Prerequisites
- Node.js (v16 or later)
- MongoDB Atlas account

### Steps
#### 1. Clone the repository
```sh
git clone https://github.com/sai0521/Ai_Resume_Builder.git
git clone https://github.com/sai0521/Ai-resume-server.git
```

#### 2. Install dependencies
##### Frontend
```sh
cd Ai_Resume_Builder
npm install
```
##### Backend
```sh
cd Ai-resume-server
npm install
```

#### 3. Set up environment variables
Create a `.env` file in the `server` directory with the following variables:
```env
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

#### 4. Run the project
##### Start the backend server
```sh
cd Ai-resume-server
npm start
```
##### Start the frontend
```sh
cd Ai_Resume_Builder
npm start
```

## API Endpoints
### User Authentication
- `POST /users/register` - Register a new user
- `POST /users/login` - Authenticate user and return JWT token
- `POST /users/logout` - Logout user (handled on frontend by clearing token)

### Resume Management
- `POST /resumes/save` - Save resume to MongoDB
- `PUT /resumes/:id` - Save resume to MongoDB
- `DELETE /resumes/:id` - Save resume to MongoDB
- `GET /resumes/find/:id` - find a single resume with user email
- `GET /resumes` - Retrieve all resumes for a user

## Authentication Flow
1. User registers or logs in
2. JWT token is generated and stored in localStorage
3. Token is included in requests to access user data
4. User can log out by clearing the token from localStorage


## Future Improvements
- AI-powered resume suggestions
- Resume templates
- PDF export functionality
- Multi-user collaboration on resumes

## Contributors
- **Sai** (Developer)

## License
This project is open-source and available under the MIT License.
