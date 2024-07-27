import db from '../../lib/db.js';

export default async function handler(req, res) {
    try {
        const [rows, fields] = await db.query('SELECT NOW()');
        res.status(200).json({ time: rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
