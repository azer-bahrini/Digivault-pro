import {logout} from '../../../../server/service/user.service'
import { authMiddleware } from '../../../../server/middleWare/auth';
export async function POST(req) {
    const {login} = await req.json();

    try {
        await logout({login});
        return Response.json({message: 'Logout successful'});
    } catch (error) {
        return new Response(500, {message: 'Logout failed'});
    }
}