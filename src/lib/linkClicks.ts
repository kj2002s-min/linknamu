import type { Collection } from "mongodb";
import clientPromise from "./mongodb";

const DB_NAME = "linknamu";
const COLLECTION_NAME = "linkClicks";

type LinkClickDoc = {
  _id: string;
  clicks: number;
};

export async function getLinkClicksCollection(): Promise<
  Collection<LinkClickDoc>
> {
  const client = await clientPromise;
  return client.db(DB_NAME).collection<LinkClickDoc>(COLLECTION_NAME);
}

export async function getAllClickCounts(): Promise<Record<string, number>> {
  const collection = await getLinkClicksCollection();
  const docs = await collection.find({}).toArray();
  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.clicks;
  }
  return counts;
}

export async function incrementClickCount(linkId: string): Promise<number> {
  const collection = await getLinkClicksCollection();
  const result = await collection.findOneAndUpdate(
    { _id: linkId },
    { $inc: { clicks: 1 } },
    { upsert: true, returnDocument: "after" }
  );
  return result?.clicks ?? 1;
}
