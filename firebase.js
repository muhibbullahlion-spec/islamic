// 🔴 আপনার Firebase কনফিগ এখানে বসান
export const firebaseConfig = {
  apiKey: "AIzaSyA4365iybY9Rt640iSMtmKWi0j5clvgfd8",
  authDomain: "islamic-b2ece.firebaseapp.com",
  projectId: "islamic-b2ece",
  storageBucket: "islamic-b2ece.firebasestorage.app",
  messagingSenderId: "843421438634",
  appId: "1:843421438634:web:1a354c8f54eef4df3576d3",
  measurementId: "G-PDDPLQC75G"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
