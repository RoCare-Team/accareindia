import { NextResponse } from 'next/server';
import { adminDB } from '@/../lib/firebaseAdmin';

export async function GET() {
  try {
    const snapshot = await adminDB.collection('admin_login').get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
