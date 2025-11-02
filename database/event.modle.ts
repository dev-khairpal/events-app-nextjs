import mongoose, { models, Schema } from "mongoose";

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [120, "Title cannot exceed 120 characters"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: [150, "Slug cannot exceed 150 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    venue: {
      type: String,
      required: [true, "Venue is required"],
      maxlength: [200, "Venue cannot exceed 200 characters"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      maxlength: [200, "Location cannot exceed 200 characters"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
      maxlength: [100, "Date cannot exceed 100 characters"],
    },
    time: {
      type: String,
      required: [true, "Time is required"],
      maxlength: [100, "Time cannot exceed 100 characters"],
    },
    mode: {
      type: String, // "Online" or "Offline"
      required: [true, "Mode is required"],
      maxlength: [50, "Mode cannot exceed 50 characters"],
    },
    audience: {
      type: String, // e.g. "Developers", "Students"
      required: [true, "Audience is required"],
      maxlength: [100, "Audience cannot exceed 100 characters"],
    },
    agenda: {
      type: [String],
      required: [true, "Agenda is required"],
      validate: {
        validator: (arr: string[]) => arr.length > 0,
        message: "Agenda must contain at least one item",
      },
    },
    organizer: {
      type: String,
      required: [true, "Organizer is required"],
      maxlength: [100, "Organizer name cannot exceed 100 characters"],
    },
    tags: {
      type: [String],
      required: [true, "Tags are required"],
      validate: {
        validator: (arr: string[]) => arr.length > 0,
        message: "Tags must contain at least one tag",
      },
    },
  },
  { timestamps: true },
);

const Event = models.Event || mongoose.model("Event", eventSchema);

export default Event;
