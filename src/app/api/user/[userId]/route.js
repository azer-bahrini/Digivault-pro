import { getUserById, updateUser, deleteUser } from '../../../../server/service/user.service'
import { authMiddleware } from '../../../../server/middleWare/auth'


export async function GET(req, { params }) {
    const id = params.userId;



    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }
    try {
        const user = await getUserById(id);
        if (!user) {
            return new Response(404, { message: 'User not found' });
        }
        return Response.json({ user });
    } catch (error) {
        return new Response(500, { message: 'Fetching user failed' });
    }

}


export async function PUT(req, { params }) {
    const id = params.userId;
    const { firstName, lastName, login, password, contact } = await req.json();

    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }
    try {
        const user = await updateUser(id, { firstName, lastName, login, password, contact });
        if (!user) {
            return new Response(404, { message: 'User not found' });
        }
        return Response.json({ message: 'User updated successfully', user });
    }
    catch (error) {
        return new Response(500, { message: 'Updating user failed' });
    }
}

export async function DELETE(req, { params }) {
    const id = params.userId;

    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }

    try {
        const user = await deleteUser(id);
        if (!user) {
            return new Response(404, { message: 'User not found' });
        }
        return Response.json({ message: 'User deleted successfully' });
    } catch (error) {
        return new Response(500, { message: 'Deleting user failed' });
    }
}

