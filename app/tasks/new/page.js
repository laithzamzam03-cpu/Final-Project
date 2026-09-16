import Link from "next/link";
import TaskForm from "@/components/TaskForm";
import { courses } from "@/data/courses";

export default function NewTaskPage() {
  return (
    <div className="container">
      <Link href="/tasks" className="btn btn-ghost btn-sm page-back-btn">
        ← Back to Tasks
      </Link>
      <div className="page-title-center">
        <h1 className="page-title">Add New Task</h1>
        <p className="page-subtitle">
          Title and due date are required. Everything else helps you stay organized.
        </p>
      </div>
      <TaskForm courses={courses} />
    </div>
  );
}
