import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  done: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: '100%',
    padding: 10,
  },
  doneText: {
    color: 'white',
  }
});

class AddTodo extends Component {

  state = {
    todo: '',
  };

  onChange = (todo) => {
    console.log('todo', todo);
    this.setState({ todo });
  }

  onSubmit = () => {
    const { addTodo } = this.props;
    addTodo(this.state.todo);
    this.setState({ todo: '' });
    Keyboard.dismiss();
  }

  render() {
    const { todo } = this.state;
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={this.onChange} value={todo} />
        <TouchableOpacity onPress={this.onSubmit}>
          <View style={styles.done}>
            <Text style={styles.doneText}>Done</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = () => ({
  // not passing here anything from redux store
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
