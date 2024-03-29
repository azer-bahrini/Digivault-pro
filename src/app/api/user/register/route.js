import { register } from '../../../../server/service/user.service';

export async function POST(req) {
    const { firstName, lastName, login, password, contact, group} = await req.json();

    try {
        const user = await register({ firstName, lastName, login, password, contact, group });
        console.log(user);
        if (!user.newUser) {
            return new Response(401, { message: 'Invalid credentials' });
        }

        return Response.json({ message: 'Registration successful', user : user.newUser});

    } catch (error) {
        return new Response(500, { message: 'Registration failed' });
    }
}