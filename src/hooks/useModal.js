import { useState } from "react";

const useModal = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const showModal = () => setIsModalShown(true);
  const hideModal = () => setIsModalShown(false);

  return { isModalShown, showModal, hideModal };
}

export default useModal;