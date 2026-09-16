"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useTasks } from "@/context/TaskContext";
import StatsCard from "@/components/StatsCard";
import TaskCard from "@/components/TaskCard";
import { courses } from "@/data/courses";
import { isOverdue, getUpcomingTasks } from "@/lib/helpers";

export default function DashboardTaskSection() {
  const { tasks, toggleTask, deleteTask } = useTasks();

  const stats = useMemo(() => {
    const completed = tasks.filter((task) => task.status === "completed").length;
    const pending = tasks.filter((task) => task.status !== "completed").length;
    const overdue = tasks.filter((task) => isOverdue(task)).length;
    return {
      total: tasks.length,
      completed,
      pending,
      overdue,
    };
  }, [tasks]);

  const upcoming = useMemo(() => getUpcomingTasks(tasks), [tasks]);

  return (
    <>
      <div className="stats-grid">
        <StatsCard
          title="Total Tasks"
          value={stats.total}
          icon="📋"
          colorVariant="primary"
          subtitle="All assignments in your workspace"
        />
        <StatsCard
          title="Completed"
          value={stats.completed}
          icon="✅"
          colorVariant="success"
          subtitle="Finished and checked off"
        />
        <StatsCard
          title="Pending"
          value={stats.pending}
          icon="🕒"
          colorVariant="warning"
          subtitle="Still on your plate"
        />
        <StatsCard
          title="Overdue"
          value={stats.overdue}
          icon="⚠️"
          colorVariant="danger"
          subtitle="Past due and not completed"
        />
      </div>

      <section className="dashboard-upcoming-header">
        <h2 className="dashboard-upcoming-title">Upcoming Deadlines</h2>
        <p className="dashboard-upcoming-subtitle">
          Tasks due within the next 7 days
        </p>
      </section>

      {upcoming.length > 0 ? (
        upcoming.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            courses={courses}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))
      ) : (
        <div className="empty-state empty-state-sm">
          <div className="empty-icon">🎉</div>
          <h4>No deadlines this week</h4>
          <p className="text-muted search-margin">
            You are clear for the next 7 days. Add a task when you are ready.
          </p>
          <Link href="/tasks/new" className="btn btn-primary btn-sm">
            + Add Task
          </Link>
        </div>
      )}
    </>
  );
}
