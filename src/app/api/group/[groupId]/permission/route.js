import { addPermissionToGroup, removePermissionFromGroup } from "@/server/service/group.service";
import { authMiddleware } from "../../../../../server/middleWare/auth";

export async function POST(req, { params }) {
    const groupId = params.groupId;
    const { permissionId } = await req.json();

    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }

    try {
        //console.log(groupId, permissionId);
        const group = await addPermissionToGroup(groupId, permissionId);
        if (!group) {
            return new Response(404, { message: "Group not found" });
        }
        return Response.json({ message: "Permission added to group successfully", group: group.group });
    } catch (error) {
        return new Response(500, { message: "Adding permission to group failed" });
    }
}

export async function PUT(req, { params }) {
    const groupId = params.groupId;
    const { permissionId } = await req.json();

    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }

    try {
        const group = await removePermissionFromGroup(groupId, permissionId);
        if (!group) {
            return new Response(404, { message: "Group not found" });
        }
        return Response.json({ message: "Permission removed from group successfully", group : group.group });
    } catch (error) {
        return new Response(500, { message: "Removing permission from group failed" });
    }
}
