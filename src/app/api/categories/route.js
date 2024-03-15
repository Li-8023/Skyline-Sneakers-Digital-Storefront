import mongoose from "mongoose";
import { Category } from "../../models/Category";

export async function POST(req) {
  
  mongoose.connect(process.env.MONGO_URL);

  const { name } = await req.json();
  const categoryDoc = await Category.create({ name });
  return Response.json(categoryDoc);
}

export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);

  //return all categories from database
  return Response.json(await Category.find());
}

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);

  const { _id, name } = await req.json();
  await Category.updateOne({ _id }, { name });
  return Response.json(true);
}
