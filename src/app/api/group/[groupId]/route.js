import { getGroupByID, updateGroup, deleteGroup,  } from "../../../../server/service/group.service";
import { authMiddleware } from "../../../../server/middleWare/auth";
export async function GET(req, { params }) {
    const id = params.groupId;
    
    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }

    try {
        const group = await getGroupByID(id);
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

export async function PUT(req, { params }) {
    const id = params.groupId;
    const { name, description } = await req.json();

    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }

    try {
        const group = await updateGroup(id, { name, description });
        if (!group) {
        return new Response(404, {
            message: "Group not found"
        });
        }
        return Response.json({
        message: "Group updated successfully",
        group : group.group
        });
    } catch (error) {
        return new Response(500, {
        message: "Updating group failed"
        });
    }
}

export async function DELETE(req, { params }) {
    const id = params.groupId;

    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }

    try {
        const group = await deleteGroup(id);
        if (!group) {
        return new Response(404, {
            message: "Group not found"
        });
        }
        return Response.json({
        message: "Group deleted successfully"
        });
    } catch (error) {
        return new Response(500, {
        message: "Deleting group failed"
        });
    }
}

