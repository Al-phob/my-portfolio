"use client"
// components/ProfileCard.tsx

import Image from "next/image";
import ProfileCard from "./ProfileCard";


export default function Profile() {
  return (
    <ProfileCard
        name=""
        title=""
        handle=""
        status="Online"
        contactText="Contact Me"
        avatarUrl="/images/_DSC9311.jpg"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log('Contact clicked')}
    />
  );
}
