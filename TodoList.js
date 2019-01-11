import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  todo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
});

class TodoList extends Component {

  state = {
    todo: '',
  };

  onChange = (todo) => {
    this.setState({ todo });
  }

  render() {
    const { todos } = this.props;
    console.log('todos', todos);
    return (
      <View style={styles.container}>
        {todos.map((todo, index) => (
          <View key={index} style={styles.todo}>
            <Text>{todo}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);