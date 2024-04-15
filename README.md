# Full-Stack Authentication App

![Full Stack Auth App](/public/preview.png)
[![App Preview](preview)](public/preview.png)]

**About**

This full-stack authentication application, built with Next.js, MongoDB, NextAuth.js, and Tailwind CSS, empowers users to:

- Register with their name, email, and password
- Log in seamlessly using their email and password
- Access a protected dashboard exclusively for authenticated users

**Features**

- Robust user registration with name, email, and password validation
- Secure user login with email and password authentication
- Protected dashboard accessible only to verified users
- Prevent unauthorized access to the dashboard without login
- Seamless user experience with automatic redirection after login/logout
- Aesthetically pleasing and responsive UI powered by Tailwind CSS

**Technologies**

- Next.js
- MongoDB  
- NextAuth.js 
- Tailwind CSS)

---

**Getting Started**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MuhammadKaifNazeer/full-stack-auth-app.git

2. **Install Dependencies:**

   ```bash
   npm install

2. **Run the Development Server:**

   ```bash
   npm run dev


## Note

- Create a `.env` file in the root directory of your project.
- Set the following environment variables within the `.env`:


**Explanation of Environment Variables:**

- **MONGODB_URI:** Replace this with your actual MongoDB connection string. You can obtain this from your MongoDB Atlas account or local MongoDB instance.
- **NEXTAUTH_SECRET:** Replace this with a strong secret key for NextAuth.js authentication. This ensures the security of your authentication flow.
- **NEXTAUTH_URL:** Replace this with the base URL of your application where authentication callbacks will be directed. This is crucial for production deployment.


