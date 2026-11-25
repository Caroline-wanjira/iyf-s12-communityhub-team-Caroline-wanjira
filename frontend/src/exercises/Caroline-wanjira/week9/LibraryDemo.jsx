import { useState } from "react";
import { Button, Input, Card, Modal, Avatar } from "./library";

function LibraryDemo() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const error =
    name.length > 0 && name.length < 3 ? "Name must be at least 3 characters" : "";

  return (
    <Card title="Component library demo">
      <Avatar name="Caroline Wanjira" />
      <Input label="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} error={error} required />
      <Button variant="primary" onClick={() => setOpen(true)}>Open modal</Button>
      <Button variant="outline" size="small">Outline</Button>
      <Button loading>Saving</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Hello">
        <p>This is the modal content.</p>
      </Modal>
    </Card>
  );
}

export default LibraryDemo;