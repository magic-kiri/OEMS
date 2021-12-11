import React, { useState } from "react";
import ProfileInfoCardStyle from "./profileInfoCard.module.css";
import Text from "../../src/ui-custom-components/Text";
import Input from "../../src/ui-custom-components/InputText";
import Button from "../../src/ui-custom-components/Button";
import { useSession } from "next-auth/client";

const ProfileInfoCard = () => {
  const [session, loading] = useSession();
  return session ? (
    <div className={ProfileInfoCardStyle.profileInfoCard}>
      <div style={{ marginTop: "50px" }}>
        <Text className={ProfileInfoCardStyle.textTop}>Full Name:</Text>
        <Input
          disabled
          size="large"
          className={ProfileInfoCardStyle.inputStyle}
          placeholder={session?.user?.name}
        ></Input>
        <Text className={ProfileInfoCardStyle.textTop}>Username:</Text>
        <Input
          required
          size="large"
          className={ProfileInfoCardStyle.inputStyle}
          placeholder="Use Your Registration Number"
        ></Input>
        <Text className={ProfileInfoCardStyle.textTop}>E-mail:</Text>
        <Input
          disabled
          size="large"
          className={ProfileInfoCardStyle.inputStyle}
          placeholder={session?.user?.email}
        ></Input>
        <Text className={ProfileInfoCardStyle.textTop}>Contact Number:</Text>
        <Input
          size="large"
          className={ProfileInfoCardStyle.inputStyle}
          placeholder="Enter Your Contact Number"
        ></Input>
      </div>
      <Button theme="dark" style={{ maxWidth: "30%", marginTop: "5px" }}>
        Save
      </Button>
    </div>
  ) : (
    <></>
  );
};

export default ProfileInfoCard;
