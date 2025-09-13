/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXhtxX3Xt5mp7dvTi-qHkFMThItGBoM8Y",
  authDomain: "test-expense-tracker-maxeffect.firebaseapp.com",
  projectId: "test-expense-tracker-maxeffect",
  storageBucket: "test-expense-tracker-maxeffect.firebasestorage.app",
  messagingSenderId: "1093234126386",
  appId: "1:1093234126386:web:0590353c22fc997df3162b",
  measurementId: "G-H7F7VF2V49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
