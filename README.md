# 📹 Real-Time Video Calling App  

A real-time **video calling application** built with **Flutter** and **Dart** for the frontend, using **WebRTC** for peer-to-peer communication. The backend, developed with **Node.js**, **Express.js**, and **MongoDB**, leverages **Socket.io** for signaling. Users can join video calls using a unique room ID.  

## 🚀 Technologies Used  
### **Frontend (Branch: `main`)**  
- **Flutter & Dart** – Cross-platform UI framework  
- **WebRTC** – Peer-to-peer video communication  

### **Backend (Branch: `master`)**  
- **Node.js & Express.js** – Backend server  
- **MongoDB** – Database for storing room details  
- **Socket.io** – Real-time signaling for WebRTC  

## ✨ Features  
- 📞 **Real-Time Video Calls** – Seamless peer-to-peer communication  
- 🔗 **Unique Room ID** – Users can join calls via a generated room ID  
- 🔄 **Live Signaling** – Uses **Socket.io** for real-time connection management  
- 🌍 **Cross-Platform** – Works on both mobile and web  

## 📦 Installation  

### **Frontend Setup**  
1. Switch to the frontend branch:  
   ```sh
   git checkout main
   ```
2. Install dependencies:  
   ```sh
   flutter pub get
   ```
3. Run the app:  
   ```sh
   flutter run
   ```

### **Backend Setup**  
1. Switch to the backend branch:  
   ```sh
   git checkout master
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Start the server:  
   ```sh
   node server.js
   ```
---