import { addUserToGroup, removeUserFromGroup } from '../../../../../server/service/group.service';
import { authMiddleware } from '../../../../../server/middleWare/auth';

export async function POST(req, { params }) {
    const groupId = params.groupId;
    const  userId  = params.userId;

    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }

    try {
        const group = await addUserToGroup(groupId, userId);
        if (!group) {
            return new Response(404, { message: "Group not found" });
        }
        return Response.json({ message: "User added to group successfully", group: group.group });
    } catch (error) {
        return new Response(500, { message: "Adding user to group failed" });
    }
}

export async function PUT(req, { params }) {
    const groupId = params.groupId;
    const  userId  = params.userId;

    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }

    try {
        const group = await removeUserFromGroup(groupId, userId);
        if (!group) {
            return new Response(404, { message: "Group not found" });
        }
        return Response.json({ message: "User removed from group successfully", group : group.group });
    } catch (error) {
        return new Response(500, { message: "Removing user from group failed" });
    }
}