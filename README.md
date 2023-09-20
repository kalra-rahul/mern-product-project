# MERN KALRA EMINENCE APP

It includes the following:

- Backend API with Express & MongoDB
- Routes for auth, logout, register, profile, update profile
- JWT authentication
- React frontend to register, login, logout, prodcuts page
- React Bootstrap UI library

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas]

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

Change the JWT_SECRET to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

![Landing Page](./images/landing.png)
