"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { MdCreate, MdArrowUpward } from "react-icons/md";
import { Button } from "../ui/button";
import { FC, useState } from "react";

type ProfileCardProps = {
  userName: string;
  userEmail: string;
  userTags?: string[];
};

const ProfileCard: FC<ProfileCardProps> = ({
  userName,
  userEmail,
  userTags = [],
}) => {
  const [show, setShow] = useState(false);

  const tagColors = [
    "bg-green-300",
    "bg-red-300",
    "bg-yellow-300",
    "bg-blue-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-orange-300",
  ];

  return (
    <Card className="border-0 rounded-3xl p-0 relative overflow-hidden">
      <CardContent className="p-0">
        <Image
          src="/image-test.jpg"
          alt="Profile Image"
          width={100}
          height={100}
          className="object-cover w-full"
        />
        <div className="bg-white/10 backdrop-blur-md p-4 absolute bottom-0 w-full grid gap-4 rounded-3xl">
          <button
            type="button"
            className="block mx-auto text-white"
            onClick={() => setShow(!show)}
          >
            <MdArrowUpward />
          </button>
          <div className="flex gap-2 items-center justify-between">
            <div>
              <p className="text-white text-xl font-bold">{userName}</p>
              <p className="text-white text-md">{userEmail}</p>
            </div>
            <span className="bg-white p-2 text-gray-700 rounded-lg">
              <MdCreate />
            </span>
          </div>
          {show && (
            <div>
              <div className="flex gap-2 flex-wrap">
                {userTags.map((tag, index) => (
                  <p
                    key={index}
                    className={`${
                      tagColors[index % tagColors.length]
                    } rounded-md py-1 px-2 text-[.8rem] text-gray-800`}
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <Button className="bg-white text-gray-900">Message</Button>
                <Button className="bg-blue-700 text-white">Hire</Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
