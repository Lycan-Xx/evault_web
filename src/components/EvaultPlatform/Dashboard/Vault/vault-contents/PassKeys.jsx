import React, { useState } from "react";
import { Eye, EyeOff, Edit, Trash2, Key, Plus } from "lucide-react";
import { Button } from "./ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog.tsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";

export function Passkeys() {
  const [passkeys, setPasskeys] = useState([
    { id: "1", name: "Gmail", value: "MySecurePass123", visible: false },
    { id: "2", name: "GitHub", value: "AnotherSecurePass456", visible: false },
  ]);

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [editedName, setEditedName] = useState("");
  const [editedValue, setEditedValue] = useState("");
  const [newName, setNewName] = useState("");
  const [newValue, setNewValue] = useState("");

  const togglePasskeyVisibility = (id) => {
    setPasskeys((prev) =>
      prev.map((pk) =>
        pk.id === id ? { ...pk, visible: !pk.visible } : pk
      )
    );
  };

  const handleEdit = (id) => {
    const passkey = passkeys.find((pk) => pk.id === id);
    setEditedName(passkey.name);
    setEditedValue(passkey.value);
    setSelectedItem(id);
    setEditDialogOpen(true);
  };

  const saveEdit = () => {
    setPasskeys((prev) =>
      prev.map((pk) =>
        pk.id === selectedItem
          ? { ...pk, name: editedName, value: editedValue }
          : pk
      )
    );
    setEditDialogOpen(false);
    setSelectedItem(null);
  };

  const handleDelete = (id) => {
    setSelectedItem(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    setPasskeys((prev) => prev.filter((pk) => pk.id !== selectedItem));
    setDeleteDialogOpen(false);
    setSelectedItem(null);
  };

  const handleAdd = () => {
    if (newName && newValue) {
      setPasskeys((prev) => [
        ...prev,
        { id: Date.now().toString(), name: newName, value: newValue, visible: false },
      ]);
      setAddDialogOpen(false);
      setNewName("");
      setNewValue("");
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Passkeys</h2>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setAddDialogOpen(true)}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-4">
          {passkeys.map((passkey) => (
            <div
              key={passkey.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg border"
            >
              <div className="flex items-center gap-3">
                <Key className="h-5 w-5 text-blue-500" />
                <div>
                  <h3 className="font-medium">{passkey.name}</h3>
                  <p className="text-sm font-mono">
                    {passkey.visible ? passkey.value : "••••••••"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => togglePasskeyVisibility(passkey.id)}
                >
                  {passkey.visible ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleEdit(passkey.id)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDelete(passkey.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Passkey</DialogTitle>
            <DialogDescription>Update the passkey details below</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="passkey-name">Name</Label>
              <Input
                id="passkey-name"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="passkey-value">Value</Label>
              <Input
                id="passkey-value"
                type="text"
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveEdit}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Passkey</DialogTitle>
            <DialogDescription>Enter the details for the new passkey</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="new-name">Name</Label>
              <Input
                id="new-name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-value">Value</Label>
              <Input
                id="new-value"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAdd}>Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the selected
              passkey.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
