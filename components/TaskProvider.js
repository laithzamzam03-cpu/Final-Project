"use client";

import { TaskProvider as Provider } from "@/context/TaskContext";

export default function TaskProvider({ children }) {
  return <Provider>{children}</Provider>;
}
