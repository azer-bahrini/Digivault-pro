import { getUsers } from '../../../../server/service/user.service'
import { authMiddleware } from '../../../../server/middleWare/auth';
export async function GET(req) {

    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }

    try {
        const users = await getUsers();
        return Response.json({ users });
    } catch (error) {
        return new Response(500, { message: 'Fetching users failed' });
    }
}