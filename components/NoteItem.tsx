import { StyleSheet, Text, View } from "react-native";

export interface Note {
  id: string;
  content: string;
}

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <View style={styles.note}>
      <Text style={styles.noteContent}>{note.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteContent: {
    fontSize: 18,
  },
});

export default NoteItem;
