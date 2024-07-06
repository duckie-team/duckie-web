"use client";
import { ExamObject } from "../../../lib/client/object/exam.object";
import { useRouter } from "next/navigation";


export function HomeExamItem({key, id, title, thumbnailUrl} : { key: number; id: number; title: string; thumbnailUrl: string;}) {
  const router = useRouter();
  console.log(id + ' ' + key);
  console.log(title);
  return <li key={id} style={{listStyleType: 'none'}} onClick={() => {
    console.log(`key = ${id}`)
    router.push(`/exams/${id}`)
  }}>
    <h4>{title}</h4>
    <img
      src={thumbnailUrl}
      alt={title}
      style={{width: '150px', height: 'auto'}}
    />
  </li>
}