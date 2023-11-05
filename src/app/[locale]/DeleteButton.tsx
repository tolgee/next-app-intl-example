import { useTransition } from "react";
import { onDelete } from "./actions";
import { T } from "@tolgee/react";

type Props = {
  itemId: number;
};

export const DeleteButton = ({ itemId }: Props) => {
  const [isDeleting, startDeleting] = useTransition();

  const handleDelete = () => {
    startDeleting(() => onDelete(itemId));
  };

  return (
    <button onClick={handleDelete} disabled={isDeleting}>
      <T keyName="delete-item-button" />
    </button>
  );
};
