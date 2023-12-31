import {addDoc, collection, doc, getDoc, getDocs, query, where} from "firebase/firestore";
import {db} from "@/main.tsx";
import {nanoid} from "@reduxjs/toolkit";
import {User} from "@/common/types/User";

export async function fetchUser(value: Omit<User, 'id'>): Promise<User | null> {
  const usersRef = collection(db, 'users');
  let userQuery = query(usersRef);

  for (const key in value) {
    userQuery = query(userQuery, where(key, '==', value[key as keyof Omit<User, 'id'>]));
  }
  const querySnapshot = await getDocs(userQuery);

  if (querySnapshot.empty) {
    return null
  }

  const matchedUserDoc = querySnapshot.docs[0];
  const userData = matchedUserDoc.data();
  return {...userData, id: matchedUserDoc.id} as User;
}

export async function addUser(value: Omit<User, 'id'>): Promise<User> {
  const newValue = {...value, id: nanoid()}

  await addDoc(collection(db, "users"), newValue);
  return newValue;
}

export async function checkIsUserExist(value: Omit<User, 'id'>) {
  const usersRef = collection(db, 'users');
  const userQuery = query(usersRef, where('name', '==', value.name));

  const querySnapshot = await getDocs(userQuery);

  return !querySnapshot.empty
}

export async function getUserById(userId: string): Promise<User | null> {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    return null
  }

  const userData = userDoc.data();
  return {...userData, id: userDoc.id} as User;
}