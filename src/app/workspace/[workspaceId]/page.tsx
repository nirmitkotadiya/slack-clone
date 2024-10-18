"use client";

import { useGetWorkSpace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspacd-id";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();

  return <div>Workspace id page</div>;
};

export default WorkspaceIdPage;
