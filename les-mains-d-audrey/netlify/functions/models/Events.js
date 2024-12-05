import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Le titre de l'évènement est obligatoire"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "La date est requise"],
    },
    location: {
      type: String,
      required: [true, "Le lieu est obligatoire"],
    },
    time: {
      type: String,
      required: [true, "L'heure est requise"],
    },
    link: {
      type: String,
      required: [true, "Le lien est requis"],
      validate: {
        validator: function (v) {
          return /^(http|https):\/\/[^ "]+$/.test(v);
        },
        message: "Le lien doit être une URL valide",
      },
    },
    image: {
      type: String,
      default: "/images/pinkframe.png",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
