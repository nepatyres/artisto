export default function handler(req: any, res: any) {
    const { username, password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminUsername = process.env.ADMIN_USERNAME;

    if (username === adminUsername && password === adminPassword) {
        res.status(200).json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
}