import { getGroups, getGroupByName } from '../../../server/service/group.service';
import { authMiddleware } from '../../../server/middleWare/auth';


export async function GET(req) {
    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }

    try {
        const groups = await getGroups();
        return Response.json({ groups: groups.groups });
    } catch (error) {
        return new Response(500, { message: 'Fetching groups failed' });
    }
}

export async function POST(req) {
    const {name} = await req.json();

    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }
    
    try {
        const group = await getGroupByName({name});
    
        if (!group) {
        return new Response(404, {
            message: "Group not found"
        });
        }
    
        return Response.json({
        group : group.group
        });
    } catch (error) {
        return new Response(500, {
        message: "Fetching group failed"
        });
    }
}