import React from "react";
import { FlatList, View } from "react-native";
import NoteItem, { Note } from "./NoteItem";

interface NoteListProps {
  notes: Note[];
}

const NotesList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoteItem note={item} />}
      />
    </View>
  );
};

export default NotesList;
