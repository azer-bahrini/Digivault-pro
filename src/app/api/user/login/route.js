import {loginUser} from "../../../../server/service/user.service"

export async function POST(req) {

    const {login, password} = await req.json();
    try {
        const accessToken = await loginUser({login, password});
        //console.log(accessToken);
        if (accessToken.success === false) 
        {
            return new Responsestatus(401).json({ message: 'Invalid credentials' });
            //res.status(401).json({ message: 'Invalid credentials' });
        }
        return Response.json({message: 'Login successful', accessToken:accessToken.token});
        //     res.status(200).json({ message: 'Login successful', accessToken });
    }
    catch (error) {
        return new Response(500, {message: 'Login failed'});
        //        res.status(500).json({ message: 'Login failed' });
    }

}
