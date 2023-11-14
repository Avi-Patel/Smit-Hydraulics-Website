import Image from "next/image";

import { Modal, ModalBody } from "@sprinklrjs/spaceweb/modal";

const MODAL_OVERRIDES = {
  Dialog: { style: ["h-full w-full", { backgroundColor: "transparent" }] },
  Close: {
    style: "spr-ui-01",
    props: {
      shape: "square",
      bordered: true,
      size: 40,
      className: "rounded-8 mt-1 hover:border-0",
    },
  },
};

export const ImageModal = ({
  imageUrl,
  isOpen,
  onClose,
}: {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}) => (
  <Modal
    isOpen={isOpen}
    size="lg"
    onClose={onClose}
    overrides={MODAL_OVERRIDES}
  >
    <ModalBody className="my-10 overflow-y-auto p-0 flex items-center justify-center">
      <Image
        src={imageUrl}
        alt="image-modal"
        height={700}
        width={700}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "100%",
        }}
      />
    </ModalBody>
  </Modal>
);
