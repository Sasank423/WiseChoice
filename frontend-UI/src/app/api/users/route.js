import startDb from '@/app/lib/db';
import Users from '@/app/models/users';
import { NextResponse } from 'next/server';
import jwt, { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

await startDb();

const SECRET_KEY = process.env.SECRETKEY;

console.log('key;', SECRET_KEY);
const sign = ({ id }) => {
  return jwt.sign({ id }, SECRET_KEY, {
    expiresIn: '1h',
  });
};

export async function GET() {
  try {
    const users = await users.find();
    if (!users) {
      throw new Error('Error Occured');
    }
    return NextResponse.json({
      length: users.length,
      users: users,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { userName, email, password } = body;
    console.log(userName, email, password);
    const user = await Users.create({ userName, email, password });
    if (!user) {
      throw new Error('Error occured creating the User, Try again Later');
    }
    const token = sign(user._id);
    const response = NextResponse.json({
      status: 'success',
      message: 'User Logged Successfully',
    });
    response.cookies.set('authKey', token, {
      httpOnly: true,
      path: '/',
      maxAge: new Date(60 * 3600),
    });
    return response;
    // return NextResponse.json();
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
