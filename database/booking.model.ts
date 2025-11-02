import mongoose, { models, Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "Event ID is required"],
    },
    email: {
      type: String,
      unique:true,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      validate: {
        validator: (v: string) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: "Please enter a valid email address",
      },
    },
  },
  {
    timestamps: true,
  },
);

const Booking = models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking