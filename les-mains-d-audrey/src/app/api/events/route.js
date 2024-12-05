// // /api/events.js
// import { connectToDatabase } from "../../../../netlify/functions/db";
// import { ObjectId } from"mongodb";

// export default async function handler(req, res) {
//   const db = await connectToDatabase();
//   const eventsCollection = db.collection("Events");

//   switch (req.method) {
//     case "GET":
//       try {
//         const events = await eventsCollection.find({}).sort({ date: 1 }).toArray();
//         return res.status(200).json(events);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//         return res.status(500).json({ message: "Internal server error" });
//       }

//     case "DELETE":
//       try {
//         const { id } = req.body;
//         if (!id) {
//           return res.status(400).json({ message: "Missing event ID" });
//         }

//         const result = await eventsCollection.deleteOne({ _id: new ObjectId(id) });
//         if (result.deletedCount === 0) {
//           return res.status(404).json({ message: "Event not found" });
//         }

//         return res.status(200).json({ message: "Event deleted successfully" });
//       } catch (error) {
//         console.error("Error deleting event:", error);
//         return res.status(500).json({ message: "Internal server error" });
//       }

//     default:
//       res.setHeader("Allow", ["GET", "DELETE"]);
//       res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }
// }
