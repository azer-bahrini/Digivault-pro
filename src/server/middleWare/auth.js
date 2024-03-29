import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';



export function authMiddleware(req) {
  const token = req.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ message: 'No token, authorization denied' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.locals = { user: decoded.id };  // Initialize req.locals here
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Token is not valid' }, { status: 401 });
  }
}