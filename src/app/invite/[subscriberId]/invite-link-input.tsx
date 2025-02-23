"use client";

import { IconButton } from "@/components/IconButton";
import { InputRoot, InputIcon, InputField } from "@/components/Input";
import { Link, Copy } from "lucide-react";

interface InviteLinkProps {
  inviteLink: string;
}

export function InviteLinkInput(props: InviteLinkProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(props.inviteLink);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={props.inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
