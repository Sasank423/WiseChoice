import Users from '@/app/models/users';
import { NextResponse } from 'next/server';
import startDb from '@/app/lib/db';
import jwt, { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

await startDb();

const SECRET_KEY = process.env.SECRET_KEY;

const sign = ({ id }) => {
  return jwt.sign({ id }, SECRET_KEY, {
    expiresIn: '1h',
  });
};

export async function GET(req) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('authKey').value;
    if (!token) {
      throw new Error('Login Required');
    }
    const decoded = jwt.verify(token, SECRET_KEY);
    if (!decoded) {
      throw new Error('Session Closed.Please Login');
    }
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(req) {
  try {
    console.log('auth here');
    const body = await req.json();
    const { email, password } = body;
    const user = await Users.findOne({ email });
    if (!user) {
      throw new Error('No Such User Found');
    }
    if (user.password !== password) throw new Error('Incorrect Credentials');
    const token = sign(user._id);
    const response = NextResponse.json({
      status: 'success',
      message: 'Login Successfully',
    });
    response.cookies.set('authKey', token, {
      httpOnly: true,
      path: '/',
      maxAge: new Date(60 * 3600),
    });
    console.log('success');
    return response;
  } catch (error) {
    return NextResponse.json({ status: 'failure', error: error.message });
  }
}
