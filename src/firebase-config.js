// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRnthxiVHcQhAqpjJoCfgXQWBd1_kTbAw",
  authDomain: "uniq-cbd09.firebaseapp.com",
  projectId: "uniq-cbd09",
  storageBucket: "uniq-cbd09.appspot.com",
  messagingSenderId: "997652773352",
  appId: "1:997652773352:web:5636842f7277f7c13ecc5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/*
async function getComReviews(db){
    const reviewsCol = collection(db, 'community-reviews');
    const reviewsSnapshot = await getDocs(reviewsCol);
    const reviewList = reviewsSnapshot.docs.map(doc => doc.data);
    return reviewList;
}*/