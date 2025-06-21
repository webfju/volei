// src/js/firebase.js

// Importa os módulos do Firebase diretamente do CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAfuRPuqoIr_a5-0BC6R0jgnnifGco4uso",
  authDomain: "volei-fju.firebaseapp.com",
  projectId: "volei-fju",
  storageBucket: "volei-fju.firebasestorage.app",
  messagingSenderId: "593970246531",
  appId: "1:593970246531:web:665649b3b0f948d93abcb6"
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância do Firestore
export const db = getFirestore(app);
