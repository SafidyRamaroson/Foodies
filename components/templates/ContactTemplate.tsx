"use client";

import { ContactCard } from "../molecules/ContactCard";
import { contactItems } from "@/data";

export function ContactTemplate() {
    return (
        <ContactCard items={contactItems} />
    )
}