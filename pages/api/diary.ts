import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { content, diaryDate } = req.body;

        if (!content) {
            return res.status(400).json({ error: 'Content is required' });
        }

        try {
            const newEntry = await prisma.diaryContent.create({
                data: {
                    content,
                    diaryDate: diaryDate ? new Date(diaryDate) : new Date(),
                },
            });
            res.status(201).json(newEntry);
        } catch (error) {
            res.status(500).json({ error: 'Failed to save entry' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
