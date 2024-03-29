import { createGroup } from "@/server/service/group.service";
import { authMiddleware } from "../../../../server/middleWare/auth";

export async function POST(req) {
    const { name, description } = await req.json();

    const middlewareResponse = authMiddleware(req);
    if (middlewareResponse) {
        return middlewareResponse; // Redirect or handle errors if necessary
    }

    try {
        const group = await createGroup({ name, description });
        if (!group) {
            return new Response(404, { message: "Group not found" });
        }
        return Response.json({ message: "Group created successfully", group: group.newGroup});
    } catch (error) {
        return new Response(500, { message: "Creating group failed" });
    }
}

