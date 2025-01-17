import { useSessionStorage } from "react-use";

const ShowPreviewAssetsKey = "show_preview_assets";

export const useShowPreviewAssets = () => {
  const [showPreviewAssets] = useSessionStorage<boolean>(
    ShowPreviewAssetsKey,
    false
  );

  return {
    showPreviewAssets,
  };
};
