import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface useGetWorkSpaceInfoProps {
  id: Id<"workspaces">;
}

export const useGetWorkSpaceInfo = ({ id }: useGetWorkSpaceInfoProps) => {
  const data = useQuery(api.workspaces.getInfoById, { id });
  const isLoading = data === undefined;

  return { data, isLoading };
};
