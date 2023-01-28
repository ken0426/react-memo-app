import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import AppBar from './AppBar';
import CircleButton from './CircleButton';
import KeyboardSafeView from './KeyboardSafeView';

const MemoEditScreen = () => {
  return (
    <KeyboardSafeView style={styles.container} behavior='height'>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value='買い物リスト' multiline={true} style={styles.input} />
      </View>
      <CircleButton name='check' />
    </KeyboardSafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MemoEditScreen;