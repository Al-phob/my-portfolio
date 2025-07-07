"use client"
// components/ProfileCard.tsx

import ProfileCard from "./ProfileCard";


export default function Profile() {
  return (
    <ProfileCard
        name=""
        title=""
        handle=""
        status="Online"
        contactText="Contact Me"
        avatarUrl="/images/me.jpg"
        showUserInfo={true}
        enableTilt={true}
        //onContactClick={() => console.log('Contact clicked')}
    />
  );
}
