import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    try {
        const photoDir = path.join(process.cwd(), 'public', 'Photo');
        const files = fs.readdirSync(photoDir);

        // Filter out hidden files like .DS_Store and keep only images
        const images = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.webp', '.png', '.jpg', '.jpeg', '.gif'].includes(ext);
        });

        res.status(200).json({ images });
    } catch (error) {
        console.error("Error reading photo directory:", error);
        res.status(500).json({ error: 'Failed to read photo directory' });
    }
}
