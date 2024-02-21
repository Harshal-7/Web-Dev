"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function ProfilePage() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl p-2 font-bold">
                Profile
            </h1>
            <p className="p-2">Profile Page</p>

        </div>
    );
}
