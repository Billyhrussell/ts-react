import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */

export interface BoxInterface {
  id: string;
  width: number | string;
  height: number | string;
  backgroundColor: string;
}

export interface BoxRemoveInterface extends BoxInterface{
  remove(id : string): void;
}

export interface AddBoxInterface {
  createBox(box : BoxInterface): void;
}

function BoxList() {
  const [boxes, setBoxes] = useState<BoxInterface[]>([]);

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox: BoxInterface): void {
    console.log("newBox:", newBox);
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string): void {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map((b: BoxInterface ) => (
        <Box
          key={b.id}
          id={b.id}
          width={b.width}
          height={b.height}
          remove={remove}
          backgroundColor={b.backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;

