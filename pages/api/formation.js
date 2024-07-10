import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("portfolio");

       const articles = await db
           .collection("formation")
           .find({})
           .toArray();

       res.json(articles);
   } catch (e) {
       console.error(e);
   }
};