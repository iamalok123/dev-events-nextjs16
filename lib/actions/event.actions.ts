'use server';

import Event from '@/database/event.model';
import connectDB from "@/lib/mongodb";

export const getAllEvents = async () => {
    try {
        await connectDB();
        const events = await Event.find().sort({ createdAt: -1 }).lean();
        // ensure we parse to JSON so it can be passed from server to client/server components without hydration issues with Mongoose objects
        return JSON.parse(JSON.stringify(events));
    } catch (e) {
        console.error(e);
        return [];
    }
}

export const getEventBySlug = async (slug: string) => {
    try {
        await connectDB();
        const event = await Event.findOne({ slug }).lean();
        if (!event) return null;
        return JSON.parse(JSON.stringify(event));
    } catch (e) {
        console.error(e);
        return null;
    }
}

export const getSimilarEventsBySlug = async (slug: string) => {
    try {
        await connectDB();
        const event = await Event.findOne({ slug });

        const similarEvents = await Event.find({ _id: { $ne: event._id }, tags: { $in: event.tags } }).lean();
        return JSON.parse(JSON.stringify(similarEvents));
    } catch {
        return [];
    }
}