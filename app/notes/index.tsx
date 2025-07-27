import AddNoteModal from "@/components/AddNoteModal";
import NotesList from "@/components/NoteList";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NotesScreen = () => {
  const [notes, setNotes] = useState([
    { id: "1", content: "First note" },
    { id: "2", content: "Second note" },
    { id: "3", content: "Third note" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim() === "") return;

    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now.toString(),
        content: newNote,
      },
    ]);

    setNewNote("");
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <NotesList notes={notes} />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      <AddNoteModal
        setNewNote={setNewNote}
        showModal= {showModal}
        newNote={newNote}
        addNote={addNote}
        setShowModal={setShowModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    left: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NotesScreen;
