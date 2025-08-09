# Trip-Stay

**Live Demo:** [Trip-Stay App](https://trip-stay-app.onrender.com)

**One-Line Overview**  
Trip-Stay is a web app to explore, list, and book unique travel stays with interactive maps and secure user accounts.

---

##  Features

- **Browse Accommodations** — View listings with images, descriptions, pricing, and map-based location.
- **User Authentication** — Register and log in securely.
- **Manage Listings** — Add, edit, or delete your own property listings.
- **Interactive Maps** — Locate stays with integrated mapping functionality.
- **Responsive Design** — Mobile-friendly and desktop-ready.

---

##  Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (likely via Mongoose)
- **Frontend**: EJS templates
- **Authentication**: Bcrypt (password hashing), Express-session (session management)
- **Mapping**: Mapbox or similar integration
- **Hosting**: Deployed using Render

---

installation_guide = """# Trip-Stay Project — Installation Guide

This guide will walk you through setting up the **Trip-Stay** project locally on your machine.

---

## **Prerequisites**

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 recommended)  
- **MongoDB** (local or Atlas)  
- **Nodemon** (installed globally)  

---

## **Installation Steps**

### 1️⃣ Clone the Trip-Stay repository from GitHub
```bash
git clone https://github.com/ankursharma200/Trip-Stay.git
cd Trip-Stay
```
---

### 2️⃣ Set up environment variables
Create a `.env` file in the root directory and add the following:

```env
DB_URL=mongodb://127.0.0.1:27017/tripstay
MAP_TOKEN=your_mapbox_token
SESSION_SECRET=your_secure_session_secret
```


### 3️⃣ Set up Cloudinary
1. Go to [Cloudinary](https://cloudinary.com/) and sign up for a free account.  
2. Once logged in, get your **CLOUD_NAME**, **CLOUD_API_KEY**, and **CLOUD_API_SECRET** from the dashboard.  
3. Add these to your `.env` file:  
   ```env
   CLOUD_NAME=your_cloud_name
   CLOUD_API_KEY=your_api_key
   CLOUD_API_SECRET=your_api_secret
   ```
4. Add a secure secret for session management:  
   ```env
   SECRET=your_cloudinary_secret
   ```

   ---


### 4️⃣ Install dependencies
```bash
npm install
```

---

### 5️⃣ Run the application
Using **Nodemon**:
```bash
nodemon app.js
```

Or without Nodemon:
```bash
node app.js
```

---

### 6️⃣ Access the project
Once the server is running, open your browser and visit:
```
http://localhost:
```



✅ You’ve successfully installed and set up **Trip-Stay** locally!  
If you run into issues during installation, feel free to reach out. Happy coding! 🚀







