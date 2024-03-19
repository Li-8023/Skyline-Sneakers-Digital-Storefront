import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/app/models/User";
import { UserInfo } from "@/app/models/UserInfo";
import { URL } from "url";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const { _id, name, image, ...otherUserInfo } = data;

  let filter = {};

  if (_id) {
    filter = { _id };
  } else {
    const session = await getServerSession(authOptions);
    const email = session.user.email;
    filter = { email };
  }

  const user = await User.findOne(filter);
  await User.updateOne(filter, { name, image });
  await UserInfo.findOneAndUpdate({email:user.email}, otherUserInfo, { upsert: true });

  return Response.json(true);
}

export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  if (_id) {
    const user = await User.findOne({ _id }).lean();
    const userInfo = await UserInfo.findOne({ email: user.email }).lean();
    return Response.json({
      ...user,
      ...userInfo,
    });
  } else {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return Response.json({});
    }
    const user = await User.findOne({ email }).lean();
    const userInfo = await UserInfo.findOne({ email }).lean();
    return Response.json({
      ...user,
      ...userInfo,
    });
  }
}
