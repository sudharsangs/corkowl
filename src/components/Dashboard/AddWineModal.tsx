import { useState } from "react";
import ReactModal from "react-modal";
import { InventoryDataType } from ".";
import { AddWineButton, ModalWrapper } from "./Dashboard.style";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

ReactModal.setAppElement("#root");

export const AddWineModal = ({
  showModal,
  setShowModal,
  inventory,
  setInventory,
}: AddWineModalProps) => {
  const [formValues, setFormValues] = useState<InventoryDataType>({
    id: "",
    productName: "",
    region: "",
    rating: {
      js: null,
      rp: null,
      ag: null,
      ws: null,
    },
    vintage: null,
    qty: null,
    volume: "",
    cost: null,
    price: null,
    stock: [],
  });

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormSubmission = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const arr = [...inventory];
    arr.push(formValues);
    setInventory(arr);
    setShowModal(false);
  };

  return (
    <div>
      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Wine"
      >
        <ModalWrapper>
          <form>
            <div className="inputs-wrapper">
              <input
                placeholder="Product Name"
                value={formValues.productName}
                onChange={(e) =>
                  setFormValues({ ...formValues, productName: e.target.value })
                }
              />
              <input
                placeholder="Vintage"
                value={formValues.vintage as number}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    vintage: Number(e.target.value),
                  })
                }
                type="number"
              />
              <input
                placeholder="Quantity"
                value={formValues.qty as number}
                onChange={(e) =>
                  setFormValues({ ...formValues, qty: Number(e.target.value) })
                }
                type="number"
              />
              <input
                placeholder="JS Rating"
                value={formValues.rating.js as number}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    rating: {
                      ...formValues.rating,
                      js: Number(e.target.value),
                    },
                  })
                }
              />
              <input
                placeholder="RP Rating"
                value={formValues.rating.rp as number}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    rating: {
                      ...formValues.rating,
                      rp: Number(e.target.value),
                    },
                  })
                }
              />
              <input
                placeholder="AG Rating"
                value={formValues.rating.ag as number}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    rating: {
                      ...formValues.rating,
                      ag: Number(e.target.value),
                    },
                  })
                }
              />
              <input
                placeholder="WS Rating"
                value={formValues.rating.ws as number}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    rating: {
                      ...formValues.rating,
                      ws: Number(e.target.value),
                    },
                  })
                }
              />
              <input
                placeholder="Volume"
                value={formValues.volume}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    volume: e.target.value,
                  })
                }
              />
              <input
                placeholder="Region"
                value={formValues.region}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    region: e.target.value,
                  })
                }
              />
              <input
                placeholder="Price in $"
                value={formValues.price as number}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    price: Number(e.target.value),
                  })
                }
              />
              <input
                placeholder="Cost in $"
                value={formValues.cost as number}
                onChange={(e) =>
                  setFormValues({ ...formValues, cost: Number(e.target.value) })
                }
              />
            </div>
            <AddWineButton onClick={handleFormSubmission}>
              Add Wine
            </AddWineButton>
          </form>
        </ModalWrapper>
      </ReactModal>
    </div>
  );
};

interface AddWineModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  inventory: InventoryDataType[];
  setInventory: (value: InventoryDataType[]) => void;
}
