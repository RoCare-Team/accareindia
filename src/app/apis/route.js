// File: src/app/apis/route.js
import { NextResponse } from 'next/server';
import admin from 'firebase-admin';

// Parse service account from env
if (!admin.apps.length) { // Prevent re-initialization in dev
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
    }),
  });
}

const db = admin.firestore();

export async function GET() {
  try {
    const snapshot = await db.collection('admin_login').get(); // Change collection name here
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}