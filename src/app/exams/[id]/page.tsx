"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ExamButton from "@/app/exams/[id]/ExamButton";

export default function ExamDetail(props: any) {

  const router = useRouter()
  return (
    <>
      <nav>
        <Link href="/intro">Open modal</Link>
      </nav>
      <ExamButton/>
    </>
  )
}