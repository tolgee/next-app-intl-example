import { useTransition } from "react";
import { onDelete } from "./actions";
import { T } from "@tolgee/react";

type Props = {
  itemId: number;
};

export const DeleteButton = ({ itemId }: Props) => {
  const [isDeleting, startDeleting] = useTransition();

  async function handleDelete() {
    startDeleting(() => onDelete(itemId));
  }

  return (
    <button disabled={isDeleting} onClick={handleDelete}>
      <T keyName="delete-item-button" />
    </button>
  );
};
