import clientPromise from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    
    try {
        const { name, email, message } = await req.json();

        const formData = {
            name : name,
            email:email,
            message:message,
            source:"Website Form"
        }
        
         const client = await clientPromise;
    const db = client.db('contactDB'); // Use your database name here

    const insertUsers = (await db.collection('forms').insertOne(formData));
console.log(insertUsers.insertedId)
        // Send a success response
        return NextResponse.json({
            success: true,
            message: `the form submission has been successful your id of submission is ${insertUsers.insertedId}`,
        });
    } catch (error) {
        console.error('Error:', error);

        return NextResponse.json({
            success: false,
            message: 'Failed to submit form',
        }, { status: 500 });
    }
}
